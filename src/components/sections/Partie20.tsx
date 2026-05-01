import { Card, SectionTitle, AlertBox } from "../ui";

interface FAQItemProps {
  num: number;
  question: string;
  answer: string;
  special?: boolean;
}

function FAQItem({ num, question, answer, special }: FAQItemProps) {
  return (
    <div className={`border rounded-xl overflow-hidden ${special ? "border-purple-200" : "border-stone-200"}`}>
      <div className={`px-4 py-3 font-bold text-sm ${special ? "bg-purple-700 text-white" : "bg-emerald-700 text-white"}`}>
        <span className="mr-2">Q{num}.</span>{question}
      </div>
      <div className="p-4 bg-white text-sm text-stone-600 leading-relaxed">
        {answer}
        {special && <p className="text-purple-700 font-medium mt-2">💡 Spécificité Malikite</p>}
      </div>
    </div>
  );
}

export default function Partie20() {
  const faqs = [
    {
      q: "Peut-on prier avec des vêtements humides ou mouillés après le wudu ?",
      a: "Oui, les vêtements mouillés n'invalident pas la prière tant qu'ils sont purs. La pureté du vêtement est requise, non sa sécheresse."
    },
    {
      q: "Que faire si on doute avoir fait le wudu avant la prière ?",
      a: "Si l'on est certain d'avoir été pur et qu'on doute de l'avoir perdu, on s'appuie sur la certitude (la pureté) et on prie. La certitude prime sur le doute selon la règle malikite."
    },
    {
      q: "Peut-on prier dans un avion ?",
      a: "Oui, les prières obligatoires doivent être priées dans le temps, même dans un avion. On s'oriente autant que possible vers la Qibla. Si impossible de se lever, on prie assis. Pour les surérogatoires, on peut prier dans la direction du voyage."
    },
    {
      q: "Comment prier dans un pays où le soleil ne se couche pas (été arctique) ?",
      a: "Les savants malikites contemporains recommandent de se baser sur les horaires de la ville normale la plus proche ou de la Mecque/Médine en attendant que les temps normaux reprennent. C'est une question contemporaine sur laquelle les savants ont des avis variés."
    },
    {
      q: "La prière est-elle valide si on a une petite quantité de sang sur le vêtement ?",
      a: "Les Malikites tolèrent une petite quantité de sang (معفو عنه) qui est difficile à éviter. Cependant, une grande quantité de sang rend la prière invalide si elle n'est pas nettoyée."
    },
    {
      q: "Peut-on prier en portant un bébé qui n'est pas pur ?",
      a: "Non — porter un enfant en état d'impureté pendant la prière l'invalide selon les Malikites. Cependant, le Prophète ﷺ portait Oumama lors de la prière — certains malikites permettent de courtes périodes si l'enfant est propre."
    },
    {
      q: "Que fait-on si l'Adhan est prononcé pendant la prière surérogatoire ?",
      a: "On peut terminer rapidement sa prière (en l'abrégeant) puis répondre à l'Adhan, ou continuer normalement si la prière est courte."
    },
    {
      q: "La prière est-elle valide si on rit légèrement ?",
      a: "Selon les Malikites, le sourire (الابتسام) ne rompt pas la prière. Mais le rire aux éclats (القهقهة) — audible — l'invalide."
    },
    {
      q: "Comment le malade alité doit-il prier s'il ne peut même pas se tourner ?",
      a: "Il prie par signes/gestes — mouvement de la tête (plus prononcé pour le sujud que pour le ruku'). S'il ne peut même pas cela, certains malikites disent qu'il prie dans son cœur jusqu'à ce qu'il puisse à nouveau."
    },
    {
      q: "La prière derrière un imam qui a commis un péché majeur est-elle valide ?",
      a: "Oui, selon les Malikites — la validité de la prière ne dépend pas de la piété de l'imam. Il est cependant recommandé de trouver un imam pieux."
    },
    {
      q: "Que faire si on se rappelle pendant la prière qu'on n'a pas fait le wudu ?",
      a: "On interrompt immédiatement la prière, on fait le wudu, puis on recommence la prière depuis le début. La prière sans wudu est invalide."
    },
    {
      q: "Peut-on accomplir la prière de Dhuhr et de 'Asr ensemble à la maison (hors voyage) ?",
      a: "Selon l'avis malikite dominant : NON — le regroupement sans cause valable (voyage, pluie, maladie) n'est pas permis. Certains malikites permettent le regroupement pour la maladie grave, mais c'est l'avis minoritaire."
    },
    {
      q: "Le malade peut-il rater la prière si son état est critique ?",
      a: "Non — la prière ne s'annule jamais tant que l'on est conscient. On prie par gestes si nécessaire. La prière est le lien avec Allah qu'on ne rompt jamais tant qu'on a conscience."
    },
    {
      q: "Un converti doit-il rattraper les prières qu'il n'a pas faites avant l'Islam ?",
      a: "Non — les actes antérieurs à la conversion sont effacés. L'Islam gomme ce qui précède (الإسلام يجبّ ما قبله). Il commence sa vie de prière à partir de sa conversion."
    },
    {
      q: "Comment compte-t-on dans une prière de 4 rak'at si on a un doute après le salam ?",
      a: "Si après le salam on doute d'avoir fait 3 ou 4 rak'at : si c'est un doute récurrent (was-was), ignorer. Si c'est une vraie incertitude avec impression dominante, suivre son impression et faire le Sujud Ba'di."
    },
    {
      q: "Peut-on prier la prière du vendredi (Jumu'a) en ligne via Internet ?",
      a: "Les savants malikites contemporains ne permettent généralement pas la Jumu'a par Internet car la présence physique et le rassemblement (الاجتماع) sont des conditions de la Jumu'a."
    },
    {
      q: "La femme qui a ses règles doit-elle rattraper les prières manquées ?",
      a: "Non — la femme en état de menstruation (حيض) ou de lochies (نفاس) n'accomplit pas la prière et n'a pas à rattraper les prières manquées pendant cette période. Cela fait partie des facilités de l'Islam pour la femme."
    },
    {
      q: "La prière est-elle valide si on récite une sourate avant la Fatiha par erreur ?",
      a: "On doit réciter la Fatiha. Si on a récité autre chose d'abord, on revient à la Fatiha. Si on a terminé la rak'a sans réciter la Fatiha (en ayant récité autre chose), la rak'a est nulle selon les Malikites et doit être refaite."
    },
    {
      q: "Que se passe-t-il si l'imam commet une erreur dans la Fatiha ?",
      a: "Si l'erreur change le sens (comme dire 'أَنعمتَ' au lieu de 'أَنعمتَ عليهم'), certains malikites disent que la prière est invalide. Il faut que l'imam connaisse la Fatiha correctement."
    },
    {
      q: "Comment prier la Prière de la Peur (Salat al-Khawf) ?",
      a: "La Prière de la Peur (صلاة الخوف) est décrite dans le Coran (4:102). L'imam dirige deux groupes alternativement — chaque groupe prie une rak'a avec l'imam puis se sépare. Les Malikites ont plusieurs modalités selon le type de danger. En cas de danger extrême, on peut prier en marchant ou à dos d'animal, par signe."
    },
    {
      q: "La prière de Tarawih peut-elle être faite seul chez soi ?",
      a: "Oui — la Tarawih peut être faite individuellement à la maison. Cependant, la prière en congrégation à la mosquée est plus méritoire et participe à la vie communautaire du Ramadan."
    },
    {
      q: "Que faire si on trouve qu'on a prié dans la mauvaise direction (Qibla) ?",
      a: "Si on a fait un effort honnête (ijtihad) pour déterminer la Qibla et qu'on s'est trompé, la prière est valide selon l'avis malikite. Si on n'a pas fait d'effort ou s'il y avait des indications claires qu'on a ignorées, il faut recommencer."
    },
    {
      q: "Un homme peut-il prier avec les femmes de sa famille sans rang séparé ?",
      a: "Les femmes de la famille prient derrière l'homme (le mari/père). Elles forment leur propre rang derrière lui. Il n'est pas nécessaire d'avoir une séparation physique entre les rangs masculins et féminins dans la prière en famille à la maison."
    },
    {
      q: "La prière est-elle valide si on prononce accidentellement un mot en langue non-arabe ?",
      a: "Si le mot non-arabe sort involontairement et est court (un ou deux mots), certains malikites disent que la prière n'est pas invalidée. Si c'est long et intentionnel, cela peut l'invalider. Les formules de la prière (Fatiha, Takbir, etc.) doivent être en arabe."
    },
    {
      q: "Comment confirmer l'heure correcte de la prière en voyage à l'étranger ?",
      a: "On peut utiliser les applications de calcul des heures de prière basées sur les coordonnées géographiques, ou se renseigner auprès des mosquées locales. Les Malikites recommandent de vérifier que le calcul utilisé correspond à leurs critères (lueur rouge pour Maghrib, etc.)."
    },
    {
      q: "Le tarawih doit-il être de 36 rak'at selon les Malikites ?",
      a: "L'Imam Malik a mentionné 36 rak'at comme pratique médinoise. Cependant, 20 rak'at sont acceptées dans le madhhab. Les deux sont valides. L'essentiel est la qualité de la prière et la récitation du Coran."
    },
    {
      q: "La prière de repentir (صلاة التوبة) est-elle prescrite selon les Malikites ?",
      a: "La Salat at-Tawba est recommandée (mandoub) selon les savants malikites — 2 rak'at avec une sincère demande de pardon. Elle est basée sur le hadith d'Abu Dawud et d'autres sources."
    },
    {
      q: "Que faire si on entre dans la mosquée et que l'imam est en position de sujud ?",
      a: "Selon les Malikites : faire le Takbirat al-Ihram debout, puis descendre en sujud avec l'imam. Cette rak'a ne compte pas pour le masbuq — il devra la rattraper. L'essentiel est de ne pas entrer dans la prière directement en sujud sans avoir fait le Takbirat al-Ihram debout."
    },
    {
      q: "Peut-on utiliser un Musaf (Coran) pour lire pendant la prière de Tarawih ?",
      a: "Les savants malikites contemporains autorisent généralement l'utilisation d'un Musaf dans les prières surérogatoires comme le Tarawih pour ceux qui ne mémorisent pas le Coran, afin de permettre une récitation plus longue et complète du Coran."
    },
    {
      q: "La prière est-elle valide si on laisse échapper un gaz involontairement pendant ?",
      a: "L'émission de gaz intestinaux (حدث) invalide le wudu et donc la prière, même si c'est involontaire. On doit sortir, refaire le wudu et recommencer la prière. Si c'est une émission chronique (ريح مستمرة), voir les règles de l'incontinence."
    },
  ];

  return (
    <div className="space-y-6">
      <SectionTitle number="20.1" title="30 Questions-Réponses Pratiques" arabic="أسئلة وأجوبة عملية" icon="❓" />

      <AlertBox type="info" title="Avertissement important">
        Ces réponses reflètent l'avis dominant (المشهور) de l'école malikite. En cas de situation particulière ou de doute persistant, consultez un érudit qualifié connaissant le madhhab malikite.
      </AlertBox>

      <div className="space-y-3">
        {faqs.map((faq, i) => (
          <FAQItem
            key={i}
            num={i + 1}
            question={faq.q}
            answer={faq.a}
          />
        ))}
      </div>

      <SectionTitle number="20.2" title="Situations Particulières" arabic="حالات خاصة" icon="🔬" />
      <Card>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              title: "🛫 Dans l'avion",
              items: [
                "Prières obligatoires : dans le temps, même assis",
                "S'orienter vers la Qibla à la montée/descente si possible",
                "Utiliser les applications de direction de Qibla",
                "Prières surérogatoires : dans la direction du vol",
              ]
            },
            {
              title: "🌞 Pays sans nuit/sans jour",
              items: [
                "Se baser sur l'horaire de la ville la plus proche ayant des nuits normales",
                "Ou se baser sur les horaires de La Mecque ou Médine",
                "Avis du Fiqh al-Majalis Al-Islami : suivre l'horaire d'une ville proche modérée",
              ]
            },
            {
              title: "🏥 À l'hôpital",
              items: [
                "Prier dans la position possible (assis/couché)",
                "Le tayammum si impossible d'utiliser l'eau",
                "Les nurses peuvent changer les bandages temporairement",
                "Prier par signes si alité sous perfusion",
              ]
            },
            {
              title: "⚔️ Prière de la Peur (الخوف)",
              items: [
                "Décrite dans le Coran 4:102",
                "Deux groupes alternent derrière l'imam",
                "En danger extrême : prière par signe en marchant",
                "Raccourcissement extrême permis",
              ]
            },
          ].map((card, i) => (
            <div key={i} className="bg-stone-50 border border-stone-200 rounded-xl p-4">
              <h4 className="font-bold text-stone-800 mb-3">{card.title}</h4>
              <ul className="list-disc list-inside space-y-1">
                {card.items.map((item, j) => (
                  <li key={j} className="text-stone-600 text-sm">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Card>

      {/* Final du'a */}
      <div className="bg-gradient-to-br from-emerald-900 to-teal-900 rounded-2xl p-8 text-white text-center">
        <p className="text-4xl mb-4">🤲</p>
        <p className="font-amiri text-2xl leading-loose mb-4" dir="rtl">
          رَبَّنَا تَقَبَّلْ مِنَّا ۖ إِنَّكَ أَنتَ السَّمِيعُ الْعَلِيمُ
        </p>
        <p className="text-emerald-300 text-sm italic mb-6">
          « Notre Seigneur, accepte de nous [cette dévotion]. Tu es certes l'Audient, l'Omniscient. » (Al-Baqara 2:127)
        </p>
        <div className="bg-white/10 rounded-xl p-4 mt-4">
          <p className="text-emerald-200 text-sm">
            Ce guide a été rédigé pour la face d'Allah uniquement, afin d'aider la communauté musulmane francophone à accomplir la prière conformément au noble madhhab Malikite. Que Allah (سبحانه وتعالى) nous accorde de l'accomplir avec perfection (إحسان) et sincérité (إخلاص).
          </p>
          <p className="text-emerald-300 text-xs mt-3 font-amiri" dir="rtl">
            اللَّهُمَّ أَعِنَّا عَلَى ذِكْرِكَ وَشُكْرِكَ وَحُسْنِ عِبَادَتِكَ
          </p>
        </div>
      </div>
    </div>
  );
}
