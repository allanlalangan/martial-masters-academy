import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import '../styles/index.css';

function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <main className='mt-[13vh]'>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}

export default App;
