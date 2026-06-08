import '../styles/globals.css';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function App({ Component, pageProps }) {
  return (
    <div className="flex min-h-screen flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}
