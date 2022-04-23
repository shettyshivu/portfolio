import { useEffect } from "react";
import "../styles/globals.css";
import "../styles/style.css";
import "aos/dist/aos.css";
import AOS from "aos";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
