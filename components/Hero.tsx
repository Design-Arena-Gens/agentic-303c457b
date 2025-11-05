import Link from "next/link";

const highlights = [
  { metric: "98%", description: "Health insights accuracy powered by AI" },
  { metric: "12k+", description: "Happy pets thriving with PetWorld plans" },
  { metric: "24/7", description: "Emergency vet triage with licensed experts" }
];

export default function Hero() {
  return (
    <section className="section relative overflow-hidden pt-28" id="hero">
      <div className="absolute inset-0 -z-10 flex justify-center">
        <div className="h-[32rem] w-[32rem] rounded-full bg-gradient-to-br from-primary/40 via-primary/10 to-transparent blur-3xl" />
      </div>
      <div className="flex flex-col items-center text-center">
        <span className="badge">The future of pet care</span>
        <h1 className="heading mt-10">
          Intelligent care, endless joy for every pet family.
        </h1>
        <p className="subheading">
          PetWorld STARTUP blends smart health tracking, proactive wellness
          plans, and community-powered support to help pets live their happiest,
          healthiest lives—without the guesswork.
        </p>
        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row">
          <Link
            href="#cta"
            className="inline-flex items-center justify-center gap-3 rounded-full bg-primary px-8 py-4 text-lg font-semibold text-white shadow-xl shadow-primary/40 transition hover:bg-primary/90"
          >
            Create My Pet Plan
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
          <Link
            href="#demo"
            className="inline-flex items-center gap-3 rounded-full border border-white/20 px-8 py-4 text-lg font-semibold text-white/80 transition hover:text-white"
          >
            Watch 90s demo
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              strokeLinecap="round"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </Link>
        </div>
        <div className="glass-card mt-20 grid gap-8 px-8 py-10 sm:grid-cols-3 sm:px-12">
          {highlights.map((item) => (
            <div
              key={item.metric}
              className="flex flex-col items-center text-center sm:items-start sm:text-left"
            >
              <span className="text-4xl font-bold text-white sm:text-5xl">
                {item.metric}
              </span>
              <span className="mt-2 text-sm text-white/70">
                {item.description}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
