import { Card, SectionTitle, SubSectionTitle, AlertBox, ArabicText, Table, Badge, CasPratiqueList, type CasPratiqueItem } from "../ui";

const casPratiquesPartie10: CasPratiqueItem[] = [
  {
    title: "Oubli du premier tashahud",
    scenario: "Vous priez Dhuhr (4 rak'at). Après la 2ème rak'a, vous vous levez directement pour la 3ème sans vous asseoir.",
    regle: "Si vous vous rappelez AVANT de vous redresser complètement : revenir s'asseoir et réciter le tashahud. Si vous êtes déjà debout : continuer la prière et faire le Sujud QABLI (avant le salam) pour compenser l'omission de la sunna.",
    badge: { label: "Sujud Qabli", color: "amber" },
  },
  {
    title: "Doute sur le nombre de rak'at",
    scenario: "En priant Dhuhr, vous ne savez plus si vous avez fait 2 ou 3 rak'at.",
    regle: "Si vous avez une impression dominante : suivez-la et faites le Sujud BA'DI. Si doute total : comptez le moins (2) comme certain, continuez, et faites le Sujud BA'DI.",
    badge: { label: "Sujud Ba'di", color: "blue" },
  },
  {
    title: "Ajout involontaire d'une 5ème rak'a à Dhuhr",
    scenario: "Vous priez Dhuhr et faites une 5ème rak'a complète par erreur.",
    regle: "Si vous vous en rendez compte dans la 5ème rak'a : terminez-la et faites le Sujud BA'DI. Si vous ne vous en rendez compte qu'après le salam : Sujud BA'DI immédiatement.",
    badge: { label: "Sujud Ba'di", color: "blue" },
  },
  {
    title: "Oubli du Qunût de Subh",
    scenario: "Vous priez Subh et oubliez complètement le Qunût.",
    regle: "Faites le Sujud QABLI (avant le salam) pour compenser l'omission de cette sunna confirmée.",
    badge: { label: "Sujud Qabli", color: "amber" },
  },
  {
    title: "Récitation à voix basse là où c'est sunna d'être à voix haute",
    scenario: "Vous priez Maghrib derrière l'imam mais réalisez que vous avez prié à voix basse dans les 2 premières rak'at.",
    regle: "L'imam fait le Sujud QABLI et les fidèles le suivent. Si vous priiez seul, vous faites le Sujud QABLI.",
    badge: { label: "Sujud Qabli", color: "amber" },
  },
  {
    title: "Oubli de la sourate après la Fatiha",
    scenario: "Dans la 1ère rak'a de 'Asr, vous n'avez récité que la Fatiha et êtes passé directement au ruku'.",
    regle: "Sujud QABLI à la fin pour compenser l'omission de la sourate (sunna).",
    badge: { label: "Sujud Qabli", color: "amber" },
  },
  {
    title: "Doute sur l'accomplissement du ruku'",
    scenario: "En position de sujud, vous doutez d'avoir fait le ruku' de cette rak'a.",
    regle: "Si c'est la première fois que ce doute vous saisit : se relever et faire le ruku', puis continuer. Si le doute est fréquent (وسواس) : l'ignorer et continuer — puis Sujud BA'DI.",
    badge: { label: "Sujud Ba'di", color: "blue" },
  },
  {
    title: "Oubli de la Salat Ibrahimiyya",
    scenario: "Après le tashahud final, vous avez dit le Taslim sans réciter la Salat Ibrahimiyya.",
    regle: "Sujud QABLI si vous n'avez pas encore fait le salam. Si le salam est déjà dit : recommencer le tashahud, Salat Ibrahimiyya, sujud QABLI, puis salam.",
    badge: { label: "Sujud Qabli", color: "amber" },
  },
  {
    title: "S'asseoir au mauvais moment (après la 1ère rak'a)",
    scenario: "Après la 1ère rak'a, vous vous asseyez par erreur comme pour le tashahud.",
    regle: "Vous vous rendez compte et vous levez immédiatement. Continuez la prière. Faites le Sujud BA'DI à la fin pour cet ajout involontaire.",
    badge: { label: "Sujud Ba'di", color: "blue" },
  },
  {
    title: "Combinaison d'omission et d'ajout",
    scenario: "Vous avez oublié le premier tashahud (omission = sunna) ET ajouté par erreur une rak'a (ajout).",
    regle: "Selon les malikites : l'omission prime — Sujud QABLI (avant le salam). La règle est : si les deux causes se combinent, le sujud QABLI prime sur le BA'DI.",
    badge: { label: "Sujud Qabli (prime)", color: "amber" },
  },
];

