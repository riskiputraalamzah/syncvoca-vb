export type UserRole = 'siswa' | 'guru' | 'orang_tua' | 'dudi' | 'admin';

export interface AccessibilityPreferences {
  textSize: 'normal' | 'large' | 'xlarge';
  highContrast: boolean;
  dyslexiaFont: boolean;
  reducedMotion: boolean;
  simplifiedLayout: boolean;
  audioAssist: boolean;
}

export interface StudentProfile {
  id: string;
  name: string;
  schoolId: string;
  schoolName: string;
  disabilityType: string; // e.g., "Tunarungu (Hearing)", "Tunagrahita (Intellectual)", "Tunadaksa (Physical)"
  bio: string;
  skills: string[];
  interest: string;
  readinessScore: number; // 0 - 100 based on validation & simulations
  supportRequirements: string[]; // support needed at work
  // Sensitive/Private data - NOT visible to DUDI
  sensitiveData: {
    medicalNotes: string;
    guardianContact: string;
    familyBackground: string;
    privateNotes: string;
  };
}

export interface CompetencyMatrix {
  logika: number; // 0 - 100
  ketelitian: number; // 0 - 100
  konsistensi: number; // 0 - 100
  ketahananKerja: number; // 0 - 100
  motorikKasar: number; // 0 - 100
}

export interface Game {
  id: string;
  name: string;
  description: string;
  vocationCategory: string;
  minDurationMinutes: number;
}

export interface GameSession {
  id: string;
  studentId: string;
  studentName: string;
  gameId: string;
  gameName: string;
  score: number;
  date: string;
  metrics: {
    accuracy: number; // %
    completionTime: number; // seconds
    errorCount: number;
    consistency: number; // %
  };
}

export interface TeacherNote {
  id: string;
  studentId: string;
  teacherName: string;
  noteText: string;
  date: string;
  focusCategory: 'Kognitif' | 'Motorik' | 'Sosial-Emosional' | 'Kehadiran' | 'Saran';
}

export interface Company {
  id: string;
  name: string;
  industry: string;
  location: string;
  isVerified: boolean;
  description: string;
}

export interface JobPosting {
  id: string;
  title: string;
  companyId: string;
  companyName: string;
  industry: string;
  location: string;
  disabilitySupports: string[]; // target disabilitas yang didukung
  requiredSkills: string[];
  description: string;
  salaryRange: string;
  status: 'Active' | 'Draft' | 'Closed';
  type: 'Onsite' | 'Remote' | 'Hybrid';
}

export interface IndustryValidation {
  id: string;
  studentId: string;
  companyId: string;
  companyName: string;
  validatedSkills: string[];
  sealIssuedAt: string;
  note: string;
}
