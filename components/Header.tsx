import Link from "next/link";

const navItems = [
  { label: "Platform", href: "#platform" },
  { label: "Solutions", href: "#solutions" },
  { label: "Testimonials", href: "#stories" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" }
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-slate-950/70 backdrop-blur-xl">
      <div className="section flex items-center justify-between py-6">
        <Link
          href="#"
          className="flex items-center gap-3 text-lg font-heading font-semibold tracking-tight"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-slate-950 shadow-lg shadow-primary/20">
            PW
          </span>
          <div className="flex flex-col leading-tight">
            <span>PetWorld</span>
            <span className="text-sm font-normal text-white/60">STARTUP</span>
          </div>
        </Link>
        <nav className="hidden items-center gap-10 text-sm font-medium text-white/80 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-4 md:flex">
          <Link
            href="#demo"
            className="rounded-full border border-white/20 px-5 py-2 text-sm font-semibold text-white transition hover:bg-white hover:text-slate-950"
          >
            Book Demo
          </Link>
          <Link
            href="#cta"
            className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition hover:bg-primary/90"
          >
            Get Started
          </Link>
        </div>
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 text-white md:hidden"
          aria-label="Toggle navigation"
        >
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          >
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>
      </div>
    </header>
  );
}
