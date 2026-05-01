import { Card, SectionTitle, SubSectionTitle, AlertBox, ArabicText, Table } from "../ui";

export default function Partie5() {
  return (
    <div className="space-y-6">
      <AlertBox type="info" title="Distinction entre Piliers (فرائض) et Sunnas (سنن)">
        Les <strong>piliers (فرائض)</strong> : leur omission invalide la prière, intentionnellement ou par oubli.
        Les <strong>sunnas</strong> : leur omission nécessite le <strong>Sujud Qabli (سجود قبلي)</strong> — prosternation AVANT le salam — mais n'invalide pas la prière.
        Les <strong>mandoubat/mustahabbat</strong> : leur omission ne nécessite rien.
      </AlertBox>

      <SectionTitle number="5.1" title="Les Sunnas de la Prière" arabic="سنن الصلاة" icon="⭐" />
      <Card>
        <Table
          headers={["#", "Sunna", "Arabe", "Détail"]}
          rows={[
            ["1", "Sourate après la Fatiha dans les 2 premières rak'at", "قراءة السورة", "Réciter une sourate ou des versets après la Fatiha dans les deux premières rak'at de chaque prière. Non obligatoire dans les 3ème et 4ème rak'at."],
            ["2", "Station debout pour cette sourate", "القيام للسورة", "Se tenir debout pendant la récitation de la sourate (distincte du qiyam de la Fatiha)"],
            ["3", "Récitation à voix haute (جهر)", "الجهر بالقراءة", "Pour Subh, Maghrib et 'Isha' : réciter la Fatiha et la sourate à voix haute. Pour Dhuhr et 'Asr : à voix basse."],
            ["4", "Le Takbir pour chaque mouvement", "تكبيرات الانتقالات", "Dire 'Allahu Akbar' lors de chaque passage d'une position à l'autre (SAUF le Takbirat al-Ihram qui est fard)"],
            ["5", "« Sami'allahu liman hamidah »", "سمع الله لمن حمده", "Dire cette formule en se relevant du ruku'. L'imam et le prieur seul la disent. Le ma'mum dit seulement 'Rabbana wa lakal hamd'."],
            ["6", "Le premier Tashahud", "التشهد الأول", "S'asseoir et réciter le Tashahud après la 2ème rak'a dans les prières de 3 ou 4 rak'at. C'est une sunna — non un fard selon les Malikites."],
            ["7", "La position assise pour le premier Tashahud", "الجلوس للتشهد الأول", "S'asseoir après la 2ème rak'a. Omission → Sujud Qabli."],
            ["8", "La Salat Ibrahimiyya après le tashahud final", "الصلاة الإبراهيمية", "Réciter la formule de bénédiction sur le Prophète ﷺ et Ibrahim après le tashahud final."],
            ["9", "Le second Taslim (vers la gauche)", "السلام الثاني", "Selon certains malikites, se retourner légèrement à gauche et dire un second salam est sunna (non fard)."],
          ]}
        />
      </Card>

      <SectionTitle number="5.2" title="La Prosternation de Réparation AVANT le Salam (سجود قبلي)" icon="🔄" />
      <Card>
        <AlertBox type="special" title="💡 Règle Fondamentale Malikite — Le Sujud Qabli">
          Selon la règle malikite, l'omission d'une <strong>sunna de la prière</strong> nécessite un <strong>Sujud AVANT le Salam (سجود قبلي)</strong>. C'est une règle unique au madhhab malikite — les autres écoles ont des règles différentes.
        </AlertBox>

        <Table
          headers={["Cause", "Type de Sujud Sahwi", "Moment"]}
          rows={[
            ["Omission d'une sunna (premier tashahud, sourate, etc.)", "Sujud QABLI (avant le salam)", "AVANT le Taslim"],
            ["Ajout involontaire d'un acte", "Sujud BA'DI (après le salam)", "APRÈS le Taslim"],
            ["Doute sur le nombre de rak'at", "Sujud BA'DI", "APRÈS le Taslim"],
            ["Omission + Ajout combinés", "Sujud QABLI (l'omission prime)", "AVANT le Taslim"],
          ]}
        />

        <SubSectionTitle title="Causes précises du Sujud Qabli (avant le salam)" />
        <ul className="list-disc list-inside space-y-2 text-stone-600 text-sm">
          <li>Omission du <strong>premier tashahud</strong> (sunna confirmée)</li>
          <li>Omission de la <strong>station debout pour le premier tashahud</strong></li>
          <li>Omission de la <strong>sourate après la Fatiha</strong></li>
          <li>Omission de la <strong>station debout pour la sourate</strong></li>
          <li>Omission de la <strong>récitation à voix haute</strong> (jehr) quand elle est sunna</li>
          <li>Omission du <strong>Qunût de Subh</strong> (sunna confirmée)</li>
          <li>Omission de la <strong>Salat Ibrahimiyya</strong> après le dernier tashahud</li>
          <li>Omission du <strong>Takbir de déplacement</strong> (non le Takbirat al-Ihram)</li>
          <li>Tout autre omission d'une sunna confirmée</li>
        </ul>
      </Card>
    </div>
  );
}
