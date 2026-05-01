import { Card, SectionTitle, AlertBox, Table } from "../ui";

export default function Partie13() {
  return (
    <div className="space-y-6">
      <SectionTitle number="13.1" title="La Prière du Malade" arabic="صلاة المريض" icon="🏥" />
      <Card>
        <AlertBox type="success" title="Principe fondamental — La facilité dans l'Islam">
          Allah (سبحانه وتعالى) n'impose pas à l'âme plus que ce qu'elle peut supporter (البقرة 2:286). Le malade prie selon ses capacités — debout, assis, couché — et sa prière est valide.
        </AlertBox>

        <Table
          headers={["Capacité", "Position de prière", "Statut", "Remarque"]}
          rows={[
            ["Peut se tenir debout", "Debout — obligatoire", "Normal", "Même appuyé contre un mur si nécessaire"],
            ["Ne peut pas se tenir debout", "Assis — obligatoire", "Valide", "S'asseoir comme pour le tashahud ou en tailleur — les deux sont permis"],
            ["Ne peut pas s'asseoir", "Couché sur le côté droit (de préférence)", "Valide", "Face à la Qibla si possible"],
            ["Ne peut pas se coucher sur le côté", "Couché sur le dos, tête vers la Qibla", "Valide", ""],
            ["Ne peut faire aucun mouvement", "Par signes/gestes (إيماء)", "Valide", "Cligner des yeux ou faire un geste avec la tête — le sujud est plus bas que le ruku'"],
            ["Incapable de tout mouvement", "Dans son cœur", "Selon certains malikites", "Cas extrême — certains disent que cette obligation est levée jusqu'à la guérison"],
          ]}
        />

        <div className="mt-4 space-y-4">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-bold text-blue-900 mb-2">Description de la prière assis</h4>
            <p className="text-stone-600 text-sm">
              Le malade qui prie assis incline la tête légèrement pour le ruku', et davantage pour le sujud (le front touchant les genoux ou un objet surélevé si possible). Selon les malikites, il est recommandé que le front touche le sol si possible — sinon, l'inclinaison de la tête suffit.
            </p>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <h4 className="font-bold text-amber-900 mb-2">Cas de l'incontinence urinaire (سلس البول)</h4>
            <p className="text-stone-600 text-sm">
              Selon les malikites, la personne souffrant d'incontinence urinaire chronique (<strong>سلس البول</strong>) doit :
            </p>
            <ul className="list-disc list-inside text-sm text-stone-600 mt-2 space-y-1">
              <li>Se protéger avec un linge/protection absorbante</li>
              <li>Faire le wudu juste avant chaque prière</li>
              <li>Prier le plus vite possible après le wudu</li>
              <li>Sa prière est valide malgré les sorties involontaires</li>
            </ul>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
            <h4 className="font-bold text-purple-900 mb-2">Le malade qui ne peut pas déterminer la Qibla</h4>
            <p className="text-stone-600 text-sm">
              S'il peut se faire aider par d'autres pour déterminer la direction : il doit le faire. S'il est seul et incapable : il fait de son mieux (ijtihad) et sa prière est valide même si la direction était incorrecte.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}
