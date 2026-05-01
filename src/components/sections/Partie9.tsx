import { Card, SectionTitle, SubSectionTitle, AlertBox, Table, Badge } from "../ui";

export default function Partie9() {
  return (
    <div className="space-y-6">
      <SectionTitle number="9.1" title="Les Annulatifs de la Prière" arabic="مبطلات الصلاة" icon="❌" />
      <Card>
        <AlertBox type="warning" title="Important — Distinction entre Annulatifs et Makruhât">
          Les <strong>annulatifs (مبطلات)</strong> rendent la prière nulle et obligent à la recommencer. Les <strong>makruhât (مكروهات)</strong> diminuent la récompense sans invalider.
        </AlertBox>

        <Table
          headers={["#", "Annulatif", "Arabe", "Intentionnel", "Par oubli"]}
          rows={[
            ["1", "Parler (autres que les paroles de la prière)", "الكلام", <Badge color="red">Invalide</Badge>, "Invalide si plus qu'un ou deux mots — divergence"],
            ["2", "Rire aux éclats (القهقهة)", "الضحك", <Badge color="red">Invalide</Badge>, "Invalide aussi"],
            ["3", "Manger ou boire", "الأكل والشرب", <Badge color="red">Invalide</Badge>, "Invalide"],
            ["4", "Perte des ablutions (hadath)", "الحدث", <Badge color="red">Invalide</Badge>, "Invalide (doit recommencer avec wudu)"],
            ["5", "Contact avec une impureté évitée", "ملاقاة النجاسة", <Badge color="red">Invalide</Badge>, "Invalide si pas enlevée immédiatement"],
            ["6", "Découvrir la 'awra volontairement", "كشف العورة", <Badge color="red">Invalide</Badge>, "Si pas recouvert immédiatement"],
            ["7", "Tourner complètement le dos à la Qibla", "الاستدبار للقبلة", <Badge color="red">Invalide</Badge>, "Invalide"],
            ["8", "Ajout volontaire d'un pilier (rak'a complète)", "الزيادة عمداً", <Badge color="red">Invalide</Badge>, "Sujud Ba'di"],
            ["9", "Omission volontaire d'un pilier", "الإخلال بالركن عمداً", <Badge color="red">Invalide</Badge>, "Correction possible si pas trop tard"],
            ["10", "Changement délibéré de l'ordre des piliers", "الإخلال بالترتيب", <Badge color="red">Invalide</Badge>, "Correction possible"],
            ["11", "Doute total sur la pureté (avec certitude d'impureté)", "اليقين بالحدث", <Badge color="red">Invalide</Badge>, "Invalide"],
            ["12", "Apostasie (العياذ بالله)", "الردة", <Badge color="red">Invalide immédiatement</Badge>, "-"],
            ["13", "Mouvements excessifs continus (3+ mouvements)", "كثرة الحركة", <Badge color="red">Invalide</Badge>, "Invalide"],
            ["14", "Pleurer bruyamment pour des choses mondaines", "البكاء من أمور الدنيا", <Badge color="red">Invalide</Badge>, "Invalide si involontaire selon certains"],
          ]}
        />
      </Card>

      <SectionTitle number="9.2" title="Les Makruhât de la Prière" arabic="مكروهات الصلاة" icon="⚠️" />
      <Card>
        <SubSectionTitle title="Ce qui est détesté (makruh) sans invalider la prière" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            "Se retourner sans nécessité dans la prière (الالتفات)",
            "Croiser les doigts (تشبيك الأصابع)",
            "Poser les mains sur les hanches (التخصر)",
            "Diriger le regard vers le ciel (رفع البصر للسماء)",
            "Fermer les yeux sans raison (إغماض العينين)",
            "Prier avec un vêtement serré gênant les mouvements",
            "Étouffer un rot/éternuement excessivement",
            "Prier en ayant envie de faire ses besoins (urgence)",
            "Prier devant une personne ou un objet distrayant",
            "Laisser une place vide dans les rangs",
            "Prier avec des vêtements ornés qui distrait",
            "S'étirer lors de la prière (التمطي)",
          ].map((item, i) => (
            <div key={i} className="flex gap-2 items-start bg-amber-50 rounded-lg p-3">
              <span className="text-amber-500 flex-shrink-0">⚠️</span>
              <span className="text-stone-600 text-sm">{item}</span>
            </div>
          ))}
        </div>
      </Card>

      <SectionTitle number="9.3" title="Ce qui est permis dans la prière" arabic="المباحات في الصلاة" icon="✅" />
      <Card>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            { item: "Tousser si nécessaire", detail: "Sans excès" },
            { item: "Éternuer et dire 'Al-Hamdulillah' dans son cœur", detail: "Sans gesticuler" },
            { item: "Avertir par la phrase 'سبحان الله'", detail: "Pour l'homme — pour attirer l'attention de l'imam" },
            { item: "Frapper les mains (تصفيق الكفين)", detail: "Pour la femme — pour attirer l'attention de l'imam" },
            { item: "Porter un enfant", detail: "Si nécessaire — prouvé par la sunna du Prophète ﷺ avec Oumama" },
            { item: "Remettre la 'awra en place", detail: "Immédiatement si découverte involontairement" },
            { item: "Pleurs de crainte d'Allah", detail: "Ne sont pas interdits selon les malikites" },
            { item: "Mouvements légers isolés", detail: "Un ou deux mouvements légers non répétitifs" },
          ].map((item, i) => (
            <div key={i} className="flex gap-2 items-start bg-emerald-50 rounded-lg p-3">
              <span className="text-emerald-500 flex-shrink-0">✅</span>
              <div>
                <span className="text-stone-700 text-sm font-medium">{item.item}</span>
                <span className="text-stone-500 text-xs block">{item.detail}</span>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
