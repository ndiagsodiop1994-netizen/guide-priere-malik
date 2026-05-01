import { Section } from "../data/tableOfContents";

interface HomePageProps {
  sections: Section[];
  onSelectSection: (id: string) => void;
}

export default function HomePage({ sections, onSelectSection }: HomePageProps) {
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <div className="bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900 text-white py-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-300 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-300 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative">
          <div className="text-6xl mb-4">🕌</div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            Guide Complet de la Prière
          </h1>
          <p className="text-emerald-300 font-amiri text-2xl md:text-3xl mb-2" dir="rtl">
            الصلاة في المذهب المالكي
          </p>
          <p className="text-emerald-200 text-lg mb-6">
            École Malikite — Fondée par l'Imam Malik ibn Anas (رحمه الله)
          </p>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 max-w-2xl mx-auto">
            <p className="font-amiri text-xl md:text-2xl text-emerald-100 leading-loose" dir="rtl">
              ﴿ وَأَقِيمُوا الصَّلَاةَ وَآتُوا الزَّكَاةَ وَارْكَعُوا مَعَ الرَّاكِعِينَ ﴾
            </p>
            <p className="text-emerald-300 text-sm mt-2 italic">
              « Accomplissez la prière, acquittez la zakat et inclinez-vous avec ceux qui s'inclinent. »
            </p>
            <p className="text-emerald-400 text-xs mt-1">Al-Baqara (2:43)</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="bg-emerald-700/50 rounded-lg px-4 py-2">
              <span className="font-bold">20</span> Parties
            </div>
            <div className="bg-emerald-700/50 rounded-lg px-4 py-2">
              <span className="font-bold">100+</span> Sous-sections
            </div>
            <div className="bg-emerald-700/50 rounded-lg px-4 py-2">
              <span className="font-bold">∞</span> Dalils & Preuves
            </div>
            <div className="bg-emerald-700/50 rounded-lg px-4 py-2">
              Guide <span className="font-bold">Pratique</span>
            </div>
          </div>
        </div>
      </div>

      {/* Intro text */}
      <div className="max-w-4xl mx-auto px-6 py-10">
        <div className="bg-white rounded-2xl shadow-sm border border-stone-200 p-6 mb-8">
          <h2 className="text-xl font-bold text-emerald-900 mb-3 flex items-center gap-2">
            <span>📚</span> À propos de ce guide
          </h2>
          <p className="text-stone-600 leading-relaxed mb-4">
            Ce guide exhaustif présente la prière islamique (<strong>الصلاة — As-Salat</strong>) selon les règles
            précises de l'<strong>école Malikite (المذهب المالكي)</strong>, fondée par l'Imam{" "}
            <strong>Malik ibn Anas</strong> (رحمه الله) de Médine (93-179 H).
          </p>
          <p className="text-stone-600 leading-relaxed mb-4">
            Il est basé sur les ouvrages de référence malikites : <em>Al-Muwatta'</em>,{" "}
            <em>Al-Mudawwana al-Kubra</em>, <em>Ar-Risala</em> d'Ibn Abi Zayd al-Qayrawani,{" "}
            <em>Mukhtasar Khalil</em>, <em>Ash-Sharh al-Kabir</em> d'Ad-Dardir,{" "}
            <em>Hashiyat ad-Dassuqi</em>, <em>Mawahib al-Jalil</em> d'Al-Hattab, et d'autres.
          </p>
          <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-lg p-4">
            <p className="text-amber-800 text-sm font-medium flex items-center gap-2">
              <span>⚠️</span>
              En cas de doute sur une question de fiqh spécifique, consultez un érudit qualifié.
            </p>
          </div>
        </div>

        {/* Grid of sections */}
        <h2 className="text-2xl font-bold text-emerald-900 mb-6 flex items-center gap-2">
          <span>📋</span> Table des matières
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {sections.map((section, index) => (
            <button
              key={section.id}
              onClick={() => onSelectSection(section.id)}
              className="bg-white rounded-xl border border-stone-200 p-4 text-left hover:border-emerald-400 hover:shadow-md transition-all duration-200 group"
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl flex-shrink-0">{section.icon}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="bg-emerald-100 text-emerald-700 text-xs font-bold px-2 py-0.5 rounded-full">
                      Partie {index + 1}
                    </span>
                  </div>
                  <p className="font-bold text-stone-800 group-hover:text-emerald-700 transition-colors text-sm leading-tight">
                    {section.title}
                  </p>
                  <p className="font-amiri text-emerald-600 text-sm mt-1" dir="rtl">
                    {section.arabicTitle}
                  </p>
                  {section.subsections && (
                    <p className="text-stone-400 text-xs mt-1">
                      {section.subsections.length} sous-section{section.subsections.length > 1 ? "s" : ""}
                    </p>
                  )}
                </div>
                <svg
                  className="w-4 h-4 text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="bg-emerald-950 text-emerald-400 text-center py-6 mt-8">
        <p className="font-amiri text-lg" dir="rtl">اللَّهُمَّ أَعِنَّا عَلَى ذِكْرِكَ وَشُكْرِكَ وَحُسْنِ عِبَادَتِكَ</p>
        <p className="text-xs mt-2 text-emerald-600">
          Guide de la Prière selon l'École Malikite — المذهب المالكي
        </p>
      </div>
    </div>
  );
}
