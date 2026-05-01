import { Section } from "../data/tableOfContents";
import SearchBar from "./SearchBar";

interface HeaderProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  activeSection: string | null;
  setActiveSection: (section: string | null) => void;
  sections: Section[];
  isDark: boolean;
  toggleDarkMode: () => void;
}
export default function Header({
  sidebarOpen,
  setSidebarOpen,
  activeSection,
  setActiveSection,
  sections,
  isDark,
  toggleDarkMode,
}: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-emerald-900 dark:bg-slate-950 text-white shadow-lg">
      <div className="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3 gap-2">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 rounded-lg hover:bg-emerald-800 transition-colors lg:hidden"
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <button
            onClick={() => setActiveSection(null)}
            className="flex items-center gap-2 hover:opacity-90 transition-opacity"
          >
            <span className="text-2xl">🕌</span>
            <div className="hidden sm:block min-w-0">
              <p className="font-bold text-sm leading-tight truncate">Guide Complet de la Prière</p>
              <p className="font-amiri text-emerald-300 text-sm leading-tight truncate" dir="rtl">
                المذهب المالكي
              </p>
            </div>
            <p className="sm:hidden font-bold text-sm leading-tight">Prière Malikite</p>
          </button>
        </div>

        {/* Barre de recherche */}
        <div className="hidden md:block mr-4">
          <SearchBar sections={sections} onSelectSection={setActiveSection} />
        </div>

        <div className="flex items-center gap-2">
          {/* Bouton Mode Sombre */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg hover:bg-emerald-800 dark:hover:bg-slate-800 transition-colors"
            aria-label="Toggle dark mode"
            title={isDark ? "Mode clair" : "Mode sombre"}
          >
            {isDark ? (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 3v1m0 16v1m9-9h-1m-16 0H1m15.364 1.636l.707.707M6.343 6.343l-.707-.707m12.728 0l-.707.707m-11.314 11.314l-.707-.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>
          {activeSection && (
            <button
              onClick={() => setActiveSection(null)}
              className="flex items-center gap-1 text-sm text-emerald-300 hover:text-white transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span className="hidden sm:inline">Accueil</span>
            </button>
          )}
          <div className="hidden md:block bg-emerald-800 rounded-lg px-3 py-1.5 text-xs font-amiri text-emerald-200" dir="rtl">
            بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
          </div>
        </div>
      </div>
    </header>
  );
}