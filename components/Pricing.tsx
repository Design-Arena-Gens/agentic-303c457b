const tiers = [
  {
    name: "Curious",
    price: "Free",
    description:
      "Perfect for new pet parents exploring proactive care without commitments.",
    features: [
      "Smart onboarding and baseline health report",
      "Weekly wellness check-ins",
      "Access to community challenges",
      "3 emergency triage chats per month"
    ],
    cta: "Start for free",
    highlighted: false
  },
  {
    name: "Harmony",
    price: "$29",
    description:
      "Our most-loved plan for everyday families balancing work, play, and vet visits.",
    features: [
      "Unlimited adaptive care plans",
      "AI-powered alerts and vet-reviewed insights",
      "Marketplace savings up to 20%",
      "24/7 live vet & behaviorist concierge"
    ],
    cta: "Upgrade to Harmony",
    highlighted: true
  },
  {
    name: "Collective",
    price: "$68",
    description:
      "Built for multi-pet households, rescues, and professional walkers or sitters.",
    features: [
      "Team workspaces and shared schedules",
      "Bulk ordering and logistics automations",
      "Custom analytics dashboards",
      "Dedicated success partner"
    ],
    cta: "Talk to sales",
    highlighted: false
  }
];

export default function Pricing() {
  return (
    <section className="section" id="pricing">
      <div className="mx-auto max-w-3xl text-center">
        <span className="badge">Pricing</span>
        <h2 className="heading mt-10 text-4xl sm:text-5xl">
          Flexible plans for every member of your pet family.
        </h2>
        <p className="subheading">
          Start free, grow with smart automations, and scale when your pack
          expands. Cancel anytime.
        </p>
      </div>
      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className={`glass-card flex flex-col gap-6 p-8 ${
              tier.highlighted ? "border-primary/40 bg-primary/20" : ""
            }`}
          >
            <div>
              <h3 className="text-2xl font-semibold text-white">{tier.name}</h3>
              <p className="mt-2 text-sm text-white/70">{tier.description}</p>
            </div>
            <div className="text-4xl font-bold text-white">{tier.price}</div>
            <ul className="flex flex-col gap-3 text-sm text-white/80">
              {tier.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <svg
                    className="mt-1 h-4 w-4 flex-none text-secondary"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="m5 13 4 4L19 7" />
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button
              type="button"
              className={`mt-auto rounded-full px-5 py-3 text-sm font-semibold transition ${
                tier.highlighted
                  ? "bg-white text-slate-900 hover:bg-white/90"
                  : "border border-white/20 text-white hover:bg-white/10"
              }`}
            >
              {tier.cta}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
