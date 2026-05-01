export interface Section {
  id: string;
  title: string;
  arabicTitle: string;
  icon: string;
  subsections?: { id: string; title: string }[];
}

export const tableOfContents: Section[] = [
  {
    id: "glossaire",
    title: "Glossaire des termes",
    arabicTitle: "مصطلحات",
    icon: "📚",
    subsections: [
      { id: "gl-search", title: "Recherche" },
      { id: "gl-fiqh", title: "Fiqh" },
      { id: "gl-prayer", title: "Prière" },
      { id: "gl-reparation", title: "Réparation" },
      { id: "gl-general", title: "Général" },
    ],
  },
  {
    id: "ecole-malikite",
    title: "L'École Malikite — Histoire",
    arabicTitle: "المذهب المالكي - التاريخ",
    icon: "🕋",
    subsections: [
      { id: "em1", title: "Présentation" },
      { id: "em2", title: "L'Imam Mâlik ibn Anas" },
      { id: "em3", title: "Histoire et expansion" },
      { id: "em4", title: "Sources juridiques" },
      { id: "em5", title: "Œuvres fondatrices" },
      { id: "em6", title: "Spécificités du madhhab" },
    ],
  },
  {
    id: "partie1",
    title: "Fondements et Importance de la Prière",
    arabicTitle: "أسس الصلاة وأهميتها",
    icon: "🕌",
    subsections: [
      { id: "p1s1", title: "Définition de As-Salat" },
      { id: "p1s2", title: "Statut juridique" },
      { id: "p1s3", title: "Conditions d'obligation" },
      { id: "p1s4", title: "Statut de celui qui abandonne" },
      { id: "p1s5", title: "Mérites et vertus" },
      { id: "p1s6", title: "Sagesse de la prescription" },
      { id: "p1s7", title: "Al-Isra' wal Mi'raj" },
    ],
  },
  {
    id: "partie2",
    title: "Les Conditions Préalables",
    arabicTitle: "شروط الصلاة",
    icon: "✅",
    subsections: [
      { id: "p2s1", title: "L'entrée du temps" },
      { id: "p2s2", title: "La pureté rituelle (Wudu)" },
      { id: "p2s3", title: "Le Ghusl" },
      { id: "p2s4", title: "Le Tayammum" },
      { id: "p2s5", title: "Pureté du corps et du lieu" },
      { id: "p2s6", title: "Couvrir la 'Awra" },
      { id: "p2s7", title: "La Qibla" },
      { id: "p2s8", title: "L'intention (Niyyah)" },
    ],
  },
  {
    id: "partie3",
    title: "L'Adhan et l'Iqama",
    arabicTitle: "الأذان والإقامة",
    icon: "📢",
    subsections: [
      { id: "p3s1", title: "Statut et définition" },
      { id: "p3s2", title: "Texte de l'Adhan" },
      { id: "p3s3", title: "Texte de l'Iqama" },
      { id: "p3s4", title: "Réponses à l'Adhan" },
      { id: "p3s5", title: "Tableau comparatif" },
    ],
  },
  {
    id: "partie4",
    title: "Les Piliers de la Prière",
    arabicTitle: "أركان الصلاة",
    icon: "🏛️",
    subsections: [
      { id: "p4s1", title: "Les 14 fara'id détaillés" },
      { id: "p4s2", title: "Conséquences des omissions" },
    ],
  },
  {
    id: "partie5",
    title: "Les Sunnas de la Prière",
    arabicTitle: "سنن الصلاة",
    icon: "⭐",
    subsections: [
      { id: "p5s1", title: "Sunnas internes" },
      { id: "p5s2", title: "Sujud al-Qabli" },
    ],
  },
  {
    id: "partie6",
    title: "Les Actes Recommandés",
    arabicTitle: "مستحبات الصلاة",
    icon: "💚",
    subsections: [
      { id: "p6s1", title: "Liste des mandoubat" },
    ],
  },
  {
    id: "partie7",
    title: "Description Complète Pas à Pas",
    arabicTitle: "صفة الصلاة تفصيلاً",
    icon: "📋",
    subsections: [
      { id: "p7s1", title: "Les étapes de la prière" },
      { id: "p7s2", title: "Les 5 prières en détail" },
      { id: "p7s3", title: "Spécificités de la femme" },
    ],
  },
  {
    id: "partie8",
    title: "Le Qunût",
    arabicTitle: "القنوت",
    icon: "🤲",
    subsections: [
      { id: "p8s1", title: "Qunût de Subh" },
      { id: "p8s2", title: "Texte et règles" },
    ],
  },
  {
    id: "partie9",
    title: "Les Annulatifs de la Prière",
    arabicTitle: "مبطلات الصلاة",
    icon: "❌",
    subsections: [
      { id: "p9s1", title: "Liste exhaustive" },
      { id: "p9s2", title: "Les makruhât" },
    ],
  },
  {
    id: "partie10",
    title: "Prosternation de Réparation",
    arabicTitle: "سجود السهو",
    icon: "🔄",
    subsections: [
      { id: "p10s1", title: "Causes et types" },
      { id: "p10s2", title: "Cas pratiques" },
      { id: "p10s3", title: "Tableau récapitulatif" },
    ],
  },
  {
    id: "partie11",
    title: "La Prière en Congrégation",
    arabicTitle: "صلاة الجماعة",
    icon: "👥",
    subsections: [
      { id: "p11s1", title: "Statut et mérites" },
      { id: "p11s2", title: "L'imam et les rangs" },
      { id: "p11s3", title: "Le retardataire (Masbuq)" },
      { id: "p11s4", title: "La prière du vendredi" },
    ],
  },
  {
    id: "partie12",
    title: "La Prière du Voyageur",
    arabicTitle: "صلاة المسافر",
    icon: "✈️",
    subsections: [
      { id: "p12s1", title: "Le Qasr et le Jam'" },
    ],
  },
  {
    id: "partie13",
    title: "La Prière du Malade",
    arabicTitle: "صلاة المريض",
    icon: "🏥",
    subsections: [
      { id: "p13s1", title: "Positions et adaptations" },
    ],
  },
  {
    id: "partie14",
    title: "Les Prières Surérogatoires",
    arabicTitle: "النوافل",
    icon: "🌙",
    subsections: [
      { id: "p14s1", title: "Les Rawatib" },
      { id: "p14s2", title: "Witr, Duha, Qiyam" },
      { id: "p14s3", title: "Prières spéciales" },
    ],
  },
  {
    id: "partie15",
    title: "La Prière Mortuaire",
    arabicTitle: "صلاة الجنازة",
    icon: "🕊️",
    subsections: [
      { id: "p15s1", title: "Description et règles" },
    ],
  },
  {
    id: "partie16",
    title: "Rattrapage des Prières Manquées",
    arabicTitle: "قضاء الفوائت",
    icon: "⏰",
    subsections: [
      { id: "p16s1", title: "Règles du qadha" },
    ],
  },
  {
    id: "partie17",
    title: "Adhkar et Du'as après la Prière",
    arabicTitle: "أذكار ما بعد الصلاة",
    icon: "📿",
    subsections: [
      { id: "p17s1", title: "Formules et textes complets" },
    ],
  },
  {
    id: "partie18",
    title: "Spécificités de l'École Malikite",
    arabicTitle: "خصائص المذهب المالكي",
    icon: "💡",
    subsections: [
      { id: "p18s1", title: "Tableau comparatif 4 écoles" },
      { id: "p18s2", title: "Positions uniques" },
    ],
  },
  {
    id: "partie19",
    title: "Erreurs Courantes à Éviter",
    arabicTitle: "الأخطاء الشائعة",
    icon: "⚠️",
    subsections: [
      { id: "p19s1", title: "20 erreurs fréquentes" },
    ],
  },
  {
    id: "partie20",
    title: "Cas Pratiques et FAQ",
    arabicTitle: "مسائل عملية وأسئلة",
    icon: "❓",
    subsections: [
      { id: "p20s1", title: "30 questions-réponses" },
    ],
  },
  {
    id: "reparation-priere",
    title: "Réparation de la Prière",
    arabicTitle: "إصلاح الصلاة",
    icon: "🔧",
    subsections: [
      { id: "rp-intro", title: "Introduction" },
      { id: "rp-principes", title: "Principes de base" },
      { id: "rp-sujud", title: "Sujûd as-sahw" },
      { id: "rp-oublis", title: "Les oublis" },
      { id: "rp-ajouts", title: "Les ajouts" },
      { id: "rp-doutes", title: "Les doutes" },
      { id: "rp-cas-pratiques", title: "12 cas pratiques" },
      { id: "rp-tableau", title: "Tableau synthétique" },
      { id: "rp-faq", title: "FAQ" },
    ],
  },
];
