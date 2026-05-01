import { Card, SectionTitle, SubSectionTitle, AlertBox, ArabicText, Table, Badge, DalilBox, CasPratiqueList, Term, type CasPratiqueItem } from "../ui";

const casPratiquesReparation: CasPratiqueItem[] = [
  {
    title: "Oubli du premier tashahud — debout pour la 3ème rak'a",
    scenario: "Vous priez Dhuhr. Après la 2ème rak'a, vous vous levez directement sans vous asseoir.",
    regle: "Si vous n'êtes pas encore complètement debout (genoux non décollés) : revenir s'asseoir et réciter. Si déjà debout : continuer + Sujûd QABLI.",
    badge: { label: "Sujûd Qabli", color: "amber" },
  },
  {
    title: "Oubli de la Fatiha (pilier)",
    scenario: "Vous réalisez en plein ruku' que vous n'avez pas récité la Fatiha.",
    regle: "La rak'a est invalide. Selon l'avis prépondérant : la rak'a suivante remplacera celle-ci. Continuer la prière + Sujûd Ba'di. Si on s'en aperçoit après le salam (court délai) : ajouter une rak'a complète.",
    badge: { label: "Sujûd Ba'di", color: "blue" },
  },
  {
    title: "Oubli du Qunût de Subh",
    scenario: "Vous priez Subh et oubliez complètement le Qunût.",
    regle: "Sujûd QABLI avant le salam. Le Qunût étant une sunna confirmée chez les Malikites.",
    badge: { label: "Sujûd Qabli", color: "amber" },
  },
  {
    title: "Doute sur le nombre de rak'at — Dhuhr",
    scenario: "Vous ne savez plus si vous avez fait 2 ou 3 rak'at.",
    regle: "Impression dominante (ex : « plutôt 3 ») → la suivre + Sujûd Ba'di. Doute total équilibré → prendre 2 (le moins) + Sujûd Ba'di.",
    badge: { label: "Sujûd Ba'di", color: "blue" },
  },
  {
    title: "Ajout involontaire d'une 5ème rak'a",
    scenario: "Vous priez Dhuhr et faites une rak'a en trop.",
    regle: "Si découvert pendant la 5ème : s'asseoir immédiatement, tashahud, salam, Sujûd Ba'di. Si découvert après le salam : Sujûd Ba'di immédiat.",
    badge: { label: "Sujûd Ba'di", color: "blue" },
  },
  {
    title: "Récitation à voix basse là où c'est jehr",
    scenario: "Vous priez Maghrib seul et réalisez que vous avez récité à voix basse les 2 premières rak'at.",
    regle: "Sujûd QABLI avant le salam. L'omission du jehr est une omission de sunna confirmée.",
    badge: { label: "Sujûd Qabli", color: "amber" },
  },
  {
    title: "Doute sur le ruku'",
    scenario: "Vous êtes en sujûd et doutez d'avoir fait le ruku'.",
    regle: "Premier doute : se relever, faire le ruku', continuer la rak'a + Sujûd Ba'di. Doute fréquent (waswas) : ignorer.",
    badge: { label: "Sujûd Ba'di", color: "blue" },
  },
  {
    title: "Salam prématuré (avant la fin)",
    scenario: "Vous dites le Taslim après la 3ème rak'a de Dhuhr croyant avoir fini.",
    regle: "Si court délai : reprendre, accomplir la rak'a manquante, salam + Sujûd Ba'di pour le salam excédentaire. Si long délai : refaire la prière.",
    badge: { label: "Sujûd Ba'di", color: "blue" },
  },
  {
    title: "Omission de 3 sunnas confirmées",
    scenario: "Vous oubliez le 1er tashahud, la Salat Ibrahimiyya, et le jehr d'une rak'a.",
    regle: "Selon l'avis prépondérant : la prière doit être recommencée. L'accumulation altère la forme essentielle.",
    badge: { label: "Refaire", color: "red" },
  },
  {
    title: "Combinaison omission + ajout",
    scenario: "Vous oubliez le 1er tashahud ET ajoutez une rak'a en trop.",
    regle: "Le Qabli prime : un seul Sujûd QABLI avant le salam. L'omission l'emporte sur l'ajout.",
    badge: { label: "Sujûd Qabli (prime)", color: "amber" },
  },
  {
    title: "Oubli du Sujûd as-Sahw lui-même",
    scenario: "Vous deviez faire un Sujûd Ba'di mais avez quitté la mosquée sans l'accomplir.",
    regle: "Court délai : l'accomplir dès qu'on s'en souvient (même chez soi). Long délai (jours) : avis partagé — l'accomplir si possible, sinon la prière reste valide pour l'omission d'un Sujûd Ba'di lié à un ajout léger.",
    badge: { label: "Variable", color: "purple" },
  },
  {
    title: "Suivi d'un imam qui se trompe",
    scenario: "L'imam ajoute une rak'a. Vous le suivez ou non ?",
    regle: "Si vous êtes certain de l'erreur : NE PAS le suivre. Vous restez assis au tashahud. À la fin : faire le salam avec lui. L'imam fait le Sujûd Ba'di et vous le suivez. Si simple doute : suivre l'imam.",
    badge: { label: "Sujûd Ba'di", color: "blue" },
  },
];

