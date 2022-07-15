import Layout from '../components/Layout';
import '../styles/globals.css';
import '../scss/index.scss';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
