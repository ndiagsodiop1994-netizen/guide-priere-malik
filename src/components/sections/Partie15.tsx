import { Card, SectionTitle, SubSectionTitle, AlertBox, ArabicText, Table } from "../ui";

export default function Partie15() {
  return (
    <div className="space-y-6">
      <SectionTitle number="15.1" title="La Prière Mortuaire" arabic="صلاة الجنازة" icon="🕊️" />
      <Card>
        <AlertBox type="success" title="Statut : Fard Kifaya (فرض كفاية)">
          La prière funèbre est une obligation collective — si un groupe de musulmans l'accomplit, les autres sont dispensés. Si personne ne la pratique, tout le voisinage est en péché.
        </AlertBox>

        <SubSectionTitle title="Conditions de la prière funèbre" />
        <ul className="list-disc list-inside space-y-2 text-stone-600 text-sm">
          <li>Être accomplie sur un musulman</li>
          <li>Le défunt doit avoir été lavé (ghusl) au préalable</li>
          <li>Le corps doit être présent (ou dans la direction de la prière)</li>
          <li>Pureté rituelle de celui qui prie</li>
          <li>Couvrir la 'awra et faire face à la Qibla</li>
        </ul>
      </Card>

      <SectionTitle number="15.3" title="Description détaillée de la Prière Funèbre" arabic="كيفية صلاة الجنازة" icon="📋" />
      <Card>
        <AlertBox type="special" title="💡 Spécificité Malikite — 4 Takbirat sans Ruku' ni Sujud">
          La prière funèbre comprend <strong>4 Takbirat</strong>, sans ruku' ni sujud. C'est la forme unique de la Janaza.
        </AlertBox>

        <div className="space-y-4">
          {[
            {
              tak: "Takbira 1 (تكبيرة الإحرام)",
              ar: "اللَّهُ أَكْبَرُ",
              action: "Intention + Takbirat al-Ihram (lever les mains — raf' al-yadayn)",
              recite: "Réciter la Fatiha (obligatoire selon les Malikites)"
            },
            {
              tak: "Takbira 2",
              ar: "اللَّهُ أَكْبَرُ",
              action: "Dire Allahu Akbar (sans lever les mains — spécificité malikite)",
              recite: "Réciter la Salat Ibrahimiyya (bénédictions sur le Prophète ﷺ)"
            },
            {
              tak: "Takbira 3",
              ar: "اللَّهُ أَكْبَرُ",
              action: "Dire Allahu Akbar",
              recite: "Du'a pour le défunt (obligatoire — voir textes)"
            },
            {
              tak: "Takbira 4",
              ar: "اللَّهُ أَكْبَرُ",
              action: "Dire Allahu Akbar",
              recite: "Silence bref puis le Taslim (UN SEUL salam selon les Malikites)"
            },
          ].map((item, i) => (
            <div key={i} className="border border-emerald-200 rounded-xl overflow-hidden">
              <div className="bg-emerald-700 text-white px-4 py-2 font-bold text-sm">{item.tak}</div>
              <div className="p-4 bg-white">
                <ArabicText size="md" className="text-emerald-900 mb-2">{item.ar}</ArabicText>
                <p className="text-stone-700 text-sm font-medium mb-1">Action : {item.action}</p>
                <p className="text-emerald-700 text-sm">Récitation : {item.recite}</p>
              </div>
            </div>
          ))}
        </div>

        <SubSectionTitle title="Du'a pour le défunt (après la 3ème Takbira)" />
        <div className="bg-teal-50 border border-teal-200 rounded-xl p-4 mb-4">
          <ArabicText size="md" className="text-teal-900 mb-3">
            اللَّهُمَّ اغْفِرْ لِحَيِّنَا وَمَيِّتِنَا، وَشَاهِدِنَا وَغَائِبِنَا، وَصَغِيرِنَا وَكَبِيرِنَا، وَذَكَرِنَا وَأُنْثَانَا. اللَّهُمَّ مَنْ أَحْيَيْتَهُ مِنَّا فَأَحْيِهِ عَلَى الْإِسْلَامِ، وَمَنْ تَوَفَّيْتَهُ مِنَّا فَتَوَفَّهُ عَلَى الْإِيمَانِ. اللَّهُمَّ لَا تَحْرِمْنَا أَجْرَهُ وَلَا تَفْتِنَّا بَعْدَهُ
          </ArabicText>
          <p className="text-stone-600 text-sm italic">
            « Ô Allah, pardonne à nos vivants et à nos morts, à ceux qui sont présents et à ceux qui sont absents, à nos petits et à nos grands, à nos hommes et à nos femmes. Ô Allah, fais vivre dans l'Islam ceux d'entre nous que Tu gardes en vie, et fais mourir dans la foi ceux que Tu rappelles. Ô Allah, ne nous prive pas de sa récompense et ne nous éprouve pas après lui. »
          </p>
          <p className="text-teal-700 text-xs mt-1 font-medium">Abu Dawud, Tirmidhi, Ibn Majah</p>
        </div>

        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
          <p className="font-bold text-emerald-900 mb-2">Du'a court pour le défunt (peut aussi réciter) :</p>
          <ArabicText size="md" className="text-emerald-900 mb-2">
            اللَّهُمَّ اغْفِرْ لَهُ وَارْحَمْهُ وَعَافِهِ وَاعْفُ عَنْهُ، وَأَكْرِمْ نُزُلَهُ، وَوَسِّعْ مُدْخَلَهُ، وَاغْسِلْهُ بِالْمَاءِ وَالثَّلْجِ وَالْبَرَدِ، وَنَقِّهِ مِنَ الْخَطَايَا كَمَا نَقَّيْتَ الثَّوْبَ الْأَبْيَضَ مِنَ الدَّنَسِ
          </ArabicText>
          <p className="text-stone-500 text-xs italic">Muslim (963) — rapporté par 'Awf ibn Malik (رضي الله عنه)</p>
        </div>
      </Card>

      <SectionTitle number="15.4-15.5" title="Position de l'imam et prière sur l'absent" arabic="موقف الإمام / الصلاة على الغائب" icon="📍" />
      <Card>
        <Table
          headers={["Cas", "Position de l'imam", "Règle Malikite"]}
          rows={[
            ["Défunt homme", "L'imam se place face à la tête du défunt", "Sunna malikite — confirmée par la pratique médinoise"],
            ["Défunt femme", "L'imam se place face au milieu du corps", "Pour respecter l'intimité — avis malikite dominant"],
            ["Plusieurs défunts en même temps", "Placer les hommes devant (côté de l'imam), puis les femmes", "Par ordre de dignité"],
          ]}
        />

        <SubSectionTitle title="Prière sur l'absent (الصلاة على الغائب)" />
        <AlertBox type="warning" title="Position Malikite restrictive">
          Selon l'avis dominant malikite, la prière sur l'absent n'est <strong>PAS prescrite</strong> et même blâmable. Le cas du Prophète ﷺ priant sur An-Najashi (le Négus) est considéré comme particulier à cette situation. La règle générale malikite est que la Janaza nécessite la présence du corps.
        </AlertBox>
      </Card>
    </div>
  );
}
