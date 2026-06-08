import { useState } from 'react';
import PageHead from '../components/PageHead';

const serviceOptions = [
  'Stock Broker Audit',
  'Cyber Audit',
  'Both',
  'Not sure yet',
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageHead
        title="Contact Us"
        description="Request a scoping call for stock broker or cyber audit services."
      />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <p className="section-label mb-3">Contact</p>
        <h1 className="section-heading mb-10">Request an Audit</h1>

        <div className="grid gap-10 lg:grid-cols-2">
          <form className="surface-card space-y-5" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="fullName" className="mb-2 block text-sm text-cream">
                Full Name
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                required
                className="w-full rounded-md border border-navy-border bg-navy-primary px-4 py-2 text-sm text-cream outline-none focus:border-gold"
              />
            </div>

            <div>
              <label htmlFor="organisation" className="mb-2 block text-sm text-cream">
                Organisation Name
              </label>
              <input
                id="organisation"
                name="organisation"
                type="text"
                required
                className="w-full rounded-md border border-navy-border bg-navy-primary px-4 py-2 text-sm text-cream outline-none focus:border-gold"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm text-cream">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-md border border-navy-border bg-navy-primary px-4 py-2 text-sm text-cream outline-none focus:border-gold"
              />
            </div>

            <div>
              <label htmlFor="phone" className="mb-2 block text-sm text-cream">
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                className="w-full rounded-md border border-navy-border bg-navy-primary px-4 py-2 text-sm text-cream outline-none focus:border-gold"
              />
            </div>

            <div>
              <label htmlFor="service" className="mb-2 block text-sm text-cream">
                Service required
              </label>
              <select
                id="service"
                name="service"
                required
                className="w-full rounded-md border border-navy-border bg-navy-primary px-4 py-2 text-sm text-cream outline-none focus:border-gold"
              >
                {serviceOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="requirement" className="mb-2 block text-sm text-cream">
                Brief description of requirement
              </label>
              <textarea
                id="requirement"
                name="requirement"
                rows={4}
                required
                className="w-full rounded-md border border-navy-border bg-navy-primary px-4 py-2 text-sm text-cream outline-none focus:border-gold"
              />
            </div>

            <button type="submit" className="btn-primary w-full sm:w-auto">
              Submit Request
            </button>

            {submitted && (
              <p className="text-sm text-teal">
                Thank you. We&apos;ll respond within 1 business day.
              </p>
            )}

            <p className="text-xs text-slate">
              We respond within 1 business day. All information shared is strictly confidential.
            </p>
          </form>

          <div className="space-y-6">
            <div className="surface-card">
              <h2 className="mb-4 text-lg font-semibold text-cream">Direct contact</h2>
              <ul className="space-y-3 text-sm text-slate">
                <li>Email: contact@auditspherre.com</li>
                <li>Phone: +91 XXXXX XXXXX</li>
                <li>Location: Mumbai, India</li>
                <li>Working hours: Monday–Saturday, 10am–6pm IST</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
