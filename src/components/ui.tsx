import React, { useEffect, useRef, useState } from "react";
import { findGlossaryEntry, type GlossaryEntry } from "../data/glossary";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className = "" }: CardProps) {
  return (
    <div className={`bg-white dark:bg-slate-800 dark:border-slate-700 rounded-xl shadow-sm border border-stone-200 p-4 sm:p-6 ${className}`}>
      {children}
    </div>
  );
}

interface ArabicTextProps {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
}

export function ArabicText({ children, className = "", size = "lg" }: ArabicTextProps) {
  const sizeClasses = {
    sm: "text-base",
    md: "text-lg",
    lg: "text-xl",
    xl: "text-2xl",
    "2xl": "text-3xl",
  };
  return (
    <p className={`font-amiri text-right leading-loose ${sizeClasses[size]} ${className}`} dir="rtl">
      {children}
    </p>
  );
}

interface SectionTitleProps {
  number: string;
  title: string;
  arabic?: string;
  icon?: string;
}

export function SectionTitle({ number, title, arabic, icon }: SectionTitleProps) {
  return (
    <div className="mb-6 mt-8">
      <div className="flex items-start gap-3">
        <span className="flex-shrink-0 w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
          {number}
        </span>
        <div className="flex-1">
          <h2 className="text-xl font-bold text-emerald-900 flex items-center gap-2">
            {icon && <span>{icon}</span>}
            {title}
          </h2>
          {arabic && (
            <p className="font-amiri text-emerald-700 text-lg mt-1" dir="rtl">
              {arabic}
            </p>
          )}
        </div>
      </div>
      <div className="h-0.5 bg-gradient-to-r from-emerald-500 to-transparent mt-3 ml-13" />
    </div>
  );
}

interface SubSectionTitleProps {
  title: string;
  arabic?: string;
  icon?: string;
}

export function SubSectionTitle({ title, arabic, icon }: SubSectionTitleProps) {
  return (
    <div className="mb-4 mt-6">
      <h3 className="text-lg font-bold text-emerald-800 flex items-center gap-2 border-l-4 border-emerald-500 pl-3">
        {icon && <span>{icon}</span>}
        {title}
        {arabic && (
          <span className="font-amiri text-emerald-600 text-base ml-2" dir="rtl">
            ({arabic})
          </span>
        )}
      </h3>
    </div>
  );
}

interface AlertBoxProps {
  type: "warning" | "info" | "success" | "special" | "dalil";
  title?: string;
  children: React.ReactNode;
}

export function AlertBox({ type, title, children }: AlertBoxProps) {
  const styles = {
    warning: {
      box: "bg-amber-50 border-amber-400 border-l-4",
      title: "text-amber-800",
      icon: "⚠️",
    },
    info: {
      box: "bg-blue-50 border-blue-400 border-l-4",
      title: "text-blue-800",
      icon: "ℹ️",
    },
    success: {
      box: "bg-emerald-50 border-emerald-400 border-l-4",
      title: "text-emerald-800",
      icon: "✅",
    },
    special: {
      box: "bg-purple-50 border-purple-400 border-l-4",
      title: "text-purple-800",
      icon: "💡",
    },
    dalil: {
      box: "bg-teal-50 border-teal-400 border-l-4",
      title: "text-teal-800",
      icon: "📖",
    },
  };

  const s = styles[type];

  return (
    <div className={`${s.box} rounded-r-lg p-4 my-4`}>
      {title && (
        <p className={`font-bold ${s.title} mb-2 flex items-center gap-2`}>
          <span>{s.icon}</span>
          {title}
        </p>
      )}
      <div className="text-stone-700 text-sm leading-relaxed">{children}</div>
    </div>
  );
}

interface TableProps {
  headers: string[];
  rows: (string | React.ReactNode)[][];
  className?: string;
}

