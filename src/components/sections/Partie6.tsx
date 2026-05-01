import { Card, SectionTitle, SubSectionTitle, AlertBox, ArabicText, Table } from "../ui";

export default function Partie6() {
  return (
    <div className="space-y-6">
      <AlertBox type="info" title="Les Mandoubat — Actes méritoires mais non sunnas">
        Les <strong>mandoubat (مندوبات)</strong> ou <strong>mustahabbat (مستحبات)</strong> sont des actes qui embellissent la prière et augmentent la récompense. Leur omission <strong>n'entraîne PAS de Sujud Sahwi</strong>, contrairement aux sunnas.
      </AlertBox>

      <SectionTitle number="6.1" title="Liste des Mandoubat de la Prière" arabic="مندوبات الصلاة" icon="💚" />
      <Card>
        <SubSectionTitle title="Concernant la posture et le corps" />
        <Table
          headers={["Mandoub", "Arabe", "Description", "Spécificité Malikite"]}
          rows={[
            ["Regard vers le lieu de prosternation", "النظر إلى موضع السجود", "Diriger son regard vers l'endroit où on va se prosterner pendant la prière debout", ""],
            ["Écartement des pieds", "تفريج القدمين", "Écarter légèrement les pieds (largeur des épaules environ) en position debout", ""],
            ["Alignement des orteils vers la Qibla", "توجيه أصابع القدمين للقبلة", "Diriger les orteils vers la direction de la Ka'ba", ""],
            ["Le Sutrah (obstacle devant soi)", "السترة", "Placer un objet devant soi pour délimiter l'espace de prière — surtout pour l'imam", "Non obligatoire selon les Malikites"],
            ["Poser les genoux avant les mains au sujud", "تقديم الركبتين على اليدين", "Lors de la descente vers le sujud, poser d'abord les genoux puis les mains", "Avis malikite sur l'ordre"],
          ]}
        />

        <SubSectionTitle title="Concernant le Sadl — Position des mains (Spécificité Malikite Célèbre)" />
        <div className="bg-purple-50 border border-purple-200 rounded-xl p-5 mb-4">
          <h3 className="font-bold text-purple-900 text-lg mb-3 flex items-center gap-2">
            <span>💡</span> Le SADL vs le QABD — La grande question malikite
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="bg-white rounded-lg p-4 border border-purple-200">
              <h4 className="font-bold text-purple-800 mb-2">السدل — Sadl</h4>
              <p className="text-stone-600 text-sm">
                Laisser les bras <strong>pendants naturellement le long du corps</strong>, sans les croiser ni les poser. C'est l'avis <strong>traditionnel et prépondérant de l'école malikite de Médine</strong>, surtout dans les prières obligatoires.
              </p>
              <p className="text-emerald-700 text-xs mt-2 font-medium">✅ Avis dominant malikite maghrébin et traditionnel</p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-purple-200">
              <h4 className="font-bold text-purple-800 mb-2">القبض — Qabd</h4>
              <p className="text-stone-600 text-sm">
                Poser la main droite sur la main gauche (<strong>poignet ou avant-bras</strong>) sur la poitrine ou en dessous. C'est un avis présent dans le madhhab malikite, surtout dans les prières surérogatoires (nafl).
              </p>
              <p className="text-amber-700 text-xs mt-2 font-medium">⚠️ Second avis dans le madhhab</p>
            </div>
          </div>

          <div className="bg-purple-100 rounded-lg p-3">
            <p className="text-purple-900 font-bold text-sm mb-2">Analyse de la controverse intra-malikite :</p>
            <ul className="list-disc list-inside text-sm text-stone-700 space-y-2">
              <li>L'Imam Malik lui-même aurait pratiqué les deux selon différentes narrations</li>
              <li>Dans <em>Al-Mudawwana</em> : Malik dit qu'il ne voit pas de mal à laisser les bras pendants</li>
              <li>Le sadl est préféré dans les prières obligatoires selon la majorité des malikites tardifs</li>
              <li>Le qabd est toléré et même pratiqué dans les prières surérogatoires longues</li>
              <li>Ibn Rushd dans <em>Bidayat al-Mujtahid</em> mentionne que les deux sont permis</li>
              <li>L'Imam al-Qarafi, Ibn al-'Arabi et d'autres malikites ont permis le qabd sans restriction</li>
            </ul>
          </div>
        </div>

        <SubSectionTitle title="Concernant la récitation" />
        <Table
          headers={["Mandoub", "Description"]}
          rows={[
            ["La Ta'awwudh (الاستعاذة)", "Dire « أعوذ بالله من الشيطان الرجيم » — silencieusement — avant la Fatiha. C'est un mandoub selon les Malikites."],
            ["La Basmala (البسملة)", "Dire « بسم الله الرحمن الرحيم » silencieusement avant la Fatiha. NON considérée comme un verset de la Fatiha par les Malikites."],
            ["Le Ta'min (التأمين)", "Dire 'Amin' à voix BASSE selon les Malikites après la Fatiha — MÊME dans les prières récitées à voix haute. C'est une spécificité malikite importante."],
            ["Réciter la Fatiha verset par verset", "Marquer une légère pause entre chaque verset — non continuité"],
            ["Changer de sourate chaque rak'a", "Ne pas réciter la même sourate deux fois dans la même prière est recommandé"],
          ]}
        />

        <AlertBox type="special" title="💡 Spécificité Malikite — Le Ta'min silencieux">
          Les Malikites disent 'Amin' à voix <strong>BASSE (sirr)</strong> après la Fatiha, même dans les prières récitées à voix haute (Subh, Maghrib, 'Isha'). C'est une des distinctions malikites par rapport aux Shafi'ites (qui disent Amin à voix haute).
        </AlertBox>

        <SubSectionTitle title="Concernant les positions" />
        <div className="space-y-3">
          {[
            { title: "Dans le Ruku' :", items: ["Dos plat, horizontal", "Doigts écartés sur les genoux", "Regard dirigé entre les pieds", "Bras légèrement éloignés du corps"] },
            { title: "Dans le Sujud :", items: ["Coudes levés et écartés du corps (pour l'homme)", "Avant-bras non posés au sol", "Pieds à la verticale avec orteils vers la Qibla", "Regard vers le nez"] },
            { title: "En position assise :", items: ["Position iftirash (jambe gauche pliée sous soi, pied droit vertical) dans les tashahuds intermédiaires", "Position tawarruk dans le dernier tashahud (jambe gauche sortie du côté droit)", "Main droite : doigt index levé lors de la shahada"] },
          ].map((section, i) => (
            <div key={i} className="bg-emerald-50 rounded-lg p-3">
              <p className="font-bold text-emerald-800 text-sm mb-2">{section.title}</p>
              <ul className="list-disc list-inside space-y-1 text-stone-600 text-sm">
                {section.items.map((item, j) => <li key={j}>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>

        <SubSectionTitle title="Le Du'a d'ouverture (دعاء الاستفتاح)" />
        <AlertBox type="special" title="💡 Spécificité Malikite — Pas de du'a d'ouverture officiel">
          Contrairement aux Shafi'ites et Hanbalites qui ont un du'a d'ouverture établi (comme « سبحانك اللهم وبحمدك »), les Malikites ne pratiquent généralement PAS de du'a d'ouverture entre le Takbirat al-Ihram et la Fatiha. On passe directement à la Fatiha après le Takbir.
        </AlertBox>
      </Card>

      <SectionTitle number="6.2" title="Conséquences des omissions" icon="📊" />
      <Card>
        <Table
          headers={["Type d'acte", "Définition", "Si omis intentionnellement", "Si omis par oubli"]}
          rows={[
            ["Fard (فرض)", "Pilier de la prière", "Invalide la prière", "Invalide la prière (sauf possibilité de correction immédiate)"],
            ["Sunna (سنة)", "Acte fortement recommandé", "Péché + Sujud Qabli requis", "Sujud Qabli recommandé"],
            ["Mandoub (مندوب)", "Acte méritoire", "Perd la récompense", "Rien — pas de sujud sahwi"],
            ["Mubah (مباح)", "Acte permis", "Neutre", "Neutre"],
            ["Makruh (مكروه)", "Acte réprouvé", "Diminue la récompense", "Diminue la récompense"],
          ]}
        />
      </Card>
    </div>
  );
}
