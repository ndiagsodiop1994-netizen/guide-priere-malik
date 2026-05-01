import { Card, SectionTitle, SubSectionTitle, AlertBox, ArabicText, Table, StepBox, DalilBox } from "../ui";

export default function Partie7() {
  return (
    <div className="space-y-6">
      <DalilBox
        type="hadith"
        reference="Bukhari (631)"
        arabic="صَلُّوا كَمَا رَأَيْتُمُونِي أُصَلِّي"
        translation="Priez comme vous me voyez prier."
      />

      <SectionTitle number="7.1" title="Description Complète de la Prière — Étape par Étape" arabic="صفة الصلاة" icon="📋" />
      <Card>
        <p className="text-stone-600 mb-4 text-sm">
          Ce guide pas-à-pas décrit la prière selon l'école Malikite, en prenant exemple sur une prière de 4 rak'at (Dhuhr ou 'Asr).
        </p>

        <StepBox number={1} title="Préparation et position initiale" arabic="الاستعداد">
          <ul className="list-disc list-inside space-y-1">
            <li>S'assurer de la pureté rituelle (wudu/ghusl), de la propreté du lieu et du vêtement</li>
            <li>Se placer debout face à la Qibla</li>
            <li>Pieds légèrement écartés (à la largeur des épaules)</li>
            <li>Orteils dirigés vers la Qibla</li>
            <li>Regard dirigé vers le lieu de prosternation</li>
            <li>Corps détendu, esprit concentré</li>
          </ul>
        </StepBox>

        <StepBox number={2} title="L'Intention (النية)" arabic="النية">
          Former dans son cœur l'intention de la prière spécifique : par ex., « J'ai l'intention d'accomplir la prière obligatoire de Dhuhr (4 rak'at), uniquement pour Allah ». <strong>Aucune prononciation verbale</strong> — la niyyah est exclusivement dans le cœur selon les Malikites.
        </StepBox>

        <StepBox number={3} title="Takbirat al-Ihram (تكبيرة الإحرام)" arabic="الله أكبر">
          <div className="mb-2">
            <ArabicText size="md" className="text-emerald-900">اللَّهُ أَكْبَرُ</ArabicText>
            <p className="text-stone-500 text-xs">Allāhu Akbar — « Allah est le Plus Grand »</p>
          </div>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li><strong>Raf' al-yadayn (رفع اليدين)</strong> : lever les deux mains jusqu'aux oreilles (ou épaules selon certains malikites) lors du Takbirat al-Ihram UNIQUEMENT</li>
            <li>Paumes ouvertes vers la Qibla, doigts naturellement serrés ou légèrement écartés</li>
            <li>Le Takbir doit être prononcé en entier en position debout</li>
            <li>L'intention et le Takbir doivent coïncider</li>
          </ul>
          <AlertBox type="special">
            <strong>Spécificité Malikite :</strong> Le raf' al-yadayn n'est pratiqué QU'AU Takbirat al-Ihram. Les Malikites ne lèvent PAS les mains lors des autres takbirat (ruku', redressement, etc.), contrairement aux Shafi'ites et Hanbalites.
          </AlertBox>
        </StepBox>

        <StepBox number={4} title="Position des mains — Le SADL" arabic="السدل">
          Après le Takbirat al-Ihram, selon l'avis dominant malikite :
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Sadl (السدل)</strong> : laisser les bras pendants naturellement le long du corps — sans les croiser</li>
            <li>Certains malikites pratiquent le Qabd (القبض) : main droite posée sur le poignet gauche</li>
            <li>Les deux sont permis selon le madhhab — le sadl est l'avis traditionnel dominant</li>
          </ul>
        </StepBox>

        <StepBox number={5} title="Récitation de la Basmala et de la Fatiha" arabic="الفاتحة">
          <div className="space-y-3">
            <div>
              <p className="text-sm font-bold text-stone-700 mb-1">Basmala (silencieuse — mandoub) :</p>
              <ArabicText size="sm" className="text-emerald-800">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</ArabicText>
              <p className="text-stone-500 text-xs italic">Bismillāhir-rahmānir-rahīm — Récitée silencieusement selon les Malikites (non considérée comme verset de la Fatiha)</p>
            </div>

            <p className="text-sm font-bold text-stone-700">La Fatiha complète :</p>
            <div className="bg-emerald-50 rounded-xl p-4">
              {[
                { ar: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ", fr: "Louange à Allah, Seigneur des mondes" },
                { ar: "الرَّحْمَٰنِ الرَّحِيمِ", fr: "Le Tout Miséricordieux, Le Très Miséricordieux" },
                { ar: "مَالِكِ يَوْمِ الدِّينِ", fr: "Maître du Jour de la Rétribution" },
                { ar: "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ", fr: "C'est Toi Seul que nous adorons, et c'est Toi Seul dont nous implorons l'aide" },
                { ar: "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ", fr: "Guide-nous dans le droit chemin" },
                { ar: "صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ", fr: "Le chemin de ceux que Tu as comblés de Tes bienfaits" },
                { ar: "غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ", fr: "Non pas des égarés, ni de ceux qui ont encouru Ta colère" },
              ].map((v, i) => (
                <div key={i} className="mb-3 border-b border-emerald-100 pb-2 last:border-0">
                  <ArabicText size="md" className="text-emerald-900">{v.ar}</ArabicText>
                  <p className="text-stone-500 text-xs italic">{v.fr}</p>
                </div>
              ))}
              <div className="mt-2 text-center">
                <ArabicText size="md" className="text-emerald-800">آمِينَ</ArabicText>
                <p className="text-stone-500 text-xs">Amin — dit à voix BASSE selon les Malikites</p>
              </div>
            </div>
          </div>
        </StepBox>

        <StepBox number={6} title="Récitation d'une Sourate (dans les 2 premières rak'at)" arabic="قراءة السورة">
          Après la Fatiha, réciter une sourate courte ou des versets. Exemple pour la première rak'a : <strong>Al-A'la (سورة الأعلى)</strong>. Pour la seconde : <strong>Al-Ghashiya (سورة الغاشية)</strong> ou similaire.
          <div className="mt-2 text-sm">
            <p className="font-semibold text-stone-700">Règles de récitation :</p>
            <ul className="list-disc list-inside space-y-1 mt-1">
              <li><strong>À voix haute (جهر)</strong> : Subh (les 2 rak'at), Maghrib (les 2 premières), 'Isha' (les 2 premières)</li>
              <li><strong>À voix basse (سر)</strong> : Dhuhr et 'Asr (toutes les rak'at)</li>
              <li>La 3ème et 4ème rak'at : seule la Fatiha est récitée (sourate supplémentaire non obligatoire)</li>
            </ul>
          </div>
        </StepBox>

        <StepBox number={7} title="Le Ruku' (الركوع)" arabic="الركوع">
          <ArabicText size="sm" className="text-emerald-800 mb-2">اللَّهُ أَكْبَرُ</ArabicText>
          <p className="text-stone-500 text-xs mb-2">Dire le Takbir en s'inclinant (sans lever les mains — spécificité malikite)</p>
          <p className="font-semibold text-sm text-stone-700">Position :</p>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>Dos horizontal et plat</li>
            <li>Mains sur les genoux, doigts écartés</li>
            <li>Tête alignée avec le dos (ni levée ni baissée)</li>
            <li>Bras légèrement écartés du corps</li>
          </ul>
          <p className="font-semibold text-sm text-stone-700 mt-2">Formule (au moins 3 fois) :</p>
          <ArabicText size="md" className="text-emerald-900">سُبْحَانَ رَبِّيَ الْعَظِيمِ</ArabicText>
          <p className="text-stone-500 text-xs">Subhāna rabbiyal-'azīm — « Gloire à mon Seigneur, le Très Grand »</p>
          <p className="text-stone-500 text-xs mt-1">Minimum : 1 fois. Recommandé : 3 fois. Idéal : 7 ou 10 fois pour l'imam avec les fidèles.</p>
        </StepBox>

        <StepBox number={8} title="Le redressement (الاعتدال)" arabic="سمع الله لمن حمده">
          <div className="space-y-2">
            <div>
              <ArabicText size="md" className="text-emerald-900">سَمِعَ اللَّهُ لِمَنْ حَمِدَهُ</ArabicText>
              <p className="text-stone-500 text-xs">Sami'allāhu liman hamidah — Dit en se relevant. L'imam + prieur seul.</p>
            </div>
            <div>
              <ArabicText size="md" className="text-emerald-900">رَبَّنَا وَلَكَ الْحَمْدُ</ArabicText>
              <p className="text-stone-500 text-xs">Rabbanā wa lakal-hamd — Dit debout par tous (imam + ma'mum + prieur seul)</p>
            </div>
            <p className="text-sm text-stone-600">Se tenir complètement droit, immobile un instant (tuma'nina) avant de descendre pour le sujud.</p>
          </div>
        </StepBox>

        <StepBox number={9} title="Le premier Sujud (السجدة الأولى)" arabic="سبحان ربي الأعلى">
          <ArabicText size="sm" className="text-emerald-800 mb-2">اللَّهُ أَكْبَرُ</ArabicText>
          <p className="text-stone-500 text-xs mb-2">Descente vers le sujud en disant le Takbir</p>
          <p className="font-semibold text-sm text-stone-700">Les 7 points de contact avec le sol :</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 my-3">
            {["Front (+ nez selon les Malikites)", "Paume droite", "Paume gauche", "Genou droit", "Genou gauche", "Pied droit (orteils)", "Pied gauche (orteils)"].map((p, i) => (
              <div key={i} className="bg-emerald-100 rounded p-2 text-center text-xs text-emerald-800 font-medium">{p}</div>
            ))}
          </div>
          <p className="font-semibold text-sm text-stone-700">Position :</p>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>Coudes levés et éloignés du corps (pour l'homme)</li>
            <li>Mains à niveau des oreilles ou des épaules</li>
            <li>Doigts joints et orientés vers la Qibla</li>
          </ul>
          <p className="font-semibold text-sm text-stone-700 mt-2">Formule (3 fois minimum) :</p>
          <ArabicText size="md" className="text-emerald-900">سُبْحَانَ رَبِّيَ الْأَعْلَى</ArabicText>
          <p className="text-stone-500 text-xs">Subhāna rabbiyal-a'lā — « Gloire à mon Seigneur, le Très Haut »</p>
        </StepBox>

        <StepBox number={10} title="Position assise entre les deux sujud (الجلوس بين السجدتين)" arabic="رب اغفر لي">
          <ArabicText size="sm" className="text-emerald-800 mb-2">اللَّهُ أَكْبَرُ</ArabicText>
          <p className="text-sm text-stone-600 mb-2">Se relever en disant le Takbir, s'asseoir en position iftirash (jambe gauche sous soi, pied droit vertical).</p>
          <p className="font-semibold text-sm text-stone-700">Du'a (recommandé — mandoub) :</p>
          <ArabicText size="md" className="text-emerald-900">رَبِّ اغْفِرْ لِي</ArabicText>
          <p className="text-stone-500 text-xs">Rabbi-ghfir lī — « Mon Seigneur, pardonne-moi »</p>
          <p className="text-stone-500 text-xs mt-1">Ou la version longue : رَبِّ اغْفِرْ لِي وَارْحَمْنِي وَاجْبُرْنِي وَاهْدِنِي وَارْزُقْنِي (Abu Dawud, Tirmidhi)</p>
          <p className="text-sm text-stone-600 mt-2">Rester immobile un instant (tuma'nina) avant le second sujud.</p>
        </StepBox>

        <StepBox number={11} title="Le second Sujud (السجدة الثانية)" arabic="السجدة الثانية">
          Identique au premier sujud. Dire le Takbir en descendant. Réciter « سُبْحَانَ رَبِّيَ الْأَعْلَى » 3 fois minimum. Se relever en disant le Takbir.
        </StepBox>

        <StepBox number={12} title="Se lever pour la 2ème rak'a" arabic="القيام للركعة الثانية">
          <p className="text-sm text-stone-600">
            Se lever directement sans s'appuyer sur les mains (si possible). Certains s'appuient sur les genoux puis se lèvent. La méthode recommandée est de se lever en s'aidant légèrement des genoux puis des cuisses. La 2ème rak'a commence comme la 1ère (Basmala → Fatiha → Sourate → Ruku' → Etc.).
          </p>
        </StepBox>

        <StepBox number={13} title="Le Tashahud du milieu (après la 2ème rak'a)" arabic="التشهد الأوسط">
          <p className="text-sm text-stone-600 mb-2">Pour les prières de 3 ou 4 rak'at : après le second sujud de la 2ème rak'a, s'asseoir en iftirash.</p>
          <p className="font-semibold text-sm text-stone-700">Réciter le Tashahud (sunna, non fard) :</p>
          <ArabicText size="sm" className="text-emerald-900 mt-2">
            التَّحِيَّاتُ لِلَّهِ، الزَّاكِيَاتُ لِلَّهِ، الطَّيِّبَاتُ الصَّلَوَاتُ لِلَّهِ، السَّلَامُ عَلَيْكَ أَيُّهَا النَّبِيُّ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ، السَّلَامُ عَلَيْنَا وَعَلَى عِبَادِ اللَّهِ الصَّالِحِينَ، أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللَّهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ
          </ArabicText>
          <p className="text-stone-500 text-xs mt-2">Lever le doigt index lors de la Shahada. Se lever ensuite pour les rak'at restantes.</p>
        </StepBox>

        <StepBox number={14} title="3ème et 4ème rak'at (pour Dhuhr/'Asr)" arabic="الركعتان الأخيرتان">
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>Réciter uniquement la Fatiha (la sourate supplémentaire n'est pas sunna dans ces rak'at selon l'avis dominant malikite)</li>
            <li>Même déroulement : Fatiha → Ruku' → I'tidal → Sujud × 2</li>
            <li>À voix basse dans les prières de Dhuhr et 'Asr</li>
          </ul>
        </StepBox>

        <StepBox number={15} title="Le Tashahud final et le Taslim" arabic="التشهد الأخير والسلام">
          Après le second sujud de la dernière rak'a :
          <ol className="list-decimal list-inside space-y-2 text-sm mt-2">
            <li>S'asseoir en <strong>tawarruk</strong> (jambe gauche sortie vers le côté droit, pied droit vertical) — sunna du dernier tashahud</li>
            <li>Réciter le Tashahud (OBLIGATOIRE)</li>
            <li>Réciter la Salat Ibrahimiyya (sunna confirmée)</li>
            <li>Faire le Du'a de fin (mandoub)</li>
            <li>Dire le Taslim :</li>
          </ol>
          <div className="mt-3">
            <ArabicText size="lg" className="text-emerald-900">السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللَّهِ</ArabicText>
            <p className="text-stone-500 text-xs">As-salāmu 'alaykum wa rahmatullāh — UN SEUL salam, en se tournant légèrement à droite</p>
          </div>
          <AlertBox type="special">
            <strong>Spécificité Malikite :</strong> UN SEUL taslim (vers la droite) est le fard. Le second (vers la gauche) est une sunna selon l'avis malikite dominant. Certains malikites considèrent qu'un seul suffit sans second.
          </AlertBox>
        </StepBox>
      </Card>

      <SectionTitle number="7.2" title="Les 5 Prières — Tableaux Récapitulatifs" arabic="الصلوات الخمس" icon="📊" />
      <Card>
        <Table
          headers={["Prière", "Rak'at", "Récitation", "Qunût", "Particularités"]}
          rows={[
            [
              "🌅 Subh (الفجر)",
              "2",
              "À voix haute (الفجر 1ère et 2ème)",
              "OUI — Qunût après le ruku' de la 2ème rak'a ✅",
              "Prière la plus courte. Le Qunût est une sunna malikite. Pas de rak'at surérogatoires après."
            ],
            [
              "☀️ Dhuhr (الظهر)",
              "4",
              "À voix basse (les 4 rak'at)",
              "NON",
              "Tashahud du milieu après la 2ème rak'a. Sourate après Fatiha dans les 2 premières rak'at seulement."
            ],
            [
              "🌤️ 'Asr (العصر)",
              "4",
              "À voix basse (les 4 rak'at)",
              "NON",
              "Même structure que Dhuhr. « La prière du milieu » selon certains commentateurs."
            ],
            [
              "🌇 Maghrib (المغرب)",
              "3",
              "À voix haute (les 2 premières), basse (la 3ème)",
              "NON",
              "Tashahud du milieu après la 2ème rak'a. La 3ème rak'a : seulement la Fatiha."
            ],
            [
              "🌙 'Isha' (العشاء)",
              "4",
              "À voix haute (les 2 premières), basse (3ème et 4ème)",
              "NON",
              "Même structure que Dhuhr pour les deux dernières rak'at."
            ],
          ]}
        />
      </Card>

      <SectionTitle number="7.3" title="Spécificités de la Prière de la Femme" arabic="صلاة المرأة" icon="👩" />
      <Card>
        <AlertBox type="special" title="💡 Position Malikite — La femme prie comme l'homme">
          Selon l'école malikite, la femme prie de la même façon que l'homme dans l'essentiel. Il n'y a pas de différences majeures dans la structure de la prière. Cependant, il y a des spécificités concernant la 'awra et la voix.
        </AlertBox>

        <Table
          headers={["Aspect", "Homme", "Femme", "Remarque"]}
          rows={[
            ["'Awra dans la prière", "Du nombril au genou", "Tout le corps sauf visage et mains", "La femme doit couvrir ses cheveux et ses pieds"],
            ["Voix lors de la récitation", "À voix haute dans les prières du soir/matin", "À voix basse toujours (si des hommes non-mahram peuvent entendre)", "En présence de femmes uniquement : peut réciter à voix haute"],
            ["Position des coudes au sujud", "Coudes levés et éloignés", "Coudes rapprochés du corps pour plus de couverture", "Recommandation malikite"],
            ["Sadl vs Qabd", "Sadl recommandé", "Même règle — sadl ou qabd", ""],
            ["Imamat de la femme", "Pour hommes et femmes", "Pour femmes uniquement", "La femme ne peut pas diriger la prière mixte selon les Malikites"],
            ["Voix lors du Adhan/Iqama", "Prescrit pour les hommes", "Non prescrit — ni obligatoire ni sunna", "La femme ne fait pas l'Adhan selon les Malikites"],
          ]}
        />
      </Card>
    </div>
  );
}
