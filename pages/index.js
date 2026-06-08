import Link from 'next/link';
import PageHead from '../components/PageHead';

const services = [
  {
    title: 'Stock Broker Audit',
    body: 'Comprehensive annual and concurrent audits for SEBI-registered stock brokers, sub-brokers, and depository participants. Covering internal controls, client fund segregation, margin reporting, and exchange compliance.',
    href: '/services#stock-broker-audit',
  },
  {
    title: 'Cyber Audit',
    body: 'End-to-end cybersecurity audits — VAPT, network security assessment, application security review, and SEBI Cyber Security Circular compliance — for brokers, AMCs, and IT infrastructure teams.',
    href: '/services#cyber-audit',
  },
];

const useCases = [
  {
    title: 'Stock Broker — Annual Audit',
    body: 'Your exchange demands an annual audit report. We deliver it on time, with zero compliance gaps and full documentation for SEBI submission.',
  },
  {
    title: 'Broker IT Team — Cyber Circular Compliance',
    body: "SEBI's Cyber Security and Cyber Resilience Framework mandates annual audits. We assess, report, and help you remediate before the deadline.",
  },
  {
    title: 'New NSE/BSE Member — Pre-inspection Readiness',
    body: "First exchange inspection coming up? We conduct mock audits against exchange checklists so you're never caught off-guard.",
  },
  {
    title: 'Fintech / Sub-broker — Third-Party Risk',
    body: 'Platforms onboarding broker APIs must demonstrate security posture to their partners. We provide the audit reports they need.',
  },
];

const stats = [
  { value: '200+', label: 'Audits completed' },
  { value: '50+', label: 'Broker clients served' },
  { value: '100%', label: 'On-time delivery' },
  { value: '15+', label: 'Years of regulatory expertise' },
];

const steps = [
  {
    title: 'Scope & Onboarding',
    body: 'We understand your entity type, exchange memberships, and regulatory obligations.',
  },
  {
    title: 'Fieldwork & Assessment',
    body: 'On-site or remote audit, evidence collection, control testing.',
  },
  {
    title: 'Report & Remediation',
    body: 'Detailed findings report, executive summary, and remediation guidance.',
  },
];

export default function Home() {
  return (
    <>
      <PageHead
        title="Audit Intelligence for India's Financial Markets"
        description="SEBI-mandated stock broker audits and comprehensive cyber audits for regulated entities in India."
      />

      <section className="relative overflow-hidden border-b border-navy-border">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="section-label mb-4">Precision. Compliance. Trust.</p>
            <h1 className="font-display text-4xl font-semibold leading-tight text-cream sm:text-5xl">
              Audit Intelligence for India&apos;s Financial Markets
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate">
              Auditspherre delivers SEBI-mandated stock broker audits and comprehensive
              cyber audits — helping regulated entities stay compliant, secure, and
              inspection-ready.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/services" className="btn-primary">
                Explore Our Services
              </Link>
              <Link href="/contact" className="btn-secondary">
                Talk to an Auditor
              </Link>
            </div>
          </div>

          <div className="surface-card relative min-h-[280px] overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(201,168,76,0.12),_transparent_65%)]" />
            <div className="relative flex h-full flex-col justify-between p-8">
              <div className="gold-rule" />
              <p className="font-display text-2xl text-cream">Compliance posture overview</p>
              <div className="grid grid-cols-2 gap-4 text-sm text-slate">
                <div className="rounded-lg border border-navy-border p-4">SEBI controls</div>
                <div className="rounded-lg border border-navy-border p-4">Cyber resilience</div>
                <div className="rounded-lg border border-navy-border p-4">Exchange readiness</div>
                <div className="rounded-lg border border-navy-border p-4">Remediation plan</div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-navy-border bg-navy-surface px-6 py-5">
          <p className="mx-auto max-w-6xl text-center text-sm text-slate">
            Trusted by entities regulated under{' '}
            <span className="text-cream">SEBI · RBI · MCA · CERT-In</span>
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="section-label mb-3">Our Services</p>
        <h2 className="section-heading mb-10">Built for Regulated Entities</h2>
        <div className="grid gap-6 lg:grid-cols-2">
          {services.map((service) => (
            <article key={service.title} className="surface-card">
              <h3 className="mb-3 text-xl font-semibold text-cream">{service.title}</h3>
              <p className="mb-5 text-sm leading-relaxed text-slate">{service.body}</p>
              <Link href={service.href} className="text-sm font-semibold text-gold hover:underline">
                See what&apos;s covered →
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-navy-border bg-navy-surface px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="section-label mb-3">Who We Work With</p>
          <h2 className="section-heading mb-10">Compliance challenges we solve</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {useCases.map((item) => (
              <article key={item.title} className="surface-card">
                <h3 className="mb-3 text-lg font-semibold text-cream">{item.title}</h3>
                <p className="text-sm leading-relaxed text-slate">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-card px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-4xl font-semibold text-gold">{stat.value}</p>
              <p className="mt-2 text-sm text-slate">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="section-heading mb-10">How an Auditspherre audit works</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <article key={step.title} className="surface-card">
              <p className="mb-3 text-sm font-semibold text-gold">Step {index + 1}</p>
              <h3 className="mb-3 text-lg font-semibold text-cream">{step.title}</h3>
              <p className="text-sm leading-relaxed text-slate">{step.body}</p>
            </article>
          ))}
        </div>
        <div className="mt-10">
          <Link href="/contact" className="text-sm font-semibold text-gold hover:underline">
            Start your audit process →
          </Link>
        </div>
      </section>

      <section className="border-t border-navy-border bg-navy-surface px-6 py-16">
        <div className="mx-auto max-w-4xl rounded-xl border border-gold/40 bg-navy-card p-10 text-center">
          <p className="font-display text-2xl text-cream">Regulatory deadlines don&apos;t wait.</p>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate">
            Book a scoping call today — we&apos;ll tell you exactly what your audit requires.
          </p>
          <Link href="/contact" className="btn-primary mt-8">
            Request an Audit
          </Link>
        </div>
      </section>
    </>
  );
}
