import { Section } from "../data/tableOfContents";

interface NavigationButtonsProps {
  sections: Section[];
  currentSectionId: string | null;
  onNavigate: (id: string) => void;
}

export default function NavigationButtons({
  sections,
  currentSectionId,
  onNavigate,
}: NavigationButtonsProps) {
  if (!currentSectionId) return null;

  const currentIndex = sections.findIndex((s) => s.id === currentSectionId);
  const previousSection = currentIndex > 0 ? sections[currentIndex - 1] : null;
  const nextSection = currentIndex < sections.length - 1 ? sections[currentIndex + 1] : null;

  return (
    <div className="flex items-center justify-between gap-4 mt-12 pt-8 border-t border-emerald-200 dark:border-slate-700">
      {previousSection ? (
        <button
          onClick={() => onNavigate(previousSection.id)}
          className="flex items-center gap-3 px-4 py-3 rounded-lg bg-emerald-50 dark:bg-slate-800 hover:bg-emerald-100 dark:hover:bg-slate-700 transition-colors text-emerald-900 dark:text-emerald-300 group"
        >
          <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <div className="text-left">
            <p className="text-xs text-emerald-700 dark:text-emerald-400">Précédent</p>
            <p className="font-semibold text-sm">{previousSection.title}</p>
          </div>
        </button>
      ) : (
        <div />
      )}

      {nextSection ? (
        <button
          onClick={() => onNavigate(nextSection.id)}
          className="flex items-center gap-3 px-4 py-3 rounded-lg bg-emerald-50 dark:bg-slate-800 hover:bg-emerald-100 dark:hover:bg-slate-700 transition-colors text-emerald-900 dark:text-emerald-300 group ml-auto"
        >
          <div className="text-right">
            <p className="text-xs text-emerald-700 dark:text-emerald-400">Suivant</p>
            <p className="font-semibold text-sm">{nextSection.title}</p>
          </div>
          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      ) : (
        <div />
      )}
    </div>
  );
}
