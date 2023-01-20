import Head from "next/head";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import Footer from "../components/Footer";
import SobreNosotros from "../components/SobreNosotros";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Junior - Landing</title>
        <meta
          name="description"
          content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences."
        />
        <link rel="icon" href="/fav.png" />
      </Head>
      <Navbar />
      <Main />
      <Footer />
      <SobreNosotros />
    </div>
  );
}