export function Table({ headers, rows, className = "" }: TableProps) {
  return (
    <div className={`-mx-4 sm:mx-0 overflow-x-auto my-4 ${className}`}>
      <table className="w-full text-xs sm:text-sm border-collapse min-w-[480px]">
        <thead>
          <tr className="bg-emerald-700 text-white">
            {headers.map((h, i) => (
              <th key={i} className="border border-emerald-600 px-2 sm:px-3 py-2 text-left font-semibold whitespace-nowrap">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? "bg-white dark:bg-slate-800" : "bg-emerald-50 dark:bg-slate-700/40"}>
              {row.map((cell, j) => (
                <td key={j} className="border border-stone-200 dark:border-slate-700 px-2 sm:px-3 py-2 align-top text-stone-700 dark:text-slate-200">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

interface DalilBoxProps {
  type: "quran" | "hadith";
  reference: string;
  arabic: string;
  translation: string;
  source?: string;
}

export function DalilBox({ type, reference, arabic, translation, source }: DalilBoxProps) {
  return (
    <div className="bg-teal-50 border border-teal-200 rounded-xl p-4 my-4">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-lg">{type === "quran" ? "📖" : "📜"}</span>
        <span className="font-bold text-teal-800 text-sm">
          {type === "quran" ? `Coran — ${reference}` : `Hadith — ${reference}`}
        </span>
      </div>
      <ArabicText size="md" className="text-teal-900 mb-2">
        {arabic}
      </ArabicText>
      <p className="text-stone-600 text-sm italic mt-2">« {translation} »</p>
      {source && <p className="text-teal-700 text-xs mt-2 font-medium">Source : {source}</p>}
    </div>
  );
}

interface BadgeProps {
  children: React.ReactNode;
  color?: "green" | "red" | "amber" | "blue" | "purple" | "teal";
}

export function Badge({ children, color = "green" }: BadgeProps) {
  const colors = {
    green: "bg-emerald-100 text-emerald-800",
    red: "bg-red-100 text-red-800",
    amber: "bg-amber-100 text-amber-800",
    blue: "bg-blue-100 text-blue-800",
    purple: "bg-purple-100 text-purple-800",
    teal: "bg-teal-100 text-teal-800",
  };
  return (
    <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-semibold ${colors[color]}`}>
      {children}
    </span>
  );
}

interface StepBoxProps {
  number: number;
  title: string;
  arabic?: string;
  children: React.ReactNode;
}

export function StepBox({ number, title, arabic, children }: StepBoxProps) {
  return (
    <div className="flex gap-4 mb-6">
      <div className="flex-shrink-0">
        <div className="w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md">
          {number}
        </div>
        <div className="w-0.5 bg-emerald-200 mx-auto mt-2 h-full min-h-4" />
      </div>
      <div className="flex-1 bg-white rounded-xl border border-stone-200 p-4 shadow-sm mb-2">
        <h4 className="font-bold text-emerald-900 mb-1">
          {title}
          {arabic && (
            <span className="font-amiri text-emerald-600 text-base ml-2" dir="rtl">
              — {arabic}
            </span>
          )}
        </h4>
        <div className="text-stone-600 text-sm leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

export type CasPratiqueBadgeColor = "amber" | "blue" | "red" | "purple" | "emerald" | "stone";

const casBadgeColors: Record<CasPratiqueBadgeColor, string> = {
  amber: "bg-amber-500",
  blue: "bg-blue-500",
  red: "bg-red-500",
  purple: "bg-purple-500",
  emerald: "bg-emerald-500",
  stone: "bg-stone-500",
};

export interface CasPratiqueItem {
  title: string;
  scenario: React.ReactNode;
  regle: React.ReactNode;
  badge?: { label: string; color: CasPratiqueBadgeColor };
}

interface CasPratiqueProps extends CasPratiqueItem {
  number?: number;
}

export function CasPratique({ number, title, scenario, regle, badge }: CasPratiqueProps) {
  const headerLabel = number != null ? `${number}. ${title}` : title;
  return (
    <div className="border border-stone-200 dark:border-slate-700 rounded-xl overflow-hidden">
      <div className="bg-emerald-700 text-white px-4 py-2 text-sm font-bold flex justify-between items-center gap-3">
        <span>{headerLabel}</span>
        {badge && (
          <span className={`text-xs px-2 py-1 rounded-full whitespace-nowrap ${casBadgeColors[badge.color]}`}>
            {badge.label}
          </span>
        )}
      </div>
      <div className="p-4 bg-white dark:bg-slate-800">
        <p className="text-stone-600 dark:text-slate-300 text-sm mb-2">
          <strong>Scénario :</strong> {scenario}
        </p>
        <p className="text-emerald-800 dark:text-emerald-300 text-sm">
          <strong>Règle :</strong> {regle}
        </p>
      </div>
    </div>
  );
}

interface CasPratiqueListProps {
  items: CasPratiqueItem[];
  startAt?: number;
}

export function CasPratiqueList({ items, startAt = 1 }: CasPratiqueListProps) {
  return (
    <div className="space-y-4">
      {items.map((cas, i) => (
        <CasPratique key={i} number={startAt + i} {...cas} />
      ))}
    </div>
  );
}

interface TermProps {
  /** Clé du glossaire à rechercher. Si absent, utilise le contenu textuel. */
  k?: string;
  children: React.ReactNode;
  /** Force une définition explicite si le terme n'est pas (encore) dans le glossaire. */
  entry?: GlossaryEntry;
}

export function Term({ k, children, entry: forcedEntry }: TermProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  const lookup = k ?? (typeof children === "string" ? children : "");
  const entry = forcedEntry ?? findGlossaryEntry(lookup);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  if (!entry) return <>{children}</>;

  return (
    <span ref={ref} className="relative inline-block">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        className="text-emerald-700 dark:text-emerald-300 underline decoration-dotted decoration-emerald-400 underline-offset-2 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 rounded px-0.5 cursor-help"
        aria-expanded={open}
      >
        {children}
      </button>
      {open && (
        <span
          role="tooltip"
          className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 z-50 w-64 sm:w-72 max-w-[80vw] bg-emerald-900 dark:bg-slate-900 text-white text-sm rounded-lg shadow-xl p-3 pointer-events-none"
          onMouseEnter={(e) => e.stopPropagation()}
        >
          <span className="block font-bold text-emerald-200">
            {entry.term}
            {entry.arabic && (
              <span className="font-amiri text-emerald-300 ml-2" dir="rtl">{entry.arabic}</span>
            )}
          </span>
          <span className="block text-emerald-50 mt-1 leading-snug">{entry.definition}</span>
          <span className="absolute left-1/2 -translate-x-1/2 top-full -mt-1 border-4 border-transparent border-t-emerald-900 dark:border-t-slate-900" />
        </span>
      )}
    </span>
  );
}

