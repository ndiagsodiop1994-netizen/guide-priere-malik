import { Card, SectionTitle, AlertBox, ArabicText, DalilBox } from "../ui";

export default function Partie8() {
  return (
    <div className="space-y-6">
      <SectionTitle number="8.1" title="Le Qunût dans la prière de Subh" arabic="القنوت في صلاة الصبح" icon="🤲" />
      <Card>
        <AlertBox type="special" title="💡 Spécificité Malikite — Le Qunût est une SUNNA de Subh">
          Selon l'école malikite, le Qunût est une <strong>sunna confirmée (سنة مؤكدة)</strong> dans la prière de Subh uniquement. Son omission nécessite le <strong>Sujud Qabli (avant le salam)</strong>. Il n'est pas prescrit dans les autres prières obligatoires selon l'avis malikite dominant.
        </AlertBox>

        <DalilBox
          type="hadith"
          reference="Muwatta' de l'Imam Malik (1/168)"
          arabic="أَنَّ رَسُولَ اللَّهِ ﷺ كَانَ يَقُولُ فِي آخِرِ وِتْرِهِ: اللَّهُمَّ إِنِّي أَعُوذُ بِرِضَاكَ مِنْ سَخَطِكَ..."
          translation="Le Prophète ﷺ récitait à la fin de son Witr..."
          source="Muwatta' de l'Imam Malik — avec différentes narrations sur le Qunût"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <h4 className="font-bold text-amber-900 mb-2">📍 Moment du Qunût</h4>
            <p className="text-stone-600 text-sm">
              Selon l'avis <strong>malikite dominant</strong> : le Qunût se récite <strong>APRÈS le ruku' de la 2ème rak'a</strong> de Subh (en position debout, après avoir dit « سمع الله لمن حمده »), avant le sujud.
            </p>
            <p className="text-stone-500 text-xs mt-2">Note : certains malikites le placent avant le ruku' — mais l'avis dominant est APRÈS.</p>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-bold text-blue-900 mb-2">🤲 Position des mains</h4>
            <p className="text-stone-600 text-sm">
              Les mains sont levées en <strong>position de du'a (رفع اليدين)</strong>, paumes vers le ciel selon certains malikites. D'autres laissent les bras en sadl. Les deux positions sont rapportées dans le madhhab.
            </p>
          </div>
        </div>

        <h3 className="font-bold text-emerald-900 text-lg mb-3">Texte du Qunût — Narrations Malikites</h3>
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 mb-4">
          <p className="text-stone-600 text-sm mb-3">Le Qunût le plus authentique rapporté dans les sources malikites :</p>
          <ArabicText size="lg" className="text-emerald-900 mb-4">
            اللَّهُمَّ إِنَّا نَسْتَعِينُكَ وَنَسْتَغْفِرُكَ، وَنُؤْمِنُ بِكَ وَنَتَوَكَّلُ عَلَيْكَ، وَنُثْنِي عَلَيْكَ الْخَيْرَ كُلَّهُ، نَشْكُرُكَ وَلَا نَكْفُرُكَ، وَنَخْلَعُ وَنَتْرُكُ مَنْ يَفْجُرُكَ. اللَّهُمَّ إِيَّاكَ نَعْبُدُ، وَلَكَ نُصَلِّي وَنَسْجُدُ، وَإِلَيْكَ نَسْعَى وَنَحْفِدُ، نَرْجُو رَحْمَتَكَ وَنَخْشَى عَذَابَكَ، إِنَّ عَذَابَكَ بِالْكَافِرِينَ مُلْحَقٌ
          </ArabicText>
          <p className="text-stone-600 text-sm italic leading-relaxed">
            « Ô Allah, nous implorons Ton aide et nous Te demandons pardon. Nous croyons en Toi et nous nous fions à Toi. Nous Te louons de tout le bien. Nous Te remercions et ne T'ingrats pas. Nous rejetons et abandonnons celui qui Te désobéit. Ô Allah, c'est Toi seul que nous adorons, c'est pour Toi que nous prions et prosternons, c'est vers Toi que nous nous hâtons et nous empressons. Nous espérons Ta miséricorde et nous craignons Ton châtiment. Ton châtiment atteindra certes les mécréants. »
          </p>
        </div>

        <div className="bg-teal-50 border border-teal-200 rounded-xl p-4">
          <p className="text-stone-600 text-sm mb-3">Qunût court (rapporté aussi) :</p>
          <ArabicText size="md" className="text-teal-900 mb-2">
            اللَّهُمَّ اهْدِنِي فِيمَنْ هَدَيْتَ، وَعَافِنِي فِيمَنْ عَافَيْتَ، وَتَوَلَّنِي فِيمَنْ تَوَلَّيْتَ، وَبَارِكْ لِي فِيمَا أَعْطَيْتَ، وَقِنِي شَرَّ مَا قَضَيْتَ، إِنَّكَ تَقْضِي وَلَا يُقْضَى عَلَيْكَ، إِنَّهُ لَا يَذِلُّ مَنْ وَالَيْتَ، تَبَارَكْتَ رَبَّنَا وَتَعَالَيْتَ
          </ArabicText>
          <p className="text-stone-500 text-xs italic">Rapporté par Al-Hasan ibn Ali (رضي الله عنهما) — Abu Dawud, Tirmidhi, Nasa'i</p>
        </div>
      </Card>

      <Card>
        <h3 className="font-bold text-emerald-900 text-lg mb-4">Règles détaillées du Qunût</h3>
        <div className="space-y-3">
          {[
            { q: "Le Qunût est-il obligatoire ?", r: "Non — c'est une sunna confirmée. Son oubli nécessite le Sujud Qabli (avant le salam)." },
            { q: "L'imam dit-il le Qunût à voix haute ?", r: "Oui, l'imam récite le Qunût à voix haute en congrégation selon les malikites." },
            { q: "Le ma'mum dit-il Amin ?", r: "Oui, les fidèles disent « Amin » à la fin du Qunût de l'imam." },
            { q: "Le Qunût s'applique-t-il au voyageur ?", r: "Oui, même en voyage, le Qunût reste une sunna selon l'avis malikite." },
            { q: "Existe-t-il un Qunût de calamité (Qunût an-Nawazil) ?", r: "Oui — en temps de calamité touchant les musulmans, l'imam peut ajouter un Qunût spécial dans toutes les prières obligatoires selon certains malikites, sur le modèle du Prophète ﷺ." },
          ].map((item, i) => (
            <div key={i} className="border border-stone-200 rounded-lg overflow-hidden">
              <div className="bg-emerald-700 text-white px-4 py-2 text-sm font-bold">❓ {item.q}</div>
              <div className="px-4 py-3 text-sm text-stone-600">{item.r}</div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
