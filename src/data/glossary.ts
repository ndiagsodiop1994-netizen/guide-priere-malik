export interface GlossaryEntry {
  term: string;
  arabic?: string;
  definition: string;
  category?: "fiqh" | "prayer" | "general" | "reparation";
}

export const glossary: GlossaryEntry[] = [
  { term: "fard", arabic: "فرض", definition: "Obligation absolue. Son omission volontaire annule la prière et expose au péché.", category: "fiqh" },
  { term: "wâjib", arabic: "واجب", definition: "Obligatoire — chez les Malikites, souvent synonyme de fard, mais légèrement moins fort dans certains contextes.", category: "fiqh" },
  { term: "sunna", arabic: "سنة", definition: "Pratique du Prophète ﷺ. Son omission n'annule pas l'acte mais réduit sa récompense.", category: "fiqh" },
  { term: "sunna confirmée", arabic: "سنة مؤكدة", definition: "Sunna fortement encouragée que le Prophète ﷺ ne délaissait pas. Son omission peut nécessiter un sujûd as-sahw.", category: "fiqh" },
  { term: "mandûb", arabic: "مندوب", definition: "Recommandé — acte dont l'accomplissement est récompensé sans que son omission soit blâmée.", category: "fiqh" },
  { term: "makrûh", arabic: "مكروه", definition: "Détesté — son évitement est récompensé, son accomplissement n'est pas un péché mais déconseillé.", category: "fiqh" },
  { term: "harâm", arabic: "حرام", definition: "Interdit — son accomplissement est un péché.", category: "fiqh" },
  { term: "halâl", arabic: "حلال", definition: "Permis, licite.", category: "fiqh" },
  { term: "rukn", arabic: "ركن", definition: "Pilier d'un acte d'adoration. Son omission, même involontaire, invalide l'acte.", category: "fiqh" },
  { term: "shart", arabic: "شرط", definition: "Condition préalable. Son absence empêche la validité de l'acte (ex : pureté pour la prière).", category: "fiqh" },
  { term: "niyyah", arabic: "نية", definition: "Intention. Pilier de toute adoration : doit précéder ou accompagner le takbir d'ihram.", category: "prayer" },

  { term: "qabli", arabic: "قبلي", definition: "« Avant » — désigne le sujûd as-sahw effectué AVANT le salam, pour réparer une omission.", category: "reparation" },
  { term: "ba'di", arabic: "بعدي", definition: "« Après » — désigne le sujûd as-sahw effectué APRÈS le salam, pour réparer un ajout.", category: "reparation" },
  { term: "sahw", arabic: "سهو", definition: "Inattention, oubli involontaire dans la prière.", category: "reparation" },
  { term: "sujûd as-sahw", arabic: "سجود السهو", definition: "Prosternation d'inattention : deux prosternations qui réparent un oubli ou un ajout involontaire.", category: "reparation" },
  { term: "tadâruk", arabic: "التدارك", definition: "Rattrapage immédiat de l'acte oublié, avant qu'il ne soit trop tard.", category: "reparation" },
  { term: "waswas", arabic: "وسواس", definition: "Doutes obsessionnels et compulsifs. La règle malikite est de les ignorer.", category: "reparation" },
  { term: "ghâlib az-zann", arabic: "غالب الظن", definition: "Impression dominante — conviction quasi certaine. Les Malikites permettent de la suivre en cas de doute.", category: "reparation" },

  { term: "rak'a", arabic: "ركعة", definition: "Unité de la prière comprenant une station debout, un ruku', deux prosternations et l'assise.", category: "prayer" },
  { term: "ruku'", arabic: "ركوع", definition: "Inclinaison : pilier de la prière où l'on se penche en avant, dos et tête alignés.", category: "prayer" },
  { term: "sujûd", arabic: "سجود", definition: "Prosternation : pilier où le front, le nez, les paumes, les genoux et les orteils touchent le sol.", category: "prayer" },
  { term: "tashahud", arabic: "تشهد", definition: "Témoignage récité en position assise contenant l'attestation de foi.", category: "prayer" },
  { term: "salam", arabic: "سلام", definition: "Salutation finale qui clôt la prière (« As-salâmu 'alaykum »).", category: "prayer" },
  { term: "qibla", arabic: "قبلة", definition: "Direction de la Ka'ba à La Mecque, vers laquelle la prière doit être orientée.", category: "prayer" },
  { term: "qunût", arabic: "قنوت", definition: "Invocation récitée à Subh avant le ruku' selon les Malikites — sunna confirmée.", category: "prayer" },
  { term: "fâtiha", arabic: "الفاتحة", definition: "Première sourate du Coran : pilier récité à chaque rak'a.", category: "prayer" },
  { term: "jehr", arabic: "جهر", definition: "Récitation à voix haute (Subh, Maghrib et 'Ishâ' en partie).", category: "prayer" },
  { term: "sirr", arabic: "سر", definition: "Récitation à voix basse (Dhuhr, 'Asr et la 3ème/4ème rak'a).", category: "prayer" },
  { term: "imâm", arabic: "إمام", definition: "Celui qui dirige la prière en commun. Les fidèles suivent ses mouvements.", category: "prayer" },
  { term: "ma'mûm", arabic: "مأموم", definition: "Le suiveur dans la prière en groupe.", category: "prayer" },
  { term: "masbûq", arabic: "مسبوق", definition: "Retardataire qui rejoint la prière après son commencement.", category: "prayer" },
  { term: "wudû'", arabic: "وضوء", definition: "Petites ablutions rituelles préalables à la prière.", category: "prayer" },
  { term: "ghusl", arabic: "غسل", definition: "Grandes ablutions : lavage rituel complet du corps.", category: "prayer" },
  { term: "tayammum", arabic: "تيمم", definition: "Ablutions sèches au moyen de terre pure, en l'absence d'eau.", category: "prayer" },
  { term: "'awra", arabic: "عورة", definition: "Parties du corps à couvrir durant la prière.", category: "prayer" },

  { term: "madhhab", arabic: "مذهب", definition: "École juridique. Les quatre grandes écoles sunnites : malikite, hanafite, shafi'ite, hanbalite.", category: "general" },
  { term: "fiqh", arabic: "فقه", definition: "Jurisprudence islamique : compréhension détaillée des règles religieuses.", category: "general" },
  { term: "ijmâ'", arabic: "إجماع", definition: "Consensus des savants — troisième source du droit musulman.", category: "general" },
  { term: "qiyâs", arabic: "قياس", definition: "Analogie juridique : étendre une règle d'un cas attesté à un cas similaire.", category: "general" },
  { term: "maslaha", arabic: "مصلحة", definition: "Intérêt général. Source spécifique du madhhab malikite (al-maslaha al-mursala).", category: "general" },
  { term: "'urf", arabic: "عرف", definition: "Coutume locale, retenue comme source quand elle ne contredit pas la sharî'a.", category: "general" },
  { term: "muwatta'", arabic: "الموطأ", definition: "Œuvre fondatrice de l'Imam Mâlik : premier recueil systématique de hadith et de fiqh.", category: "general" },
  { term: "mudawwana", arabic: "المدونة", definition: "Recueil monumental compilé par Sahnûn, base du madhhab malikite.", category: "general" },
];

const normalize = (s: string) =>
  s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/['ʿʾ`]/g, "")
    .trim();

const glossaryMap = new Map<string, GlossaryEntry>();
for (const entry of glossary) {
  glossaryMap.set(normalize(entry.term), entry);
}

export function findGlossaryEntry(word: string): GlossaryEntry | undefined {
  return glossaryMap.get(normalize(word));
}
