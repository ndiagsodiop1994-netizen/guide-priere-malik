import { useState } from "react";
import { Section } from "../data/tableOfContents";

interface SearchBarProps {
  sections: Section[];
  onSelectSection: (id: string) => void;
}

export default function SearchBar({ sections, onSelectSection }: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const results = query.trim()
    ? sections.filter((section) =>
        section.title.toLowerCase().includes(query.toLowerCase()) ||
        section.arabicTitle.includes(query)
      )
    : [];

  const handleSelect = (id: string) => {
    onSelectSection(id);
    setQuery("");
    setIsOpen(false);
  };

  return (
    <div className="relative w-48">
      <input
        type="text"
        placeholder="🔍 Rechercher..."
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setIsOpen(true);
        }}
        onFocus={() => setIsOpen(true)}
        className="w-full px-3 py-1.5 rounded-lg bg-emerald-800 text-white placeholder-emerald-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
      />

      {isOpen && query.trim() && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />

          <div className="absolute top-full mt-2 w-64 bg-white dark:bg-slate-800 rounded-lg shadow-xl z-50 max-h-96 overflow-y-auto border border-emerald-200 dark:border-slate-700">
            {results.length > 0 ? (
              results.map((section) => (
                <button
                  key={section.id}
                  onClick={() => handleSelect(section.id)}
                  className="w-full text-left px-4 py-3 border-b border-emerald-100 dark:border-slate-700 hover:bg-emerald-50 dark:hover:bg-slate-700 transition-colors last:border-b-0"
                >
                  <div className="flex items-start gap-2">
                    <span className="text-lg flex-shrink-0">{section.icon}</span>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-sm text-emerald-900 dark:text-emerald-300">
                        {section.title}
                      </p>
                      <p
                        className="font-amiri text-xs text-emerald-700 dark:text-emerald-400 mt-0.5"
                        dir="rtl"
                      >
                        {section.arabicTitle}
                      </p>
                    </div>
                  </div>
                </button>
              ))
            ) : (
              <div className="px-4 py-6 text-center text-stone-500 dark:text-stone-400 text-sm">
                Aucun résultat trouvé
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
