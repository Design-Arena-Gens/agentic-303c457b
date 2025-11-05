const steps = [
  {
    title: "Connect your pet ecosystem",
    description:
      "Sync smart collars, vet records, nutrition apps, and daily routines. PetWorld harmonizes the data instantly.",
    bullet: "01"
  },
  {
    title: "Personalize wellness & play",
    description:
      "Our behavior engine tailors enrichment, training, and bonding activities that flex with busy schedules.",
    bullet: "02"
  },
  {
    title: "Stay ahead with predictive insights",
    description:
      "Using AI models trained with vets, we surface early warnings, seasonal alerts, and proactive checklists.",
    bullet: "03"
  }
];

export default function ExperienceSection() {
  return (
    <section className="section" id="solutions">
      <div className="grid gap-16 lg:grid-cols-[1.3fr_1fr] lg:items-center">
        <div>
          <span className="badge">Experience the magic</span>
          <h2 className="heading mt-10 text-4xl sm:text-5xl">
            Designed for real life with wagging tails and midnight zoomies.
          </h2>
          <p className="subheading">
            PetWorld STARTUP is built by pet parents, vets, and technologists.
            Each interaction is thoughtful, playful, and rooted in science-backed
            care so you always feel confident.
          </p>
          <div className="glass-card mt-12 grid gap-6 p-6 sm:grid-cols-2">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-white/60">
                Outcomes
              </p>
              <p className="mt-2 text-3xl font-semibold text-white">
                43% reduced emergency visits
              </p>
              <p className="mt-3 text-sm text-white/60">
                Families using adaptive care plans reported fewer urgent vet
                visits and higher pet energy.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-white/80">
              “The AI alerts caught early signs of dehydration. We adjusted diet
              before it became critical. It feels like having a vet on speed dial.”
            </div>
          </div>
        </div>
        <div className="space-y-5">
          {steps.map((step) => (
            <div
              key={step.title}
              className="glass-card relative overflow-hidden p-8"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/30 blur-2xl" />
              <span className="text-sm font-semibold text-white/60">
                {step.bullet}
              </span>
              <h3 className="mt-3 font-heading text-2xl text-white">
                {step.title}
              </h3>
              <p className="mt-3 text-base text-white/70">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
