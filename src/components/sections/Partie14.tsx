import { Card, SectionTitle, SubSectionTitle, AlertBox, ArabicText, Table } from "../ui";

export default function Partie14() {
  return (
    <div className="space-y-6">
      <SectionTitle number="14.1" title="Les Prières Surérogatoires Accompagnant les Obligatoires (الرواتب)" arabic="السنن الرواتب" icon="⭐" />
      <Card>
        <AlertBox type="special" title="💡 Spécificité Malikite — Rawatib moins nombreuses">
          Les Malikites ont une position plus <strong>restrictive</strong> sur les rawatib que les autres écoles. Certaines sunnas que les Shafi'ites et Hanbalites considèrent comme confirmées ne sont que recommandées (mandoub) selon les malikites.
        </AlertBox>

        <Table
          headers={["Prière", "Avant (Qabliyya)", "Après (Ba'diyya)", "Statut selon les Malikites"]}
          rows={[
            ["Subh (الصبح)", "2 rak'at — sunna mu'akkada", "Non — pas de prière après Subh", "Les 2 rak'at de Subh (Fajr) sont les sunnas les plus confirmées"],
            ["Dhuhr (الظهر)", "2 ou 4 rak'at (mandoub)", "2 rak'at (mandoub)", "Moins strictes que chez les Shafi'ites"],
            ["'Asr (العصر)", "Aucune sunna raatiba confirmée", "Aucune", "Les Malikites ne prescrivent pas de sunnas régulières pour 'Asr"],
            ["Maghrib (المغرب)", "Aucune sunna raatiba confirmée", "2 rak'at (mandoub)", ""],
            ["'Isha' (العشاء)", "Aucune sunna raatiba confirmée", "2 rak'at (mandoub)", "Le Witr est recommandé après 'Isha'"],
          ]}
        />

        <SubSectionTitle title="Les 2 rak'at de Subh (Fajr) — La sunna la plus importante" />
        <AlertBox type="dalil">
          <p className="text-sm">Le Prophète ﷺ a dit : « Les deux rak'at de l'aube (الفجر) sont meilleures que le monde entier et ce qu'il contient. » (Muslim 725)</p>
        </AlertBox>
        <p className="text-stone-600 text-sm mt-2">
          Ces 2 rak'at se prient avant la prière obligatoire de Subh, généralement en récitant Al-Kafiroun (109) dans la première et Al-Ikhlas (112) dans la seconde, ou les versets de la conclusion de Sourate Al-Baqara (2:285-286).
        </p>
      </Card>

      <SectionTitle number="14.2" title="La Prière de Witr" arabic="صلاة الوتر" icon="🌙" />
      <Card>
        <AlertBox type="special" title="💡 Position Malikite sur le Witr — Sunna Confirmée">
          Le Witr est une <strong>sunna mu'akkada</strong> selon les Malikites (non wajib comme le pensent les Hanafites). Son nombre de rak'at varie, mais le minimum est d'une seule rak'at.
        </AlertBox>

        <Table
          headers={["Aspect", "Détail Malikite"]}
          rows={[
            ["Nombre de rak'at", "Minimum 1 rak'a, maximum 11 (ou 13 selon certains). Le plus courant : 1 ou 3."],
            ["Horaire", "Après 'Isha' jusqu'à l'aube. Recommandé de le faire en fin de nuit si on est sûr de se réveiller."],
            ["Récitation", "La Fatiha + une sourate dans chaque rak'a. Dans la rak'a finale : Al-A'la (87), Al-Kafiroun (109) et Al-Ikhlas (112) dans les 3 rak'at ou Al-Ikhlas seule."],
            ["Qunût dans le Witr", "Non prescrit selon les Malikites (différence avec les Hanafites et Shafi'ites)"],
            ["Manière (3 rak'at)", "Soit en continu (3 rak'at enchaînées avec tashahud final seulement), soit 2 rak'at + salam puis 1 rak'a."],
          ]}
        />
      </Card>

      <SectionTitle number="14.3" title="La Prière de Duha" arabic="صلاة الضحى" icon="☀️" />
      <Card>
        <p className="text-stone-600 text-sm mb-3">
          Prière surérogatoire pratiquée après le lever complet du soleil (~15-20 min après) jusqu'à peu avant le méridien.
        </p>
        <Table
          headers={["Aspect", "Détail"]}
          rows={[
            ["Statut", "Mandoub (recommandé) selon les Malikites"],
            ["Nombre de rak'at", "2 rak'at minimum, jusqu'à 8 ou 12"],
            ["Horaire", "Du lever du soleil d'une lance (~20 min après lever) jusqu'au quart avant le midi"],
            ["Récitation", "Fatiha + sourate dans chaque rak'a"],
          ]}
        />
      </Card>

      <SectionTitle number="14.6" title="La Prière d'Istikhara" arabic="صلاة الاستخارة" icon="🤲" />
      <Card>
        <p className="text-stone-600 text-sm mb-4">
          Prière de deux rak'at suivie du du'a d'istikhara, pour demander la guidance d'Allah avant une décision importante.
        </p>
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5">
          <h3 className="font-bold text-emerald-900 mb-3">Du'a de l'Istikhara (texte complet) :</h3>
          <ArabicText size="md" className="text-emerald-900 mb-4">
            اللَّهُمَّ إِنِّي أَسْتَخِيرُكَ بِعِلْمِكَ، وَأَسْتَقْدِرُكَ بِقُدْرَتِكَ، وَأَسْأَلُكَ مِنْ فَضْلِكَ الْعَظِيمِ، فَإِنَّكَ تَقْدِرُ وَلَا أَقْدِرُ، وَتَعْلَمُ وَلَا أَعْلَمُ، وَأَنْتَ عَلَّامُ الْغُيُوبِ. اللَّهُمَّ إِنْ كُنْتَ تَعْلَمُ أَنَّ هَذَا الْأَمْرَ [يذكر الأمر] خَيْرٌ لِي فِي دِينِي وَمَعَاشِي وَعَاقِبَةِ أَمْرِي، فَاقْدُرْهُ لِي وَيَسِّرْهُ لِي ثُمَّ بَارِكْ لِي فِيهِ. وَإِنْ كُنْتَ تَعْلَمُ أَنَّ هَذَا الْأَمْرَ شَرٌّ لِي فِي دِينِي وَمَعَاشِي وَعَاقِبَةِ أَمْرِي، فَاصْرِفْهُ عَنِّي وَاصْرِفْنِي عَنْهُ، وَاقْدُرْ لِي الْخَيْرَ حَيْثُ كَانَ ثُمَّ أَرْضِنِي بِهِ
          </ArabicText>
          <p className="text-stone-600 text-sm italic leading-relaxed">
            « Ô Allah, je Te consulte par Ta science, je Te demande de m'accorder le pouvoir par Ta puissance, et je Te demande de Ta grâce immense. Car Tu peux et je ne peux pas, Tu sais et je ne sais pas, et Tu connais parfaitement les choses cachées. Ô Allah, si Tu sais que cette affaire [il mentionne l'affaire] est bonne pour moi dans ma religion, dans ma vie et dans la fin de mes affaires, alors décide-la pour moi, facilite-la pour moi et bénis-la pour moi. Et si Tu sais que cette affaire est mauvaise pour moi dans ma religion, dans ma vie et dans la fin de mes affaires, alors détourne-la de moi et détourne-moi d'elle, et décide ce qui est bon pour moi là où il se trouve, puis rends-moi content de cela. »
          </p>
          <p className="text-teal-700 text-xs mt-2 font-medium">Source : Bukhari (1166) — rapporté par Jabir ibn 'Abdallah (رضي الله عنه)</p>
        </div>
      </Card>

      <SectionTitle number="14.10" title="Prière de l'Éclipse" arabic="صلاة الكسوف والخسوف" icon="🌑" />
      <Card>
        <AlertBox type="special" title="💡 Spécificité Malikite — 6 Ruku' dans la prière de l'éclipse">
          Les Malikites ont une structure unique pour la prière d'éclipse : <strong>2 rak'at avec 3 ruku' dans chaque rak'a</strong> = 6 ruku' au total ! C'est une des particularités les plus connues du madhhab malikite.
        </AlertBox>

        <Table
          headers={["Aspect", "Description Malikite"]}
          rows={[
            ["Structure", "2 rak'at, chacune comprenant 3 ruku' (inclinations)"],
            ["Récitation", "Longues récitations à voix haute dans chaque qiyam"],
            ["Sujud", "1 seul sujud double par rak'a"],
            ["Déroulement", "Fatiha + sourate longue → Ruku' → Redressement → Fatiha + sourate → Ruku' → Redressement → Fatiha + sourate → Ruku' → Redressement → Sujud × 2 → 2ème rak'a de même"],
            ["Khutba", "Pas de khutba après selon les Malikites (divergence)"],
            ["Durée", "Dure jusqu'à la fin de l'éclipse si possible"],
          ]}
        />
      </Card>

      <SectionTitle number="14.12" title="Prière de Tarawih" arabic="صلاة التراويح" icon="🌙" />
      <Card>
        <AlertBox type="special" title="💡 Nombre de rak'at selon les Malikites">
          Les Malikites ont deux positions sur le nombre de rak'at de Tarawih :
          <ul className="list-disc list-inside mt-2 text-sm space-y-1">
            <li><strong>36 rak'at</strong> — c'est la pratique médinoise selon l'Imam Malik, qui dit que les gens de Médine priaient 36 rak'at de Tarawih + 3 rak'at de Witr</li>
            <li><strong>20 rak'at</strong> — accepté aussi dans le madhhab selon le consensus d'Umar (رضي الله عنه)</li>
            <li><strong>8 rak'at</strong> — certains malikites le permettent basé sur le hadith de Subh d'Abu Salama</li>
          </ul>
        </AlertBox>
        <p className="text-stone-600 text-sm mt-3">
          La Tarawih est une <strong>sunna confirmée</strong> du Ramadan. Elle se pratique après 'Isha' et avant le Witr. Chaque groupe de 2 rak'at est suivi d'un salam.
        </p>
      </Card>
    </div>
  );
}
