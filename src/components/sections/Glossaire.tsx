import { useMemo, useState } from "react";
import { Card, SectionTitle, AlertBox } from "../ui";
import { glossary, type GlossaryEntry } from "../../data/glossary";

const categoryLabels: Record<NonNullable<GlossaryEntry["category"]>, { label: string; color: string }> = {
  fiqh: { label: "Fiqh", color: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-200" },
  prayer: { label: "Prière", color: "bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-200" },
  reparation: { label: "Réparation", color: "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-200" },
  general: { label: "Général", color: "bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-200" },
};

const normalize = (s: string) =>
  s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");

export default function Glossaire() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<GlossaryEntry["category"] | "all">("all");

  const filtered = useMemo(() => {
    const q = normalize(query.trim());
    return glossary.filter((e) => {
      if (filter !== "all" && e.category !== filter) return false;
      if (!q) return true;
      return (
        normalize(e.term).includes(q) ||
        normalize(e.definition).includes(q) ||
        (e.arabic && e.arabic.includes(query))
      );
    });
  }, [query, filter]);

  const grouped = useMemo(() => {
    const acc: Record<string, GlossaryEntry[]> = {};
    for (const e of filtered) {
      const key = e.category ?? "general";
      (acc[key] ??= []).push(e);
    }
    return acc;
  }, [filtered]);

  return (
    <div className="space-y-6">
      <SectionTitle number="GL" title="Glossaire des termes" arabic="مصطلحات" icon="📚" />

      <Card>
        <p className="text-stone-600 dark:text-slate-300 text-sm mb-4">
          Recherche les termes arabes utilisés dans le guide. Sur n'importe quelle page,
          un mot souligné en pointillés est cliquable pour afficher sa définition au survol
          (desktop) ou au tap (mobile).
        </p>

        <div className="flex flex-col sm:flex-row gap-2">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Rechercher un terme (français ou arabe)…"
            className="flex-1 px-3 py-2 rounded-lg border border-stone-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-stone-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value as GlossaryEntry["category"] | "all")}
            className="px-3 py-2 rounded-lg border border-stone-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-stone-800 dark:text-slate-100"
          >
            <option value="all">Toutes catégories</option>
            <option value="fiqh">Fiqh</option>
            <option value="prayer">Prière</option>
            <option value="reparation">Réparation</option>
            <option value="general">Général</option>
          </select>
        </div>
        <p className="text-xs text-stone-500 dark:text-slate-400 mt-2">
          {filtered.length} terme{filtered.length > 1 ? "s" : ""} trouvé{filtered.length > 1 ? "s" : ""}
        </p>
      </Card>

      {filtered.length === 0 ? (
        <AlertBox type="info" title="Aucun résultat">
          Aucun terme ne correspond à ta recherche. Essaie un autre mot-clé ou réinitialise le filtre.
        </AlertBox>
      ) : (
        Object.entries(grouped).map(([cat, entries]) => {
          const meta = categoryLabels[cat as keyof typeof categoryLabels] ?? categoryLabels.general;
          return (
            <Card key={cat}>
              <h3 className="text-lg font-bold text-emerald-900 dark:text-emerald-300 mb-3 flex items-center gap-2">
                <span className={`text-xs px-2 py-0.5 rounded-full ${meta.color}`}>{meta.label}</span>
                <span className="text-stone-500 dark:text-slate-400 text-sm font-normal">
                  ({entries.length})
                </span>
              </h3>
              <dl className="space-y-3">
                {entries.map((e) => (
                  <div
                    key={e.term}
                    className="border-l-4 border-emerald-500 pl-3 py-1"
                  >
                    <dt className="font-bold text-emerald-800 dark:text-emerald-300 flex items-center flex-wrap gap-2">
                      <span>{e.term}</span>
                      {e.arabic && (
                        <span className="font-amiri text-emerald-600 dark:text-emerald-400" dir="rtl">
                          {e.arabic}
                        </span>
                      )}
                    </dt>
                    <dd className="text-stone-600 dark:text-slate-300 text-sm mt-1 leading-relaxed">
                      {e.definition}
                    </dd>
                  </div>
                ))}
              </dl>
            </Card>
          );
        })
      )}
    </div>
  );
}
