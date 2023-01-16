import Head from "next/head";
import Footer from "../Components/Footer";
import SobreNosotros from "../Components/SobreNosotros"

function Nosotros() {
    return (
        <div>
            <Head>
            <title>Sobre Nosotros</title>
            <meta name="Description" />
            </Head>
            <Footer/>
            <SobreNosotros/>
        </div>
    )
}

export default Nosotros
