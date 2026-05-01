import { Card, SectionTitle, SubSectionTitle, AlertBox, DalilBox, Table } from "../ui";

export default function Partie11() {
  return (
    <div className="space-y-6">
      <SectionTitle number="11.1" title="Statut de la Prière en Congrégation" arabic="صلاة الجماعة" icon="👥" />
      <Card>
        <AlertBox type="special" title="💡 Statut selon les Malikites — Sunna Mu'akkada">
          Selon l'avis dominant malikite, la prière en congrégation est une <strong>sunna mu'akkada (سنة مؤكدة)</strong> — fortement recommandée mais non obligatoire. Certains malikites (Ibn Habib, Ibn al-Majishun) la considèrent comme <strong>fard kifaya</strong>. Elle est presque unanimement considérée comme un <strong>devoir communautaire essentiel</strong>.
        </AlertBox>

        <DalilBox
          type="hadith"
          reference="Bukhari (645) & Muslim (650)"
          arabic="صَلَاةُ الْجَمَاعَةِ أَفْضَلُ مِنْ صَلَاةِ الْفَذِّ بِسَبْعٍ وَعِشْرِينَ دَرَجَةً"
          translation="La prière en congrégation est supérieure à la prière individuelle de vingt-sept degrés."
          source="Rapporté par Ibn 'Umar (رضي الله عنهما)"
        />
      </Card>

      <SectionTitle number="11.3" title="Conditions de l'Imam" arabic="شروط الإمام" icon="👤" />
      <Card>
        <SubSectionTitle title="Conditions de validité de l'imamat" />
        <Table
          headers={["Condition", "Détail"]}
          rows={[
            ["Islam", "L'imam doit être musulman — prier derrière un non-musulman est invalide"],
            ["Puberté", "L'imam doit être pubère selon l'avis malikite dominant (les enfants ne peuvent pas diriger des adultes pour les prières obligatoires)"],
            ["Absence de hadath manifest", "L'imam doit être en état de pureté"],
            ["Raison (sanité mentale)", "L'imam doit être sain d'esprit"],
            ["Capacité de récitation correcte", "L'imam doit pouvoir réciter la Fatiha correctement"],
            ["Être un homme (pour diriger des hommes)", "La femme ne peut pas diriger les hommes selon les Malikites"],
          ]}
        />

        <SubSectionTitle title="Ordre de priorité pour l'imamat (الأحق بالإمامة)" />
        <div className="space-y-2">
          {[
            { rang: "1er", crit: "Le propriétaire de la mosquée/maison", detail: "Il a la priorité même s'il est moins savant" },
            { rang: "2ème", crit: "Le plus savant en fiqh et en Coran", detail: "Celui qui connaît le mieux les règles de la prière" },
            { rang: "3ème", crit: "Le plus âgé (si égaux en science)", detail: "Selon le hadith" },
            { rang: "4ème", crit: "Celui qui a le meilleur caractère moral", detail: "Le plus pieux et intègre" },
          ].map((item) => (
            <div key={item.rang} className="flex gap-3 items-start">
              <span className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">{item.rang}</span>
              <div>
                <p className="font-semibold text-stone-800 text-sm">{item.crit}</p>
                <p className="text-stone-500 text-xs">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>

        <AlertBox type="special" title="💡 La femme imam selon les Malikites">
          La femme peut diriger la prière d'un groupe de <strong>femmes uniquement</strong>, et elle se place alors au milieu du rang (non devant elles). Elle ne peut pas diriger des hommes, même en présence d'enfants mâles.
        </AlertBox>
      </Card>

      <SectionTitle number="11.4" title="Les Rangs (الصفوف)" arabic="ترتيب الصفوف" icon="📐" />
      <Card>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-emerald-50 rounded-lg p-4">
            <h4 className="font-bold text-emerald-900 mb-2">Règles des rangs</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-stone-600">
              <li>Le premier rang est le meilleur (derrière l'imam)</li>
              <li>Égaliser les rangs — ne pas laisser de vides</li>
              <li>Les hommes d'abord, puis les enfants, puis les femmes</li>
              <li>Combler les vides en se serrant</li>
            </ul>
          </div>
          <div className="bg-teal-50 rounded-lg p-4">
            <h4 className="font-bold text-teal-900 mb-2">Prieur seul derrière l'imam</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-stone-600">
              <li>Se place à la droite et légèrement en arrière de l'imam</li>
              <li>Ou derrière l'imam si c'est un groupe</li>
              <li>Ne jamais être devant l'imam</li>
            </ul>
          </div>
        </div>
      </Card>

      <SectionTitle number="11.5" title="Le Retardataire (المسبوق)" arabic="المسبوق" icon="⏱️" />
      <Card>
        <AlertBox type="special" title="💡 Spécificité Malikite cruciale — Ce que le masbuq rattrape">
          Selon l'école malikite, ce que le retardataire rattrape avec l'imam est considéré comme le <strong>DÉBUT (أول) de sa prière</strong>, non la fin. Ainsi :
          <ul className="list-disc list-inside mt-2 text-sm space-y-1">
            <li>Le retardataire lit la Fatiha ET une sourate dans les rak'at qu'il rattrape seul</li>
            <li>Il récite à voix haute si c'est les 2 premières rak'at de Subh/Maghrib/'Isha'</li>
            <li>Le premier tashahud qu'il accomplit est au milieu de sa prière</li>
          </ul>
          <p className="mt-2 text-xs font-bold text-purple-800">Différence avec les Hanafites et Shafi'ites qui considèrent que ce qu'il fait avec l'imam est la FIN de sa prière.</p>
        </AlertBox>

        <SubSectionTitle title="Comment rattraper les rak'at manquées" />
        <div className="space-y-4">
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <h4 className="font-bold text-amber-900 mb-2">Exemple : Arrive lors de la 3ème rak'a de Maghrib (3 rak'at)</h4>
            <ol className="list-decimal list-inside text-sm text-stone-600 space-y-1">
              <li>Il rejoint l'imam pour la 3ème rak'a (lit Fatiha seulement avec l'imam — reste silencieux si l'imam lit à voix haute)</li>
              <li>L'imam fait le salam — le masbuq continue seul</li>
              <li>Il se lève pour sa 2ème rak'a (= 1ère pour lui selon Malikites) : lit Fatiha + sourate</li>
              <li>Il s'assoit pour son tashahud du milieu</li>
              <li>Se lève pour sa 3ème rak'a : lit Fatiha + sourate (selon l'avis malikite)</li>
              <li>Tashahud final et salam</li>
            </ol>
          </div>

          <Table
            headers={["Arrivée à la rak'a n°", "Prière de Dhuhr (4)", "Que rattrape-t-il ?", "Récitation dans les rak'at seul"]}
            rows={[
              ["1ère", "A tout suivi", "0 à rattraper", "-"],
              ["2ème", "A suivi 3 rak'at", "Rattrape 1 rak'a seul", "Fatiha + sourate"],
              ["3ème", "A suivi 2 rak'at", "Rattrape 2 rak'at seul", "Fatiha + sourate pour chacune"],
              ["4ème (dernière)", "A suivi 1 rak'a", "Rattrape 3 rak'at seul", "Fatiha + sourate dans les 2 premières, Fatiha seule dans la 3ème"],
            ]}
          />
        </div>
      </Card>

      <SectionTitle number="11.7" title="La Prière du Vendredi (صلاة الجمعة)" arabic="الجمعة" icon="🕌" />
      <Card>
        <AlertBox type="success" title="Statut : FARD 'AYN sur les hommes libres, résidents, sains">
          La prière du Vendredi est obligatoire sur tout homme libre, adulte, sain d'esprit, résident (non voyageur), sain physiquement (capable de se déplacer à la mosquée).
        </AlertBox>

        <DalilBox
          type="quran"
          reference="Al-Jumu'a (62:9)"
          arabic="يَا أَيُّهَا الَّذِينَ آمَنُوا إِذَا نُودِيَ لِلصَّلَاةِ مِن يَوْمِ الْجُمُعَةِ فَاسْعَوْا إِلَىٰ ذِكْرِ اللَّهِ وَذَرُوا الْبَيْعَ"
          translation="Ô vous qui croyez ! Quand il est fait appel à la prière du vendredi, hâtez-vous vers le rappel d'Allah, et laissez le commerce."
        />

        <SubSectionTitle title="Conditions d'obligation de la Jumu'a selon les Malikites" />
        <Table
          headers={["Condition", "Détail"]}
          rows={[
            ["Islam", "Obligatoire sur les musulmans uniquement"],
            ["Masculin", "Non obligatoire sur les femmes (mais permise pour elles)"],
            ["Pubère et adulte", "Non obligatoire sur les enfants"],
            ["Sain d'esprit", "Non sur le fou"],
            ["Résident (مقيم)", "Le voyageur n'est pas obligé — mais peut y assister"],
            ["Sain physiquement", "Le malade grave peut être dispensé"],
            ["Libre", "Contexte historique — esclave dispensé selon certains malikites"],
          ]}
        />

        <SubSectionTitle title="La Khutba — Conditions et Piliers" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="bg-emerald-50 rounded-lg p-4">
            <h4 className="font-bold text-emerald-900 mb-2">Piliers de la Khutba (malikites)</h4>
            <ul className="list-disc list-inside text-sm text-stone-600 space-y-1">
              <li>Louange d'Allah (حمد الله)</li>
              <li>Bénédictions sur le Prophète ﷺ</li>
              <li>Exhortation à la piété (الوصية بتقوى الله)</li>
              <li>Récitation d'un verset coranique (dans une des deux khutbas)</li>
              <li>Du'a pour les croyants (dans la 2ème khutba — selon certains malikites)</li>
            </ul>
          </div>
          <div className="bg-teal-50 rounded-lg p-4">
            <h4 className="font-bold text-teal-900 mb-2">Conditions de la Khutba</h4>
            <ul className="list-disc list-inside text-sm text-stone-600 space-y-1">
              <li>Être prononcée en arabe (selon l'avis dominant)</li>
              <li>Deux khutbas séparées par une courte assise</li>
              <li>En état de pureté rituelle</li>
              <li>Après l'entrée du temps de Dhuhr</li>
              <li>En présence du quorum requis (40 personnes selon certains malikites)</li>
            </ul>
          </div>
        </div>

        <SubSectionTitle title="Description de la prière du Vendredi" />
        <ol className="list-decimal list-inside text-sm text-stone-600 space-y-2">
          <li>L'Adhan est prononcé à l'entrée du temps de Dhuhr</li>
          <li>L'imam monte sur le minbar et salue les fidèles</li>
          <li>L'Adhan est prononcé (en présence de l'imam sur le minbar)</li>
          <li>L'imam prononce la première Khutba (avec les piliers mentionnés)</li>
          <li>Il s'assoit brièvement</li>
          <li>Il prononce la deuxième Khutba</li>
          <li>L'Iqama est prononcée</li>
          <li>La prière de Jumu'a : <strong>2 rak'at</strong> à voix haute</li>
          <li>Elle remplace la prière de Dhuhr ce jour-là</li>
        </ol>
      </Card>
    </div>
  );
}
