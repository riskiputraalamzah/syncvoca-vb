import { motion } from 'motion/react';
import { 
  Building2, GraduationCap, Users, User, ShieldCheck, 
  ArrowRight, Key, Keyboard, Package, Sparkles, Accessibility, Heart, Globe, Flame
} from 'lucide-react';
import { UserRole } from '../types';

interface LandingPageProps {
  onEnterPortal: (role: UserRole) => void;
  preferences: any;
}

export default function LandingPage({ onEnterPortal, preferences }: LandingPageProps) {
  const textClass = {
    normal: 'text-base',
    large: 'text-lg',
    xlarge: 'text-xl'
  }[preferences.textSize];

  const titleClass = {
    normal: 'text-4xl sm:text-5xl font-bold font-display tracking-tight',
    large: 'text-5xl sm:text-6xl font-extrabold font-display tracking-tight',
    xlarge: 'text-6xl sm:text-7xl font-black font-display tracking-normal'
  }[preferences.textSize];

  const subTitleClass = {
    normal: 'text-lg text-zinc-400 font-medium',
    large: 'text-xl text-zinc-300 font-semibold',
    xlarge: 'text-2xl text-zinc-200 font-bold'
  }[preferences.textSize];

  // 5-Stage Vocation Workflow
  const workflows = [
    {
      num: '1',
      title: 'Inisiasi Berkas',
      desc: 'Registrasi profil siswa dengan dukungan aksesibilitas belajar terpersonalisasi.',
      color: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20'
    },
    {
      num: '2',
      title: 'Evaluasi Karier',
      desc: 'Siswa memainkan simulasi vokasi (game) untuk menguji indikator kompetensi nyata.',
      color: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
    },
    {
      num: '3',
      title: 'Sinkronisasi',
      desc: 'Guru SLB & Orang Tua bersinergi memantau progres kognitif serta motorik anak.',
      color: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20'
    },
    {
      num: '4',
      title: 'Validasi Industri',
      desc: 'DUDI menguji dan merilis Industry Validation Seal pada portofolio kandidat.',
      color: 'bg-amber-500/10 text-amber-400 border-amber-500/20'
    },
    {
      num: '5',
      title: 'Hasil Inklusif',
      desc: 'Penyaluran penempatan kerja yang adil, suportif, dan terprediksi bagi siswa.',
      color: 'bg-purple-500/10 text-purple-400 border-purple-500/20'
    }
  ];

  const isHighContrast = preferences.highContrast;

  return (
    <div className={`space-y-16 ${preferences.dyslexiaFont ? 'font-serif' : 'font-sans'}`}>
      
      {/* Bento Layout Grid for Hero and Live Stats */}
      <div className="grid grid-cols-12 gap-6">
        
        {/* Main Hero Bento Card */}
        <div className={`col-span-12 lg:col-span-8 p-8 sm:p-10 rounded-3xl flex flex-col justify-between ${
          isHighContrast ? 'bg-white text-black border-4 border-black' : 'bg-[#111111] border border-white/5 bento-glow-indigo'
        }`}>
          <div className="space-y-6">
            <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${
              isHighContrast ? 'bg-black text-white' : 'bg-indigo-500/10 border border-indigo-500/20 text-indigo-400'
            }`}>
              <Sparkles className="w-4 h-4" />
              Sistem Penyelarasan Vokasi Inklusif
            </div>
            <h1 className={`${titleClass} ${isHighContrast ? 'text-black' : 'text-white'} leading-tight`}>
              Platform Karir Digital <br className="hidden sm:inline" />
              Siswa <span className={isHighContrast ? 'underline' : 'text-indigo-400'}>Disabilitas</span> Indonesia.
            </h1>
            <p className={`${subTitleClass} max-w-xl leading-relaxed`}>
              Menghubungkan SLB, Orang Tua, dan Mitra Industri (DUDI) lewat gamifikasi kognitif ramah neurodivergent serta verifikasi portofolio mandiri.
            </p>
          </div>

          <div className="pt-8 flex flex-wrap gap-4 items-center">
            <a
              href="#portal-demo"
              className={`px-6 py-3.5 font-bold rounded-2xl transition flex items-center gap-2 text-sm ${
                isHighContrast 
                  ? 'bg-black text-white hover:bg-neutral-800' 
                  : 'bg-indigo-600 text-white hover:bg-indigo-500 shadow-xl shadow-indigo-900/20'
              }`}
            >
              Masuk Portal Simulasi Demo
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#workflow"
              className={`px-6 py-3.5 font-bold rounded-2xl transition text-sm border ${
                isHighContrast 
                  ? 'border-black text-black hover:bg-slate-100' 
                  : 'border-white/10 text-zinc-300 bg-white/5 hover:bg-white/10'
              }`}
            >
              Pelajari 5 Alur Kerja
            </a>
          </div>
        </div>

        {/* Dynamic Platform Readiness Info Card (Right bento element) */}
        <div className={`col-span-12 lg:col-span-4 p-8 rounded-3xl flex flex-col justify-between ${
          isHighContrast ? 'bg-white text-black border-4 border-black' : 'bg-[#111] border border-white/5'
        }`}>
          <div className="space-y-4">
            <div className="flex justify-between items-start">
              <span className={`text-[10px] font-bold uppercase tracking-wider ${isHighContrast ? 'text-black' : 'text-zinc-500'}`}>PWA Readiness</span>
              <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase ${
                isHighContrast ? 'bg-black text-white' : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
              }`}>Online Ready</span>
            </div>
            
            <div className="space-y-1">
              <h3 className={`text-2xl font-bold font-display ${isHighContrast ? 'text-black' : 'text-white'}`}>Konektivitas Aktif</h3>
              <p className={`text-xs ${isHighContrast ? 'text-neutral-700' : 'text-zinc-400'}`}>Integrasi data SLB dan Perusahaan secara terenkripsi offline-first.</p>
            </div>
          </div>

          <div className="space-y-4 py-4">
            <div className={`p-4 rounded-2xl flex items-center gap-3 ${isHighContrast ? 'bg-zinc-100' : 'bg-white/5'}`}>
              <div className="text-2xl">⚡</div>
              <div>
                <div className={`text-xs font-bold ${isHighContrast ? 'text-black' : 'text-zinc-200'}`}>Evaluasi Gamelan</div>
                <div className="text-[10px] text-zinc-500">Kognitif & motorik bebas stres ujian</div>
              </div>
            </div>

            <div className={`p-4 rounded-2xl flex items-center gap-3 ${isHighContrast ? 'bg-zinc-100' : 'bg-white/5'}`}>
              <div className="text-2xl">🛡️</div>
              <div>
                <div className={`text-xs font-bold ${isHighContrast ? 'text-black' : 'text-zinc-200'}`}>Sertifikat Inklusi</div>
                <div className="text-[10px] text-zinc-500">Tervalidasi Industri Penyelaras</div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-xs font-semibold pt-2 border-t border-white/5">
            <span className={isHighContrast ? 'text-black' : 'text-zinc-500'}>Skor Aksesibilitas</span>
            <span className={isHighContrast ? 'text-black font-black' : 'text-emerald-400 font-mono font-bold'}>99.4% (WCAG AA)</span>
          </div>
        </div>

      </div>

      {/* 5-Stage workflow section (Styled as Bento Subgrids) */}
      <section id="workflow" className="space-y-6 scroll-mt-6">
        <div className="flex flex-col md:flex-row justify-between md:items-end gap-2 border-b border-white/5 pb-4">
          <div>
            <h2 className={`text-2xl font-bold font-display ${isHighContrast ? 'text-black' : 'text-white'}`}>5 Tahapan Transisi Karir</h2>
            <p className={`text-sm ${isHighContrast ? 'text-neutral-700' : 'text-zinc-400'}`}>Sinergi lintas lembaga untuk menyukseskan transisi alumni berkebutuhan khusus.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {workflows.map((item, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-2xl border transition duration-300 flex flex-col justify-between space-y-6 ${
                isHighContrast 
                  ? 'border-black bg-white text-black' 
                  : 'bg-[#111] border-white/5 hover:border-indigo-500/30 hover:scale-[1.02]'
              }`}
            >
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold text-sm border ${item.color}`}>
                    {item.num}
                  </span>
                  <span className="text-[10px] font-mono text-zinc-600">STG_{item.num}</span>
                </div>
                <h3 className={`font-bold text-sm ${isHighContrast ? 'text-black' : 'text-white'}`}>{item.title}</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Gamification preview styled as bento block */}
      <section className={`grid grid-cols-1 lg:grid-cols-12 gap-6 rounded-3xl p-6 sm:p-8 ${
        isHighContrast ? 'bg-white border-4 border-black text-black' : 'bg-[#111] border border-white/5'
      }`}>
        <div className="lg:col-span-7 space-y-6 p-2 flex flex-col justify-between">
          <div className="space-y-4">
            <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${
              isHighContrast ? 'bg-black text-white' : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
            }`}>
              <Accessibility className="w-4 h-4" />
              Metodologi Universal Design for Learning (UDL)
            </div>
            <h2 className={`text-3xl font-bold font-display leading-snug ${isHighContrast ? 'text-black' : 'text-white'}`}>
              Evaluasi Berbasis Gamifikasi Kognitif & Motorik
            </h2>
            <p className={`text-sm leading-relaxed ${isHighContrast ? 'text-neutral-700' : 'text-zinc-400'}`}>
              Kami mengganti asessment tertulis konvensional dengan simulasi karier digital yang menyenangkan. 
              Sambil bermain game pengurutan paket, input administrasi, atau memecahkan rintangan, sistem otomatis mencatat metrik kecepatan, ketahanan fokus, dan kecermatan motorik siswa sebagai bukti kompetensi objektif.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-6">
            <div className={`p-4 rounded-2xl ${isHighContrast ? 'bg-zinc-100' : 'bg-white/5'}`}>
              <span className={`font-mono font-bold text-3xl ${isHighContrast ? 'text-black' : 'text-indigo-400'}`}>100%</span>
              <p className="text-xs text-zinc-400 mt-1">Bebas Kecemasan Ujian</p>
            </div>
            <div className={`p-4 rounded-2xl ${isHighContrast ? 'bg-zinc-100' : 'bg-white/5'}`}>
              <span className={`font-mono font-bold text-3xl ${isHighContrast ? 'text-black' : 'text-emerald-400'}`}>WCAG AA</span>
              <p className="text-xs text-zinc-400 mt-1">Ramah Kebutuhan Khusus</p>
            </div>
          </div>
        </div>

        {/* Interactive mock sidebar simulation element */}
        <div className={`lg:col-span-5 p-6 rounded-2xl flex flex-col justify-between space-y-4 ${
          isHighContrast ? 'bg-zinc-100 border-2 border-black' : 'bg-[#161616] border border-white/5'
        }`}>
          <div className="flex justify-between items-center border-b border-white/5 pb-3">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            </div>
            <span className="text-[10px] font-mono text-zinc-500">voca_simulator.sh</span>
          </div>

          <div className={`p-6 rounded-xl text-center space-y-4 border ${
            isHighContrast ? 'bg-white border-black' : 'bg-[#111] border-white/5'
          }`}>
            <span className="text-5xl block animate-pulse">📦</span>
            <div className="space-y-1.5">
              <h4 className={`font-bold text-xs ${isHighContrast ? 'text-black' : 'text-zinc-200'}`}>Paket Komponen Baterai [Bahaya]</h4>
              <p className="text-[10px] text-zinc-500">Pilah barang sesuai instruksi visual keselamatan kerja.</p>
            </div>
            <div className="flex justify-center gap-1.5 pt-2">
              <button className="px-2.5 py-1.5 bg-zinc-800 text-zinc-400 rounded-lg text-[10px] font-bold cursor-not-allowed">Normal</button>
              <button className="px-2.5 py-1.5 bg-rose-500/20 text-rose-400 border border-rose-500/20 rounded-lg text-[10px] font-bold cursor-not-allowed">Pecah Belah</button>
              <button className="px-2.5 py-1.5 bg-amber-500 text-black rounded-lg text-[10px] font-bold cursor-not-allowed ring-2 ring-amber-400">Hazardous</button>
            </div>
          </div>

          <div className="text-center">
            <span className="text-[10px] text-zinc-500 block">Status: Simulasi siap dicoba pada Portal Siswa</span>
          </div>
        </div>
      </section>

      {/* Job vacancies Section (Styled as Premium Bento Grid) */}
      <section className="space-y-6">
        <div className="flex flex-col md:flex-row justify-between md:items-end gap-2 border-b border-white/5 pb-4">
          <div>
            <h2 className={`text-2xl font-bold font-display ${isHighContrast ? 'text-black' : 'text-white'}`}>Bursa Kerja Vokasional Inklusif</h2>
            <p className={`text-sm ${isHighContrast ? 'text-neutral-700' : 'text-zinc-400'}`}>Daftar lowongan kerja yang diunggah oleh DUDI dengan deklarasi dukungan akomodasi ramah difabel.</p>
          </div>
          <span className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full ${
            isHighContrast ? 'bg-black text-white' : 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20'
          }`}>
            2 Lowongan Unggulan Aktif
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div className={`p-6 rounded-3xl flex flex-col justify-between space-y-6 ${
            isHighContrast ? 'bg-white text-black border-4 border-black' : 'bg-[#111] border border-white/5 hover:border-white/10 transition'
          }`}>
            <div className="space-y-3">
              <div className="flex justify-between items-start">
                <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-lg ${
                  isHighContrast ? 'bg-zinc-200 text-black' : 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/10'
                }`}>PT Techindo Solusi Digital</span>
                <span className="text-xs text-zinc-500">Hybrid</span>
              </div>
              <h3 className={`text-lg font-bold ${isHighContrast ? 'text-black' : 'text-white'}`}>Staff Administrasi Data Entry (Inklusif)</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Ramah untuk: Tunarungu, Tunawicara, Tunadaksa Ringan. Menggunakan koordinasi teks tertulis, Slack, dan spreadsheet modern.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
              <span className={`text-[10px] px-2 py-0.5 rounded ${isHighContrast ? 'bg-zinc-100' : 'bg-white/5 text-zinc-400'}`}>Akurasi Input</span>
              <span className={`text-[10px] px-2 py-0.5 rounded ${isHighContrast ? 'bg-zinc-100' : 'bg-white/5 text-zinc-400'}`}>Tipe Teks</span>
            </div>
          </div>

          <div className={`p-6 rounded-3xl flex flex-col justify-between space-y-6 ${
            isHighContrast ? 'bg-white text-black border-4 border-black' : 'bg-[#111] border border-white/5 hover:border-white/10 transition'
          }`}>
            <div className="space-y-3">
              <div className="flex justify-between items-start">
                <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-lg ${
                  isHighContrast ? 'bg-zinc-200 text-black' : 'bg-amber-500/10 text-amber-400 border border-amber-500/10'
                }`}>PT TransLogistik Nusantara</span>
                <span className="text-xs text-zinc-500">Onsite Gudang</span>
              </div>
              <h3 className={`text-lg font-bold ${isHighContrast ? 'text-black' : 'text-white'}`}>Operator Sortir & Pengemasan Logistik</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Ramah untuk: Tunarungu, Tunawicara, Tunagrahita Ringan. Instruksi berupa diagram visual serta rambu-rambu petunjuk yang sangat jelas.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
              <span className={`text-[10px] px-2 py-0.5 rounded ${isHighContrast ? 'bg-zinc-100' : 'bg-white/5 text-zinc-400'}`}>Penyortiran Cepat</span>
              <span className={`text-[10px] px-2 py-0.5 rounded ${isHighContrast ? 'bg-zinc-100' : 'bg-white/5 text-zinc-400'}`}>Labeling Visual</span>
            </div>
          </div>

        </div>
      </section>

      {/* Role Demonstration Portal CTA (Styled as distinct bento panels) */}
      <section id="portal-demo" className="scroll-mt-6 border-t border-white/5 pt-12 space-y-6">
        <div className="text-center space-y-2">
          <h2 className={`text-3xl font-bold font-display ${isHighContrast ? 'text-black' : 'text-white'}`}>Portal Simulasi Multi-Peran</h2>
          <p className={`text-sm max-w-xl mx-auto ${isHighContrast ? 'text-neutral-700' : 'text-zinc-400'}`}>
            SyncVoca didesain inklusif dengan menghubungkan seluruh ekosistem pendukung. Silakan pilih peran di bawah ini:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          
          {/* Siswa Button */}
          <button
            onClick={() => onEnterPortal('siswa')}
            className={`p-6 rounded-3xl text-center transition group flex flex-col justify-between h-64 border ${
              isHighContrast 
                ? 'border-black bg-white text-black hover:bg-zinc-100' 
                : 'bg-[#111] border-white/5 hover:border-indigo-500/40 hover:scale-[1.04]'
            }`}
          >
            <div className={`mx-auto p-4 rounded-2xl transition ${
              isHighContrast ? 'bg-black text-white' : 'bg-indigo-500/10 text-indigo-400'
            }`}>
              <User className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h3 className={`font-bold text-sm ${isHighContrast ? 'text-black' : 'text-zinc-200'}`}>Siswa Disabilitas</h3>
              <p className="text-[10px] text-zinc-500">Uji Game & Portofolio</p>
            </div>
            <span className={`text-xs font-bold mt-4 flex items-center justify-center gap-1 mx-auto ${isHighContrast ? 'text-black' : 'text-indigo-400'}`}>
              Masuk Portal →
            </span>
          </button>

          {/* Guru Button */}
          <button
            onClick={() => onEnterPortal('guru')}
            className={`p-6 rounded-3xl text-center transition group flex flex-col justify-between h-64 border ${
              isHighContrast 
                ? 'border-black bg-white text-black hover:bg-zinc-100' 
                : 'bg-[#111] border-white/5 hover:border-emerald-500/40 hover:scale-[1.04]'
            }`}
          >
            <div className={`mx-auto p-4 rounded-2xl transition ${
              isHighContrast ? 'bg-black text-white' : 'bg-emerald-500/10 text-emerald-400'
            }`}>
              <GraduationCap className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h3 className={`font-bold text-sm ${isHighContrast ? 'text-black' : 'text-zinc-200'}`}>Guru Pendamping</h3>
              <p className="text-[10px] text-zinc-500">Tulis Catatan Pendampingan</p>
            </div>
            <span className={`text-xs font-bold mt-4 flex items-center justify-center gap-1 mx-auto ${isHighContrast ? 'text-black' : 'text-emerald-400'}`}>
              Masuk Portal →
            </span>
          </button>

          {/* Orang Tua Button */}
          <button
            onClick={() => onEnterPortal('orang_tua')}
            className={`p-6 rounded-3xl text-center transition group flex flex-col justify-between h-64 border ${
              isHighContrast 
                ? 'border-black bg-white text-black hover:bg-zinc-100' 
                : 'bg-[#111] border-white/5 hover:border-cyan-500/40 hover:scale-[1.04]'
            }`}
          >
            <div className={`mx-auto p-4 rounded-2xl transition ${
              isHighContrast ? 'bg-black text-white' : 'bg-cyan-500/10 text-cyan-400'
            }`}>
              <Heart className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h3 className={`font-bold text-sm ${isHighContrast ? 'text-black' : 'text-zinc-200'}`}>Orang Tua Siswa</h3>
              <p className="text-[10px] text-zinc-500">Review Perkembangan Rumah</p>
            </div>
            <span className={`text-xs font-bold mt-4 flex items-center justify-center gap-1 mx-auto ${isHighContrast ? 'text-black' : 'text-cyan-400'}`}>
              Masuk Portal →
            </span>
          </button>

          {/* DUDI Button */}
          <button
            onClick={() => onEnterPortal('dudi')}
            className={`p-6 rounded-3xl text-center transition group flex flex-col justify-between h-64 border ${
              isHighContrast 
                ? 'border-black bg-white text-black hover:bg-zinc-100' 
                : 'bg-[#111] border-white/5 hover:border-amber-500/40 hover:scale-[1.04]'
            }`}
          >
            <div className={`mx-auto p-4 rounded-2xl transition ${
              isHighContrast ? 'bg-black text-white' : 'bg-amber-500/10 text-amber-400'
            }`}>
              <Building2 className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h3 className={`font-bold text-sm ${isHighContrast ? 'text-black' : 'text-zinc-200'}`}>Dunia Usaha (DUDI)</h3>
              <p className="text-[10px] text-zinc-500">Cari Talenta & Rilis Validasi</p>
            </div>
            <span className={`text-xs font-bold mt-4 flex items-center justify-center gap-1 mx-auto ${isHighContrast ? 'text-black' : 'text-amber-400'}`}>
              Masuk Portal →
            </span>
          </button>

          {/* Admin Button */}
          <button
            onClick={() => onEnterPortal('admin')}
            className={`p-6 rounded-3xl text-center transition group flex flex-col justify-between h-64 border ${
              isHighContrast 
                ? 'border-black bg-white text-black hover:bg-zinc-100' 
                : 'bg-[#111] border-white/5 hover:border-purple-500/40 hover:scale-[1.04]'
            }`}
          >
            <div className={`mx-auto p-4 rounded-2xl transition ${
              isHighContrast ? 'bg-black text-white' : 'bg-purple-500/10 text-purple-400'
            }`}>
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h3 className={`font-bold text-sm ${isHighContrast ? 'text-black' : 'text-zinc-200'}`}>Master Admin</h3>
              <p className="text-[10px] text-zinc-500">Kelola Seluruh Master Data</p>
            </div>
            <span className={`text-xs font-bold mt-4 flex items-center justify-center gap-1 mx-auto ${isHighContrast ? 'text-black' : 'text-purple-400'}`}>
              Masuk Portal →
            </span>
          </button>

        </div>
      </section>

      {/* Footer support */}
      <footer className="text-center text-xs text-zinc-500 border-t border-white/5 pt-8">
        <p>© 2026 SyncVoca Journey. Berkomitmen Membangun Kemitraan Ketenagakerjaan Nasional yang Inklusif.</p>
        <p className="mt-1">Diberdayakan oleh Google AI Studio, React, dan PWA Offline Engine.</p>
      </footer>
    </div>
  );
}
