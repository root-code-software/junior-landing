import Navbar from "../components/Navbar";
import Main from "../components/Main";
import Footer from "../components/Footer";
import SobreNosotros from "../components/SobreNosotros";
import Marketing from "../components/Marketing";

import "../styles/globals.css";

const MyApp = () => (
  <>
    <Navbar />
    <Main />
    <Marketing />
    <SobreNosotros />
    <Footer />
  </>
);

export default MyApp;
