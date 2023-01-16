import Image from "next/image"
import imageSobreNosotros from "../public/sobrenosotros.png"
import Style from "../styles/SobreNosotros.module.css"

const SobreNosotros = () => (
    <div className={Style.container_sobrenosotros}>
        <div className={Style.container_text}>
            <div className={Style.container_child}>
                <p className={Style.title_text}>Sobre Nosotros</p>
                <p>Somos un grupo de personas enfocadas a ofrecer orientacion y guia a los Juniors, proporcionando oportunidades de aprendizaje con nuestros sistema de proyectos, facilitando la comunicacion y brindando el apoyo necesario para que las experiencias sean lo mas satisfactorias y gratificantes, como tambien fomentar la confianza de sus conocimientos, para poder avanzar profesionalmente.</p>
            </div>
        </div>
        <div className={Style.container_Image}>
            <Image
                src={imageSobreNosotros}
                className={Style.Image}
            />
        </div>
    </div>
)

export default SobreNosotros