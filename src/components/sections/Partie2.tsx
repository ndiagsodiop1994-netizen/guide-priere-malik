import { Card, SectionTitle, SubSectionTitle, AlertBox, DalilBox, ArabicText, Table, Badge, StepBox } from "../ui";

export default function Partie2() {
  return (
    <div className="space-y-6">
      <AlertBox type="info" title="Vue d'ensemble des conditions de la prière">
        Les conditions de la prière se divisent en deux catégories : (1) <strong>Conditions de validité (شروط الصحة)</strong> : sans lesquelles la prière est invalide, et (2) <strong>Conditions d'obligation (شروط الوجوب)</strong> : qui rendent la prière obligatoire.
      </AlertBox>

      {/* 2.1a - Temps */}
      <SectionTitle number="2.1a" title="L'entrée du temps (دخول الوقت)" icon="⏰" />
      <Card>
        <AlertBox type="special" title="💡 Spécificité Malikite — Le temps comme condition de validité">
          Selon les Malikites, le temps est une condition de <strong>validité (صحة)</strong> et d'<strong>obligation (وجوب)</strong> simultanément. Prier avant l'entrée du temps invalide totalement la prière, sans possibilité de rattrapage valide.
        </AlertBox>

        <SubSectionTitle title="Les horaires des 5 prières selon les Malikites" />

        <Table
          headers={["Prière", "Début du temps", "Fin du temps choisi", "Fin du temps de nécessité"]}
          rows={[
            [
              <div><Badge color="amber">الفجر — Subh</Badge></div>,
              "Aube vraie (الفجر الصادق) — apparition de la lumière blanche horizontale",
              "Levée du soleil (طلوع الشمس)",
              "Levée du soleil — PAS de temps de nécessité différent",
            ],
            [
              <div><Badge color="blue">الظهر — Dhuhr</Badge></div>,
              "Méridien du soleil (زوال الشمس) + ombre égale à la longueur de l'objet",
              "Lorsque l'ombre d'un objet = sa longueur + l'ombre du méridien",
              "Jaunissement du soleil (اصفرار الشمس)",
            ],
            [
              <div><Badge color="teal">العصر — 'Asr</Badge></div>,
              "Fin du temps de Dhuhr (ombre = longueur + ombre méridien)",
              "Jaunissement du soleil (اصفرار الشمس)",
              "Coucher du soleil (غروب الشمس)",
            ],
            [
              <div><Badge color="purple">المغرب — Maghrib</Badge></div>,
              "Coucher complet du soleil (غروب الشمس)",
              "Disparition de la lueur rouge à l'horizon (الشفق الأحمر)",
              "Disparition de la lueur blanche (الشفق الأبيض)",
            ],
            [
              <div><Badge color="green">العشاء — 'Isha'</Badge></div>,
              "Disparition de la lueur rouge (الشفق الأحمر)",
              "Minuit légal (منتصف الليل الشرعي)",
              "Aube vraie (الفجر الصادق)",
            ],
          ]}
        />

        <AlertBox type="warning" title="Point crucial sur la lueur du Maghrib">
          <strong>Différence majeure entre écoles :</strong> Les Malikites considèrent que le temps de Maghrib se prolonge jusqu'à la disparition de <strong>la lueur ROUGE (الشفق الأحمر)</strong>, contrairement aux Hanafites qui se basent sur la lueur BLANCHE. Cela constitue une différence pratique d'environ 15-20 minutes.
        </AlertBox>

        <SubSectionTitle title="Temps de nécessité (وقت الضرورة)" />
        <p className="text-stone-600 mb-3">
          Les malikites distinguent le <strong>وقت الاختيار (temps choisi/préféré)</strong> du <strong>وقت الضرورة (temps de nécessité)</strong> :
        </p>
        <ul className="list-disc list-inside space-y-2 text-stone-600 text-sm">
          <li>Si quelqu'un se réveille ou reprend connaissance dans le temps de nécessité, il doit prier immédiatement</li>
          <li>Prier dans le temps de nécessité est valide mais péché si c'était volontaire</li>
          <li>La femme qui a ses règles et devient pure dans le temps de nécessité doit rattraper la prière</li>
        </ul>

        <SubSectionTitle title="Les temps d'interdiction de prier (أوقات النهي)" />
        <Table
          headers={["Moment d'interdiction", "Durée approximative", "Cause"]}
          rows={[
            ["Au lever du soleil (طلوع الشمس)", "De l'apparition jusqu'à l'élévation d'une lance (~15 min)", "Le soleil se lève entre les cornes du diable selon le hadith"],
            ["Au méridien solaire (الاستواء)", "Jusqu'au léger déclin du soleil", "Moment de la chaleur intense — sauf vendredi selon certains"],
            ["Au coucher du soleil (الغروب)", "Jusqu'au coucher complet", "Même raison que le lever"],
          ]}
        />
        <AlertBox type="special" title="💡 Position Malikite sur les prières interdites">
          Selon les Malikites, l'interdiction de prier dans ces temps ne s'applique qu'aux prières <strong>surérogatoires (النوافل)</strong> sans cause. Les prières des funérailles, les prières rattrapées (قضاء), la tahiyyat al-masjid et les prières qui ont une cause restent autorisées selon l'avis prépondérant malikite.
        </AlertBox>
      </Card>

      {/* 2.1b - Wudu */}
      <SectionTitle number="2.1b" title="La Pureté Rituelle — Le Wudu (الوضوء)" icon="💧" />
      <Card>
        <DalilBox
          type="quran"
          reference="Al-Ma'ida (5:6)"
          arabic="يَا أَيُّهَا الَّذِينَ آمَنُوا إِذَا قُمْتُمْ إِلَى الصَّلَاةِ فَاغْسِلُوا وُجُوهَكُمْ وَأَيْدِيَكُمْ إِلَى الْمَرَافِقِ وَامْسَحُوا بِرُءُوسِكُمْ وَأَرْجُلَكُمْ إِلَى الْكَعْبَيْنِ"
          translation="Ô vous qui croyez ! Lorsque vous vous levez pour la prière, lavez vos visages et vos mains jusqu'aux coudes, passez vos mains humides sur vos têtes et [lavez] vos pieds jusqu'aux chevilles."
        />

        <SubSectionTitle title="Les 7 obligations du Wudu (فرائض الوضوء) selon les Malikites" />
        <AlertBox type="special" title="💡 Spécificité Malikite — 7 farâ'id du Wudu">
          Les Malikites identifient 7 obligations du Wudu (d'autres écoles en ont 4-6). Ces 7 éléments sont tirés de Ar-Risala d'Ibn Abi Zayd al-Qayrawani et confirmés par Mukhtasar Khalil.
        </AlertBox>

        <div className="space-y-4 mb-6">
          {[
            {
              num: "1", ar: "النية", title: "L'intention (An-Niyya)",
              desc: "Avoir l'intention de faire le wudu pour l'adoration d'Allah. C'est une spécificité malikite — les Hanafites ne la considèrent pas obligatoire dans le wudu.",
              detail: "Elle doit coïncider avec le lavage du visage (ou selon certains avec le début du wudu)."
            },
            {
              num: "2", ar: "غسل الوجه", title: "Laver le visage (Ghasl al-Wajh)",
              desc: "De la racine des cheveux à la mâchoire inférieure en longueur, et d'une oreille à l'autre en largeur. Inclut le rinçage de la bouche (المضمضة) et des narines (الاستنشاق) selon les Malikites.",
              detail: "⚠️ Spécificité : le rinçage de la bouche et des narines est OBLIGATOIRE (fard) selon les Malikites, contrairement aux Shafi'ites qui les considèrent sunna."
            },
            {
              num: "3", ar: "غسل اليدين مع المرفقين", title: "Laver les deux mains jusqu'aux coudes",
              desc: "Inclut les coudes (المرافق). Le lavage doit être complet, sans laisser d'espace sec.",
              detail: ""
            },
            {
              num: "4", ar: "مسح الرأس", title: "Passer la main humide sur la tête (Mash ar-Ra's)",
              desc: "Passer les mains humides sur la totalité de la tête selon les Malikites — du front jusqu'à la nuque.",
              detail: "💡 Spécificité : les Malikites exigent le passage sur TOUTE la tête (partie + totalité). Les Hanafites acceptent 1/4, les Shafi'ites acceptent même une partie."
            },
            {
              num: "5", ar: "غسل الرجلين مع الكعبين", title: "Laver les deux pieds jusqu'aux chevilles",
              desc: "Inclut les chevilles (الكعبين). Bien laver entre les orteils.",
              detail: ""
            },
            {
              num: "6", ar: "الدلك", title: "Le frottement (Ad-Dalk)",
              desc: "Frotter les membres lavés avec la main — ne pas se contenter de faire couler l'eau.",
              detail: "💡 Spécificité exclusive malikite — aucune autre école ne considère le dalk comme obligatoire dans le wudu."
            },
            {
              num: "7", ar: "الموالاة", title: "La continuité (Al-Muwalat)",
              desc: "Enchaîner les actes du wudu sans interruption sèche des membres (avant que le précédent ne sèche).",
              detail: "💡 Spécificité malikite — La muwalat est fard selon les Malikites et Hanbalites, mais sunna selon les Hanafites et Shafi'ites."
            },
          ].map((item) => (
            <div key={item.num} className="border border-stone-200 rounded-xl overflow-hidden">
              <div className="bg-emerald-700 text-white px-4 py-2 flex items-center gap-3">
                <span className="w-7 h-7 bg-white text-emerald-700 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                  {item.num}
                </span>
                <span className="font-bold">{item.title}</span>
                <span className="font-amiri text-emerald-200 text-sm mr-auto" dir="rtl">{item.ar}</span>
              </div>
              <div className="p-3 bg-white">
                <p className="text-stone-600 text-sm">{item.desc}</p>
                {item.detail && (
                  <p className="text-purple-700 text-xs mt-2 bg-purple-50 rounded p-2">{item.detail}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        <SubSectionTitle title="Description pas-à-pas du Wudu parfait selon le Madhhab Malikite" />
        <StepBox number={1} title="Intention (النية)" arabic="النية">
          Former l'intention de faire le wudu pour l'adoration d'Allah dans son cœur (pas de prononciation vocale requise). L'intention doit coïncider avec le premier geste.
        </StepBox>
        <StepBox number={2} title="Dire 'Bismillah' (البسملة)" arabic="بسم الله">
          Prononcer <strong className="font-amiri">بِسْمِ اللَّهِ</strong> — c'est une sunna recommandée au début du wudu.
        </StepBox>
        <StepBox number={3} title="Laver les deux mains trois fois jusqu'aux poignets" arabic="غسل الكفين">
          Commencer par la droite. Frotter entre les doigts (<strong>تخليل الأصابع</strong>). C'est une sunna avant le wudu proprement dit.
        </StepBox>
        <StepBox number={4} title="Rincer la bouche (المضمضة)" arabic="المضمضة">
          <strong>OBLIGATOIRE selon les Malikites.</strong> Prendre de l'eau dans la bouche, remuer, puis cracher. Trois fois. Frotter les dents avec le doigt ou le siwak est recommandé.
        </StepBox>
        <StepBox number={5} title="Aspirer de l'eau par le nez (الاستنشاق)" arabic="الاستنشاق">
          <strong>OBLIGATOIRE selon les Malikites.</strong> Aspirer de l'eau dans les narines puis la souffler. Trois fois. Utiliser la main gauche pour souffler.
        </StepBox>
        <StepBox number={6} title="Laver le visage trois fois" arabic="غسل الوجه">
          De la racine des cheveux jusqu'au menton, d'oreille à oreille. En <strong>frottant (دلك)</strong>. Commencer par le milieu du front vers le bas.
        </StepBox>
        <StepBox number={7} title="Laver le bras droit jusqu'au coude (3 fois)" arabic="غسل اليد اليمنى">
          Inclure le coude. Frotter. Commencer par la main et remonter.
        </StepBox>
        <StepBox number={8} title="Laver le bras gauche jusqu'au coude (3 fois)" arabic="غسل اليد اليسرى">
          Même procédé que le bras droit.
        </StepBox>
        <StepBox number={9} title="Passer les mains humides sur toute la tête" arabic="مسح الرأس">
          <strong>UNE SEULE FOIS (fard).</strong> Poser les deux pouces sur les tempes, les mains à plat, balayer depuis le front jusqu'à la nuque, puis revenir vers le front. Selon l'avis dominant malikite, passer aussi les doigts dans la barbe et les oreilles avec la même eau (les oreilles font partie de la tête).
        </StepBox>
        <StepBox number={10} title="Laver le pied droit jusqu'à la cheville (3 fois)" arabic="غسل القدم اليمنى">
          Inclure les chevilles. Frotter entre les orteils avec le petit doigt de la main gauche (de bas en haut). Commencer par le pied droit.
        </StepBox>
        <StepBox number={11} title="Laver le pied gauche (3 fois)" arabic="غسل القدم اليسرى">
          Même procédé.
        </StepBox>
        <StepBox number={12} title="Du'a à la fin du Wudu" arabic="دعاء ختم الوضوء">
          <ArabicText size="sm" className="text-emerald-800 mb-2">
            أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ
          </ArabicText>
          <p className="text-stone-500 text-xs italic">« Je témoigne qu'il n'y a de divinité qu'Allah seul, sans associé, et que Muhammad est Son serviteur et Son messager. »</p>
        </StepBox>

        <SubSectionTitle title="Annulatifs du Wudu (نواقض الوضوء) selon les Malikites" />
        <Table
          headers={["Annulatif", "Arabe", "Détail", "Statut"]}
          rows={[
            ["Tout ce qui sort de l'urètre ou de l'anus", "الخارج من السبيلين", "Urine, selles, gaz intestinaux, vers intestinaux, sang (désaccord)", "Fard de recommencer le wudu"],
            ["Le sommeil profond", "النوم المستغرق", "Sommeil où l'on perd conscience de soi. Dormir assis (solidement assis) ne rompt PAS le wudu selon les Malikites", "Annule"],
            ["Perte de conscience", "زوال العقل", "Folie, évanouissement, ivresse — quelle qu'en soit la cause", "Annule"],
            ["Toucher une femme avec désir", "لمس المرأة بشهوة", "Toucher une femme étrangère (non mahram) avec désir charnel. Sans désir selon l'avis, ne rompt pas.", "Annule (avec désir)"],
            ["Toucher les parties intimes directement", "مس الذكر أو الفرج", "Toucher son pénis ou son vagin avec la paume sans obstacle", "Annule — spécificité malikite"],
            ["L'apostasie (العياذ بالله)", "الردة", "Sortir de l'Islam, même brièvement", "Annule + nécessite ghusl selon certains"],
            ["Doute sur la pureté", "الشك في الطهارة", "Si on a certitude d'être pur et doute d'impureté : ne rompt PAS (la certitude l'emporte)", "Ne rompt PAS"],
          ]}
        />

        <AlertBox type="special" title="💡 Position Malikite sur le 'Madhi' et le 'Wadi'">
          <ul className="list-disc list-inside text-sm space-y-1">
            <li><strong>Madhi (المذي)</strong> — liquide pré-séminal : rompt le wudu selon les Malikites, nécessite de se laver la partie souillée</li>
            <li><strong>Wadi (الودي)</strong> — liquide épais après l'urine : rompt le wudu</li>
            <li><strong>Mani (المني)</strong> — liquide séminal : rompt le wudu ET nécessite le ghusl</li>
          </ul>
        </AlertBox>
      </Card>

      {/* 2.1c - Ghusl */}
      <SectionTitle number="2.1c" title="Les Grandes Ablutions (الغسل)" icon="🚿" />
      <Card>
        <SubSectionTitle title="Causes obligeant le Ghusl (موجبات الغسل)" />
        <Table
          headers={["Cause", "Description", "Concerne"]}
          rows={[
            ["Émission de sperme (الإنزال)", "Émission de mani avec désir (pendant le sommeil ou l'éveil)", "Homme et femme"],
            ["Rapport sexuel (الجماع)", "Pénétration, même sans éjaculation", "Homme et femme"],
            ["Fin des règles (انقطاع الحيض)", "Lorsque le sang menstruel cesse", "Femme"],
            ["Fin des lochies (انقطاع النفاس)", "Lorsque le sang post-natal cesse (max 60 jours selon les Malikites)", "Femme"],
            ["Mort (الموت)", "Le défunt musulman doit être lavé", "Tout musulman décédé"],
            ["Conversion à l'Islam (الإسلام)", "Ghusl recommandé (certains disent obligatoire) lors de la conversion", "Nouveau muslim"],
          ]}
        />

        <SubSectionTitle title="Obligations du Ghusl (فرائض الغسل) — 3 selon les Malikites" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {[
            { num: "1", title: "Intention (النية)", desc: "Avoir l'intention de faire le ghusl pour la pureté rituelle" },
            { num: "2", title: "Faire couler l'eau sur tout le corps (الاستيعاب)", desc: "L'eau doit atteindre TOUTE la peau, les racines des cheveux, les poils" },
            { num: "3", title: "Frotter le corps (الدلك)", desc: "Frotter tout le corps avec les mains — obligation spécifique malikite" },
          ].map((item) => (
            <div key={item.num} className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-center">
              <span className="text-2xl font-bold text-blue-600">{item.num}</span>
              <p className="font-bold text-blue-900 text-sm mt-1">{item.title}</p>
              <p className="text-stone-600 text-xs mt-1">{item.desc}</p>
            </div>
          ))}
        </div>

        <SubSectionTitle title="Description détaillée du Ghusl parfait" />
        <p className="text-stone-600 text-sm mb-3">Selon le <em>Mukhtasar Khalil</em> et <em>Ash-Sharh al-Kabir</em> :</p>
        <ol className="list-decimal list-inside space-y-2 text-stone-600 text-sm">
          <li>Intention dans le cœur</li>
          <li>Prononcer Bismillah (sunna)</li>
          <li>Laver les parties intimes et ce qui a été souillé</li>
          <li>Faire le wudu complet (certains malikites : sans laver les pieds jusqu'à la fin)</li>
          <li>Verser l'eau sur la tête trois fois en frottant les racines des cheveux</li>
          <li>Verser l'eau sur le côté droit trois fois en frottant</li>
          <li>Verser l'eau sur le côté gauche trois fois en frottant</li>
          <li>S'assurer que l'eau atteint les aisselles, le nombril, entre les orteils, le derrière des oreilles</li>
          <li>Laver les pieds à la fin (selon la sunna du Prophète ﷺ)</li>
        </ol>
      </Card>

      {/* 2.1d - Tayammum */}
      <SectionTitle number="2.1d" title="Le Tayammum (التيمم)" icon="🌍" />
      <Card>
        <DalilBox
          type="quran"
          reference="Al-Ma'ida (5:6)"
          arabic="وَإِن كُنتُم مَّرْضَىٰ أَوْ عَلَىٰ سَفَرٍ أَوْ جَاءَ أَحَدٌ مِّنكُم مِّنَ الْغَائِطِ أَوْ لَامَسْتُمُ النِّسَاءَ فَلَمْ تَجِدُوا مَاءً فَتَيَمَّمُوا صَعِيدًا طَيِّبًا فَامْسَحُوا بِوُجُوهِكُمْ وَأَيْدِيكُم مِّنْهُ"
          translation="Si vous êtes malades ou en voyage, ou si l'un de vous revient des lieux d'aisances, ou si vous avez touché des femmes et que vous ne trouviez point d'eau, tayammumez avec de la terre pure : frottez-en vos visages et vos mains."
        />

        <SubSectionTitle title="Conditions permettant le Tayammum" />
        <ul className="list-disc list-inside space-y-2 text-stone-600 text-sm mb-4">
          <li><strong>Absence d'eau</strong> : ne pas trouver d'eau après avoir cherché dans son environnement</li>
          <li><strong>Impossibilité d'utiliser l'eau</strong> : maladie, blessure où l'eau causerait du tort</li>
          <li><strong>L'eau est trop froide</strong> et risque de nuire à la santé (sans pouvoir la chauffer)</li>
          <li><strong>L'eau est nécessaire pour boire</strong> : si l'utiliser pour le wudu mettrait la vie en danger</li>
          <li><strong>Incapacité physique</strong> : ne pas pouvoir atteindre l'eau malgré sa présence</li>
        </ul>

        <SubSectionTitle title="Description du Tayammum selon les Malikites" />
        <p className="text-stone-600 text-sm mb-3">
          Le tayammum malikite se fait sur la <strong>terre pure (صعيد طيب)</strong> — sable, pierre, poussière — avec une <strong>seule frappe</strong> selon l'avis le plus connu :
        </p>
        <div className="space-y-3">
          {[
            { step: "1", text: "Intention dans le cœur" },
            { step: "2", text: "Bismillah (sunna)" },
            { step: "3", text: "Frapper la terre une fois avec les deux paumes (légèrement)" },
            { step: "4", text: "Souffler sur les paumes pour enlever l'excès de poussière" },
            { step: "5", text: "Passer les paumes sur le visage entier (une fois)" },
            { step: "6", text: "Frapper à nouveau (ou avec le reste de la première frappe) et passer sur les deux avant-bras jusqu'aux coudes inclus — main droite puis gauche" },
          ].map((item) => (
            <div key={item.step} className="flex gap-3 items-start">
              <span className="flex-shrink-0 w-6 h-6 bg-amber-600 text-white rounded-full flex items-center justify-center text-xs font-bold">{item.step}</span>
              <p className="text-stone-600 text-sm">{item.text}</p>
            </div>
          ))}
        </div>
        <AlertBox type="special" title="💡 Spécificité Malikite sur le Tayammum">
          Selon l'avis prépondérant malikite (d'après le Mukhtasar Khalil), le mash dans le tayammum va jusqu'aux <strong>coudes (المرفقين)</strong>, et non seulement les poignets comme d'autres le rapportent. L'ordre (droit avant gauche) est une sunna selon les Malikites.
        </AlertBox>
      </Card>

      {/* 2.1e - Impuretés */}
      <SectionTitle number="2.1e" title="Pureté du corps, du vêtement et du lieu" arabic="طهارة البدن والثوب والمكان" icon="🧹" />
      <Card>
        <Table
          headers={["Type d'impureté", "Arabe", "Exemples", "Mode de purification"]}
          rows={[
            ["Impureté lourde (نجاسة مغلظة)", "نجاسة مغلظة", "Excréments humains, urine humaine, sang", "Laver jusqu'à disparition de la couleur, de l'odeur et du goût (ou 2 sur 3 si les 3 ne peuvent disparaître ensemble)"],
            ["Impureté légère (نجاسة مخففة)", "نجاسة مخففة", "Urine d'un enfant garçon qui ne mange que du lait (moins de 2 ans)", "Il suffit d'asperger d'eau selon certains malikites"],
            ["Sang et pus", "الدم والقيح", "Sang humain, sang animal non halal", "Laver à l'eau jusqu'à disparition"],
            ["Vomi", "القيء", "Si en grande quantité (selon certains)", "Laver"],
            ["Alcool", "الخمر", "Boissons alcoolisées", "Laver — considéré najis par les Malikites"],
            ["Chien et porc", "الكلب والخنزير", "Leur corps entier — divergence sur le chien", "Laver 7 fois dont une avec de la terre (chien selon certains)"],
          ]}
        />

        <AlertBox type="special" title="💡 Position Malikite sur certaines impuretés">
          <ul className="list-disc list-inside text-sm space-y-1">
            <li><strong>Chien</strong> : selon l'avis dominant malikite, la salive du chien est impure mais son corps (poil, peau) est pur — différence avec les Hanbalites et Shafi'ites.</li>
            <li><strong>Sang en petite quantité</strong> : les Malikites tolèrent de petites quantités de sang difficiles à éviter (comme les traces de piqûres) — pardonné (معفو عنه).</li>
            <li><strong>La terre pure purifie</strong> : les chaussures peuvent être purifiées en les frottant contre une surface pure selon les Malikites.</li>
          </ul>
        </AlertBox>
      </Card>

      {/* 2.1f - Awra */}
      <SectionTitle number="2.1f" title="Couvrir la 'Awra (ستر العورة)" icon="👘" />
      <Card>
        <Table
          headers={["Personne", "'Awra dans la prière", "Condition supplémentaire"]}
          rows={[
            ["Homme (libre)", "Du nombril au genou (inclus)", "Le nombril et le genou : divergence si inclus dans la 'awra ou non — l'avis prépondérant malikite les exclut de la 'awra mais dit qu'il faut les couvrir par précaution"],
            ["Femme libre (حرة)", "Tout le corps sauf le visage et les mains", "Selon l'avis malikite dominant, le visage et les mains sont exclus de la 'awra dans la prière (mais pas en présence d'hommes non-mahram)"],
            ["Esclave féminine (أمة) — contexte historique", "Comme l'homme : du nombril au genou selon certains, ou davantage selon d'autres", "Question historique — les Malikites avaient différents avis"],
            ["Enfant non pubère", "Même 'awra que l'adulte (recommandé de l'habituer)", "Pas d'obligation légale stricte"],
          ]}
        />
        <AlertBox type="warning" title="Si l'on ne trouve pas de vêtement">
          Celui qui ne trouve aucun vêtement prie nu (<strong>عارياً</strong>), en position assise si possible pour minimiser l'exposition, et sa prière est valide. Il n'a pas à attendre — il prie dans le temps et ne rattrapera pas.
        </AlertBox>
      </Card>

      {/* 2.1g - Qibla */}
      <SectionTitle number="2.1g" title="S'orienter vers la Qibla (استقبال القبلة)" icon="🧭" />
      <Card>
        <DalilBox
          type="quran"
          reference="Al-Baqara (2:144)"
          arabic="فَوَلِّ وَجْهَكَ شَطْرَ الْمَسْجِدِ الْحَرَامِ ۚ وَحَيْثُ مَا كُنتُمْ فَوَلُّوا وُجُوهَكُمْ شَطْرَهُ"
          translation="Tourne ton visage vers la Mosquée Sacrée. Et où que vous soyez, tournez vos visages dans sa direction."
        />

        <SubSectionTitle title="Règles détaillées" />
        <Table
          headers={["Situation", "Règle", "Remarque"]}
          rows={[
            ["Celui qui voit la Ka'ba", "Doit s'orienter EXACTEMENT vers elle ('ayn al-Ka'ba)", "Obligation stricte"],
            ["Celui qui ne voit pas la Ka'ba", "Doit s'orienter vers la direction de la Ka'ba (jihat al-Ka'ba)", "Si légèrement dévié, sa prière est valide"],
            ["Ignorance de la direction", "Fait de son mieux par ijtihad (estimation)", "Si après la prière il s'avère qu'il était faux : pas de reprise selon l'avis malikite"],
            ["Prière dans un véhicule/avion", "Prie dans la direction qu'il peut", "Les prières surérogatoires : peut prier dans la direction du voyage. Les prières obligatoires : doit s'orienter si possible"],
            ["Danger mortel", "Prie dans la direction possible", "La Qibla devient condition levée par la nécessité"],
          ]}
        />
      </Card>

      {/* 2.1h - Niyyah */}
      <SectionTitle number="2.1h" title="L'Intention (النية)" icon="🧠" />
      <Card>
        <AlertBox type="special" title="💡 Spécificité Malikite cruciale sur la Niyyah">
          Selon l'école malikite, l'intention est dans le <strong>CŒUR uniquement</strong> — il est <strong>interdit (ou au moins blâmable selon certains)</strong> de la prononcer à voix haute avant la prière. La formulation vocale de l'intention (comme « nawaytu an ousalli... ») est une <strong>innovation blâmable (بدعة)</strong> selon l'avis malikite dominant.
        </AlertBox>

        <SubSectionTitle title="Conditions de l'intention" />
        <ul className="list-disc list-inside space-y-2 text-stone-600 text-sm">
          <li><strong>Moment</strong> : doit coïncider avec le Takbirat al-Ihram (simultanément)</li>
          <li><strong>Lieu</strong> : dans le cœur uniquement (pas de prononciation)</li>
          <li><strong>Objet</strong> : doit spécifier la prière (Dhuhr, 'Asr, etc.) et son caractère obligatoire (فريضة)</li>
          <li><strong>Continuité</strong> : ne pas interrompre l'intention volontairement pendant la prière</li>
        </ul>

        <DalilBox
          type="hadith"
          reference="Bukhari & Muslim"
          arabic="إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى"
          translation="Les actes ne valent que par les intentions, et chacun n'a que ce qu'il a eu l'intention [d'accomplir]."
          source="Rapporté par Umar ibn al-Khattab (رضي الله عنه) — Bukhari (1) & Muslim (1907)"
        />
      </Card>
    </div>
  );
}
