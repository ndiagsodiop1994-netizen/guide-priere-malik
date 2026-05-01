import { Card, SectionTitle, AlertBox, DalilBox, Table } from "../ui";

export default function Partie16() {
  return (
    <div className="space-y-6">
      <SectionTitle number="16.1" title="Rattrapage des Prières Manquées" arabic="قضاء الفوائت" icon="⏰" />
      <Card>
        <AlertBox type="success" title="Obligation du Rattrapage — Consensus islamique">
          Le rattrapage des prières manquées (qadha) est une obligation individuelle absolue selon le consensus des savants islamiques.
        </AlertBox>

        <DalilBox
          type="hadith"
          reference="Bukhari (597) & Muslim (684)"
          arabic="مَنْ نَسِيَ صَلَاةً أَوْ نَامَ عَنْهَا، فَكَفَّارَتُهَا أَنْ يُصَلِّيَهَا إِذَا ذَكَرَهَا"
          translation="Celui qui oublie une prière ou dort jusqu'à la manquer, son expiation est de la prier dès qu'il s'en souvient."
          source="Rapporté par Anas ibn Malik (رضي الله عنه)"
        />

        <div className="mt-4 space-y-4">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-bold text-blue-900 mb-2">L'ordre entre le Qadha et la prière du moment (الترتيب)</h4>
            <p className="text-stone-600 text-sm mb-2">
              Selon la règle malikite : <strong>l'ordre entre les prières manquées et la prière du moment est une obligation (wajib)</strong> — il faut d'abord rattraper les prières manquées puis prier celle du moment, <strong>À CONDITION</strong> que le rattrapage ne dépasse pas 5 prières.
            </p>
            <ul className="list-disc list-inside text-sm text-stone-600 space-y-1">
              <li>Si le qadha est de 1-5 prières : rattraper d'abord, puis prier la prière du moment</li>
              <li>Si le qadha est de plus de 5 prières : prier la prière du moment en premier pour ne pas la manquer, puis rattraper</li>
              <li>Si en rattrapant, on risque de rater la prière du moment dans son temps : prier la prière du moment d'abord</li>
            </ul>
          </div>

          <Table
            headers={["Situation", "Règle Malikite", "Exemple"]}
            rows={[
              ["1 prière manquée", "Rattraper AVANT la prière du moment", "A manqué Dhuhr — doit la rattraper avant 'Asr"],
              ["2-4 prières manquées", "Rattraper AVANT si le temps le permet", "A manqué Dhuhr et 'Asr — rattrape les deux avant Maghrib si le temps le permet"],
              ["5+ prières manquées", "Prier la prière du moment en premier", "A manqué 6 prières — prie la prière du moment puis rattrape"],
              ["Réveil après l'aube", "Prier Subh immédiatement dès le réveil", "C'est ce que fit le Prophète ﷺ lors de la nuit d'Al-Hudaybiyya"],
              ["Nombreuses prières manquées sur des années", "Obligation de rattrapage total, progressivement", "Peut s'étaler sur des mois/années selon les capacités"],
            ]}
          />

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <h4 className="font-bold text-amber-900 mb-2">Celui qui a de nombreuses prières à rattraper</h4>
            <p className="text-stone-600 text-sm">
              Pour celui qui a manqué des prières sur une longue période (années de jeunesse, époque d'ignorance), les malikites disent qu'il doit s'efforcer de les rattraper au maximum, en les intercalant entre les prières du moment, sans pour autant se surcharger au point de nuire à sa santé. L'essentiel est de faire preuve de sérieux et de continuité.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}
