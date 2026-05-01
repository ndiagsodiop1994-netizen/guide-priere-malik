import { Card, SectionTitle, SubSectionTitle, AlertBox, DalilBox, ArabicText, Table, Badge } from "../ui";

export default function Partie3() {
  return (
    <div className="space-y-6">
      <SectionTitle number="3.1" title="Définition et statut juridique de l'Adhan" arabic="الأذان" icon="📢" />
      <Card>
        <p className="text-stone-600 mb-4">
          L'<strong>Adhan (الأذان)</strong> est l'appel rituel à la prière, annoncé publiquement à l'heure de chaque prière. Il est <strong>sunna mu'akkada (سنة مؤكدة)</strong> — sunna fortement confirmée — selon l'école malikite, pour les hommes, aussi bien pour les prières en congrégation que pour la prière individuelle (certains disent seulement pour la congrégation).
        </p>
        <AlertBox type="special" title="💡 Statut juridique selon les Malikites">
          <p className="text-sm">Selon l'avis prépondérant malikite (<em>Mukhtasar Khalil</em> et <em>Ash-Sharh al-Kabir</em>) :</p>
          <ul className="list-disc list-inside text-sm mt-2 space-y-1">
            <li>L'Adhan est <Badge color="amber">Sunna Mu'akkada</Badge> pour les prières en congrégation</li>
            <li>L'Iqama est <Badge color="amber">Sunna Mu'akkada</Badge> pour toutes les prières</li>
            <li>Certains malikites tardifs l'élèvent au rang de <Badge color="red">Wajib</Badge> pour la communauté (fard kifaya selon Ibn al-Arabi)</li>
          </ul>
        </AlertBox>

        <DalilBox
          type="hadith"
          reference="Bukhari & Muslim"
          arabic="إِذَا حَضَرَتِ الصَّلَاةُ فَلْيُؤَذِّنْ لَكُمْ أَحَدُكُمْ وَلْيَؤُمَّكُمْ أَكْبَرُكُمْ"
          translation="Lorsque le moment de la prière arrive, que l'un d'entre vous fasse l'Adhan, et que votre doyen vous dirige."
          source="Bukhari (628) & Muslim (674)"
        />

        <DalilBox
          type="hadith"
          reference="Abu Dawud (498) — Hadith de 'Abdallah ibn Zayd"
          arabic="أُرِيتُ فِي النَّوْمِ أَنَّ رَجُلًا يَأْتِينَا بِثَوْبَيْنِ أَخْضَرَيْنِ، فَيَقُومُ عَلَى الْمَسْجِدِ فَيُؤَذِّنُ"
          translation="J'ai vu en rêve un homme qui venait à nous vêtu de deux vêtements verts, se postait sur la mosquée et faisait l'Adhan..."
          source="Origine de l'institution de l'Adhan — Abu Dawud"
        />
      </Card>

      <SectionTitle number="3.2" title="Texte complet de l'Adhan selon les Malikites" arabic="ألفاظ الأذان" icon="🔊" />
      <Card>
        <AlertBox type="special" title="💡 Spécificité Malikite — Le Tarji' (الترجيع)">
          L'école malikite pratique le <strong>Tarji' (الترجيع)</strong> : prononcer les deux shahadas à voix basse avant de les répéter à voix haute. C'est une caractéristique propre à la version malikite de l'Adhan.
        </AlertBox>

        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5">
          <h3 className="font-bold text-emerald-900 mb-4 text-center">Texte de l'Adhan Malikite</h3>
          <div className="space-y-4">
            {[
              { ar: "اللَّهُ أَكْبَرُ، اللَّهُ أَكْبَرُ", translat: "Allāhu Akbar, Allāhu Akbar", fr: "Allah est le Plus Grand (×2)", note: "Takbir — 2 fois", times: "×2" },
              { ar: "اللَّهُ أَكْبَرُ، اللَّهُ أَكْبَرُ", translat: "Allāhu Akbar, Allāhu Akbar", fr: "Allah est le Plus Grand (×2)", note: "Takbir — 2 fois encore", times: "×2" },
              { ar: "أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللَّهُ", translat: "Ash-hadu allā ilāha illallāh", fr: "Je témoigne qu'il n'y a de divinité qu'Allah", note: "⬇️ Tarji' : à voix BASSE d'abord", times: "×2 (bas)" },
              { ar: "أَشْهَدُ أَنَّ مُحَمَّدًا رَسُولُ اللَّهِ", translat: "Ash-hadu anna Muhammadan rasūlullāh", fr: "Je témoigne que Muhammad est le Messager d'Allah", note: "⬇️ Tarji' : à voix BASSE d'abord", times: "×2 (bas)" },
              { ar: "أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللَّهُ", translat: "Ash-hadu allā ilāha illallāh", fr: "Je témoigne qu'il n'y a de divinité qu'Allah", note: "⬆️ À voix HAUTE", times: "×2 (haut)" },
              { ar: "أَشْهَدُ أَنَّ مُحَمَّدًا رَسُولُ اللَّهِ", translat: "Ash-hadu anna Muhammadan rasūlullāh", fr: "Je témoigne que Muhammad est le Messager d'Allah", note: "⬆️ À voix HAUTE", times: "×2 (haut)" },
              { ar: "حَيَّ عَلَى الصَّلَاةِ", translat: "Hayya 'alas-salāh", fr: "Venez à la prière", note: "En se tournant à droite", times: "×2" },
              { ar: "حَيَّ عَلَى الْفَلَاحِ", translat: "Hayya 'alal-falāh", fr: "Venez au succès/salut", note: "En se tournant à gauche", times: "×2" },
              { ar: "اللَّهُ أَكْبَرُ، اللَّهُ أَكْبَرُ", translat: "Allāhu Akbar, Allāhu Akbar", fr: "Allah est le Plus Grand", note: "Final", times: "×2" },
              { ar: "لَا إِلَهَ إِلَّا اللَّهُ", translat: "Lā ilāha illallāh", fr: "Il n'y a de divinité qu'Allah", note: "Conclusion", times: "×1" },
            ].map((line, i) => (
              <div key={i} className="flex items-start gap-3 bg-white rounded-lg p-3 border border-emerald-100">
                <span className="bg-emerald-600 text-white text-xs px-2 py-0.5 rounded-full flex-shrink-0 mt-1">{line.times}</span>
                <div className="flex-1">
                  <ArabicText size="md" className="text-emerald-900">{line.ar}</ArabicText>
                  <p className="text-teal-700 text-sm font-medium">{line.translat}</p>
                  <p className="text-stone-500 text-xs">{line.fr}</p>
                </div>
                <span className="text-xs text-amber-600 text-right flex-shrink-0 max-w-24">{line.note}</span>
              </div>
            ))}

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
              <p className="font-bold text-amber-800 text-sm">Adhan de Subh — Addition spécifique</p>
              <ArabicText size="md" className="text-emerald-900 mt-2">الصَّلَاةُ خَيْرٌ مِنَ النَّوْمِ</ArabicText>
              <p className="text-stone-600 text-sm mt-1">As-salātu khayrun minan-nawm — « La prière vaut mieux que le sommeil » — ajouté 2 fois après les Hayy'alat dans l'Adhan de Fajr uniquement.</p>
            </div>
          </div>
        </div>
      </Card>

      <SectionTitle number="3.3" title="Texte de l'Iqama selon les Malikites" arabic="الإقامة" icon="🕌" />
      <Card>
        <AlertBox type="special" title="💡 Spécificité Malikite — Iqama singulière (مفردة)">
          Contrairement aux Hanafites (qui doublent chaque phrase), les Malikites prononcent chaque phrase de l'Iqama <strong>UNE SEULE FOIS</strong>, sauf le Takbir du début (2 fois) et la fin (2 fois). Le « قد قامت الصلاة » est dit UNE fois selon les Malikites.
        </AlertBox>

        <div className="bg-teal-50 border border-teal-200 rounded-xl p-5">
          <h3 className="font-bold text-teal-900 mb-4 text-center">Texte de l'Iqama Malikite</h3>
          <div className="space-y-3">
            {[
              { ar: "اللَّهُ أَكْبَرُ، اللَّهُ أَكْبَرُ", translat: "Allāhu Akbar, Allāhu Akbar", times: "×2" },
              { ar: "أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللَّهُ", translat: "Ash-hadu allā ilāha illallāh", times: "×1" },
              { ar: "أَشْهَدُ أَنَّ مُحَمَّدًا رَسُولُ اللَّهِ", translat: "Ash-hadu anna Muhammadan rasūlullāh", times: "×1" },
              { ar: "حَيَّ عَلَى الصَّلَاةِ", translat: "Hayya 'alas-salāh", times: "×1" },
              { ar: "حَيَّ عَلَى الْفَلَاحِ", translat: "Hayya 'alal-falāh", times: "×1" },
              { ar: "قَدْ قَامَتِ الصَّلَاةُ", translat: "Qad qāmatis-salāh", times: "×1" },
              { ar: "اللَّهُ أَكْبَرُ، اللَّهُ أَكْبَرُ", translat: "Allāhu Akbar, Allāhu Akbar", times: "×2" },
              { ar: "لَا إِلَهَ إِلَّا اللَّهُ", translat: "Lā ilāha illallāh", times: "×1" },
            ].map((line, i) => (
              <div key={i} className="flex items-center gap-3 bg-white rounded-lg p-3 border border-teal-100">
                <span className="bg-teal-600 text-white text-xs px-2 py-0.5 rounded-full flex-shrink-0">{line.times}</span>
                <div className="flex-1">
                  <ArabicText size="md" className="text-teal-900">{line.ar}</ArabicText>
                  <p className="text-teal-600 text-xs">{line.translat}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Card>

      <SectionTitle number="3.4-3.5" title="Réponses à l'Adhan et tableau comparatif" arabic="إجابة الأذان" icon="🤝" />
      <Card>
        <SubSectionTitle title="Que dit celui qui entend l'Adhan ?" />
        <p className="text-stone-600 text-sm mb-3">Il répète après chaque phrase du muezzin, SAUF pour les Hayy'alat :</p>

        <div className="bg-emerald-50 rounded-xl p-4 mb-4">
          <p className="text-sm text-stone-600 mb-2">Pour « حيَّ على الصلاة » et « حيَّ على الفلاح », on dit :</p>
          <ArabicText size="md" className="text-emerald-900">لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ</ArabicText>
          <p className="text-stone-500 text-xs mt-1">Lā hawla wa lā quwwata illā billāh — « Il n'y a de force ni de puissance qu'en Allah »</p>
        </div>

        <p className="text-stone-600 text-sm mb-3">Après le « قَدْ قَامَتِ الصَّلَاةُ » de l'Iqama, on dit :</p>
        <div className="bg-emerald-50 rounded-xl p-4 mb-4">
          <ArabicText size="md" className="text-emerald-900">أَقَامَهَا اللَّهُ وَأَدَامَهَا</ArabicText>
          <p className="text-stone-500 text-xs mt-1">Aqāmahallāhu wa adāmahā — « Qu'Allah l'établisse et la pérennise »</p>
        </div>

        <SubSectionTitle title="Du'a entre l'Adhan et l'Iqama" />
        <DalilBox
          type="hadith"
          reference="Bukhari (614)"
          arabic="اللَّهُمَّ رَبَّ هَذِهِ الدَّعْوَةِ التَّامَّةِ، وَالصَّلَاةِ الْقَائِمَةِ، آتِ مُحَمَّدًا الْوَسِيلَةَ وَالْفَضِيلَةَ، وَابْعَثْهُ مَقَامًا مَحْمُودًا الَّذِي وَعَدْتَهُ"
          translation="Ô Allah, Seigneur de cet appel parfait et de cette prière imminente, accorde à Muhammad la Wasila et la Fadila, et élève-le à la Station Louée que Tu lui as promise."
          source="À dire après avoir répété l'Adhan — Bukhari (614)"
        />

        <SubSectionTitle title="Tableau comparatif des Madhahib sur l'Adhan et l'Iqama" />
        <Table
          headers={["Point", "Malikite ✦", "Hanafite", "Shafi'ite", "Hanbalite"]}
          rows={[
            ["Takbir initial de l'Adhan", "4 fois", "4 fois", "4 fois", "4 fois"],
            ["Tarji' dans l'Adhan", "OUI ✅", "NON ❌", "OUI ✅", "NON ❌"],
            ["Iqama", "Singulière (مفردة)", "Doublée (مثنى) + 1x قد قامت 2x", "Singulière sauf Takbir", "Singulière"],
            ["قد قامت الصلاة", "1 fois", "2 fois", "1 fois", "1 fois"],
            ["Statut de l'Adhan", "Sunna Mu'akkada", "Sunna Mu'akkada (ou Wajib)", "Fard Kifaya", "Fard Kifaya"],
            ["Adhan pour femme seule", "Non prescrit", "Non prescrit", "Non prescrit", "Non prescrit"],
            ["Réponse à l'Adhan", "Répéter + Du'a", "Répéter + Du'a", "Répéter + Du'a", "Répéter + Du'a"],
          ]}
        />
      </Card>
    </div>
  );
}
