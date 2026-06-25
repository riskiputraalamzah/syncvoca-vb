import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

let aiClient: GoogleGenAI | null = null;

function getGeminiClient(): GoogleGenAI {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("Kunci API Gemini (GEMINI_API_KEY) belum dikonfigurasi di menu Settings > Secrets platform AI Studio.");
    }
    aiClient = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
  }
  return aiClient;
}

async function startServer() {
  const app = express();
  app.use(express.json());
  const PORT = 3000;

  // AI Career Mentor API route
  app.post("/api/mentor/chat", async (req, res) => {
    try {
      const { message, history, studentContext } = req.body;
      
      const systemInstruction = `Anda adalah Mentor Karier Vokasi AI di platform SyncVoca, platform digital inklusif transisi kerja siswa disabilitas (seperti disabilitas rungu, wicara, daksa, intelektual, dll.).
Tugas Anda adalah memberikan bimbingan karier yang empati, sangat ramah, aksesibel, dan praktis kepada siswa.
Gunakan data profil siswa berikut untuk memberikan saran yang relevan:
- Nama: ${studentContext.name}
- Sekolah: ${studentContext.schoolName}
- Jenis Disabilitas: ${studentContext.disabilityType}
- Minat Karier: ${studentContext.interest}
- Keterampilan saat ini: ${studentContext.skills?.join(', ') || 'Belum diisi'}
- Skor Kesiapan Kerja: ${studentContext.readinessScore}%
- Kebutuhan Akomodasi/Dukungan: ${studentContext.supportRequirements?.join(', ') || 'Tidak ada'}
- Riwayat Simulasi Kerja (Game): ${JSON.stringify(studentContext.sessions || [])}

Pedoman Komunikasi:
1. Jawablah menggunakan Bahasa Indonesia yang ramah, hangat, menyemangati, dan mudah dipahami. Hindari istilah yang terlalu rumit.
2. Jika siswa bertanya tentang simulasi/game kerja di SyncVoca (seperti 'Logic Quest' untuk logika pemrograman/sekuensial, 'Data Entry Administrasi' untuk ketelitian administrasi, atau 'Package Sorter' untuk ketangkasan motorik halus), jelaskan manfaat simulasi tersebut untuk karier mereka dan bagaimana melatih diri mereka.
3. Selalu hargai potensi mereka dan tekankan bahwa setiap hambatan fisik atau kognitif dapat diatasi dengan akomodasi kerja yang tepat.
4. Berikan tips konkret, misalnya latihan mengetik, manajemen waktu, melatih fokus, atau mempersiapkan wawancara kerja yang ramah disabilitas.
5. Sediakan jawaban terstruktur menggunakan poin-poin agar mudah dibaca oleh siswa dengan berbagai latar belakang kemampuan belajar.`;

      const contents = [];
      
      // Gemini API strictly requires that multi-turn content histories must start with a 'user' turn.
      // Since the first message in our frontend is the assistant's welcome message, we must skip any leading 'assistant/model' turns.
      if (history && history.length > 0) {
        const firstUserIndex = history.findIndex((msg: any) => msg.role === 'user');
        if (firstUserIndex !== -1) {
          const validHistory = history.slice(firstUserIndex);
          for (const msg of validHistory) {
            contents.push({
              role: msg.role === 'user' ? 'user' : 'model',
              parts: [{ text: msg.text }]
            });
          }
        }
      }
      
      contents.push({
        role: 'user',
        parts: [{ text: message }]
      });

      const ai = getGeminiClient();
      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: contents,
        config: {
          systemInstruction: systemInstruction,
          temperature: 0.7,
        }
      });

      res.json({
        success: true,
        reply: response.text || "Maaf, saya belum bisa merumuskan jawaban yang tepat. Bisa Anda ulangi?"
      });

    } catch (error: any) {
      console.error("Error in Mentor Chat API:", error);
      res.status(500).json({
        success: false,
        error: error?.message || "Terjadi kesalahan internal pada Server Mentor."
      });
    }
  });

  // Serve static files / Vite middleware
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
