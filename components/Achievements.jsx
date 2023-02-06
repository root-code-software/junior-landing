import React from "react";
import Image from "next/image";
import achievements from "../public/achievements.png";
import styles from "../styles/Achievements.module.css";

const Achievements = () => (
  <div id="achievements" className={styles.wallpaper}>
    <div className={styles.container}>
      <br />
      <h2 className=" text-right pr-20 ">¿Que esperemos que logres?</h2>
      <div className={styles.containerLogo}>
        <div>
          <Image
            src={achievements}
            className=""
            alt="Lista de logros"
            width="600"
            height="500"
          />
        </div>
        <div className={styles.descriptionAchievements}>
          <div className="m-auto intem-center">
            <ul>
              <li>
                ✔ ¡Lleva tu look profesional al siguiente nivel! Brindamos
                retroalimentación personalizada y optimización para su
                currículum y LinkedIn.
              </li>
              <br />
              <li>
                ✔ Obtenga experiencia uniéndose a un equipo multidisciplinario
                para una pasantía en una fábrica de software de simulación.
              </li>
              <br />
              <li>
                ✔ ¡Basta de teoría! Concierta una reunión con nuestros mentores
                para despejar todas tus dudas sobre el mundo. De las TI y
                aprende de las personas que se dedican a ello.
              </li>
              <br />
              <li>
                ✔ Desempeña entrevistas con reclutadores para presentación sin
                dudas, para que se vea más profesional.
              </li>
              <br />
              <li>
                ✔ Nuestra prioridad es que mientras estés en los proyectos haya
                la opción de trabajar con las empresas aliadas que nos apoyan.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <br />
    </div>
  </div>
);

export default Achievements;
