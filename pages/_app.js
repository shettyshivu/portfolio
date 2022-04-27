import { useEffect } from "react";
import "../styles/globals.css";
import "../styles/style.css";
import "aos/dist/aos.css";
import AOS from "aos";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-svg-core/styles.css';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
