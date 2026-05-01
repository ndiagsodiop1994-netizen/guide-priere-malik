import { Card, SectionTitle, AlertBox, Table } from "../ui";

export default function Partie19() {
  return (
    <div className="space-y-6">
      <SectionTitle number="19.1" title="Les 20 Erreurs les Plus Fréquentes dans la Prière" arabic="أشهر الأخطاء في الصلاة" icon="⚠️" />
      <Card>
        <div className="space-y-3">
          {[
            {
              num: "1",
              err: "Prononcer l'intention à voix haute",
              detail: "Dire « Nawaytu an ousalli... » à voix haute est une innovation blâmable selon les Malikites. L'intention est uniquement dans le cœur.",
              gravity: "Innovation blâmable"
            },
            {
              num: "2",
              err: "Ne pas respecter la tuma'nina (quiétude)",
              detail: "Passer trop rapidement d'une position à l'autre, sans s'arrêter. C'est l'une des erreurs les plus graves car la tuma'nina est un pilier (fard).",
              gravity: "Invalide la prière"
            },
            {
              num: "3",
              err: "Lever les mains lors des takbirat autres que l'ihram",
              detail: "Selon les Malikites, lever les mains lors du ruku', du relèvement, ou de la 3ème rak'a est une erreur — ce n'est pas la pratique malikite.",
              gravity: "Makruh dans le madhhab"
            },
            {
              num: "4",
              err: "Réciter la Basmala à voix haute",
              detail: "Les Malikites récitent la Basmala silencieusement ou ne la récitent pas avant la Fatiha dans la prière.",
              gravity: "Makruh"
            },
            {
              num: "5",
              err: "Dire Amin à voix haute",
              detail: "Les Malikites disent Amin à voix basse dans toutes les prières, contrairement aux Shafi'ites.",
              gravity: "Contre la sunna malikite"
            },
            {
              num: "6",
              err: "Ne pas aligner les rangs correctement",
              detail: "Laisser des vides dans les rangs ou ne pas s'aligner diminue la récompense de la prière en congrégation.",
              gravity: "Péché/Makruh"
            },
            {
              num: "7",
              err: "Relever la tête avant l'imam",
              detail: "Le ma'mum qui se relève du ruku' ou du sujud avant l'imam commet une erreur grave — certains disent que sa rak'a est nulle.",
              gravity: "Invalide potentiellement la rak'a"
            },
            {
              num: "8",
              err: "Prier sans couvrir complètement la 'awra",
              detail: "Les prières dans des vêtements trop courts, transparents ou inadéquats sont invalides.",
              gravity: "Invalide la prière"
            },
            {
              num: "9",
              err: "Ne pas regarder vers le lieu de prosternation",
              detail: "Le regard doit être dirigé vers le lieu de prosternation pendant la prière, non vers le ciel ou partout.",
              gravity: "Makruh"
            },
            {
              num: "10",
              err: "Prier avec le besoin pressant de faire ses besoins",
              detail: "Prier avec une envie pressante d'uriner ou de déféquer est makruh et diminue la concentration (khushû').",
              gravity: "Makruh — préférable de s'en occuper d'abord"
            },
            {
              num: "11",
              err: "S'appuyer lourdement sans nécessité",
              detail: "S'appuyer contre un mur ou un objet pendant la prière sans raison médicale est makruh.",
              gravity: "Makruh"
            },
            {
              num: "12",
              err: "Interrompre la prière des autres en passant devant eux",
              detail: "Passer devant un prieur sans respecter son espace est interdit selon la sunna.",
              gravity: "Péché pour celui qui passe"
            },
            {
              num: "13",
              err: "Réciter la Fatiha trop vite sans tajwid minimal",
              detail: "Les piliers doivent être accomplis correctement. Les fautes graves dans la Fatiha (qui changent le sens) peuvent invalider la prière.",
              gravity: "Potentiellement invalide"
            },
            {
              num: "14",
              err: "Oublier le Qunût à Subh sans faire le Sujud Qabli",
              detail: "L'omission du Qunût nécessite le Sujud Qabli selon les Malikites. Ne pas le faire est une erreur.",
              gravity: "Omission d'une sunna"
            },
            {
              num: "15",
              err: "Penser que le second salam n'est pas nécessaire",
              detail: "Selon certains malikites, le second salam est une sunna — ne pas le faire est déconseillé. Un seul salam est le minimum.",
              gravity: "Sunna omise"
            },
            {
              num: "16",
              err: "Faire le sujud sahwi du mauvais côté (avant vs après)",
              detail: "Faire le sujud ba'di pour une omission (quand il faut le qabli) est une erreur malikite fréquente.",
              gravity: "Erreur de fiqh"
            },
            {
              num: "17",
              err: "Prier avec une concentration complètement absente",
              detail: "Le khushû' (concentration) est une obligation morale et spirituelle. Prier machinalement sans aucune présence du cœur prive la prière de son âme.",
              gravity: "Perd l'essentiel de la récompense"
            },
            {
              num: "18",
              err: "Croire que le front seul touche le sol dans le sujud",
              detail: "Les 7 membres doivent toucher le sol. Beaucoup négligent d'appoyer les pieds correctement (orteils fléchis vers la Qibla).",
              gravity: "Invalide le sujud si manque"
            },
            {
              num: "19",
              err: "Ne pas s'assurer de la pureté totale du lieu",
              detail: "Prier dans un endroit impur invalide la prière. Il faut s'assurer de la propreté du sol, du tapis de prière.",
              gravity: "Invalide la prière"
            },
            {
              num: "20",
              err: "Confondre l'heure de Maghrib avec la lueur blanche vs rouge",
              detail: "Les Malikites basent la fin de Maghrib sur la disparition de la lueur ROUGE. Confondre avec la blanche (hanafite) mènerait à une erreur d'heure.",
              gravity: "Erreur d'heure — Prière invalide"
            },
          ].map((item) => (
            <div key={item.num} className="border border-stone-200 rounded-lg overflow-hidden">
              <div className="bg-red-600 text-white px-3 py-1.5 text-sm font-bold flex justify-between">
                <span>⚠️ Erreur #{item.num} : {item.err}</span>
                <span className="text-xs bg-red-700 px-2 py-0.5 rounded">{item.gravity}</span>
              </div>
              <div className="p-3 bg-white text-sm text-stone-600">{item.detail}</div>
            </div>
          ))}
        </div>
      </Card>

      <SectionTitle number="19.2" title="Les Innovations (Bid'a) à éviter" arabic="البدع في الصلاة" icon="🚫" />
      <Card>
        <AlertBox type="warning" title="Définition de la Bid'a">
          La bid'a dans la prière est tout ce qui est ajouté ou modifié dans la prière sans base dans le Coran, la Sunna ou la pratique des Salaf.
        </AlertBox>
        <Table
          headers={["Innovation", "Explication", "Statut"]}
          rows={[
            ["Prononcer l'intention à voix haute (لفظ النية)", "Dire 'Nawaytu an ousalli...' avant le Takbir", "Bid'a blâmable selon les Malikites"],
            ["Du'a d'ouverture entre le Takbir et la Fatiha", "Dire 'Subhanakallahumma...' — les Malikites n'ont pas de du'a d'ouverture", "Non prescrit selon les Malikites"],
            ["Secouer le doigt pendant tout le tashahud", "Certains font des mouvements continus — le Prophète ﷺ levait le doigt lors de la Shahada seulement", "Contre la sunna"],
            ["Lire la Fatiha à voix haute derrière l'imam", "Les Malikites n'exigent pas que le ma'mum lise la Fatiha dans les prières à voix haute", "Contre la sunna malikite"],
            ["Répéter le nom d'Allah en rythme en groupe", "Dhikr collectif rythmique après la prière n'est pas établi", "Bid'a selon les malikites classiques"],
          ]}
        />
      </Card>

      <SectionTitle number="19.3" title="Confusions courantes entre les écoles" arabic="الالتباسات بين المذاهب" icon="🔀" />
      <Card>
        <div className="space-y-3">
          {[
            { title: "Confusion Malikite / Shafi'ite sur le Amin", detail: "Les Shafi'ites disent Amin à voix haute — le Malikite doit savoir qu'il dit Amin silencieusement même en suivant un imam shafi'ite." },
            { title: "Confusion sur le Sujud Sahwi", detail: "Un hanafite fera toujours le sujud après le salam — un malikite doit connaître la règle du qabli (avant) pour omission." },
            { title: "Confusion sur les rawatib", detail: "Les Shafi'ites ont davantage de rawatib — le Malikite ne doit pas croire qu'il manque quelque chose en suivant son madhhab plus sobre." },
            { title: "Confusion sur le Qasr", detail: "Le Hanafite doit faire le Qasr (wajib) — le Malikite peut choisir de prier complet en voyage (permis mais contre la sunna malikite)." },
          ].map((item, i) => (
            <div key={i} className="bg-blue-50 border-l-4 border-blue-400 rounded-r-lg p-3">
              <p className="font-bold text-blue-900 text-sm">{item.title}</p>
              <p className="text-stone-600 text-sm mt-1">{item.detail}</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
