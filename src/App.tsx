import { useState } from "react";
import { useDarkMode } from "./hooks/useDarkMode";
import { tableOfContents } from "./data/tableOfContents";
import Sidebar from "./components/Sidebar";
import SearchBar from "./components/SearchBar";
import Header from "./components/Header";
import NavigationButtons from "./components/NavigationButtons";
import Partie1 from "./components/sections/Partie1";
import Partie2 from "./components/sections/Partie2";
import Partie3 from "./components/sections/Partie3";
import Partie4 from "./components/sections/Partie4";
import Partie5 from "./components/sections/Partie5";
import Partie6 from "./components/sections/Partie6";
import Partie7 from "./components/sections/Partie7";
import Partie8 from "./components/sections/Partie8";
import Partie9 from "./components/sections/Partie9";
import Partie10 from "./components/sections/Partie10";
import Partie11 from "./components/sections/Partie11";
import Partie12 from "./components/sections/Partie12";
import Partie13 from "./components/sections/Partie13";
import Partie14 from "./components/sections/Partie14";
import Partie15 from "./components/sections/Partie15";
import Partie16 from "./components/sections/Partie16";
import Partie17 from "./components/sections/Partie17";
import Partie18 from "./components/sections/Partie18";
import Partie19 from "./components/sections/Partie19";
import Partie20 from "./components/sections/Partie20";
import HomePage from "./components/HomePage";
import ReparationPriere from "./components/sections/ReparationPriere";
import EcoleMalikite from "./components/sections/EcoleMalikite";
import Glossaire from "./components/sections/Glossaire";

const sectionComponents: Record<string, React.ComponentType> = {
  partie1: Partie1,
  partie2: Partie2,
  partie3: Partie3,
  partie4: Partie4,
  partie5: Partie5,
  partie6: Partie6,
  partie7: Partie7,
  partie8: Partie8,
  partie9: Partie9,
  partie10: Partie10,
  partie11: Partie11,
  partie12: Partie12,
  partie13: Partie13,
  partie14: Partie14,
  partie15: Partie15,
  partie16: Partie16,
  partie17: Partie17,
  partie18: Partie18,
  partie19: Partie19,
  partie20: Partie20,
  "reparation-priere": ReparationPriere,
  "ecole-malikite": EcoleMalikite,
  "glossaire": Glossaire,
};

export default function App() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { isDark, toggle } = useDarkMode();

  const ActiveComponent = activeSection ? sectionComponents[activeSection] : null;
  const activeData = tableOfContents.find((s) => s.id === activeSection);

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-slate-950 font-inter">
      <Header
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        sections={tableOfContents}
        isDark={isDark}
        toggleDarkMode={toggle}
      />

      <div className="flex">
        <Sidebar
          sections={tableOfContents}
          activeSection={activeSection}
          setActiveSection={(id) => {
            setActiveSection(id);
            setSidebarOpen(false);
          }}
          isOpen={sidebarOpen}
          setIsOpen={setSidebarOpen}
        />

        <main className="flex-1 min-h-screen dark:bg-slate-900">
          {!activeSection ? (
            <HomePage
              sections={tableOfContents}
              onSelectSection={setActiveSection}
            />
          ) : (
            <div className="max-w-5xl mx-auto px-3 sm:px-4 py-4 sm:py-8">
              {activeData && (
                <div className="mb-8 pb-6 border-b border-emerald-200 dark:border-slate-700">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-4xl">{activeData.icon}</span>
                    <div>
                      <h1 className="text-2xl md:text-3xl font-bold text-emerald-900 dark:text-emerald-300">
                        {activeData.title}
                      </h1>
                      <p className="text-xl font-amiri text-emerald-700 dark:text-emerald-400 mt-1">
                        {activeData.arabicTitle}
                      </p>
                    </div>
                  </div>
                </div>
              )}
              {ActiveComponent && <ActiveComponent />}
              {ActiveComponent && (
                <NavigationButtons
                  sections={tableOfContents}
                  currentSectionId={activeSection}
                  onNavigate={setActiveSection}
                />
              )}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}