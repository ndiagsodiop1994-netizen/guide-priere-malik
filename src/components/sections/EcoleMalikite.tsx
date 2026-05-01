import { Card, SectionTitle, SubSectionTitle, AlertBox, ArabicText, Table, DalilBox } from "../ui";

export default function EcoleMalikite() {
  return (
    <div className="space-y-6">
      {/* EM.1 — Présentation */}
      <SectionTitle number="EM.1" title="Présentation de l'école malikite" arabic="المذهب المالكي" icon="🕋" />
      <Card>
        <p className="text-stone-600 dark:text-slate-300 mb-3">
          L'école malikite (<strong>المذهب المالكي</strong>) est l'une des quatre grandes écoles
          juridiques sunnites, aux côtés des écoles hanafite, shafi'ite et hanbalite. Elle
          tire son nom de son fondateur, l'Imam <strong>Mâlik ibn Anas</strong> (711–795 / 93–179 H),
          surnommé l'<em>Imam de Médine</em> (إمام دار الهجرة).
        </p>
        <p className="text-stone-600 dark:text-slate-300">
          Particularité majeure : c'est le seul madhhab à avoir intégré la <strong>pratique des
          gens de Médine (عمل أهل المدينة)</strong> comme source juridique à part entière, considérant
          que l'usage continu de la cité du Prophète ﷺ constitue une transmission vivante
          de la sunna.
        </p>
      </Card>

      {/* EM.2 — L'Imam Mâlik */}
      <SectionTitle number="EM.2" title="L'Imam Mâlik ibn Anas" arabic="الإمام مالك بن أنس" icon="👤" />
      <Card>
        <SubSectionTitle title="Biographie" />
        <Table
          headers={["Élément", "Détails"]}
          rows={[
            ["Nom complet", "Abû 'Abdillâh Mâlik ibn Anas ibn Mâlik al-Asbahî"],
            ["Naissance", "93 H / 711 G — Médine"],
            ["Décès", "179 H / 795 G — Médine, à 86 ans"],
            ["Origine", "Tribu yéménite des Banû Asbah"],
            ["Maîtres principaux", "Nâfi' (mawlâ d'Ibn 'Umar), Ibn Shihâb az-Zuhrî, Rabî'a ar-Ra'y, Ja'far as-Sâdiq"],
            ["Élèves célèbres", "Imam ash-Shâfi'î, Ibn Wahb, Ibn al-Qâsim, Ashhab, Yahyâ al-Laythî"],
          ]}
        />

        <SubSectionTitle title="Sa méthode et son tempérament" />
        <ul className="list-disc list-inside space-y-2 text-stone-600 dark:text-slate-300 text-sm">
          <li>Resté toute sa vie à Médine, refusant les invitations des califes pour préserver son indépendance</li>
          <li>Connu pour sa <strong>prudence (وَرَع)</strong> : sur 48 000 questions, il répondait souvent « je ne sais pas »</li>
          <li>Enseignait dans la <em>Mosquée du Prophète ﷺ</em>, à l'endroit même où le Prophète priait</li>
          <li>N'écrivait des hadiths qu'après ablutions, par révérence</li>
          <li>Fouetté par le gouverneur abbasside pour avoir maintenu une fatwa contre la politique du calife — sans jamais la rétracter</li>
        </ul>

        <DalilBox
          type="hadith"
          reference="Tirmidhî 2680"
          arabic="يُوشِكُ أَنْ يَضْرِبَ النَّاسُ أَكْبَادَ الإِبِلِ يَطْلُبُونَ الْعِلْمَ، فَلاَ يَجِدُونَ أَعْلَمَ مِنْ عَالِمِ الْمَدِينَةِ"
          translation="Il est proche le temps où les gens frapperont le flanc de leurs montures à la recherche du savoir, et ils ne trouveront aucun savant plus érudit que le savant de Médine."
          source="Hadith que de nombreux savants ont appliqué à l'Imam Mâlik"
        />
      </Card>

      {/* EM.3 — Histoire et expansion */}
      <SectionTitle number="EM.3" title="Histoire et expansion du madhhab" arabic="تاريخ المذهب وانتشاره" icon="🌍" />
      <Card>
        <SubSectionTitle title="Les grandes étapes" />
        <Table
          headers={["Période", "Événement"]}
          rows={[
            ["IIème s. H (VIIIe G)", "Vie de l'Imam Mâlik à Médine — rédaction du Muwatta'"],
            ["IIIème s. H (IXe G)", "Diffusion par les disciples : Égypte (Ibn al-Qâsim), Maghreb (Asad ibn al-Furât), Andalousie (Yahyâ al-Laythî)"],
            ["IVe–VIe s. H", "Âge d'or au Maghreb et en Andalousie ; codification (Mudawwana, Risâla)"],
            ["VIIe–VIIIe s. H", "Œuvres de synthèse : Ibn al-Hâjib, al-Qarâfî, Ibn Rushd al-Hafîd"],
            ["IXe s. H", "Khalîl ibn Ishâq al-Jundî rédige son Mukhtaṣar — texte de référence jusqu'aujourd'hui"],
            ["XIIe–XIVe s. H", "Réformes et commentaires modernes (Dardîr, Dasûqî, 'Illîsh)"],
            ["Époque moderne", "Maintien comme école officielle au Maroc, Mauritanie, Algérie, Tunisie, Libye, Afrique de l'Ouest"],
          ]}
        />

        <SubSectionTitle title="Diffusion géographique actuelle" />
        <p className="text-stone-600 dark:text-slate-300 text-sm mb-3">
          Le madhhab malikite est aujourd'hui dominant dans :
        </p>
        <ul className="list-disc list-inside space-y-1 text-stone-600 dark:text-slate-300 text-sm">
          <li><strong>Maghreb</strong> : Maroc, Algérie, Tunisie, Libye, Mauritanie</li>
          <li><strong>Afrique de l'Ouest</strong> : Sénégal, Mali, Niger, Tchad, Nigeria (nord), Gambie, Guinée</li>
          <li><strong>Égypte (Haute-Égypte)</strong> et Soudan</li>
          <li><strong>Émirats du Golfe</strong> : présence historique au Koweït, Bahreïn, certaines zones d'Arabie</li>
          <li>Communautés diasporiques en Europe et en Amérique du Nord</li>
        </ul>
      </Card>

      {/* EM.4 — Sources juridiques */}
      <SectionTitle number="EM.4" title="Les sources juridiques (أصول المذهب)" arabic="أصول الفقه المالكي" icon="📚" />
      <Card>
        <p className="text-stone-600 dark:text-slate-300 mb-3 text-sm">
          L'école malikite reconnaît <strong>plus de sources</strong> que la plupart des autres
          écoles, ce qui lui confère une grande souplesse pratique :
        </p>
        <Table
          headers={["#", "Source", "Description"]}
          rows={[
            ["1", "Le Coran (القرآن)", "Source première et absolue"],
            ["2", "La Sunna (السنة)", "Paroles, actes et approbations du Prophète ﷺ"],
            ["3", "Le consensus ('Ijmâ' — الإجماع)", "Accord unanime des savants"],
            ["4", "L'opinion du Compagnon (قول الصحابي)", "Quand elle ne contredit pas un texte"],
            ["5", "La pratique de Médine (عمل أهل المدينة)", "Spécificité malikite majeure"],
            ["6", "L'analogie (al-Qiyâs — القياس)", "Raisonnement par analogie sur un cas attesté"],
            ["7", "L'intérêt général (al-Maslaha al-Mursala — المصلحة المرسلة)", "Spécificité malikite : prendre en compte l'intérêt public"],
            ["8", "L'usage habituel ('Urf — العرف)", "Coutumes locales tant qu'elles ne contredisent pas la sharî'a"],
            ["9", "L'istihsân (الاستحسان)", "Préférence juridique pour des raisons d'équité"],
            ["10", "Sadd adh-dharâ'i' (سد الذرائع)", "Bloquer les moyens menant à l'illicite — fortement développé chez les Malikites"],
          ]}
        />
        <AlertBox type="special" title="💡 Particularité : les 10 sources malikites">
          Là où les Hanbalites se limitent à 4–5 sources et les Shafi'ites à 4, les
          Malikites en reconnaissent jusqu'à 10. Cela explique la <strong>flexibilité pratique</strong>
          du madhhab face aux situations nouvelles, tout en restant solidement ancré dans
          la tradition de Médine.
        </AlertBox>
      </Card>

      {/* EM.5 — Œuvres fondatrices */}
      <SectionTitle number="EM.5" title="Les œuvres fondatrices" arabic="أمهات الكتب" icon="📖" />
      <Card>
        <Table
          headers={["Œuvre", "Auteur", "Époque", "Importance"]}
          rows={[
            ["Al-Muwatta' (الموطأ)", "Imam Mâlik", "IIe s. H", "Premier recueil systématique de hadith et de fiqh ; appelé par Shâfi'î « le livre le plus authentique après le Coran »"],
            ["Al-Mudawwana al-Kubrâ (المدونة الكبرى)", "Sahnûn (selon Ibn al-Qâsim)", "IIIe s. H", "Recueil des positions de l'Imam Mâlik via ses disciples — base du madhhab"],
            ["Ar-Risâla (الرسالة)", "Ibn Abî Zayd al-Qayrawânî", "IVe s. H", "Manuel de référence pour débutants, encore enseigné aujourd'hui"],
            ["Al-Mukhtasar (مختصر خليل)", "Khalîl ibn Ishâq", "VIIIe s. H", "Synthèse condensée du madhhab — texte officiel d'enseignement"],
            ["Bidâyat al-Mujtahid (بداية المجتهد)", "Ibn Rushd al-Hafîd (Averroès)", "VIe s. H", "Fiqh comparé entre les écoles, perspective malikite"],
            ["Ash-Sharh al-Kabîr (الشرح الكبير)", "Ad-Dardîr / Ad-Dasûqî", "XIIe s. H", "Commentaire majeur du Mukhtasar de Khalîl"],
          ]}
        />
      </Card>

      {/* EM.6 — Spécificités */}
      <SectionTitle number="EM.6" title="Spécificités du madhhab" arabic="خصائص المذهب" icon="✨" />
      <Card>
        <SubSectionTitle title="Caractéristiques distinctives" />
        <ul className="list-disc list-inside space-y-2 text-stone-600 dark:text-slate-300 text-sm">
          <li><strong>Primauté de la pratique médinoise</strong> sur le hadith isolé (khabar al-âhâd) en cas de conflit</li>
          <li><strong>Forte considération de l'intérêt public</strong> (maslaha) — adapté aux contextes variés</li>
          <li><strong>Sadd adh-dharâ'i'</strong> très développé : prévention des moyens menant au péché</li>
          <li><strong>Méthodologie pragmatique</strong> ancrée dans la réalité concrète</li>
          <li><strong>Tolérance interne</strong> : reconnaissance de plusieurs avis (mashhûr, râjih, dha'îf) dans le madhhab</li>
        </ul>

        <SubSectionTitle title="Quelques particularités en matière de prière" />
        <ul className="list-disc list-inside space-y-1 text-stone-600 dark:text-slate-300 text-sm">
          <li>Bras le long du corps (sadl) — la position d'origine selon la pratique de Médine</li>
          <li>Pas de Basmala à voix haute, ni à voix basse, avant la Fatiha</li>
          <li>Qunût uniquement à Subh, avant le ruku', à voix basse</li>
          <li>Tashahud avec les doigts en référence (forme particulière)</li>
          <li>Sujûd as-sahw suivi obligatoirement d'un tashahud et d'un taslim</li>
        </ul>
      </Card>

      <AlertBox type="success" title="En résumé">
        Né à Médine au IIe siècle de l'Hégire, transmis par des disciples remarquables
        en Égypte, au Maghreb et en Andalousie, codifié par des œuvres monumentales
        (Muwatta', Mudawwana, Risâla, Mukhtasar de Khalîl), le madhhab malikite est
        aujourd'hui le madhhab dominant de tout l'Occident musulman et d'une grande
        partie de l'Afrique. Sa méthode allie <strong>fidélité à la pratique vivante de
        Médine</strong> et <strong>souplesse face aux réalités contemporaines</strong>.
      </AlertBox>
    </div>
  );
}
