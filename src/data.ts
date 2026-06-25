import { StudentProfile, GameSession, TeacherNote, JobPosting, IndustryValidation, Company } from './types';

// Initial default student profiles
export const INITIAL_STUDENTS: StudentProfile[] = [
  {
    id: 'student-nadia',
    name: 'Nadia Saputri',
    schoolId: 'school-slb-1',
    schoolName: 'SLB Negeri 1 Jakarta',
    disabilityType: 'Tunarungu & Wicara (Hearing & Speech Disability)',
    bio: 'Siswa berprestasi di bidang teknologi informasi dan desain grafis komputer. Memiliki fokus dan ketelitian yang tinggi dalam pengerjaan data entry serta penyusunan logika pemrograman dasar.',
    skills: ['Data Entry', 'Microsoft Excel', 'Desain Canva', 'Logika Pemrograman', 'Penyusunan Berkas'],
    interest: 'Administrasi Perkantoran & Desain Grafis',
    readinessScore: 88,
    supportRequirements: ['Instruksi kerja tertulis/visual', 'Akses komunikasi teks (Chat/Email)', 'Lingkungan minim kebisingan mendadak'],
    sensitiveData: {
      medicalNotes: 'Kondisi kesehatan umum sangat baik. Menggunakan alat bantu dengar (hearing aid) pada telinga kanan. Tidak memiliki masalah motorik.',
      guardianContact: 'Bapak Hermawan (+62 812-3456-7890)',
      familyBackground: 'Anak kedua dari tiga bersaudara. Keluarga sangat mendukung kemandirian vokasi dan aktif mendampingi di rumah.',
      privateNotes: 'Sangat responsif terhadap panduan visual. Kadang merasa cemas jika instruksi diberikan tergesa-gesa tanpa demonstrasi tertulis.'
    }
  },
  {
    id: 'student-rizky',
    name: 'Rizky Pratama',
    schoolId: 'school-slb-1',
    schoolName: 'SLB Negeri 1 Jakarta',
    disabilityType: 'Tunadaksa Ringan (Physical Disability - Left Leg)',
    bio: 'Memiliki passion tinggi dalam bidang perakitan sirkuit elektronik dan administrasi data. Mahir mengoperasikan perangkat lunak spreadsheet.',
    skills: ['Perakitan Komponen', 'Input Data', 'Quality Control', 'Troubleshooting PC'],
    interest: 'Teknisi Elektronik & Staff Administrasi',
    readinessScore: 82,
    supportRequirements: ['Meja kerja yang ramah kursi roda/tongkat kaki', 'Minim pergerakan tangga vertikal', 'Jam kerja fleksibel untuk terapi fisik rutin bulanan'],
    sensitiveData: {
      medicalNotes: 'Pasca operasi rehabilitasi kaki kiri. Penggunaan tongkat ketiak (crutches) mandiri. Kekuatan motorik tangan 100% normal.',
      guardianContact: 'Ibu Ratna (+62 821-9876-5432)',
      familyBackground: 'Ayah seorang teknisi bengkel mandiri, membantu Rizky belajar merakit elektronik sejak dini.',
      privateNotes: 'Memiliki motivasi kerja tinggi. Membutuhkan kursi yang ergonomis selama sesi perakitan.'
    }
  },
  {
    id: 'student-fitri',
    name: 'Fitri Yani',
    schoolId: 'school-slb-2',
    schoolName: 'SLB Pembina Swasta',
    disabilityType: 'Tunagrahita Ringan (Intellectual Disability - High Functioning)',
    bio: 'Siswa yang sangat rajin, disiplin, dan teratur. Sangat menyukai pekerjaan berulang yang terstruktur seperti pengemasan barang, penyortiran, dan inventarisasi gudang.',
    skills: ['Penyortiran Barang', 'Pengemasan Higienis', 'Sticker Labelling', 'Inventarisasi Sederhana'],
    interest: 'Logistik & Retail (Packaging)',
    readinessScore: 79,
    supportRequirements: ['Instruksi tugas langkah-demi-langkah dengan diagram gambar', 'Pendampingan (job coach) di minggu-minggu pertama', 'Tugas harian yang konsisten dan terprediksi'],
    sensitiveData: {
      medicalNotes: 'Kognitif umum setingkat usia 12 tahun. Fisik dan koordinasi motorik sangat bugar dan sehat.',
      guardianContact: 'Bapak Ahmad (+62 855-4321-0987)',
      familyBackground: 'Orang tua sangat aktif dalam kelompok pendampingan anak berkebutuhan khusus daerah.',
      privateNotes: 'Sangat menyukai pujian verbal positif. Membutuhkan waktu adaptasi 3-4 hari untuk perubahan alur kerja baru.'
    }
  }
];

