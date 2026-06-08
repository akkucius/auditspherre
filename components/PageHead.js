import Head from 'next/head';

export default function PageHead({ title, description }) {
  const fullTitle = title ? `${title} | Auditspherre` : 'Auditspherre — Precision. Compliance. Trust.';

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="noindex, nofollow" />
      <meta name="googlebot" content="noindex, nofollow" />
    </Head>
  );
}
