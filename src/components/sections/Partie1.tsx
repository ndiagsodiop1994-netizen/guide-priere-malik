import { Card, SectionTitle, SubSectionTitle, AlertBox, DalilBox, ArabicText, Table, Badge } from "../ui";

export default function Partie1() {
  return (
    <div className="space-y-6">
      {/* 1.1 */}
      <SectionTitle number="1.1" title="Définition de As-Salat (الصلاة)" icon="📖" />
      <Card>
        <SubSectionTitle title="Définition linguistique (لغةً)" />
        <p className="text-stone-600 mb-3">
          Le mot <strong>الصلاة (As-Salat)</strong> vient de la racine arabe <strong>ص-ل-و</strong>. Linguistiquement, il signifie :
        </p>
        <ul className="list-disc list-inside space-y-2 text-stone-600 mb-4">
          <li><strong>Ad-Du'a (الدعاء)</strong> : la supplication/invocation. C'est le sens principal retenu par la majorité des lexicographes arabes.</li>
          <li>Selon Ibn Faris dans <em>Maqayis al-Lugha</em> : il indique la connexion et l'attachement.</li>
          <li>Selon Al-Fayoumi dans <em>Al-Misbah al-Munir</em> : les Arabes disaient « صليت على فلان » pour dire « j'ai invoqué en sa faveur ».</li>
        </ul>
        <DalilBox
          type="quran"
          reference="At-Tawba (9:103)"
          arabic="وَصَلِّ عَلَيْهِمْ ۖ إِنَّ صَلَاتَكَ سَكَنٌ لَّهُمْ"
          translation="Et prie pour eux ; en vérité ta prière [invocation] est une quiétude pour eux."
        />

        <SubSectionTitle title="Définition terminologique (اصطلاحاً)" />
        <p className="text-stone-600 mb-3">
          Dans la terminologie juridique islamique (Fiqh), la prière est :
        </p>
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 mb-4">
          <ArabicText size="md" className="text-emerald-900 mb-3">
            أَقْوَالٌ وَأَفْعَالٌ مَخْصُوصَةٌ، مُفْتَتَحَةٌ بِالتَّكْبِيرِ، مَخْتَتَمَةٌ بِالتَّسْلِيمِ
          </ArabicText>
          <p className="text-stone-600 text-sm italic">
            « Des paroles et des actes déterminés, commençant par le Takbir (Allahu Akbar) et se terminant par le Taslim (As-salamu 'alaykum). »
          </p>
        </div>
        <p className="text-stone-600">
          Cette définition est celle que donnent les grands maîtres malikites comme <strong>Khalil ibn Ishaq</strong> dans son <em>Mukhtasar</em> et <strong>Ad-Dardir</strong> dans <em>Ash-Sharh al-Kabir</em>.
        </p>
      </Card>

      {/* 1.2 */}
      <SectionTitle number="1.2" title="Statut juridique (حكم الصلاة)" icon="⚖️" />
      <Card>
        <AlertBox type="success" title="Statut : FARD 'AYN (فرض عين) — Obligation individuelle absolue">
          La prière des cinq temps est une obligation individuelle absolue (<strong>فرض عين</strong>) sur tout musulman/e adulte et sain d'esprit. C'est un pilier fondamental de l'Islam, unanimement établi par le Coran, la Sunna et l'Ijma'.
        </AlertBox>

        <SubSectionTitle title="Preuves coraniques (أدلة القرآن)" />
        <DalilBox
          type="quran"
          reference="Al-Baqara (2:43)"
          arabic="وَأَقِيمُوا الصَّلَاةَ وَآتُوا الزَّكَاةَ وَارْكَعُوا مَعَ الرَّاكِعِينَ"
          translation="Accomplissez la prière, acquittez la Zakat et inclinez-vous avec ceux qui s'inclinent."
        />
        <DalilBox
          type="quran"
          reference="An-Nisa' (4:103)"
          arabic="إِنَّ الصَّلَاةَ كَانَتْ عَلَى الْمُؤْمِنِينَ كِتَابًا مَّوْقُوتًا"
          translation="La prière est prescrite aux croyants à des heures déterminées."
        />
        <DalilBox
          type="quran"
          reference="Al-Baqara (2:238)"
          arabic="حَافِظُوا عَلَى الصَّلَوَاتِ وَالصَّلَاةِ الْوُسْطَىٰ وَقُومُوا لِلَّهِ قَانِتِينَ"
          translation="Observez scrupuleusement les prières et particulièrement la prière du milieu. Et présentez-vous à Allah avec dévotion."
        />
        <DalilBox
          type="quran"
          reference="Ta-Ha (20:14)"
          arabic="إِنَّنِي أَنَا اللَّهُ لَا إِلَٰهَ إِلَّا أَنَا فَاعْبُدْنِي وَأَقِمِ الصَّلَاةَ لِذِكْرِي"
          translation="Je suis Allah, point de divinité en dehors de Moi. Adore-Moi donc et accomplis la prière pour te souvenir de Moi."
        />

        <SubSectionTitle title="Preuves de la Sunna (أدلة السنة)" />
        <DalilBox
          type="hadith"
          reference="Muwatta' de l'Imam Malik / Bukhari & Muslim"
          arabic="بُنِيَ الإِسْلَامُ عَلَى خَمْسٍ: شَهَادَةُ أَنْ لَا إِلَهَ إِلَّا اللهُ وَأَنَّ مُحَمَّدًا رَسُولُ اللهِ، وَإِقَامُ الصَّلَاةِ، وَإِيتَاءُ الزَّكَاةِ، وَالحَجُّ، وَصَوْمُ رَمَضَانَ"
          translation="L'Islam est bâti sur cinq [piliers] : le témoignage qu'il n'y a de divinité qu'Allah et que Muhammad est Son messager, l'accomplissement de la prière, l'acquittement de la Zakat, le pèlerinage et le jeûne du Ramadan."
          source="Rapporté par Ibn Umar (رضي الله عنه) — Bukhari & Muslim"
        />
        <DalilBox
          type="hadith"
          reference="Al-Muwatta' (1/7)"
          arabic="أَوَّلُ مَا يُحَاسَبُ بِهِ العَبْدُ يَوْمَ القِيَامَةِ الصَّلَاةُ، فَإِنْ صَلُحَتْ صَلُحَ سَائِرُ عَمَلِهِ، وَإِنْ فَسَدَتْ فَسَدَ سَائِرُ عَمَلِهِ"
          translation="La première chose dont le serviteur sera tenu compte au Jour du Jugement est la prière. Si elle est bonne, le reste de ses actes sera bon ; si elle est corrompue, le reste de ses actes sera corrompu."
          source="Hadith rapporté par At-Tabarani — Sahih"
        />

        <SubSectionTitle title="L'Ijma' (الإجماع)" />
        <p className="text-stone-600">
          L'ensemble des savants musulmans de toutes les époques et de toutes les écoles de jurisprudence a établi unanimement (<strong>إجماعاً</strong>) l'obligation des cinq prières quotidiennes. Cela constitue l'un des <em>ma'lumin min ad-din bid-darura</em> (ما يُعلَم من الدين بالضرورة) — les évidences absolues de la religion.
        </p>
      </Card>

      {/* 1.3 */}
      <SectionTitle number="1.3" title="Conditions d'obligation de la prière" arabic="شروط الوجوب" icon="📋" />
      <Card>
        <Table
          headers={["Condition", "Détail", "Remarque"]}
          rows={[
            [
              <Badge color="green">Islam (الإسلام)</Badge>,
              "Être musulman(e)",
              "Le non-musulman n'est pas tenu d'accomplir la prière dans cette vie mais sera interrogé à ce sujet dans l'Au-delà"
            ],
            [
              <Badge color="green">Puberté (البلوغ)</Badge>,
              "Avoir atteint l'âge pubère (signes : règles, nocturne, poils pubiens ou 15 ans lunaires)",
              "L'enfant doit être encouragé à prier dès 7 ans et légèrement sanctionné s'il néglige à 10 ans (hadith)"
            ],
            [
              <Badge color="green">Raison (العقل)</Badge>,
              "Être sain d'esprit",
              "La prière n'est pas obligatoire sur le fou (مجنون) tant que son état dure"
            ],
            [
              <Badge color="green">Éveil (الإفاقة)</Badge>,
              "Ne pas être dans un état de sommeil ou d'inconscience",
              "Dès le réveil, la prière doit être accomplie immédiatement (voir Partie 16)"
            ],
          ]}
        />
        <DalilBox
          type="hadith"
          reference="Abu Dawud, At-Tirmidhi, Ibn Majah"
          arabic="رُفِعَ الْقَلَمُ عَنْ ثَلَاثَةٍ: عَنِ النَّائِمِ حَتَّى يَسْتَيْقِظَ، وَعَنِ الصَّغِيرِ حَتَّى يَحْتَلِمَ، وَعَنِ الْمَجْنُونِ حَتَّى يَعْقِلَ"
          translation="La plume est levée [l'obligation cesse] pour trois personnes : le dormeur jusqu'à son réveil, l'enfant jusqu'à sa puberté, et le fou jusqu'au recouvrement de sa raison."
          source="Rapporté par 'Ali ibn Abi Talib (رضي الله عنه) — Hadith Sahih"
        />
      </Card>

      {/* 1.4 */}
      <SectionTitle number="1.4" title="Statut de celui qui abandonne la prière" arabic="تارك الصلاة" icon="⚠️" />
      <Card>
        <AlertBox type="warning" title="Question cruciale — Position malikite détaillée">
          L'école malikite distingue deux cas fondamentaux.
        </AlertBox>

        <SubSectionTitle title="Cas 1 : Abandon par négation de l'obligation (جاحد وجوبها)" />
        <p className="text-stone-600 mb-3">
          Celui qui <strong>nie que la prière soit obligatoire</strong> est considéré comme <strong>apostat (مرتد)</strong> selon le consensus des malikites. Il lui est demandé de se repentir ; s'il refuse, le juge islamique peut appliquer la peine de l'apostasie.
        </p>
        <AlertBox type="dalil">
          <p>Car nier une obligation établie par le Coran, la Sunna mutawatira et l'Ijma' est une négation d'une évidence fondamentale de l'Islam.</p>
        </AlertBox>

        <SubSectionTitle title="Cas 2 : Abandon par paresse/négligence (تارك الصلاة كسلاً)" />
        <p className="text-stone-600 mb-3">
          Selon l'<strong>avis dominant (المشهور) de l'école malikite</strong> : celui qui abandonne la prière par paresse, tout en reconnaissant son obligation, est un <strong>grand pécheur (فاسق)</strong> mais n'est pas considéré comme apostat ni mécréant.
        </p>
        <div className="bg-purple-50 border-l-4 border-purple-500 rounded-r-lg p-4 mb-4">
          <p className="text-purple-800 font-bold mb-2">💡 Spécificité Malikite</p>
          <p className="text-stone-600 text-sm">
            Les malikites (contrairement aux hanbalites) considèrent que le tark as-salat par paresse ne constitue pas une sortie de l'Islam. L'Imam Malik (رحمه الله) et ses disciples maintiennent que c'est un péché majeur grave (<strong>كبيرة</strong>) sans pour autant aller jusqu'au takfir (accusation de mécréance).
          </p>
        </div>

        <Table
          headers={["École", "Position sur le tark as-salat par paresse", "Verdict"]}
          rows={[
            ["Malikite ✦", "Grand pécheur (فاسق) — PAS mécréant", "Emprisonné et contraint de prier, exécuté s'il persiste selon certains (ḥadd)"],
            ["Hanafite", "Grand pécheur — PAS mécréant", "Emprisonné et frappé jusqu'à la prière ou la mort"],
            ["Shafi'ite", "Grand pécheur — PAS mécréant (avis dominant)", "Exécuté après mise en demeure (hadd) selon certains"],
            ["Hanbalite", "MÉCRÉANT (kafir) selon l'avis dominant", "Exécuté comme apostat"],
          ]}
        />

        <p className="text-stone-600 text-sm mt-3">
          Concernant la <strong>peine</strong> : selon l'avis dominant malikite, le juge peut ordonner l'exécution du récidiviste obstiné (<strong>ضُرب عنقه حداً لا كفراً</strong> — « décapité comme limite légale, non comme mécréant »), selon l'enseignement d'Ibn Habib et d'autres malikites tardifs. Cependant, certains malikites anciens s'opposent à cette peine.
        </p>
      </Card>

      {/* 1.5 */}
      <SectionTitle number="1.5" title="Mérites et vertus de la prière" arabic="فضائل الصلاة" icon="⭐" />
      <Card>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {[
            { icon: "🌟", title: "2ème pilier de l'Islam", text: "La prière est le deuxième pilier de l'Islam, juste après la shahada" },
            { icon: "🔑", title: "Clé du Paradis", text: "La prière est la clé du Paradis, comme la pureté est la clé de la prière" },
            { icon: "⚖️", title: "1ère chose jugée", text: "La première chose dont le croyant sera jugé le Jour du Jugement" },
            { icon: "💡", title: "Lumière du croyant", text: "La prière est lumière (نور) pour le croyant dans ce monde et dans l'Au-delà" },
            { icon: "🛡️", title: "Protection du péché", text: "« La prière préserve de l'obscénité et du blâmable » (29:45)" },
            { icon: "🤝", title: "Lien avec Allah", text: "C'est le lien direct entre le serviteur et son Créateur, cinq fois par jour" },
          ].map((item, i) => (
            <div key={i} className="flex gap-3 bg-emerald-50 rounded-lg p-3">
              <span className="text-2xl flex-shrink-0">{item.icon}</span>
              <div>
                <p className="font-bold text-emerald-900 text-sm">{item.title}</p>
                <p className="text-stone-600 text-xs mt-1">{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        <DalilBox
          type="quran"
          reference="Al-'Ankabut (29:45)"
          arabic="إِنَّ الصَّلَاةَ تَنْهَىٰ عَنِ الْفَحْشَاءِ وَالْمُنكَرِ ۗ وَلَذِكْرُ اللَّهِ أَكْبَرُ"
          translation="La prière préserve de l'obscénité et du blâmable. Et le rappel d'Allah est certes plus grand."
        />
        <DalilBox
          type="hadith"
          reference="Muslim (n°228)"
          arabic="أَرَأَيْتُمْ لَوْ أَنَّ نَهْرًا بِبَابِ أَحَدِكُمْ يَغْتَسِلُ مِنْهُ كُلَّ يَوْمٍ خَمْسَ مَرَّاتٍ، هَلْ يَبْقَى مِنْ دَرَنِهِ شَيْءٌ؟ قَالُوا: لَا يَبْقَى مِنْ دَرَنِهِ شَيْءٌ. قَالَ: فَذَلِكَ مِثْلُ الصَّلَوَاتِ الْخَمْسِ يَمْحُو اللَّهُ بِهِنَّ الْخَطَايَا"
          translation="Que dites-vous si l'un d'entre vous avait un fleuve à sa porte dans lequel il se baignait cinq fois par jour ? Resterait-il quelque saleté sur lui ? Ils répondirent : Non, il n'en resterait aucune. Il dit : Telle est la similitude des cinq prières, par lesquelles Allah efface les péchés."
          source="Rapporté par Abu Hurayra (رضي الله عنه) — Sahih Muslim"
        />
      </Card>

      {/* 1.6 */}
      <SectionTitle number="1.6" title="La sagesse derrière la prescription de la prière" arabic="حكمة مشروعية الصلاة" icon="💡" />
      <Card>
        <p className="text-stone-600 mb-4">
          Allah (سبحانه وتعالى) n'a pas prescrit la prière sans sagesse. Parmi les sagesses profondes :
        </p>
        <div className="space-y-3">
          {[
            { num: "1", title: "Réalisation de l'Ubûdiyya (العبودية)", text: "La prière est l'expression concrète de la servitude totale envers Allah, ce pour quoi les djinns et les humains ont été créés (51:56). Elle rappelle au croyant sa vraie nature de serviteur." },
            { num: "2", title: "La connexion permanente avec Allah", text: "Cinq fois par jour, le croyant interrompt ses activités mondaines pour se reconnecter à son Créateur, ce qui forge une conscience divine (تقوى) permanente." },
            { num: "3", title: "La purification de l'âme", text: "Par la récitation du Coran, les inclinaisons et prosternations, la prière purifie le cœur des maladies spirituelles : orgueil, négligence, attachement au monde." },
            { num: "4", title: "La discipline et la gestion du temps", text: "Les horaires fixes de la prière enseignent la ponctualité, la discipline et la gestion du temps — qualités essentielles dans tous les domaines de la vie." },
            { num: "5", title: "La cohésion sociale", text: "La prière en congrégation (jama'a) crée des liens fraternels entre les musulmans, efface les distinctions sociales et forge l'unité de la communauté." },
            { num: "6", title: "La santé physique et mentale", text: "Les mouvements de la prière constituent une forme d'exercice physique modéré. La concentration dans la prière (khushû') réduit le stress et l'anxiété." },
            { num: "7", title: "Le rappel de l'Akhira", text: "La prière rappelle constamment au croyant que ce monde est une étape transitoire, et l'oriente vers la préparation de l'Au-delà." },
          ].map((item) => (
            <div key={item.num} className="flex gap-3">
              <span className="flex-shrink-0 w-7 h-7 bg-teal-100 text-teal-800 rounded-full flex items-center justify-center font-bold text-sm">
                {item.num}
              </span>
              <div>
                <p className="font-semibold text-stone-800 text-sm">{item.title}</p>
                <p className="text-stone-500 text-sm">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* 1.7 */}
      <SectionTitle number="1.7" title="L'histoire de la prescription de la prière" arabic="الإسراء والمعراج" icon="🌙" />
      <Card>
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-200 rounded-xl p-5 mb-4">
          <h3 className="font-bold text-indigo-900 text-lg mb-3 flex items-center gap-2">
            <span>🌙</span> Al-Isra' wal Mi'raj — Le Voyage Nocturne et l'Ascension
          </h3>
          <p className="text-stone-600 text-sm leading-relaxed mb-3">
            La prière est le seul acte d'adoration prescrit directement à Allah, sans intermédiaire humain, lors du Voyage Nocturne (<strong>الإسراء — Al-Isra'</strong>) et de l'Ascension (<strong>المعراج — Al-Mi'raj</strong>) du Prophète Muhammad ﷺ.
          </p>
          <div className="space-y-3">
            {[
              { step: "Isra'", desc: "Le Prophète ﷺ fut transporté de nuit de la Mosquée Sacrée (Mekke) à la Mosquée d'Al-Aqsa (Jérusalem) sur al-Buraq, accompagné de Jibrîl (عليه السلام)." },
              { step: "Mi'raj", desc: "Il monta ensuite à travers les sept cieux, rencontrant les prophètes à chaque niveau, jusqu'à Sidrat al-Muntaha (سدرة المنتهى) — la limite ultime." },
              { step: "La prescription", desc: "Allah (سبحانه وتعالى) prescrivit initialement 50 prières. Sur le conseil du Prophète Musa (عليه السلام), le Prophète ﷺ retourna plusieurs fois demander une réduction, jusqu'à ce que les prières soient fixées à 5 dans la pratique mais avec la récompense de 50." },
              { step: "La sagesse", desc: "La prescription directe — sans ange intermédiaire — indique l'importance capitale de la prière. Allah voulut honorer Son Prophète ﷺ et Sa communauté en leur prescrivant Lui-même cet acte d'adoration." },
            ].map((item, i) => (
              <div key={i} className="flex gap-3">
                <span className="flex-shrink-0 bg-indigo-600 text-white text-xs font-bold px-2 py-1 rounded h-fit">
                  {item.step}
                </span>
                <p className="text-stone-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <DalilBox
          type="quran"
          reference="Al-Isra' (17:1)"
          arabic="سُبْحَانَ الَّذِي أَسْرَىٰ بِعَبْدِهِ لَيْلًا مِّنَ الْمَسْجِدِ الْحَرَامِ إِلَى الْمَسْجِدِ الْأَقْصَى الَّذِي بَارَكْنَا حَوْلَهُ"
          translation="Gloire à Celui qui a fait voyager de nuit Son serviteur de la Mosquée Sacrée à la Mosquée al-Aqsa dont Nous avons béni les alentours."
        />
        <DalilBox
          type="hadith"
          reference="Bukhari & Muslim — Hadith du Mi'raj"
          arabic="فُرِضَتْ عَلَيَّ الصَّلَاةُ خَمْسِينَ، ثُمَّ رَاجَعْتُ حَتَّى جُعِلَتْ خَمْسًا، فَنُودِيَ: يَا مُحَمَّدُ، إِنَّهُ لَا يُبَدَّلُ الْقَوْلُ لَدَيَّ، وَإِنَّ لَكَ بِهَذِهِ الْخَمْسِ خَمْسِينَ"
          translation="La prière m'a été prescrite à cinquante [fois], puis j'ai négocié jusqu'à ce qu'elle soit fixée à cinq. Puis une voix retentit : 'Ô Muhammad ! Ma parole ne change pas. Tu auras pour ces cinq prières la récompense de cinquante.'"
          source="Rapporté par Anas ibn Malik (رضي الله عنه) — Bukhari & Muslim"
        />
      </Card>
    </div>
  );
}
