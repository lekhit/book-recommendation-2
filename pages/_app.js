import '../styles/globals.css';
import NavBar from '../components/navBar';
function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps}></Component>
    </>
  );
}

export default MyApp;
