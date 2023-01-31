import Navbar from "../components/Navbar";
import Main from "../components/Main";
import Footer from "../components/Footer";
import SobreNosotros from "../components/SobreNosotros";
import Marketing from "../components/Marketing";
import Achievements from "../components/Achievements";
import Projects from "../components/Projects";
import Plans from "../components/Plans";
import "../styles/globals.css";

const MyApp = () => (
  <>
    <Navbar />
    <Main />
    <Achievements />
    <Projects />
    <Plans />
    <Marketing />
    <SobreNosotros />
    <Footer />
  </>
);

export default MyApp;