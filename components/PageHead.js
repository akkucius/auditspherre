import Head from 'next/head';

export default function PageHead({ title, description }) {
  const fullTitle = title ? `${title} | Auditspherre` : 'Auditspherre — Precision. Compliance. Trust.';

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=DM+Sans:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
    </Head>
  );
}
