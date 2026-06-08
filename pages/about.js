import Link from 'next/link';
import PageHead from '../components/PageHead';

const pillars = [
  {
    title: 'Regulatory Knowledge',
    body: 'Deep familiarity with SEBI circulars, exchange bye-laws, and IRDAI/RBI frameworks.',
  },
  {
    title: 'Cybersecurity Depth',
    body: 'Certified ethical hackers and information security auditors with CISA, CEH, OSCP credentials.',
  },
  {
    title: 'Financial Domain',
    body: 'Auditors who understand the securities market — not just generic IT compliance.',
  },
];

const trustSignals = [
  'SEBI empanelled audit firm',
  'Auditors holding CISA, CEH, ISO 27001 LA/LI certifications',
  'Experience across NSE, BSE, MCX, NCDEX-registered entities',
  'Confidential engagement process — all data under NDA',
  '100% on-time report delivery track record',
];

export default function About() {
  return (
    <>
      <PageHead
        title="About Us"
        description="Specialist audit and compliance firm focused on India's regulated financial ecosystem."
      />

      <section className="border-b border-navy-border px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <p className="section-label mb-3">About</p>
          <h1 className="section-heading">Who is Auditspherre?</h1>
          <div className="mt-6 space-y-4 text-sm leading-relaxed text-slate">
            <p>
              Auditspherre is a specialist audit and compliance firm focused exclusively on
              India&apos;s regulated financial ecosystem. We work with stockbrokers,
              depository participants, and financial technology companies to ensure they
              meet their mandatory audit obligations — without disruption to daily operations.
            </p>
            <p>
              Our auditors bring deep expertise in SEBI regulations, exchange compliance
              frameworks, and cybersecurity standards like ISO 27001, CERT-In guidelines,
              and the SEBI Cyber Security &amp; Cyber Resilience Framework.
            </p>
            <p>
              We believe auditing should be more than a checkbox exercise. Every engagement
              we undertake is designed to identify real risks, provide practical
              recommendations, and leave your organisation stronger.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="section-heading mb-8">Where we specialise</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((pillar) => (
            <article key={pillar.title} className="surface-card">
              <h3 className="mb-3 text-lg font-semibold text-cream">{pillar.title}</h3>
              <p className="text-sm leading-relaxed text-slate">{pillar.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-navy-border bg-navy-surface px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="section-heading mb-8">Why trust Auditspherre</h2>
          <ul className="space-y-4 text-sm text-slate">
            {trustSignals.map((signal) => (
              <li key={signal} className="flex gap-3">
                <span className="text-gold">—</span>
                <span>{signal}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-6 py-16 text-center">
        <p className="font-display text-2xl text-cream">
          Ready to work with us? Let&apos;s start with a conversation.
        </p>
        <Link href="/contact" className="btn-primary mt-8">
          Contact us
        </Link>
      </section>
    </>
  );
}
