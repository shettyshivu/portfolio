import Head from "next/head";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Projects from "../components/Projects";
import Resume from "../components/Resume";

export default function Home() {
  return (
    <>
      <Head>
        <title>Shivaprasad Shetty</title>
        <meta name="description" content="Shivaprasad's Portfolio Website" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <Navbar />
      <Header />
      <About />
      <Resume />
      <Projects />
    </>
  );
}