export default function Partie10() {
  return (
    <div className="space-y-6">
      <SectionTitle number="10.1" title="La Prosternation de Réparation" arabic="سجود السهو" icon="🔄" />
      <Card>
        <p className="text-stone-600 mb-4">
          Le <strong>Sujud Sahwi (سجود السهو)</strong> est composé de <strong>deux prosternations</strong> effectuées pour compenser les oublis et erreurs survenus involontairement dans la prière. C'est une sunna confirmée selon les Malikites.
        </p>
        <AlertBox type="special" title="💡 Règle Malikite fondamentale — AVANT ou APRÈS">
          <p className="font-bold mb-2">La règle malikite distingue clairement :</p>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li><strong>Sujud QABLI (قبلي — avant le salam)</strong> : pour l'<strong>omission</strong> d'une sunna</li>
            <li><strong>Sujud BA'DI (بعدي — après le salam)</strong> : pour l'<strong>ajout</strong> involontaire</li>
            <li><strong>Si les deux se combinent</strong> : le sujud QABLI prime (l'omission l'emporte)</li>
          </ul>
        </AlertBox>
      </Card>

      <SectionTitle number="10.2" title="Causes détaillées du Sujud Sahwi" arabic="أسباب سجود السهو" icon="📋" />
      <Card>
        <SubSectionTitle title="A — Causes du Sujud QABLI (avant le salam) — Omissions" />
        <Table
          headers={["Cause", "Description", "Type"]}
          rows={[
            ["Oubli du premier tashahud", "S'est levé pour la 3ème rak'a sans s'asseoir pour le tashahud", <Badge color="amber">Qabli</Badge>],
            ["Premier tashahud incomplet", "A récité le tashahud partiellement puis s'est levé", <Badge color="amber">Qabli</Badge>],
            ["Oubli de la sourate après la Fatiha", "N'a pas récité de sourate dans les 2 premières rak'at", <Badge color="amber">Qabli</Badge>],
            ["Oubli du Qunût à Subh", "A oublié le Qunût dans la prière de Subh", <Badge color="amber">Qabli</Badge>],
            ["Oubli du jehr (voix haute)", "A récité à voix basse là où c'était sunna de réciter à voix haute", <Badge color="amber">Qabli</Badge>],
            ["Omission de la Salat Ibrahimiyya", "A oublié de réciter les bénédictions sur le Prophète ﷺ", <Badge color="amber">Qabli</Badge>],
            ["Omission d'un takbir de déplacement (non ihram)", "A oublié de dire Allahu Akbar lors d'un mouvement", <Badge color="amber">Qabli</Badge>],
            ["Omission du 'Sami'allahu...'", "A oublié de dire cette formule en se relevant", <Badge color="amber">Qabli</Badge>],
          ]}
        />

        <SubSectionTitle title="B — Causes du Sujud BA'DI (après le salam) — Ajouts" />
        <Table
          headers={["Cause", "Description", "Type"]}
          rows={[
            ["Doute sur le nombre de rak'at", "Ne sait pas s'il a fait 2 ou 3 rak'at dans une prière de 4", <Badge color="blue">Ba'di</Badge>],
            ["Ajout involontaire d'une rak'a", "A fait une rak'a de trop par erreur et s'en est aperçu après le salam", <Badge color="blue">Ba'di</Badge>],
            ["Doute sur l'accomplissement d'un pilier", "Se demande s'il a fait le ruku' ou non — continue et fait le Ba'di", <Badge color="blue">Ba'di</Badge>],
            ["S'est assis au mauvais moment", "S'est assis pour le tashahud après la 1ère rak'a (se relève et continue)", <Badge color="blue">Ba'di</Badge>],
          ]}
        />

        <AlertBox type="warning" title="Règle du doute selon les Malikites">
          En cas de <strong>doute sur le nombre de rak'at</strong>, le Malikite fait ce qui suit :
          <ol className="list-decimal list-inside mt-2 text-sm space-y-1">
            <li>S'il a une <strong>impression dominante (غالب الظن)</strong> : il la suit et fait le sujud BA'DI après</li>
            <li>S'il est dans un <strong>doute total (شك)</strong> : il prend le nombre le plus petit (le certain) et fait le sujud BA'DI</li>
          </ol>
        </AlertBox>
      </Card>

      <SectionTitle number="10.3" title="Description du Sujud Sahwi" arabic="كيفية سجود السهو" icon="📖" />
      <Card>
        <SubSectionTitle title="Le Sujud Qabli (avant le salam)" />
        <div className="space-y-2 text-sm text-stone-600">
          <ol className="list-decimal list-inside space-y-2">
            <li>Après le dernier tashahud et la Salat Ibrahimiyya (ou à leur place s'il les a oubliés)</li>
            <li>Dire <strong>Allahu Akbar</strong> et se prosterner la première prosternation</li>
            <li>Rester un instant (tuma'nina) en disant <strong>« سبحان ربي الأعلى »</strong></li>
            <li>Se relever en disant Allahu Akbar — s'asseoir brièvement</li>
            <li>Se prosterner à nouveau (2ème prosternation)</li>
            <li>Se relever en position assise</li>
            <li>Dire <strong>le Tashahud (de nouveau)</strong></li>
            <li>Dire <strong>le Taslim</strong></li>
          </ol>
        </div>

        <SubSectionTitle title="Le Sujud Ba'di (après le salam)" />
        <div className="space-y-2 text-sm text-stone-600">
          <ol className="list-decimal list-inside space-y-2">
            <li>Dire le Taslim (fin normale de la prière)</li>
            <li>Dire <strong>Allahu Akbar</strong> et se prosterner immédiatement</li>
            <li>Deux prosternations comme le sujud qabli</li>
            <li>Dire le Tashahud en position assise</li>
            <li>Dire le Taslim à nouveau</li>
          </ol>
        </div>

        <AlertBox type="info" title="Le Tashahud dans le Sujud Sahwi">
          Selon les Malikites, un <strong>Tashahud doit être récité</strong> après les deux prosternations du sujud sahwi, suivi d'un Taslim. C'est une spécificité malikite — les Hanafites et certains Shafi'ites n'exigent pas de Tashahud dans le sujud sahwi.
        </AlertBox>

        <div className="bg-emerald-50 rounded-xl p-4 mt-4">
          <p className="font-bold text-emerald-900 mb-2">Formule dans le Sujud Sahwi :</p>
          <ArabicText size="md" className="text-emerald-900">سُبْحَانَ مَنْ لَا يَنَامُ وَلَا يَسْهُو</ArabicText>
          <p className="text-stone-500 text-xs mt-1">Subhāna man lā yanāmu wa lā yashu — « Gloire à Celui qui ne dort pas et ne se trompe pas » — Rapporté par certains, mais on peut aussi dire le dhikr ordinaire du sujud.</p>
        </div>
      </Card>

      <SectionTitle number="10.4" title="Cas Pratiques — 10 Situations" arabic="مسائل عملية" icon="💼" />
      <Card>
        <CasPratiqueList items={casPratiquesPartie10} />
      </Card>

      <SectionTitle number="10.5" title="Tableau récapitulatif" arabic="جدول ملخص" icon="📊" />
      <Card>
        <Table
          headers={["Situation", "Type de Sujud", "Moment"]}
          rows={[
            ["Omission du premier tashahud", "Qabli ⬆️", "Avant le salam"],
            ["Oubli du Qunût de Subh", "Qabli ⬆️", "Avant le salam"],
            ["Oubli de la sourate", "Qabli ⬆️", "Avant le salam"],
            ["Oubli du jehr", "Qabli ⬆️", "Avant le salam"],
            ["Oubli de la Salat Ibrahimiyya", "Qabli ⬆️", "Avant le salam"],
            ["Doute sur le nombre de rak'at", "Ba'di ⬇️", "Après le salam"],
            ["Ajout d'une rak'a entière", "Ba'di ⬇️", "Après le salam"],
            ["Assis au mauvais moment", "Ba'di ⬇️", "Après le salam"],
            ["Omission + Ajout (combinaison)", "Qabli ⬆️ (prime)", "Avant le salam"],
          ]}
        />
      </Card>
    </div>
  );
}