export default function ReparationPriere() {
  return (
    <div className="space-y-6">
      {/* RP — Introduction */}
      <SectionTitle number="RP.1" title="Introduction" arabic="مقدمة" icon="📖" />
      <Card>
        <p className="text-stone-600 dark:text-slate-300 mb-3">
          La <strong>réparation de la prière (إصلاح الصلاة)</strong> regroupe l'ensemble des règles
          permettant de corriger les erreurs commises involontairement durant la salat :
          omissions, ajouts et doutes. L'école malikite traite ce sujet avec une grande
          précision, distinguant la nature de l'erreur, son moment et le statut de l'acte
          omis ou ajouté (pilier <Term>fard</Term>, <Term>sunna</Term> confirmée, sunna légère, <Term>mandûb</Term>).
        </p>
        <p className="text-stone-600 dark:text-slate-300 mb-3">
          Trois mécanismes principaux permettent la réparation :
        </p>
        <ul className="list-disc list-inside space-y-2 text-stone-600 dark:text-slate-300">
          <li><Term k="sujûd as-sahw"><strong>Sujûd as-sahw (سجود السهو)</strong></Term> — la prosternation d'inattention</li>
          <li><Term k="tadâruk"><strong>Tadâruk (التدارك)</strong></Term> — le rattrapage immédiat de l'acte oublié</li>
          <li><strong>Bina' / Ibtal (البناء أو الإبطال)</strong> — continuer ou recommencer la prière</li>
        </ul>
        <DalilBox
          type="hadith"
          reference="Bukhari 401, Muslim 572"
          arabic="إِنَّمَا أَنَا بَشَرٌ مِثْلُكُمْ أَنْسَى كَمَا تَنْسَوْنَ، فَإِذَا نَسِيتُ فَذَكِّرُونِي"
          translation="Je ne suis qu'un être humain comme vous : j'oublie comme vous oubliez. Si j'oublie, rappelez-le moi."
          source="Hadith fondateur de la jurisprudence du sahw"
        />
      </Card>

      {/* RP.2 — Principes de base */}
      <SectionTitle number="RP.2" title="Principes de base" arabic="القواعد الأساسية" icon="🧭" />
      <Card>
        <SubSectionTitle title="Les trois catégories d'erreur" />
        <Table
          headers={["Catégorie", "Définition", "Solution malikite"]}
          rows={[
            ["Oubli (نقص)", "Omission d'un acte de la prière", "Tadâruk si possible, sinon Sujûd Qabli"],
            ["Ajout (زيادة)", "Acte fait en trop par inattention", "Sujûd Ba'di après le salam"],
            ["Doute (شك)", "Hésitation sur le nombre ou l'accomplissement", "Bâtir sur le certain + Sujûd Ba'di"],
          ]}
        />

        <SubSectionTitle title="Hiérarchie des actes : que se passe-t-il en cas d'omission ?" />
        <Table
          headers={["Niveau", "Acte omis", "Conséquence"]}
          rows={[
            ["Pilier (فرض / ركن)", "Ex : ruku', sujûd, Fatiha, niyyah", "La rak'a est nulle — il faut la rattraper"],
            ["Sunna confirmée (سنة مؤكدة)", "Ex : 1er tashahud, Qunût, sourate, jehr", "Sujûd QABLI (avant le salam)"],
            ["Sunna légère / mandub", "Ex : lever les mains, dhikr du ruku'", "Aucune réparation requise"],
            ["Condition (شرط)", "Ex : pureté, qibla, awra", "Prière invalide — recommencer"],
          ]}
        />

        <AlertBox type="special" title="💡 Règle d'or malikite : Qabli pour l'omission, Ba'di pour l'ajout">
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li><strong>Sujûd QABLI</strong> (قبلي — avant le salam) : pour réparer l'<strong>omission</strong> d'une sunna confirmée</li>
            <li><strong>Sujûd BA'DI</strong> (بعدي — après le salam) : pour réparer un <strong>ajout</strong> involontaire</li>
            <li><strong>Combinaison omission + ajout</strong> : le Qabli prime — un seul sujûd, AVANT le salam</li>
            <li><strong>Omission de 3 sunnas confirmées ou plus</strong> : la prière doit être recommencée selon l'avis prépondérant</li>
          </ul>
        </AlertBox>

        <SubSectionTitle title="L'intention dans la réparation" />
        <p className="text-stone-600 dark:text-slate-300 text-sm">
          La <strong>niyyah du sujûd as-sahw</strong> n'a pas besoin d'être verbalisée : il suffit
          de savoir intérieurement qu'on l'accomplit pour réparer la prière. L'intention initiale
          de la prière couvre l'ensemble, y compris les actes de réparation qui en font partie.
        </p>
      </Card>

      {/* RP.3 — Le Sujûd as-Sahw */}
      <SectionTitle number="RP.3" title="Le Sujûd as-Sahw" arabic="سجود السهو" icon="🔄" />
      <Card>
        <SubSectionTitle title="Définition et statut" />
        <p className="text-stone-600 dark:text-slate-300 mb-3">
          Le <strong>Sujûd as-Sahw</strong> consiste en <strong>deux prosternations</strong>
          accomplies pour compenser un oubli ou un ajout involontaire. Son statut chez les
          Malikites :
        </p>
        <ul className="list-disc list-inside space-y-1 text-stone-600 dark:text-slate-300 text-sm">
          <li><strong>Sunna confirmée</strong> quand il est dû à une omission ou un ajout léger</li>
          <li><strong>Obligatoire (wâjib)</strong> selon certains, dans le cas d'un ajout important</li>
          <li>Son omission volontaire après obligation peut <strong>annuler la prière</strong> si beaucoup de temps s'écoule</li>
        </ul>

        <SubSectionTitle title="Description du Sujûd QABLI (avant le salam)" />
        <ol className="list-decimal list-inside space-y-2 text-sm text-stone-600 dark:text-slate-300">
          <li>Après le dernier tashahud et la Salat Ibrahimiyya</li>
          <li>Dire <strong>Allahu Akbar</strong> et descendre en prosternation</li>
          <li>Première prosternation avec tuma'nina + dhikr du sujûd</li>
          <li>Se relever assis (jalsa) en disant Allahu Akbar</li>
          <li>Deuxième prosternation</li>
          <li>S'asseoir et <strong>réciter le Tashahud</strong> (spécificité malikite)</li>
          <li>Faire le <strong>Taslim</strong> final</li>
        </ol>

        <SubSectionTitle title="Description du Sujûd BA'DI (après le salam)" />
        <ol className="list-decimal list-inside space-y-2 text-sm text-stone-600 dark:text-slate-300">
          <li>Faire le Taslim normal de fin de prière</li>
          <li>Dire <strong>Allahu Akbar</strong> et se prosterner immédiatement (sans long délai)</li>
          <li>Deux prosternations comme décrit ci-dessus</li>
          <li>Tashahud en position assise</li>
          <li>Taslim final</li>
        </ol>

        <AlertBox type="info" title="Spécificité malikite : le Tashahud dans le Sujûd as-Sahw">
          Contrairement aux Hanafites et à certains Shafi'ites, les Malikites considèrent
          que le sujûd as-sahw <strong>doit être suivi d'un Tashahud puis d'un Taslim</strong>.
          C'est l'avis de l'Imam Mâlik rapporté dans la <em>Mudawwana</em>.
        </AlertBox>

        <div className="bg-emerald-50 dark:bg-emerald-950/40 rounded-xl p-4 mt-4">
          <p className="font-bold text-emerald-900 dark:text-emerald-300 mb-2">Dhikr durant le sujûd as-sahw :</p>
          <ArabicText size="md" className="text-emerald-900 dark:text-emerald-300">سُبْحَانَ مَنْ لَا يَنَامُ وَلَا يَسْهُو</ArabicText>
          <p className="text-stone-500 dark:text-slate-400 text-xs mt-2">
            <em>Subhâna man lâ yanâmu wa lâ yashû</em> — « Gloire à Celui qui ne dort pas et ne se trompe pas ».
            Le dhikr ordinaire du sujûd (<em>Subhâna rabbiyâ-l-a'lâ</em>) est également valide.
          </p>
        </div>

        <SubSectionTitle title="Délai pour le Sujûd Ba'di" />
        <p className="text-stone-600 dark:text-slate-300 text-sm">
          Si le sujûd ba'di est différé pour une longue durée (sortie de la mosquée, perte
          de l'état rituel, etc.) :
        </p>
        <ul className="list-disc list-inside space-y-1 text-stone-600 dark:text-slate-300 text-sm mt-2">
          <li><strong>Court délai</strong> : on l'accomplit dès qu'on s'en souvient</li>
          <li><strong>Long délai</strong> : on l'accomplit dès qu'on s'en souvient, même après plusieurs jours</li>
          <li><strong>Cas grave (ajout d'une rak'a entière)</strong> : si le délai est très long, certains exigent de refaire la prière</li>
        </ul>
      </Card>

      {/* RP.4 — Les oublis */}
      <SectionTitle number="RP.4" title="Les oublis" arabic="النقص في الصلاة" icon="📉" />
      <Card>
        <SubSectionTitle title="A — Oubli d'un pilier (fard)" />
        <p className="text-stone-600 dark:text-slate-300 mb-3 text-sm">
          L'oubli d'un pilier ne se répare pas par un simple sujûd : il faut <strong>rattraper
          le pilier</strong> ou la rak'a entière selon le moment où l'on s'en aperçoit.
        </p>
        <Table
          headers={["Moment de la prise de conscience", "Solution"]}
          rows={[
            ["Avant de quitter la position (rak'a en cours)", "Revenir et accomplir le pilier oublié"],
            ["Après avoir entamé la rak'a suivante", "La rak'a en cours remplace celle qui était défectueuse — continuer + Sujûd Ba'di"],
            ["Après le salam, court délai", "Accomplir une rak'a complète + Sujûd Ba'di"],
            ["Après le salam, long délai", "Refaire toute la prière selon l'avis prépondérant"],
            ["Oubli de la niyyah ou du takbir d'ihram", "Prière invalide — recommencer entièrement"],
          ]}
        />

        <SubSectionTitle title="B — Oubli d'une sunna confirmée" />
        <Table
          headers={["Sunna oubliée", "Réparation"]}
          rows={[
            ["Premier tashahud", <Badge color="amber">Sujûd Qabli</Badge>],
            ["Sourate après la Fatiha (1ère ou 2ème rak'a)", <Badge color="amber">Sujûd Qabli</Badge>],
            ["Qunût de Subh", <Badge color="amber">Sujûd Qabli</Badge>],
            ["Récitation à voix haute (jehr)", <Badge color="amber">Sujûd Qabli</Badge>],
            ["Récitation à voix basse (sirr) là où c'est requis", <Badge color="amber">Sujûd Qabli</Badge>],
            ["Salat Ibrahimiyya finale", <Badge color="amber">Sujûd Qabli</Badge>],
            ["Takbir de transition (hors ihram)", <Badge color="amber">Sujûd Qabli</Badge>],
            ["Sami'a-llâhu liman hamidah", <Badge color="amber">Sujûd Qabli</Badge>],
          ]}
        />

        <AlertBox type="warning" title="Seuil critique : 3 sunnas omises">
          Si le prieur a omis <strong>3 sunnas confirmées ou plus</strong> dans la même prière,
          la position prépondérante chez les Malikites est que la prière doit être
          <strong> recommencée</strong>, car l'accumulation d'omissions altère la forme essentielle
          de la salat.
        </AlertBox>

        <SubSectionTitle title="C — Oubli d'un acte recommandé (mandub)" />
        <p className="text-stone-600 dark:text-slate-300 text-sm">
          L'oubli d'un acte simplement recommandé (<em>fadâ'il</em>) — comme lever les mains au
          takbir d'ihram, certaines invocations, etc. — <strong>ne nécessite aucune réparation</strong>.
          Le sujûd as-sahw n'est ni requis ni même légiféré pour ces oublis.
        </p>
      </Card>

      {/* RP.5 — Les ajouts */}
      <SectionTitle number="RP.5" title="Les ajouts" arabic="الزيادة في الصلاة" icon="📈" />
      <Card>
        <SubSectionTitle title="A — Ajout d'un acte de même nature" />
        <p className="text-stone-600 dark:text-slate-300 text-sm mb-3">
          Tout ajout involontaire d'un acte appartenant à la prière (rak'a, prosternation,
          tashahud, position assise) entraîne le <strong>Sujûd Ba'di</strong>.
        </p>
        <Table
          headers={["Type d'ajout", "Exemple", "Réparation"]}
          rows={[
            ["Rak'a entière", "5ème rak'a à Dhuhr", <Badge color="blue">Sujûd Ba'di</Badge>],
            ["Prosternation supplémentaire", "3ème sujûd dans une rak'a", <Badge color="blue">Sujûd Ba'di</Badge>],
            ["Ruku' supplémentaire", "Deuxième ruku' dans la même rak'a", <Badge color="blue">Sujûd Ba'di</Badge>],
            ["Position assise au mauvais moment", "Tashahud après la 1ère rak'a", <Badge color="blue">Sujûd Ba'di</Badge>],
            ["Lecture de Fatiha dans les 3ème/4ème rak'at à voix haute", "Inversion du sirr et du jehr", <Badge color="blue">Sujûd Ba'di</Badge>],
          ]}
        />

        <SubSectionTitle title="B — Ajout volontaire" />
        <AlertBox type="warning" title="Ajout volontaire = annulation">
          Un ajout fait <strong>volontairement</strong> et en sachant qu'il est étranger à la
          prière (ex : faire exprès une 5ème rak'a) <strong>annule la prière</strong> et oblige
          à la recommencer. Le sujûd as-sahw ne couvre que les ajouts par inadvertance.
        </AlertBox>

        <SubSectionTitle title="C — Paroles et mouvements étrangers" />
        <ul className="list-disc list-inside space-y-2 text-stone-600 dark:text-slate-300 text-sm">
          <li><strong>Parole intentionnelle non liée à la prière</strong> → annule la prière</li>
          <li><strong>Parole involontaire (lapsus, éternuement avec hamdallah)</strong> → pas d'annulation, pas de sujûd</li>
          <li><strong>Mouvement léger</strong> (gratter, ajuster son vêtement) → toléré</li>
          <li><strong>Mouvement excessif et continu</strong> (3 mouvements continus selon certains) → annule la prière</li>
        </ul>
      </Card>

      {/* RP.6 — Les doutes */}
      <SectionTitle number="RP.6" title="Les doutes" arabic="الشك في الصلاة" icon="❓" />
      <Card>
        <SubSectionTitle title="Méthodologie malikite face au doute" />
        <p className="text-stone-600 dark:text-slate-300 text-sm mb-3">
          La règle malikite distingue clairement entre l'<strong>impression dominante (غالب الظن)</strong>
          et le <strong>doute total équilibré (شك)</strong> :
        </p>
        <Table
          headers={["État mental", "Conduite à tenir", "Sujûd"]}
          rows={[
            ["Impression dominante (ظن غالب)", "Suivre cette impression", "Sujûd Ba'di"],
            ["Doute équilibré (شك مستوي)", "Bâtir sur le moins certain (le plus petit nombre)", "Sujûd Ba'di"],
            ["Doute fréquent / waswas", "Ignorer et continuer", "Pas de sujûd"],
            ["Premier doute après une longue pratique sans erreur", "Vérifier et bâtir sur le certain", "Sujûd Ba'di"],
          ]}
        />

        <AlertBox type="info" title="Différence avec l'école shafi'ite">
          Les Shafi'ites bâtissent <strong>toujours sur le certain (le moins)</strong> en cas
          de doute. Les Malikites permettent de suivre l'<strong>impression dominante</strong> si
          elle est claire — c'est une facilité propre au madhhab.
        </AlertBox>

        <SubSectionTitle title="Cas du doute persistant (waswas)" />
        <p className="text-stone-600 dark:text-slate-300 text-sm">
          Celui qui souffre de doutes répétés et compulsifs (<em>al-muwaswas</em>) doit
          <strong> ignorer ces doutes</strong> et continuer sa prière sans aucun sujûd. Cette règle
          vise à protéger contre les troubles obsessionnels et les manœuvres du Shaytan.
        </p>
        <DalilBox
          type="hadith"
          reference="Muslim 389"
          arabic="إِذَا نُودِيَ لِلصَّلَاةِ أَدْبَرَ الشَّيْطَانُ... حَتَّى يَظَلَّ الرَّجُلُ لَا يَدْرِي كَمْ صَلَّى"
          translation="Quand l'appel à la prière est lancé, Shaytan s'enfuit... [puis revient] jusqu'à ce que l'homme ne sache plus combien de rak'at il a accomplies."
        />
      </Card>

      {/* RP.7 — 12 cas pratiques */}
      <SectionTitle number="RP.7" title="12 cas pratiques détaillés" arabic="مسائل عملية" icon="💼" />
      <Card>
        <CasPratiqueList items={casPratiquesReparation} />
      </Card>
      {/* RP.8 — Tableau synthétique */}
      <SectionTitle number="RP.8" title="Tableau synthétique général" arabic="جدول جامع" icon="📊" />
      <Card>
        <Table
          headers={["Situation", "Nature", "Réparation", "Moment"]}
          rows={[
            ["Oubli d'un pilier (rak'a entière)", "Pilier", "Rattraper la rak'a", "Avant ou après salam"],
            ["Oubli de la Fatiha", "Pilier", "Rak'a suivante remplace + Sujûd Ba'di", "Selon le moment"],
            ["Oubli du 1er tashahud", "Sunna", "Sujûd Qabli ⬆️", "Avant salam"],
            ["Oubli de la sourate", "Sunna", "Sujûd Qabli ⬆️", "Avant salam"],
            ["Oubli du Qunût (Subh)", "Sunna", "Sujûd Qabli ⬆️", "Avant salam"],
            ["Oubli du jehr ou sirr", "Sunna", "Sujûd Qabli ⬆️", "Avant salam"],
            ["Oubli de la Salat Ibrahimiyya", "Sunna", "Sujûd Qabli ⬆️", "Avant salam"],
            ["Ajout d'une rak'a", "Ajout", "Sujûd Ba'di ⬇️", "Après salam"],
            ["Ajout d'un sujûd ou ruku'", "Ajout", "Sujûd Ba'di ⬇️", "Après salam"],
            ["Doute (impression dominante)", "Doute", "Suivre + Sujûd Ba'di ⬇️", "Après salam"],
            ["Doute total équilibré", "Doute", "Bâtir sur le moins + Sujûd Ba'di", "Après salam"],
            ["Doute compulsif (waswas)", "Doute", "Ignorer", "Aucun"],
            ["Omission + Ajout combinés", "Mixte", "Sujûd Qabli (prime) ⬆️", "Avant salam"],
            ["3 sunnas omises ou plus", "Cumul", "Recommencer la prière", "—"],
            ["Salam prématuré (court délai)", "Ajout", "Compléter + Sujûd Ba'di", "Après"],
            ["Parole/mouvement involontaire léger", "Toléré", "Aucune", "—"],
            ["Parole volontaire / mouvement excessif", "Annulant", "Recommencer", "—"],
          ]}
        />
      </Card>

      {/* RP.9 — FAQ */}
      <SectionTitle number="RP.9" title="Foire aux questions" arabic="أسئلة شائعة" icon="❓" />
      <Card>
        <div className="space-y-4">
          {[
            {
              q: "Si je suis derrière un imam et que JE oublie une sunna, dois-je faire le Sujûd as-Sahw ?",
              r: "Non. Le ma'mûm (suiveur) ne fait pas de Sujûd as-Sahw pour ses propres oublis : l'imam les porte. En revanche, si l'IMAM fait un sujûd as-sahw, le ma'mûm le suit obligatoirement.",
            },
            {
              q: "J'ai oublié de faire le Sujûd Ba'di après le salam et je ne m'en souviens que le lendemain. Que faire ?",
              r: "Selon l'avis le plus solide chez les Malikites : l'accomplir dès qu'on s'en souvient, même un jour ou plusieurs jours après, en ayant la pureté rituelle. Si l'oubli a duré très longtemps et concernait un ajout grave (rak'a entière), certains exigent de refaire la prière par précaution.",
            },
            {
              q: "Puis-je faire le Sujûd Qabli APRÈS le salam si je l'ai oublié ?",
              r: "Oui. Si on a oublié le sujûd qabli et qu'on a fait le salam, on l'accomplit dès qu'on s'en souvient (court délai), suivi d'un nouveau tashahud et d'un taslim — la prière reste valide.",
            },
            {
              q: "Le retardataire (masbuq) doit-il faire le Sujûd as-Sahw avec l'imam ?",
              r: "Oui pour le Sujûd QABLI : il le fait avec l'imam puis se relève pour compléter ses rak'at manquées. Pour le Sujûd BA'DI : il NE fait pas le salam avec l'imam, il complète sa prière, puis fait le ba'di après son propre salam.",
            },
            {
              q: "Si je doute, dois-je toujours faire le Sujûd Ba'di ?",
              r: "Oui dès lors qu'il y a doute réel ayant influencé une décision (ex : avoir compté une rak'a de plus ou de moins). Pas de sujûd pour les doutes compulsifs persistants (waswas).",
            },
            {
              q: "L'oubli d'un takbir intermédiaire nécessite-t-il un sujûd ?",
              r: "Oui — Sujûd QABLI. Les takbirs de transition (hors takbir d'ihram qui est un pilier) sont des sunnas confirmées chez les Malikites.",
            },
            {
              q: "J'ai parlé par inadvertance pendant la prière (« oui » à mon enfant). Ma prière est-elle valide ?",
              r: "Si la parole était volontaire et non liée à la prière, même brève, la prière est annulée et doit être recommencée. Si la parole a échappé totalement involontairement (cri d'effroi, éternuement avec hamdallah), pas d'annulation et pas de sujûd.",
            },
            {
              q: "Combien de temps après le salam puis-je encore faire le Sujûd Ba'di sans refaire la prière ?",
              r: "Tant qu'on est dans le « court délai » (mosquée, lieu de prière, sans rupture longue), c'est immédiat. Au-delà, on l'accomplit dès qu'on s'en souvient. Le seuil exact varie selon les fuqahâ' — la règle pratique : le plus tôt possible.",
            },
            {
              q: "Quel dhikr réciter pendant le Sujûd as-Sahw ?",
              r: "Le dhikr habituel du sujûd (Subhâna rabbiyâ-l-a'lâ) est valide. Certains rapportent la formule « Subhâna man lâ yanâmu wa lâ yashû » spécifique au sahw, mais elle n'est pas authentiquement établie comme obligatoire.",
            },
            {
              q: "Si l'imam fait un sujûd as-sahw que je juge erroné, dois-je le suivre ?",
              r: "Oui — le ma'mûm suit l'imam dans le sujûd as-sahw même s'il pense qu'il n'était pas requis, sauf certitude absolue d'erreur grave. La règle est : « l'imam est responsable, le suiveur le suit ».",
            },
          ].map((faq, i) => (
            <div key={i} className="border-l-4 border-emerald-500 pl-4 py-2">
              <p className="font-bold text-emerald-900 dark:text-emerald-300 mb-1">Q{i + 1}. {faq.q}</p>
              <p className="text-stone-600 dark:text-slate-300 text-sm">{faq.r}</p>
            </div>
          ))}
        </div>
      </Card>

      <AlertBox type="success" title="Conclusion">
        La réparation de la prière est une miséricorde : Allah n'a pas fait peser sur Ses
        serviteurs le poids de l'oubli. La règle générale à retenir reste simple :
        <strong> Qabli pour ce qui manque, Ba'di pour ce qui est en trop, et le Qabli prime
        en cas de combinaison</strong>.
      </AlertBox>
    </div>
  );
}
