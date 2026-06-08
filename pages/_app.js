import Head from 'next/head';
import '../styles/globals.css';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function App({ Component, pageProps }) {
  return (
    <div className="flex min-h-screen flex-col font-sans">
      <Head>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="googlebot" content="noindex, nofollow" />
      </Head>
      <Navbar />
      <main className="flex-grow">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}
