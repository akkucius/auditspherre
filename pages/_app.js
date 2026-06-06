import '../styles/globals.css';
import Footer from '../components/Footer';

export default function App({ Component, pageProps }) {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-grow">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}
