const features = [
  {
    title: "Unified Health Dashboard",
    description:
      "Real-time wellness, nutrition, and activity data from wearables, vets, and daily routines in one intelligent view.",
    icon: (
      <svg
        className="h-8 w-8 text-primary"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
        <path d="M21 10a9 9 0 0 1-18 0" />
        <path d="m9 14 2 2 4-4" />
      </svg>
    )
  },
  {
    title: "Adaptive Care Plans",
    description:
      "Personalized routines that adjust with AI as your pet grows, ensuring preventative care that feels effortless.",
    icon: (
      <svg
        className="h-8 w-8 text-secondary"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M12 2s-4 4-4 7a4 4 0 0 0 8 0c0-3-4-7-4-7Z" />
        <path d="M12 22v-6" />
        <path d="M9 22h6" />
      </svg>
    )
  },
  {
    title: "Smart Marketplace",
    description:
      "Curated products, services, and local experts recommended by data—no more guessing on food, gear, or sitters.",
    icon: (
      <svg
        className="h-8 w-8 text-accent"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="m3 7 9 5 9-5-9-5-9 5v10l9 5 9-5" />
        <path d="M3 17v-6l9 5 9-5v6" />
      </svg>
    )
  },
  {
    title: "Pet Parent Community",
    description:
      "Always-on support from experts and peers. Share wins, troubleshoot hurdles, and celebrate every milestone.",
    icon: (
      <svg
        className="h-8 w-8 text-rose-400"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M5 20a7 7 0 0 1 14 0" />
        <circle cx="12" cy="10" r="3" />
        <path d="M2 20a9 9 0 0 1 18 0" />
        <circle cx="12" cy="6" r="3" />
      </svg>
    )
  }
];

export default function FeatureGrid() {
  return (
    <section className="section" id="platform">
      <div className="mx-auto max-w-3xl text-center">
        <span className="badge">Platform highlights</span>
        <h2 className="heading mt-10 text-4xl sm:text-5xl">
          All-in-one care that evolves with your pet.
        </h2>
        <p className="subheading">
          From first adoption to golden years, PetWorld STARTUP orchestrates
          every detail of pet care so you can focus on the love.
        </p>
      </div>
      <div className="mt-20 grid gap-6 md:grid-cols-2">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="glass-card flex flex-col gap-6 p-8 transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/30"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
              {feature.icon}
            </div>
            <div>
              <h3 className="font-heading text-2xl text-white">
                {feature.title}
              </h3>
              <p className="mt-3 text-base text-white/70">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
