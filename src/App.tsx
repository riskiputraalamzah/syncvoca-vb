import { useState, useEffect } from 'react';
import { 
  Building2, GraduationCap, Users, User, ShieldCheck, 
  ArrowRight, Key, Keyboard, Package, Sparkles, Accessibility, Heart, RotateCcw, Home
} from 'lucide-react';
import { database } from './data';
import { UserRole, AccessibilityPreferences, StudentProfile, GameSession, TeacherNote, JobPosting, IndustryValidation } from './types';
import LandingPage from './components/LandingPage';
import AccessibilityPanel from './components/AccessibilityPanel';
import SiswaDashboard from './components/SiswaDashboard';
import GuruDashboard from './components/GuruDashboard';
import OrangTuaDashboard from './components/OrangTuaDashboard';
import DudiDashboard from './components/DudiDashboard';
import AdminDashboard from './components/AdminDashboard';

export default function App() {
  // Navigation / Role selection
  const [currentRole, setCurrentRole] = useState<UserRole | null>(null);

  // Unified persistent database states loaded dynamically from localStorage
  const [students, setStudents] = useState<StudentProfile[]>([]);
  const [sessions, setSessions] = useState<GameSession[]>([]);
  const [teacherNotes, setTeacherNotes] = useState<TeacherNote[]>([]);
  const [jobPostings, setJobPostings] = useState<JobPosting[]>([]);
  const [validations, setValidations] = useState<IndustryValidation[]>([]);

  // Accessibility States
  const [accessibility, setAccessibility] = useState<AccessibilityPreferences>({
    textSize: 'normal',
    highContrast: false,
    dyslexiaFont: false,
    reducedMotion: false,
    simplifiedLayout: false,
    audioAssist: false
  });

  // Load database once on mount
  useEffect(() => {
    setStudents(database.getStudents());
    setSessions(database.getSessions());
    setTeacherNotes(database.getTeacherNotes());
    setJobPostings(database.getJobs());
    setValidations(database.getValidations());
  }, []);

  // Sync callbacks to state and storage
  const handleGameComplete = (newSession: GameSession) => {
    const savedSession = database.addSession(newSession);
    // Reload lists to reflect score in readiness and lists
    setSessions(database.getSessions());
    setStudents(database.getStudents());
  };

  const handleAddTeacherNote = (note: Omit<TeacherNote, 'id'>) => {
    database.addTeacherNote(note);
    setTeacherNotes(database.getTeacherNotes());
  };

  const handleAddJob = (job: Omit<JobPosting, 'id'>) => {
    database.addJob(job);
    setJobPostings(database.getJobs());
  };

  const handleAddValidation = (val: Omit<IndustryValidation, 'id'>) => {
    database.addValidation(val);
    setValidations(database.getValidations());
    
    // dynamically improve candidate readinessScore by 5 points for every endorsement
    const currentStudents = database.getStudents();
    const target = currentStudents.find(s => s.id === val.studentId);
    if (target) {
      target.readinessScore = Math.min(100, target.readinessScore + 5);
      database.saveStudents(currentStudents);
      setStudents(currentStudents);
    }
  };

  const handleAddStudent = (student: StudentProfile) => {
    const currentStudents = database.getStudents();
    currentStudents.push(student);
    database.saveStudents(currentStudents);
    setStudents(currentStudents);
  };

  const handleResetData = () => {
    if (confirm("Reset ulang semua data simulasi demo ke kondisi awal bawaan pabrik?")) {
      localStorage.clear();
      window.location.reload();
    }
  };

  // Class helper mapping for custom high-contrast or dyslexic layouts
  const sizeClasses = {
    normal: 'text-sm leading-relaxed',
    large: 'text-base sm:text-lg leading-relaxed font-semibold',
    xlarge: 'text-lg sm:text-xl leading-loose font-bold'
  }[accessibility.textSize];

  const bgThemeClass = accessibility.highContrast 
    ? 'bg-white text-black min-h-screen border-4 border-black' 
    : 'bento-bg text-white min-h-screen';

  const containerBorderTheme = accessibility.highContrast
    ? 'border-2 border-black divide-y-2'
    : 'border-white/5 divide-white/5';

  return (
    <div className={`${bgThemeClass} ${accessibility.dyslexiaFont ? 'font-serif' : 'font-sans'} pb-12`}>
      {/* Dynamic inclusive Header */}
      <header className={`sticky top-0 z-40 backdrop-blur border-b px-4 sm:px-8 py-3.5 flex justify-between items-center transition ${
        accessibility.highContrast ? 'border-b-4 border-black text-black bg-white' : 'bg-black/80 border-white/5 text-white shadow-lg'
      }`}>
        <div className="flex items-center gap-2.5">
          <button
            onClick={() => setCurrentRole(null)}
            className="flex items-center gap-2 text-left"
            aria-label="Kembali ke Landing Page"
          >
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center font-black text-white text-lg tracking-wider font-display">
              SV
            </div>
            <div>
              <h1 className={`font-extrabold text-sm tracking-tight leading-none font-display ${
                accessibility.highContrast ? 'text-black' : 'text-white'
              }`}>
                SyncVoca
              </h1>
              <span className={`text-[10px] font-bold uppercase tracking-widest leading-none ${
                accessibility.highContrast ? 'text-zinc-600' : 'text-indigo-400'
              }`}>
                Journey Inklusi
              </span>
            </div>
          </button>
        </div>

        {/* Global Controls & Access */}
        <div className="flex items-center gap-3">
          {/* Back Home Button */}
          {currentRole && (
            <button
              onClick={() => setCurrentRole(null)}
              className={`p-2 rounded-full transition flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold ${
                accessibility.highContrast ? 'bg-black text-white' : 'bg-white/5 text-zinc-300 hover:bg-white/10'
              }`}
            >
              <Home className="w-4 h-4" />
              <span className="hidden sm:inline">Kembali</span>
            </button>
          )}

          {/* Reset button for Demo safety */}
          <button
            onClick={handleResetData}
            title="Ulang Data Demo"
            className="p-2 text-zinc-500 hover:text-red-500 rounded-full transition text-xs font-bold"
          >
            <RotateCcw className="w-4 h-4" />
          </button>

          {/* Accessibility interactive widget */}
          <AccessibilityPanel 
            preferences={accessibility} 
            onPreferencesChange={setAccessibility} 
          />
        </div>
      </header>

      {/* Main viewport Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-8 py-8">
        {!currentRole ? (
          <LandingPage 
            onEnterPortal={setCurrentRole} 
            preferences={accessibility} 
          />
        ) : (
          <div className="space-y-6">
            {/* Header role context strip */}
            <div className={`rounded-2xl px-5 py-3 flex justify-between items-center text-xs font-semibold ${
              accessibility.highContrast ? 'border-2 border-black bg-white text-black font-black' : 'bg-[#111] border border-white/5 text-zinc-200'
            }`}>
              <div className="flex items-center gap-2">
                <span className="inline-block w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse" />
                <span>
                  Peran Simulasi Aktif:{' '}
                  <span className="font-bold text-indigo-400 uppercase tracking-wider">{currentRole}</span>
                </span>
              </div>
              <button
                onClick={() => setCurrentRole(null)}
                className="text-xs text-zinc-400 hover:text-white transition"
              >
                Ganti Peran / Keluar Portal ×
              </button>
            </div>

            {/* Dashboard Router based on active selected role */}
            {currentRole === 'siswa' && students.length > 0 && (
              <SiswaDashboard 
                student={students[0]} // default main candidate: Nadia Saputri
                students={students}
                sessions={sessions}
                onGameComplete={handleGameComplete}
                preferences={accessibility}
                validations={validations}
              />
            )}

            {currentRole === 'guru' && (
              <GuruDashboard 
                students={students}
                sessions={sessions}
                teacherNotes={teacherNotes}
                onAddNote={handleAddTeacherNote}
                preferences={accessibility}
              />
            )}

            {currentRole === 'orang_tua' && (
              <OrangTuaDashboard 
                students={students}
                sessions={sessions}
                teacherNotes={teacherNotes}
                preferences={accessibility}
              />
            )}

            {currentRole === 'dudi' && (
              <DudiDashboard 
                students={students}
                sessions={sessions}
                jobs={jobPostings}
                validations={validations}
                onAddJob={handleAddJob}
                onAddValidation={handleAddValidation}
                preferences={accessibility}
              />
            )}

            {currentRole === 'admin' && (
              <AdminDashboard 
                students={students}
                companies={database.getCompanies()}
                onAddStudent={handleAddStudent}
                preferences={accessibility}
              />
            )}
          </div>
        )}
      </main>

      {/* Floating fast role switcher footer */}
      <div className={`fixed bottom-4 left-1/2 -translate-x-1/2 backdrop-blur border shadow-2xl rounded-full px-5 py-2.5 z-50 flex items-center gap-2 print:hidden ${
        accessibility.highContrast ? 'bg-white border-2 border-black text-black' : 'bg-black/85 border-white/5 text-white shadow-xl'
      }`}>
        <span className={`text-[10px] font-bold uppercase tracking-wider hidden md:inline ${
          accessibility.highContrast ? 'text-black' : 'text-zinc-500'
        }`}>
          Fast Swap:
        </span>
        <div className="flex gap-1.5">
          <button
            onClick={() => setCurrentRole(null)}
            className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-black transition ${
              currentRole === null 
                ? (accessibility.highContrast ? 'bg-black text-white' : 'bg-indigo-600 text-white') 
                : (accessibility.highContrast ? 'bg-zinc-200 text-black hover:bg-zinc-300' : 'bg-white/5 text-zinc-300 hover:bg-white/10')
            }`}
            title="Landing"
          >
            L
          </button>
          <button
            onClick={() => setCurrentRole('siswa')}
            className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition ${
              currentRole === 'siswa' 
                ? (accessibility.highContrast ? 'bg-black text-white' : 'bg-indigo-600 text-white') 
                : (accessibility.highContrast ? 'bg-zinc-200 text-black hover:bg-zinc-300' : 'bg-white/5 text-zinc-300 hover:bg-white/10')
            }`}
            title="Siswa"
          >
            S
          </button>
          <button
            onClick={() => setCurrentRole('guru')}
            className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition ${
              currentRole === 'guru' 
                ? (accessibility.highContrast ? 'bg-black text-white' : 'bg-indigo-600 text-white') 
                : (accessibility.highContrast ? 'bg-zinc-200 text-black hover:bg-zinc-300' : 'bg-white/5 text-zinc-300 hover:bg-white/10')
            }`}
            title="Guru"
          >
            G
          </button>
          <button
            onClick={() => setCurrentRole('orang_tua')}
            className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition ${
              currentRole === 'orang_tua' 
                ? (accessibility.highContrast ? 'bg-black text-white' : 'bg-indigo-600 text-white') 
                : (accessibility.highContrast ? 'bg-zinc-200 text-black hover:bg-zinc-300' : 'bg-white/5 text-zinc-300 hover:bg-white/10')
            }`}
            title="Orang Tua"
          >
            O
          </button>
          <button
            onClick={() => setCurrentRole('dudi')}
            className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition ${
              currentRole === 'dudi' 
                ? (accessibility.highContrast ? 'bg-black text-white' : 'bg-indigo-600 text-white') 
                : (accessibility.highContrast ? 'bg-zinc-200 text-black hover:bg-zinc-300' : 'bg-white/5 text-zinc-300 hover:bg-white/10')
            }`}
            title="DUDI"
          >
            D
          </button>
          <button
            onClick={() => setCurrentRole('admin')}
            className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition ${
              currentRole === 'admin' 
                ? (accessibility.highContrast ? 'bg-black text-white' : 'bg-indigo-600 text-white') 
                : (accessibility.highContrast ? 'bg-zinc-200 text-black hover:bg-zinc-300' : 'bg-white/5 text-zinc-300 hover:bg-white/10')
            }`}
            title="Admin"
          >
            A
          </button>
        </div>
      </div>
    </div>
  );
}
