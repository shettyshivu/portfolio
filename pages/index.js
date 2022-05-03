import Head from "next/head";
import Header from "../components/Header";
import About from "../components/About";
import Projects from "../components/Projects";
import Resume from "../components/Resume";
import Float from "../components/Float";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Shivaprasad Shetty</title>
        <meta name="description" content="Shivaprasad's Portfolio Website" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <Header />
      <About />
      <Resume />
      <Float />
      <Projects />
      <Footer />
    </>
  );
}
