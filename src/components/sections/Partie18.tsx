import { Card, SectionTitle, SubSectionTitle, AlertBox, Table } from "../ui";

export default function Partie18() {
  return (
    <div className="space-y-6">
      <SectionTitle number="18.1" title="Tableau Comparatif — Les 4 Écoles" arabic="المقارنة بين المذاهب الأربعة" icon="📊" />
      <Card>
        <Table
          headers={["Point de Fiqh", "Malikite ✦", "Hanafite", "Shafi'ite", "Hanbalite"]}
          rows={[
            [
              "Position des mains debout",
              "SADL (bras le long du corps) — dominant",
              "QABD (main droite sur gauche, sous le nombril)",
              "QABD (sur la poitrine)",
              "QABD (sur la poitrine)",
            ],
            [
              "Raf' al-yadayn",
              "Au Takbirat al-Ihram SEULEMENT",
              "Au Takbirat al-Ihram seulement",
              "Au Takbir ihram + ruku' + relèvement + 3ème rak'a",
              "Au Takbir ihram + ruku' + relèvement + 3ème rak'a",
            ],
            [
              "La Basmala dans la Fatiha",
              "NON — pas considérée comme verset de la Fatiha, récitée silencieusement",
              "Verset de la Fatiha — mais récitée silencieusement",
              "Verset de la Fatiha — récitée à voix haute",
              "NON — pas verset de la Fatiha, omise ou silencieuse",
            ],
            [
              "Le Ta'min (Amin)",
              "À voix BASSE même dans les prières à voix haute",
              "À voix basse",
              "À voix HAUTE dans les prières à voix haute",
              "À voix HAUTE dans les prières à voix haute",
            ],
            [
              "Le Qunût",
              "Dans la prière de SUBH (sunna confirmée)",
              "Dans le WITR (obligatoire selon eux)",
              "Dans la 2ème rak'a de SUBH (sunna)",
              "Dans le WITR — parfois dans Subh en cas de calamité",
            ],
            [
              "Nombre de Taslim",
              "UN SEUL (à droite) — fard. Un second (à gauche) est sunna.",
              "DEUX Taslim obligatoires",
              "DEUX Taslim — le premier est fard",
              "DEUX Taslim — les deux sont sunna/wajib",
            ],
            [
              "Le Masbuq — ce qu'il rattrape",
              "Le DÉBUT de sa prière (il lit Fatiha + sourate dans les rak'at rattrapées)",
              "La FIN de sa prière",
              "La FIN de sa prière",
              "La FIN de sa prière",
            ],
            [
              "Sujud Sahwi — Avant ou Après",
              "Pour omission : AVANT. Pour ajout : APRÈS.",
              "APRÈS dans tous les cas",
              "APRÈS dans la plupart des cas (exception : oubli du tashahud)",
              "Avant si omission, Après si ajout — proche des malikites",
            ],
            [
              "La prière en congrégation",
              "Sunna Mu'akkada (ou Fard Kifaya selon certains)",
              "Wajib (ou Sunna Mu'akkada)",
              "Fard Kifaya",
              "Fard 'Ayn (selon l'avis dominant hanbalite)",
            ],
            [
              "Distance du voyage (Qasr)",
              "~81 km (4 burud)",
              "~83-90 km (3 jours de marche)",
              "~81 km (4 burud)",
              "~81 km (4 burud)",
            ],
            [
              "Statut du Qasr",
              "Sunna mu'akkada",
              "Wajib (obligatoire)",
              "Permis (rukhsa)",
              "Sunna mu'akkada",
            ],
            [
              "Dalk (frottement) dans le Wudu",
              "OBLIGATOIRE (fard)",
              "Non obligatoire (sunna)",
              "Non obligatoire",
              "Non obligatoire",
            ],
            [
              "Rinçage bouche/narines dans le Wudu",
              "OBLIGATOIRE (fard)",
              "Sunna",
              "Sunna",
              "Obligatoire selon l'avis hanbalite dominant",
            ],
            [
              "Mash (passer sur) la tête",
              "La totalité de la tête — obligatoire",
              "1/4 de la tête minimum",
              "Une partie suffisante (même un cheveu)",
              "La totalité de la tête",
            ],
            [
              "Masbuq — Premier tashahud",
              "Il récite là où en est l'imam — si l'imam est au tashahud, il ne récite pas (s'assoit sans réciter selon certains)",
              "S'assoit et récite le tashahud",
              "S'assoit sans réciter si c'est la position de l'imam",
              "S'assoit et récite",
            ],
          ]}
        />
      </Card>

      <SectionTitle number="18.2" title="Positions Uniques ou Caractéristiques du Madhhab Malikite" arabic="خصائص المذهب المالكي" icon="💡" />
      <Card>
        <div className="space-y-4">
          {[
            {
              title: "Le Sadl — Bras le long du corps",
              detail: "Position dominante dans la prière malikite, héritée de la pratique médinoise. Le Qabd (croiser les mains) est un second avis toléré.",
              icon: "🤝"
            },
            {
              title: "Un seul Taslim",
              detail: "La prière se termine par UN SEUL salam (vers la droite). Le second est une sunna, non un fard. C'est la pratique de l'Imam Malik.",
              icon: "☝️"
            },
            {
              title: "Le Qunût à Subh",
              detail: "Sunna confirmée de réciter le Qunût après le ruku' de la 2ème rak'a de la prière de l'Aube — UNIQUEMENT dans Subh.",
              icon: "🌅"
            },
            {
              title: "La Basmala silencieuse et non-verset",
              detail: "La Basmala n'est pas considérée comme un verset de la Fatiha. Elle se récite silencieusement (mandoub) ou est omise.",
              icon: "🤫"
            },
            {
              title: "Le Amin silencieux dans toutes les prières",
              detail: "Même dans les prières à voix haute (Subh, Maghrib, 'Isha'), le 'Amin' se dit à voix basse selon les Malikites.",
              icon: "🔇"
            },
            {
              title: "Pas de Raf' al-yadayn sauf au Takbirat al-Ihram",
              detail: "Les Malikites ne lèvent pas les mains lors du ruku', du relèvement ou de la 3ème rak'a — uniquement au début de la prière.",
              icon: "🙌"
            },
            {
              title: "Le Masbuq rattrape le DÉBUT de sa prière",
              detail: "Contrairement à la plupart des écoles, le retardataire malikite considère que les rak'at faites avec l'imam sont le début de sa prière. Il lit Fatiha + sourate dans les rak'at rattrapées.",
              icon: "🔄"
            },
            {
              title: "Le Sujud Qabli pour omission de sunna",
              detail: "Principe unique : le sujud de réparation pour omission se fait AVANT le salam. Pour ajout, il se fait APRÈS. En cas de combinaison, le Qabli prime.",
              icon: "⬆️"
            },
            {
              title: "Le Dalk — Frottement obligatoire dans le Wudu",
              detail: "Seuls les Malikites rendent le frottement (dalk) des membres obligatoire dans le Wudu. L'eau ne suffit pas — il faut frotter avec la main.",
              icon: "✋"
            },
            {
              title: "La Muwalat — Continuité obligatoire dans le Wudu",
              detail: "Ne pas laisser les membres sécher entre les actes du Wudu est obligatoire (fard) selon les Malikites.",
              icon: "💧"
            },
            {
              title: "Mash sur la totalité de la tête",
              detail: "Le mash doit couvrir toute la tête dans le Wudu selon les Malikites. Contrairement aux Hanafites (1/4) et Shafi'ites (une mèche suffit).",
              icon: "👋"
            },
            {
              title: "Rinçage bouche et narines — Fard du Wudu",
              detail: "Unique aux Malikites (et Hanbalites) : le rinçage de la bouche (madmada) et des narines (istinshaq) sont des farâ'id du Wudu, non des sunnas.",
              icon: "🫧"
            },
            {
              title: "La prière sur l'absent — Non prescrite",
              detail: "Contrairement aux Shafi'ites, les Malikites n'admettent pas la prière de Janaza sur le corps absent comme une pratique généralisée.",
              icon: "🚫"
            },
            {
              title: "Les 36 rak'at de Tarawih",
              detail: "L'Imam Malik rapporte que les gens de Médine priaient 36 rak'at de Tarawih (+ 3 de Witr), contrairement aux 20 rak'at du consensus général.",
              icon: "🌙"
            },
          ].map((item, i) => (
            <div key={i} className="flex gap-3 bg-purple-50 border border-purple-100 rounded-lg p-3">
              <span className="text-2xl flex-shrink-0">{item.icon}</span>
              <div>
                <p className="font-bold text-purple-900 text-sm">{item.title}</p>
                <p className="text-stone-600 text-sm mt-1">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <SectionTitle number="18.3" title="L'École Malikite — Présentation Géographique" arabic="انتشار المذهب المالكي" icon="🌍" />
      <Card>
        <SubSectionTitle title="Régions où le madhhab malikite est dominant" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            "🇲🇦 Maroc", "🇩🇿 Algérie", "🇹🇳 Tunisie", "🇱🇾 Libye",
            "🇸🇳 Sénégal", "🇲🇱 Mali", "🇳🇬 Mauritanie", "🇬🇳 Guinée",
            "🇸🇩 Soudan", "🇪🇬 Égypte (partiel)", "🇰🇼 Koweït", "🇧🇭 Bahreïn",
          ].map((pays, i) => (
            <div key={i} className="bg-emerald-50 rounded-lg p-2 text-center text-sm font-medium text-emerald-800">
              {pays}
            </div>
          ))}
        </div>
        <p className="text-stone-500 text-xs mt-3">
          Le madhhab malikite est fondé sur la pratique des habitants de Médine (أهل المدينة) au temps des Compagnons, que l'Imam Malik (رحمه الله) considérait comme un Ijma' vivant de la Sunna.
        </p>
      </Card>
    </div>
  );
}
