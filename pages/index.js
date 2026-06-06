import Head from 'next/head';

const features = [
  {
    title: 'Real-time monitoring',
    description: 'Track file create, modify, and delete events across shared storage.',
  },
  {
    title: 'Audit trail',
    description: 'Review searchable logs with timestamps, users, and actions.',
  },
  {
    title: 'Cross-platform',
    description: 'Designed for Windows and Linux file server environments.',
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>AuditSpherre — File Server Auditing</title>
        <meta
          name="description"
          content="File server auditing and monitoring for Windows and Linux."
        />
      </Head>

      <div className="mx-auto max-w-5xl px-6 py-16">
        <section className="mb-16 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-cyan-400">
            Early development
          </p>
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
            AuditSpherre
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-300">
            Monitor file server activity, strengthen compliance, and keep a clear
            record of every change.
          </p>
        </section>

        <section className="grid gap-6 sm:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-xl border border-slate-800 bg-slate-900/60 p-6"
            >
              <h2 className="mb-2 text-lg font-semibold text-white">
                {feature.title}
              </h2>
              <p className="text-sm leading-relaxed text-slate-400">
                {feature.description}
              </p>
            </article>
          ))}
        </section>
      </div>
    </>
  );
}
