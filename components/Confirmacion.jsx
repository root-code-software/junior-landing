import Image from "next/image";
import React from "react";
import Link from "next/link";
import ImageConfirmacion from "../public/Confirmacion.png";
import Style from "../styles/Confirmacion.module.css";

const Confirmacion = () => (
    <div className={Style.ContainerConfirm}>
        <div className={Style.Confirm}>
            <p className={Style.FirstTitle}>¡Muchas gracias por adquirir nuestros servicios!</p>
            <p className={Style.LastTitle}>Se le ha enviado un correo a su e-mail para su verificacion.</p>
            <Image src={ImageConfirmacion} alt="Imagen Confirmacion" className={Style.Image}/>
            <Link href='/' className={Style.Link}>Finalizar</Link>
        </div>
    </div>
);

export default Confirmacion;
