import { FaWhatsapp, FaEnvelope } from "react-icons/fa"
import Style from "../styles/Footer.module.css"

const Footer = () => (
    <div className={Style.footer}>
        <p className={Style.title}>Para mas consultas sobre nuestro nuestro programa: </p>
        <div className={Style.Container_contact}>
            <div className={Style.Contact}>
                <FaWhatsapp className={Style.Icon}/>
                <a className={Style.Links}>+57 320 7507770</a>
            </div>
            <div className={Style.Contact}>
                <FaEnvelope className={Style.Icon}/>
                <a className={Style.Links}>LuisanaOsorio005@gmail.com</a>
            </div>
        </div>
    </div>
)

export default Footer