// Master companies
export const COMPANIES: Company[] = [
  {
    id: 'company-techindo',
    name: 'PT Techindo Solusi Digital',
    industry: 'Teknologi Informasi & Software',
    location: 'Jakarta Selatan, DKI Jakarta',
    isVerified: true,
    description: 'Perusahaan solusi IT terkemuka yang berkomitmen penuh terhadap program ketenagakerjaan inklusif dan ramah disabilitas.'
  },
  {
    id: 'company-gudang-retail',
    name: 'PT TransLogistik Nusantara',
    industry: 'Logistik, Retail & Gudang',
    location: 'Bekasi, Jawa Barat',
    isVerified: true,
    description: 'Pusat distribusi retail modern nasional dengan standar aksesibilitas fisik dan pendampingan kerja bagi karyawan disabilitas.'
  }
];

// Initial Job postings
export const INITIAL_JOBS: JobPosting[] = [
  {
    id: 'job-1',
    title: 'Staff Data Entry Specialist (Inklusif)',
    companyId: 'company-techindo',
    companyName: 'PT Techindo Solusi Digital',
    industry: 'Teknologi Informasi & Software',
    location: 'Jakarta Selatan & Remote',
    disabilitySupports: ['Tunarungu (Hearing)', 'Tunawicara (Speech)', 'Tunadaksa Ringan (Physical)'],
    requiredSkills: ['Data Entry', 'Microsoft Excel', 'Ketelitian', 'Kecepatan Mengetik'],
    description: 'Kami mencari individu teliti untuk menginput data transaksi, data pelanggan, dan log sistem secara akurat ke dalam basis data cloud kami. Komunikasi seluruhnya dilakukan melalui Slack atau tertulis.',
    salaryRange: 'Rp 4.200.000 - Rp 5.500.000',
    status: 'Active',
    type: 'Hybrid'
  },
  {
    id: 'job-2',
    title: 'Operator Sortir & Pengemasan Gudang',
    companyId: 'company-gudang-retail',
    companyName: 'PT TransLogistik Nusantara',
    industry: 'Logistik, Retail & Gudang',
    location: 'Bekasi, Jawa Barat',
    disabilitySupports: ['Tunarungu (Hearing)', 'Tunagrahita Ringan (Intellectual)', 'Tunawicara (Speech)'],
    requiredSkills: ['Penyortiran Barang', 'Pengemasan Higienis', 'Ketepatan Hitung'],
    description: 'Tanggung jawab utama meliputi penyortiran barang retail berdasarkan jenis kategori, pelabelan kode bar, dan pengemasan paket akhir dengan rapi sebelum didistribusikan ke kurir.',
    salaryRange: 'Rp 3.800.000 - Rp 4.500.000',
    status: 'Active',
    type: 'Onsite'
  }
];

// Initial game sessions database
export const INITIAL_SESSIONS: GameSession[] = [
  {
    id: 'session-1',
    studentId: 'student-nadia',
    studentName: 'Nadia Saputri',
    gameId: 'game-logic',
    gameName: 'Logic Quest (Kognitif)',
    score: 95,
    date: '2026-06-23T10:30:00Z',
    metrics: {
      accuracy: 96,
      completionTime: 120,
      errorCount: 1,
      consistency: 98
    }
  },
  {
    id: 'session-2',
    studentId: 'student-nadia',
    studentName: 'Nadia Saputri',
    gameId: 'game-data-entry',
    gameName: 'Data Entry Simulation (Administrasi)',
    score: 90,
    date: '2026-06-24T14:15:00Z',
    metrics: {
      accuracy: 92,
      completionTime: 150,
      errorCount: 3,
      consistency: 90
    }
  },
  {
    id: 'session-3',
    studentId: 'student-rizky',
    studentName: 'Rizky Pratama',
    gameId: 'game-logic',
    gameName: 'Logic Quest (Kognitif)',
    score: 84,
    date: '2026-06-24T09:00:00Z',
    metrics: {
      accuracy: 88,
      completionTime: 145,
      errorCount: 3,
      consistency: 85
    }
  },
  {
    id: 'session-4',
    studentId: 'student-fitri',
    studentName: 'Fitri Yani',
    gameId: 'game-package',
    gameName: 'Package Sorter (Motorik/Gudang)',
    score: 82,
    date: '2026-06-25T11:00:00Z',
    metrics: {
      accuracy: 85,
      completionTime: 180,
      errorCount: 4,
      consistency: 82
    }
  }
];

