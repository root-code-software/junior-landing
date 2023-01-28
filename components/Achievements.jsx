import React from "react";
import Image from "next/image";
import achievements from "../public/achievements.png";
import styles from "../styles/Achievements.module.css";

const Achievements = () => (
  <div id="achievements" className={styles.wallpaper}>
    <div className={styles.container}><br/>
      <h2 className=" text-right pr-20 ">¿Que esperemos que logres?</h2>
      <div className={styles.containerLogo}>
        <div>
          <Image
            src={achievements}
            className=""
            alt="/"
            width="600"
            height="500"
          />
        </div>
          <div className={styles.descriptionAchievements}>
            <div className="m-auto intem-center">
              <ul>
                <li>✔ Que aprendas a trabajar en equipo</li>
                <br />
                <li>✔ Que aprendas metodologías de trabajo </li>
                <br />
                <li>
                  ✔ Que apliques tus conocimientos y recibas <br />
                  feedback constructivos
                </li>
                <br />
                <li>✔ Puedas progresar profesionalmente</li>
                <br />
                <li>✔ Te puedas desenvolver mejor en la industria</li>
              </ul>
            </div>
          </div>
      </div><br/>
    </div>
  </div>
);

export default Achievements;
