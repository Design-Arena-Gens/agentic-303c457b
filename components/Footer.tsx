import Link from "next/link";

const footerLinks = [
  {
    heading: "Product",
    items: [
      { label: "Features", href: "#platform" },
      { label: "Pricing", href: "#pricing" },
      { label: "PetWorld Labs", href: "#" }
    ]
  },
  {
    heading: "Company",
    items: [
      { label: "About", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Press", href: "#" }
    ]
  },
  {
    heading: "Resources",
    items: [
      { label: "Blog", href: "#" },
      { label: "Support", href: "#" },
      { label: "Developers", href: "#" }
    ]
  }
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/70">
      <div className="section grid gap-10 py-16 md:grid-cols-[1.2fr_1fr_1fr_1fr]">
        <div className="space-y-4">
          <Link href="#" className="flex items-center gap-3 text-lg font-heading">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-slate-900">
              PW
            </span>
            <span>PetWorld STARTUP</span>
          </Link>
          <p className="text-sm text-white/60">
            Building the intelligent operating system for pet families across
            the globe.
          </p>
        </div>
        {footerLinks.map((group) => (
          <div key={group.heading}>
            <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-white/60">
              {group.heading}
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              {group.items.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="transition hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/10 py-6">
        <div className="section flex flex-col gap-3 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} PetWorld STARTUP. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-white">
              Privacy
            </Link>
            <Link href="#" className="hover:text-white">
              Terms
            </Link>
            <Link href="#" className="hover:text-white">
              Security
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
