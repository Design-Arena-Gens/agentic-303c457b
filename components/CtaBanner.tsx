import Link from "next/link";

export default function CtaBanner() {
  return (
    <section className="section" id="cta">
      <div className="glass-card relative overflow-hidden px-10 py-16 text-center sm:text-left">
        <div className="absolute -left-20 top-0 h-56 w-56 rounded-full bg-secondary/20 blur-3xl" />
        <div className="absolute -right-10 bottom-0 h-40 w-40 rounded-full bg-primary/30 blur-3xl" />
        <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="font-heading text-3xl text-white sm:text-4xl">
              Ready to unlock joyful pet care?
            </h3>
            <p className="mt-2 text-sm text-white/70 sm:text-base">
              Launch your personalized PetWorld plan in minutes and let smart
              automations keep tails wagging every day.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="https://cal.com"
              id="demo"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Book Live Demo
            </Link>
            <Link
              href="#"
              className="inline-flex items-center justify-center rounded-full bg-secondary px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-secondary/40 transition hover:bg-secondary/90"
            >
              Start free trial
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
