import { Section } from "../data/tableOfContents";

interface SidebarProps {
  sections: Section[];
  activeSection: string | null;
  setActiveSection: (id: string) => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export default function Sidebar({
  sections,
  activeSection,
  setActiveSection,
  isOpen,
  setIsOpen,
}: SidebarProps) {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
        <aside
        className={`
          fixed top-0 left-0 h-full w-[85vw] max-w-xs sm:w-72 bg-emerald-950 dark:bg-slate-950 text-white z-50 pt-[env(safe-area-inset-top)]
          transform transition-transform duration-300 ease-in-out overflow-y-auto
          lg:relative lg:translate-x-0 lg:top-auto lg:z-auto lg:h-auto lg:min-h-screen
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="p-4 border-b border-emerald-800">
          <div className="text-center">
            <p className="font-amiri text-emerald-300 text-xl" dir="rtl">الصلاة في المذهب المالكي</p>
            <p className="text-emerald-400 text-xs mt-1">Guide des 20 Parties</p>
          </div>
        </div>

        <nav className="p-2">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`
                w-full text-left px-3 py-3 rounded-lg mb-1 transition-all duration-200
                flex items-start gap-2 group
                ${activeSection === section.id
                  ? "bg-emerald-600 text-white shadow-md"
                  : "text-emerald-200 hover:bg-emerald-800 hover:text-white"
                }
              `}
            >
              <span className="text-lg flex-shrink-0 mt-0.5">{section.icon}</span>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-sm leading-tight truncate">{section.title}</p>
                <p
                  className={`font-amiri text-xs mt-0.5 truncate ${
                    activeSection === section.id ? "text-emerald-200" : "text-emerald-400"
                  }`}
                  dir="rtl"
                >
                  {section.arabicTitle}
                </p>
              </div>
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-emerald-800 mt-4">
          <p className="text-emerald-500 text-xs text-center font-amiri" dir="rtl">
            رَبَّنَا تَقَبَّلْ مِنَّا إِنَّكَ أَنتَ السَّمِيعُ الْعَلِيمُ
          </p>
        </div>
      </aside>
    </>
  );
}
