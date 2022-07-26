import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import '../styles/index.css';

function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}

export default App;
