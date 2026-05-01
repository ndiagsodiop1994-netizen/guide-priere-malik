import { Card, SectionTitle, SubSectionTitle, AlertBox, Table } from "../ui";

export default function Partie12() {
  return (
    <div className="space-y-6">
      <SectionTitle number="12.1" title="Définition du voyage selon les Malikites" arabic="السفر في المذهب المالكي" icon="✈️" />
      <Card>
        <AlertBox type="special" title="💡 Distance minimale du voyage malikite">
          Selon les Malikites, la distance minimale qui autorise le raccourcissement est de <strong>4 burud (بريد) = 16 farsakh = 48 miles arabes = environ 81 km</strong>. Ce chiffre est basé sur les narrations de la sunna et correspond à la pratique médinoise.
        </AlertBox>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div className="bg-blue-50 rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-blue-700">4</p>
            <p className="text-blue-900 font-semibold">Burud (أبرد)</p>
            <p className="text-stone-500 text-xs">Unité de mesure malikite</p>
          </div>
          <div className="bg-emerald-50 rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-emerald-700">~81 km</p>
            <p className="text-emerald-900 font-semibold">Distance minimale</p>
            <p className="text-stone-500 text-xs">En ligne droite (approximatif)</p>
          </div>
          <div className="bg-purple-50 rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-purple-700">~48 mi</p>
            <p className="text-purple-900 font-semibold">Miles arabes</p>
            <p className="text-stone-500 text-xs">Équivalent historique</p>
          </div>
        </div>
        <Table
          headers={["École", "Distance minimale", "Équivalent"]}
          rows={[
            ["Malikite ✦", "4 burud = 16 farsakh", "~81 km"],
            ["Hanafite", "3 jours de marche", "~80-90 km (variable)"],
            ["Shafi'ite", "4 burud", "~81 km"],
            ["Hanbalite", "2 jours de marche / 4 burud", "~81 km"],
          ]}
        />
      </Card>

      <SectionTitle number="12.2" title="Le Raccourcissement (القصر)" arabic="قصر الصلاة" icon="✂️" />
      <Card>
        <AlertBox type="special" title="💡 Statut du Qasr selon les Malikites — SUNNA (ou fortement recommandé)">
          Contrairement aux Hanafites (pour qui le qasr est obligatoire/wajib), les Malikites considèrent le raccourcissement comme une <strong>sunna confirmée</strong>. Prier les 4 rak'at en voyage est permis mais abandonner le qasr sans raison est blâmable.
        </AlertBox>

        <SubSectionTitle title="Quelles prières sont raccourcies ?" />
        <Table
          headers={["Prière", "En résidence", "En voyage (Qasr)", "Raccourcissement ?", "Remarque"]}
          rows={[
            ["Subh", "2 rak'at", "2 rak'at", "NON — déjà courte", ""],
            ["Dhuhr", "4 rak'at", "2 rak'at", "OUI ✅", ""],
            ["'Asr", "4 rak'at", "2 rak'at", "OUI ✅", ""],
            ["Maghrib", "3 rak'at", "3 rak'at", "NON — ne se raccourcit pas", "Spécificité unanime"],
            ["'Isha'", "4 rak'at", "2 rak'at", "OUI ✅", ""],
          ]}
        />

        <SubSectionTitle title="Conditions du Qasr" />
        <ul className="list-disc list-inside space-y-2 text-sm text-stone-600">
          <li>La distance minimale (4 burud = ~81 km) doit être atteinte</li>
          <li>Le voyage doit être licite (un voyage pour pécher — braquage, etc. — ne permet pas le qasr)</li>
          <li>Avoir l'intention de voyager dès le départ</li>
          <li>Ne pas avoir encore atteint la destination finale</li>
        </ul>
      </Card>

      <SectionTitle number="12.3" title="Le Regroupement (الجمع)" arabic="الجمع بين الصلاتين" icon="🔗" />
      <Card>
        <AlertBox type="warning" title="⚠️ Position Malikite RESTRICTIVE sur le Jam'">
          Les Malikites ont une position plus <strong>restrictive</strong> sur le regroupement que les autres écoles. Selon l'avis dominant malikite :
          <ul className="list-disc list-inside mt-2 text-sm space-y-1">
            <li>Le <strong>Jam' Ta'khir (جمع تأخير)</strong> — retarder la 1ère pour la prier avec la 2ème — est permis en voyage</li>
            <li>Le <strong>Jam' Taqdim (جمع تقديم)</strong> — avancer la 2ème pour la prier avec la 1ère — est sujet à divergence. Certains malikites le permettent, d'autres non.</li>
            <li>Le regroupement pour la pluie est permis selon certains malikites</li>
          </ul>
        </AlertBox>

        <Table
          headers={["Type de Jam'", "Description", "Position Malikite"]}
          rows={[
            ["Jam' Taqdim (تقديم)", "Prier Dhuhr et 'Asr ensemble au temps de Dhuhr", "Divergence — certains malikites le permettent en voyage, d'autres non"],
            ["Jam' Ta'khir (تأخير)", "Prier Dhuhr et 'Asr ensemble au temps de 'Asr", "Permis en voyage selon l'avis dominant malikite"],
            ["Jam' Maghrib/'Isha'", "Prier Maghrib et 'Isha' ensemble", "Même règle que Dhuhr/'Asr"],
            ["Jam' pour la pluie", "En cas de pluie battante à la mosquée", "Permis selon certains malikites (pratique médinoise)"],
            ["Jam' pour la maladie", "En cas de maladie grave", "Non permis selon l'avis malikite dominant (contrairement aux Hanbalites)"],
          ]}
        />
      </Card>

      <SectionTitle number="12.4" title="Quand cesse le statut de voyageur ?" arabic="انتهاء حكم السفر" icon="🏠" />
      <Card>
        <Table
          headers={["Situation", "Statut", "Règle Malikite"]}
          rows={[
            ["Intention de rester moins de 4 jours", "Voyageur — continue le qasr", "Continue à prier 2 rak'at"],
            ["Intention de rester 4 jours ou plus", "Résident — doit prier complet", "Doit prier 4 rak'at dès l'intention de rester"],
            ["En transit (ne sait pas la durée)", "Voyageur — continue le qasr", "Peut continuer le qasr même si cela dure longtemps"],
            ["Derrière un imam résident", "Le voyageur prie complet avec l'imam", "Le voyageur suit l'imam — prie 4 rak'at"],
            ["Imam voyageur derrière des résidents", "L'imam voyageur peut choisir", "Certains disent qu'il prie complet pour eux"],
          ]}
        />
      </Card>
    </div>
  );
}
