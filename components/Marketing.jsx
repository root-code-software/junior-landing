import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";
import profilephoto1 from "../public/Persona-4.png";
import profilephoto2 from "../public/persona-3.png";
import profilephoto3 from "../public/persona-2.png";
import profilephoto4 from "../public/Persona-1.png";
import Stain1 from "../public/Trazado 2.png";
import Stain2 from "../public/Trazado 3.png";
import Style from "../styles/Marketing.module.css";

const Marketing = () => (
    <div className={Style.Marketing}>
        <Image src={Stain1} alt="mancha" className={Style.Mancha1} />
        <Image src={Stain2} alt="mancha" className={Style.Mancha2}/>
        <div className={Style.Container_titles}>
            <p className={Style.First_title}>Buena experiencia, buen mentor y buenas practicas.</p>
            <p>Algunos mensajes de nuestros integrantes</p>
        </div>
        <div className={Style.Flex_container}>
        <div className={Style.Container_opiniones}>
            <div className={Style.Opiniones}>
                <div>
                    <div className={Style.Info_User}>
                        <Image className={Style.Photo_Perfil} src={profilephoto1} alt=""/>
                        <div>
                            <p>Franco, 24 años</p>
                            <div className={Style.Valoracion}>
                                <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={Style.Opinion}>
                    <p>&quot; Aprendi mucho del trabajo en equipo, muy buenos compañeros, me llevo una muy buena experiencia &quot;</p>
                </div>
            </div>

            <div className={Style.Opiniones}>
                <div>
                    <div className={Style.Info_User}>
                        <Image className={Style.Photo_Perfil} src={profilephoto2} alt=""/>
                        <div>
                            <p>Fernanda, 24 años</p>
                            <div className={Style.Valoracion}>
                                <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={Style.Opinion}>
                    <p> &quot; Aprendi mucho del trabajo en equipo, muy buenos compañeros, me llevo una muy buena experiencia &quot;</p>
                </div>
            </div>

            <div className={Style.Opiniones}>
                <div>
                    <div className={Style.Info_User}>
                        <Image className={Style.Photo_Perfil} src={profilephoto3} alt=""/>
                        <div>
                            <p>Sonia, 27 años</p>
                            <div className={Style.Valoracion}>
                                <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={Style.Opinion}>
                    <p>&quot; Aprendi mucho del trabajo en equipo, muy buenos compañeros, me llevo una muy buena experiencia &quot;</p>
                </div>
            </div>

            <div className={Style.Opiniones}>
                <div>
                    <div className={Style.Info_User}>
                        <Image className={Style.Photo_Perfil} src={profilephoto4} alt=""/>
                        <div>
                            <p>Sandra, 26 años</p>
                            <div className={Style.Valoracion}>
                                <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={Style.Opinion}>
                    <p>&quot; Aprendi mucho del trabajo en equipo, muy buenos compañeros, me llevo una muy buena experiencia &quot;</p>
                </div>
            </div>
        </div>
        </div>
    </div>
);

export default Marketing
