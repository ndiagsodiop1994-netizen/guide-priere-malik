import { Card, SectionTitle, SubSectionTitle, AlertBox, DalilBox, ArabicText, Table } from "../ui";

export default function Partie4() {
  const faraidList = [
    {
      num: "1",
      ar: "النية",
      title: "L'Intention (An-Niyyah)",
      dalil: "إنما الأعمال بالنيات",
      dalilFr: "Les actes ne valent que par les intentions (Bukhari 1)",
      desc: "Former dans le cœur l'intention de la prière spécifique (Dhuhr, 'Asr...) et son caractère obligatoire. Elle doit coïncider avec le Takbirat al-Ihram.",
      omission: "L'omission de l'intention invalide totalement la prière, qu'elle soit volontaire ou par oubli.",
      malikSpec: "La prononciation de l'intention est INTERDITE ou blâmable selon les malikites."
    },
    {
      num: "2",
      ar: "تكبيرة الإحرام",
      title: "Le Takbirat al-Ihram",
      dalil: "مفتاح الصلاة الطهور، وتحريمها التكبير، وتحليلها التسليم",
      dalilFr: "La clé de la prière est la pureté, son entrée est le Takbir, et sa sortie est le Taslim (Abu Dawud, Tirmidhi)",
      desc: "Dire « اللَّهُ أَكْبَرُ » debout. Le mot « Akbar » doit être dit correctement — modifier une lettre invalide.",
      omission: "Invalide totalement la prière — pilier fondateur. Sans Takbirat al-Ihram, on n'entre pas dans la prière.",
      malikSpec: "Seul le Takbirat al-Ihram exige le raf' al-yadayn (lever les mains). Les autres takbirat se font sans lever les mains selon les Malikites."
    },
    {
      num: "3",
      ar: "القيام",
      title: "La station debout (Al-Qiyam)",
      dalil: "وقوموا لله قانتين (2:238)",
      dalilFr: "« Tenez-vous debout devant Allah avec dévotion » (Baqara 2:238)",
      desc: "Se tenir debout dans les prières obligatoires. Obligatoire pour celui qui en est capable. L'incliné, le courbé ou celui qui s'appuie sans nécessité invalide sa prière.",
      omission: "Invalide la rak'a si omis sans raison valide.",
      malikSpec: "La station debout est exigée pendant la récitation de la Fatiha et de la sourate."
    },
    {
      num: "4",
      ar: "قراءة الفاتحة",
      title: "La récitation de la Fatiha (Qira'at al-Fatiha)",
      dalil: "لا صلاة لمن لم يقرأ بفاتحة الكتاب",
      dalilFr: "Il n'y a pas de prière pour celui qui ne récite pas la Fatiha (Bukhari 756)",
      desc: "Réciter Al-Fatiha complète dans chaque rak'a, debout. Obligatoire pour l'imam et le prieur seul. Le ma'mum (celui derrière l'imam) : selon l'avis malikite dominant, il ne récite PAS la Fatiha dans les prières récitées à voix haute — il écoute et se tait.",
      omission: "Invalide la rak'a et donc la prière si omise.",
      malikSpec: "La Basmala n'est PAS considérée comme un verset de la Fatiha selon les Malikites — elle se récite silencieusement ou est omise."
    },
    {
      num: "5",
      ar: "الركوع",
      title: "L'inclinaison (Ar-Ruku')",
      dalil: "وَأَقِيمُوا الصَّلَاةَ... يَا أَيُّهَا الَّذِينَ آمَنُوا ارْكَعُوا وَاسْجُدُوا",
      dalilFr: "« Ô vous qui croyez, inclinez-vous et prosternez-vous » (Al-Hajj 22:77)",
      desc: "Se pencher de telle façon que la colonne vertébrale soit horizontale, les paumes posées sur les genoux, le dos plat. La position minimum : les paumes atteignent les genoux.",
      omission: "Invalide la rak'a. Si omis par oubli dans une rak'a, on revient le faire si on ne l'a pas encore dépassé.",
      malikSpec: "La quiétude (طمأنينة) dans le ruku' est obligatoire — s'y arrêter suffisamment."
    },
    {
      num: "6",
      ar: "الرفع من الركوع",
      title: "Le redressement après le ruku' (Ar-Raf' minak-Ruku')",
      dalil: "ثم ارفع حتى تعتدل قائماً — حديث المسيء في صلاته",
      dalilFr: "« Puis relève-toi jusqu'à te tenir droit debout » — Hadith de celui qui priait mal (Bukhari 793)",
      desc: "Se redresser complètement après le ruku' jusqu'à la position debout droite, et rester immobile un instant dans cette position.",
      omission: "Invalide la rak'a.",
      malikSpec: "L'i'tidal (الاعتدال) — se tenir droit — est un fard distinct selon les Malikites."
    },
    {
      num: "7",
      ar: "السجود",
      title: "La prosternation (As-Sujud)",
      dalil: "كُلُّ صَلَاةٍ لَا رُكُوعَ فِيهَا وَلَا سُجُودَ فَهِيَ خِدَاجٌ",
      dalilFr: "Toute prière sans ruku' et sujud est insuffisante (Ibn Majah)",
      desc: "Se prosterner sur 7 membres : le front (et le nez selon certains malikites), les deux paumes, les deux genoux, et les deux pieds (orteils). Le front doit toucher le sol directement sans obstacle artificiel.",
      omission: "Invalide la rak'a.",
      malikSpec: "Le nez doit toucher le sol selon l'avis malikite dominant (c'est une obligation, pas seulement sunna)."
    },
    {
      num: "8",
      ar: "الجلوس بين السجدتين",
      title: "La position assise entre les deux prosternations",
      dalil: "حديث المسيء في صلاته — ثم اسجد حتى تطمئن ساجداً ثم ارفع",
      dalilFr: "Le hadith du mauvais prieur — (Bukhari 793)",
      desc: "S'asseoir entre les deux sujud avec quiétude avant d'effectuer le second sujud.",
      omission: "Invalide la rak'a si omis.",
      malikSpec: "La position assise (iftirash) est recommandée mais non obligatoire — l'essentiel est de s'asseoir."
    },
    {
      num: "9",
      ar: "السلام",
      title: "Le Taslim (As-Salam)",
      dalil: "تحريمها التكبير وتحليلها التسليم",
      dalilFr: "Son entrée est le Takbir et sa sortie est le Taslim (Abu Dawud, Tirmidhi)",
      desc: "Dire « السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللَّهِ » en se tournant à droite. UN SEUL taslim selon les Malikites.",
      omission: "La prière n'est pas complète et validée sans le Taslim.",
      malikSpec: "UN SEUL salam (à droite) est le fard selon les Malikites. Le deuxième salam (à gauche) est une sunna, non un fard."
    },
    {
      num: "10",
      ar: "الطمأنينة",
      title: "La quiétude/sérénité (At-Tuma'nina)",
      dalil: "ارجع فصل فإنك لم تصل — حديث المسيء في صلاته",
      dalilFr: "« Retourne et prie car tu n'as pas prié » — dit au mauvais prieur (Bukhari 793)",
      desc: "S'arrêter avec calme dans chaque position de la prière (ruku', i'tidal, sujud, entre les deux sujud) — ne pas passer d'une position à l'autre trop rapidement.",
      omission: "Invalide la rak'a correspondante.",
      malikSpec: "La tuma'nina est un pilier explicite selon les Malikites et Hanbalites."
    },
    {
      num: "11",
      ar: "الترتيب",
      title: "L'ordre/enchaînement (At-Tartib)",
      dalil: "صلوا كما رأيتموني أصلي",
      dalilFr: "« Priez comme vous me voyez prier » (Bukhari 631)",
      desc: "Accomplir les piliers dans l'ordre : qiyam → fatiha → ruku' → i'tidal → sujud → julûs → sujud → julûs (pour le tashahud) → taslim.",
      omission: "Invalide si l'ordre est délibérément changé.",
      malikSpec: ""
    },
    {
      num: "12",
      ar: "التشهد الأخير",
      title: "Le Tashahud final (At-Tashahhud al-Akhir)",
      dalil: "حديث ابن مسعود — كنا نقول قبل أن تفرض علينا التشهد",
      dalilFr: "Hadith de Ibn Mas'ud sur le Tashahud (Bukhari 831, Muslim 402)",
      desc: "Réciter le tashahud dans la dernière position assise après la dernière rak'a.",
      omission: "Invalide la prière s'il est omis intentionnellement.",
      malikSpec: "Seul le DERNIER tashahud est fard selon les Malikites. Le premier tashahud est une sunna (non un fard)."
    },
    {
      num: "13",
      ar: "الجلوس للتشهد الأخير",
      title: "La position assise pour le Tashahud final",
      dalil: "ثم يتشهد — وهو قاعد",
      dalilFr: "Il se tient assis pour le tashahud",
      desc: "S'asseoir pour le tashahud final. La position recommandée malikite est le tawarruk (التورك) dans la dernière rak'a.",
      omission: "Invalide si omis.",
      malikSpec: "La position tawarruk (jambe gauche sortie sous la jambe droite) est recommandée (sunna) dans le dernier tashahud."
    },
  ];

  return (
    <div className="space-y-6">
      <AlertBox type="success" title="Les 13 Piliers (Farâ'id) de la Prière selon les Malikites">
        Les malikites identifient <strong>13 piliers (أركان/فرائض)</strong> de la prière. Certains ouvrages malikites en mentionnent jusqu'à 14 ou davantage selon les détails. L'omission intentionnelle d'un seul pilier invalide la prière totalement. L'omission par oubli nécessite généralement le sujud sahwi ou l'annulation.
      </AlertBox>

      <Table
        headers={["#", "Pilier", "Arabe", "Statut si omis"]}
        rows={faraidList.map((f) => [
          <span className="font-bold text-emerald-700">{f.num}</span>,
          f.title,
          <ArabicText size="sm" className="text-emerald-800">{f.ar}</ArabicText>,
          <span className="text-red-600 text-xs font-semibold">Invalide la prière</span>,
        ])}
      />

      {faraidList.map((fard) => (
        <Card key={fard.num}>
          <div className="flex items-start gap-3 mb-3">
            <span className="w-10 h-10 bg-emerald-700 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
              {fard.num}
            </span>
            <div>
              <h3 className="font-bold text-emerald-900 text-lg">{fard.title}</h3>
              <ArabicText size="md" className="text-emerald-700">{fard.ar}</ArabicText>
            </div>
          </div>

          <p className="text-stone-600 text-sm mb-3">{fard.desc}</p>

          <DalilBox
            type="hadith"
            reference="Dalil"
            arabic={fard.dalil}
            translation={fard.dalilFr}
          />

          <div className="bg-red-50 border-l-4 border-red-400 rounded-r-lg p-3 mb-2">
            <p className="text-red-800 text-sm font-medium">⚠️ Si omis :</p>
            <p className="text-red-700 text-sm">{fard.omission}</p>
          </div>

          {fard.malikSpec && (
            <div className="bg-purple-50 border-l-4 border-purple-400 rounded-r-lg p-3">
              <p className="text-purple-800 text-sm font-medium">💡 Spécificité Malikite :</p>
              <p className="text-purple-700 text-sm">{fard.malikSpec}</p>
            </div>
          )}
        </Card>
      ))}

      <SectionTitle number="4.2" title="Texte du Tashahud selon les Malikites" arabic="التشهد" icon="📖" />
      <Card>
        <p className="text-stone-600 text-sm mb-4">
          Le Tashahud malikite est celui rapporté par <strong>Ibn 'Umar (رضي الله عنهما)</strong> :
        </p>
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5">
          <ArabicText size="lg" className="text-emerald-900 mb-4">
            التَّحِيَّاتُ لِلَّهِ، الزَّاكِيَاتُ لِلَّهِ، الطَّيِّبَاتُ الصَّلَوَاتُ لِلَّهِ، السَّلَامُ عَلَيْكَ أَيُّهَا النَّبِيُّ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ، السَّلَامُ عَلَيْنَا وَعَلَى عِبَادِ اللَّهِ الصَّالِحِينَ، أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللَّهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ
          </ArabicText>
          <p className="text-stone-600 text-sm italic leading-relaxed">
            « Les salutations sont à Allah, les [bonnes actions] purifiantes sont à Allah, les bonnes choses et les prières sont à Allah. Paix sur toi, ô Prophète, ainsi que la miséricorde d'Allah et Ses bénédictions. Paix sur nous et sur les pieux serviteurs d'Allah. Je témoigne qu'il n'y a de divinité qu'Allah, et je témoigne que Muhammad est Son serviteur et Son messager. »
          </p>
        </div>

        <AlertBox type="special" title="💡 Spécificité Malikite — Pas de Salat Ibrahimiyya obligatoire">
          Selon l'avis malikite dominant, la <strong>Salat Ibrahimiyya (الصلاة الإبراهيمية)</strong> n'est PAS un pilier mais une sunna confirmée. Elle est fortement recommandée mais son omission nécessite seulement le sujud qabli (avant le salam) et n'invalide pas la prière.
        </AlertBox>

        <SubSectionTitle title="Texte de la Salat Ibrahimiyya" />
        <div className="bg-teal-50 border border-teal-200 rounded-xl p-4">
          <ArabicText size="md" className="text-teal-900 mb-3">
            اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ، كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ، إِنَّكَ حَمِيدٌ مَجِيدٌ، اللَّهُمَّ بَارِكْ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ، كَمَا بَارَكْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ، إِنَّكَ حَمِيدٌ مَجِيدٌ
          </ArabicText>
          <p className="text-stone-600 text-sm italic">
            « Ô Allah, envoie Tes grâces sur Muhammad et sur la famille de Muhammad, comme Tu as envoyé Tes grâces sur Ibrahim et sur la famille d'Ibrahim. Tu es certes Digne de louanges, Glorieux. Ô Allah, bénis Muhammad et la famille de Muhammad comme Tu as béni Ibrahim et la famille d'Ibrahim. Tu es certes Digne de louanges, Glorieux. »
          </p>
        </div>
      </Card>
    </div>
  );
}