// Initial teacher notes
export const INITIAL_TEACHER_NOTES: TeacherNote[] = [
  {
    id: 'note-1',
    studentId: 'student-nadia',
    teacherName: 'Dra. Endang Wardhani',
    noteText: 'Nadia menunjukkan pemahaman luar biasa dalam game penyusunan logika. Ia dapat menyelesaikan tantangan dengan sangat tenang. Komunikasi tertulisnya sangat sopan dan runtut.',
    date: '2026-06-23T11:00:00Z',
    focusCategory: 'Kognitif'
  },
  {
    id: 'note-2',
    studentId: 'student-nadia',
    teacherName: 'Dra. Endang Wardhani',
    noteText: 'Disarankan bagi orang tua di rumah untuk terus melatih konsistensi menulis instruksi tugas harian dalam bentuk daftar centang visual (checklist). Ini terbukti meningkatkan fokusnya hingga 15%.',
    date: '2026-06-24T16:00:00Z',
    focusCategory: 'Saran'
  },
  {
    id: 'note-3',
    studentId: 'student-rizky',
    teacherName: 'Ahmad Faisal, S.Pd',
    noteText: 'Rizky dapat mengoperasikan simulasi penyusunan logika dengan baik. Kekuatan jari jemari tangannya dalam menekan pintasan keyboard sangat tangkas dan konsisten.',
    date: '2026-06-24T10:00:00Z',
    focusCategory: 'Motorik'
  }
];

// Initial industry validation seals
export const INITIAL_VALIDATIONS: IndustryValidation[] = [
  {
    id: 'val-1',
    studentId: 'student-nadia',
    companyId: 'company-techindo',
    companyName: 'PT Techindo Solusi Digital',
    validatedSkills: ['Data Entry', 'Microsoft Excel', 'Logika Pemrograman'],
    sealIssuedAt: '2026-06-25T08:00:00Z',
    note: 'Telah divalidasi langsung berdasarkan hasil simulasi Logic Quest & Data Entry dengan akurasi di atas 90%. Nadia siap magang di posisi Admin Operasional.'
  }
];

// LocalStorage Helper functions
const getStored = <T>(key: string, initial: T): T => {
  const data = localStorage.getItem(key);
  if (!data) {
    localStorage.setItem(key, JSON.stringify(initial));
    return initial;
  }
  try {
    return JSON.parse(data);
  } catch {
    return initial;
  }
};

const setStored = <T>(key: string, value: T): void => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const database = {
  getStudents: (): StudentProfile[] => getStored('sv_students', INITIAL_STUDENTS),
  saveStudents: (data: StudentProfile[]) => setStored('sv_students', data),
  
  getSessions: (): GameSession[] => getStored('sv_sessions', INITIAL_SESSIONS),
  addSession: (session: Omit<GameSession, 'id'>) => {
    const sessions = database.getSessions();
    const newSession: GameSession = {
      ...session,
      id: `session-${Date.now()}`
    };
    sessions.unshift(newSession);
    database.saveSessions(sessions);
    
    // Dynamically update readinessScore on student profile
    const students = database.getStudents();
    const student = students.find(s => s.id === session.studentId);
    if (student) {
      // average calculation based on sessions
      const studentSessions = sessions.filter(s => s.studentId === student.id);
      const totalScore = studentSessions.reduce((acc, s) => acc + s.score, 0);
      const average = Math.round(totalScore / studentSessions.length);
      student.readinessScore = Math.min(100, Math.max(50, average));
      database.saveStudents(students);
    }
    return newSession;
  },
  saveSessions: (data: GameSession[]) => setStored('sv_sessions', data),

  getTeacherNotes: (): TeacherNote[] => getStored('sv_teacher_notes', INITIAL_TEACHER_NOTES),
  addTeacherNote: (note: Omit<TeacherNote, 'id'>) => {
    const notes = database.getTeacherNotes();
    const newNote: TeacherNote = {
      ...note,
      id: `note-${Date.now()}`
    };
    notes.unshift(newNote);
    database.saveTeacherNotes(notes);
    return newNote;
  },
  saveTeacherNotes: (data: TeacherNote[]) => setStored('sv_teacher_notes', data),

  getJobs: (): JobPosting[] => getStored('sv_jobs', INITIAL_JOBS),
  addJob: (job: Omit<JobPosting, 'id'>) => {
    const jobs = database.getJobs();
    const newJob: JobPosting = {
      ...job,
      id: `job-${Date.now()}`
    };
    jobs.unshift(newJob);
    database.saveJobs(jobs);
    return newJob;
  },
  saveJobs: (data: JobPosting[]) => setStored('sv_jobs', data),

  getValidations: (): IndustryValidation[] => getStored('sv_validations', INITIAL_VALIDATIONS),
  addValidation: (val: Omit<IndustryValidation, 'id'>) => {
    const validations = database.getValidations();
    const newVal: IndustryValidation = {
      ...val,
      id: `val-${Date.now()}`
    };
    validations.unshift(newVal);
    database.saveValidations(validations);
    return newVal;
  },
  saveValidations: (data: IndustryValidation[]) => setStored('sv_validations', data),

  getCompanies: (): Company[] => COMPANIES
};
