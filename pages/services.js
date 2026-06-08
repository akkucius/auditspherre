import Link from 'next/link';
import PageHead from '../components/PageHead';

const brokerCoverage = [
  'Client Fund Segregation & Bank Reconciliation',
  'Margin Reporting & Peak Margin Compliance',
  'Back-office System Controls & Reconciliation',
  'KYC/AML/CFT Process Review',
  'Investor Grievance Redressal Mechanism',
  'Risk Management Framework Assessment',
  'Sub-broker / Authorised Person Compliance',
  'SEBI/Exchange Circular Implementation Review',
];

const cyberCoverage = [
  'Vulnerability Assessment & Penetration Testing (VAPT)',
  'Network Security Assessment (Firewall, IDS/IPS, DMZ)',
  'Web & Mobile Application Security Testing',
  'Source Code Security Review',
  'IT Asset & Configuration Hardening Audit',
  'Data Localisation & Data Privacy Controls',
  'Incident Response Readiness Assessment',
  'SEBI CSCRF Gap Analysis & Compliance Mapping',
];

export default function Services() {
  return (
    <>
      <PageHead
        title="Our Audit Services"
        description="Specialised compliance and cybersecurity audits for India's regulated financial sector."
      />

      <section className="border-b border-navy-border px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <p className="section-label mb-3">Services</p>
          <h1 className="section-heading">Our Audit Services</h1>
          <p className="mt-4 max-w-3xl text-lg text-slate">
            Specialised compliance and cybersecurity audits for India&apos;s regulated
            financial sector.
          </p>
        </div>
      </section>

      <section id="stock-broker-audit" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-16">
        <span className="mb-4 inline-block rounded-full border border-gold/40 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gold">
          SEBI Mandated
        </span>
        <h2 className="section-heading">Stock Broker Audit</h2>
        <p className="mt-4 max-w-4xl text-sm leading-relaxed text-slate">
          Auditspherre conducts annual internal audits for SEBI-registered stockbrokers and
          trading members across NSE, BSE, MCX, and NCDEX. Our audit methodology aligns with
          SEBI Circular No. MIRSD/DPS III/ Cir-26/08 and subsequent exchange directives.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {brokerCoverage.map((item) => (
            <div key={item} className="surface-card text-sm text-slate">
              {item}
            </div>
          ))}
        </div>
        <Link href="/contact" className="btn-primary mt-8">
          Get a scoping call for your brokerage
        </Link>
      </section>

      <section id="cyber-audit" className="border-y border-navy-border bg-navy-surface px-6 py-16">
        <div className="mx-auto max-w-6xl scroll-mt-24">
          <span className="mb-4 inline-block rounded-full border border-teal/40 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-teal">
            CERT-In · SEBI Cyber Circular
          </span>
          <h2 className="section-heading">Cyber Audit</h2>
          <p className="mt-4 max-w-4xl text-sm leading-relaxed text-slate">
            The SEBI Cyber Security and Cyber Resilience Framework (CSCRF) mandates annual
            cybersecurity audits for market infrastructure institutions and registered
            intermediaries. Auditspherre conducts end-to-end cyber audits covering your
            networks, applications, and IT governance posture.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {cyberCoverage.map((item) => (
              <div key={item} className="surface-card text-sm text-slate">
                {item}
              </div>
            ))}
          </div>
          <Link href="/contact" className="btn-primary mt-8">
            Assess your cyber compliance posture
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="section-heading mb-8">The Auditspherre difference</h2>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="surface-card">
            <h3 className="mb-4 text-lg font-semibold text-cream">What most firms do</h3>
            <ul className="space-y-3 text-sm text-slate">
              <li>Generic IT audits not tailored to SEBI mandates</li>
              <li>Offshore VAPT teams with no financial sector experience</li>
              <li>Reports that don&apos;t meet exchange submission formats</li>
              <li>No guidance on remediation timelines</li>
            </ul>
          </div>
          <div className="surface-card border-gold/30">
            <h3 className="mb-4 text-lg font-semibold text-cream">The Auditspherre difference</h3>
            <ul className="space-y-3 text-sm text-slate">
              <li>Audit methodology built exclusively for SEBI-regulated entities</li>
              <li>Auditors with securities market and CERT-In empanelled experience</li>
              <li>Reports in exchange-accepted formats, ready for submission</li>
              <li>Post-audit remediation support included</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
