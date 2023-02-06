import Head from "next/head";
import Main from "../components/Main";
import Footer from "../components/Footer";
import SobreNosotros from "../components/SobreNosotros";
import Marketing from "../components/Marketing";
import Achievements from "../components/Achievements";
import Projects from "../components/Projects";
import Plans from "../components/Plans";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Junior - Landing</title>
        <meta
          name="description"
          content="Landing page"
        />
        <link rel="icon" href="/fav.png" />
      </Head>
    <Main />
    <Marketing />
    <Achievements />
    <Projects />
    <Plans />
    <SobreNosotros />
    <Footer />
    </div>
  );
}
