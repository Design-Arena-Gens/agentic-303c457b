const faqs = [
  {
    question: "How does PetWorld STARTUP personalize plans for my pet?",
    answer:
      "We combine breed-specific research, vet guidelines, and live data from wearables or manual check-ins. Our AI models learn your pet’s rhythms and continuously adjust nutrition, activity, and enrichment recommendations."
  },
  {
    question: "Can I invite family members, sitters, or vets?",
    answer:
      "Absolutely. Share access with unlimited collaborators so everyone stays aligned on routines, medications, and milestones. You control permissions and visibility with one tap."
  },
  {
    question: "Is my pet’s health data secure?",
    answer:
      "Yes. We adhere to SOC 2 security practices, encrypt data at rest and in transit, and never sell information. You have full control over integrations and can revoke access anytime."
  },
  {
    question: "Do I need smart hardware?",
    answer:
      "No. PetWorld works beautifully with manual updates and photos. Connect smart collars, feeders, and litter boxes when you’re ready for deeper insights."
  }
];

export default function FaqSection() {
  return (
    <section className="section" id="faq">
      <div className="mx-auto max-w-3xl text-center">
        <span className="badge">FAQ</span>
        <h2 className="heading mt-10 text-4xl sm:text-5xl">
          Answers for curious pet parents.
        </h2>
      </div>
      <div className="mt-16 space-y-4">
        {faqs.map((faq) => (
          <div key={faq.question} className="glass-card p-6">
            <h3 className="text-lg font-semibold text-white">
              {faq.question}
            </h3>
            <p className="mt-3 text-sm text-white/70">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
