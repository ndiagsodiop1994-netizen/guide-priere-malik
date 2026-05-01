import { Card, SectionTitle, AlertBox, ArabicText } from "../ui";

interface DhikrCardProps {
  title: string;
  arabic: string;
  transliteration: string;
  translation: string;
  times?: string;
  source?: string;
}

function DhikrCard({ title, arabic, transliteration, translation, times, source }: DhikrCardProps) {
  return (
    <div className="bg-white border border-emerald-200 rounded-xl p-4 shadow-sm">
      <div className="flex justify-between items-start mb-2">
        <p className="font-bold text-emerald-900 text-sm">{title}</p>
        {times && <span className="bg-emerald-100 text-emerald-700 text-xs font-bold px-2 py-0.5 rounded-full">{times}</span>}
      </div>
      <ArabicText size="md" className="text-emerald-900 mb-2">{arabic}</ArabicText>
      <p className="text-teal-700 text-xs font-medium mb-1">{transliteration}</p>
      <p className="text-stone-500 text-xs italic">{translation}</p>
      {source && <p className="text-emerald-600 text-xs mt-2 font-medium">📜 {source}</p>}
    </div>
  );
}

export default function Partie17() {
  return (
    <div className="space-y-6">
      <SectionTitle number="17.1" title="Adhkar et Du'as après la Prière" arabic="أذكار ما بعد الصلاة" icon="📿" />

      <Card>
        <AlertBox type="dalil" title="Importance des Adhkar post-prière">
          Le Prophète ﷺ a dit : « Quiconque glorifie Allah (Subhanallah) 33 fois, Le loue (Alhamdulillah) 33 fois, Le proclame Grand (Allahu Akbar) 33 fois après chaque prière — soit 99 au total — et complète le centenaire avec 'Lā ilāha illallāh wahdahu lā sharīka lah...', ses péchés lui seront pardonnés même s'ils sont aussi abondants que l'écume de la mer. » (Muslim 597)
        </AlertBox>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <DhikrCard
          title="Istighfar (l'Imploration de pardon)"
          arabic="أَسْتَغْفِرُ اللَّهَ"
          transliteration="Astaghfirullāh"
          translation="Je demande pardon à Allah"
          times="3×"
          source="Muslim (591)"
        />

        <DhikrCard
          title="Du'a de fin de prière"
          arabic="اللَّهُمَّ أَنْتَ السَّلَامُ وَمِنْكَ السَّلَامُ، تَبَارَكْتَ يَا ذَا الْجَلَالِ وَالْإِكْرَامِ"
          transliteration="Allāhumma antas-salāmu wa minkas-salāmu, tabārakta yā dhal-jalāli wal-ikrām"
          translation="Ô Allah, Tu es la Paix et de Toi vient la paix. Tu es béni, Ô Toi Possesseur de Majesté et de Générosité."
          times="1×"
          source="Muslim (592)"
        />

        <DhikrCard
          title="Tasbih (Glorification)"
          arabic="سُبْحَانَ اللَّهِ"
          transliteration="Subhānallāh"
          translation="Gloire à Allah"
          times="33×"
          source="Muslim (597)"
        />

        <DhikrCard
          title="Tahmid (Louange)"
          arabic="الْحَمْدُ لِلَّهِ"
          transliteration="Alhamdulillāh"
          translation="Louange à Allah"
          times="33×"
          source="Muslim (597)"
        />

        <DhikrCard
          title="Takbir (Proclamation de Grandeur)"
          arabic="اللَّهُ أَكْبَرُ"
          transliteration="Allāhu Akbar"
          translation="Allah est le Plus Grand"
          times="33×"
          source="Muslim (597)"
        />

        <DhikrCard
          title="La Shahada complète"
          arabic="لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ"
          transliteration="Lā ilāha illallāhu wahdahu lā sharīka lah, lahul-mulku wa lahul-hamd, wa huwa 'alā kulli shay'in qadīr"
          translation="Il n'y a de divinité qu'Allah seul, sans associé. À Lui appartient la royauté, à Lui la louange. Il est Puissant sur toute chose."
          times="1× (pour compléter les 100)"
          source="Muslim (597)"
        />
      </div>

      <Card>
        <h3 className="font-bold text-emerald-900 text-lg mb-4 flex items-center gap-2">
          <span>📖</span> Ayat al-Kursi (آية الكرسي)
        </h3>
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5">
          <ArabicText size="md" className="text-emerald-900 mb-4">
            اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ
          </ArabicText>
          <p className="text-stone-600 text-sm italic leading-relaxed">
            « Allah ! Point de divinité à part Lui, le Vivant, Celui qui subsiste par Lui-même. Ni somnolence ni sommeil ne Le saisissent. À Lui appartient tout ce qui est dans les cieux et sur la terre. Qui peut intercéder auprès de Lui sans Sa permission ? Il sait ce qui est devant eux et ce qui est derrière eux. Et ils n'embrassent de Sa science que ce qu'Il veut. Son Trône déborde les cieux et la terre, dont la garde ne Lui coûte aucune peine. Et Il est le Très Haut, le Très Grand. » (Al-Baqara 2:255)
          </p>
          <p className="text-teal-700 text-xs mt-3 font-medium">
            📜 Le Prophète ﷺ a dit : « Quiconque récite l'Ayat al-Kursi après chaque prière obligatoire, rien ne le séparera du Paradis que la mort. » (Nasa'i — rapporté par Abu Oumama)
          </p>
        </div>
      </Card>

      <Card>
        <h3 className="font-bold text-emerald-900 text-lg mb-4 flex items-center gap-2">
          <span>🛡️</span> Al-Mu'awwidhat (المعوذات) — Les sourates protectrices
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              name: "Al-Ikhlas (112)",
              arabic: "قُلْ هُوَ اللَّهُ أَحَدٌ، اللَّهُ الصَّمَدُ، لَمْ يَلِدْ وَلَمْ يُولَدْ، وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ",
              times: "3×",
            },
            {
              name: "Al-Falaq (113)",
              arabic: "قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ مِن شَرِّ مَا خَلَقَ...",
              times: "3×",
            },
            {
              name: "An-Nas (114)",
              arabic: "قُلْ أَعُوذُ بِرَبِّ النَّاسِ مَلِكِ النَّاسِ...",
              times: "3×",
            },
          ].map((s, i) => (
            <div key={i} className="bg-purple-50 border border-purple-200 rounded-lg p-3">
              <div className="flex justify-between items-center mb-2">
                <p className="font-bold text-purple-900 text-sm">{s.name}</p>
                <span className="bg-purple-200 text-purple-800 text-xs font-bold px-2 py-0.5 rounded-full">{s.times}</span>
              </div>
              <ArabicText size="sm" className="text-purple-800">{s.arabic}</ArabicText>
            </div>
          ))}
        </div>
        <AlertBox type="dalil">
          Le Prophète ﷺ a dit : « Réciter Al-Ikhlas, Al-Falaq et An-Nas après chaque prière obligatoire. » (Abu Dawud — authentifié par Al-Albani)
        </AlertBox>
      </Card>

      <Card>
        <h3 className="font-bold text-emerald-900 text-lg mb-4">Du'a recommandé après la prière</h3>
        <div className="bg-teal-50 rounded-xl p-5">
          <ArabicText size="md" className="text-teal-900 mb-3">
            اللَّهُمَّ أَعِنِّي عَلَى ذِكْرِكَ وَشُكْرِكَ وَحُسْنِ عِبَادَتِكَ
          </ArabicText>
          <p className="text-stone-600 text-sm italic mb-2">
            « Ô Allah, aide-moi à Te rappeler, à T'être reconnaissant et à T'adorer de la meilleure façon. »
          </p>
          <p className="text-teal-700 text-xs font-medium">
            Abu Dawud (1522) — Le Prophète ﷺ a enseigné ce du'a à Mu'adh ibn Jabal (رضي الله عنه) en lui disant de le réciter après chaque prière.
          </p>
        </div>
      </Card>
    </div>
  );
}
