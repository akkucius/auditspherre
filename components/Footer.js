import Link from 'next/link';

const serviceLinks = [
  { href: '/services#stock-broker-audit', label: 'Stock Broker Audit' },
  { href: '/services#cyber-audit', label: 'Cyber Audit' },
];

const companyLinks = [
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="border-t border-navy-border bg-navy-surface">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl font-semibold text-cream">
            Auditspher<span className="text-gold">re</span>
          </p>
          <p className="mt-2 text-sm text-slate">Precision. Compliance. Trust.</p>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div>
            <p className="mb-3 text-sm font-semibold text-cream">Services</p>
            <ul className="space-y-2 text-sm text-slate">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-cream">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-3 text-sm font-semibold text-cream">Company</p>
            <ul className="space-y-2 text-sm text-slate">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-cream">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-sm text-slate">
          <p>Registered audit firm | SEBI empanelled auditors</p>
          <p className="mt-4">Auditspherre &copy; {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
}
