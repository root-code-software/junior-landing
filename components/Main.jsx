import React from "react";
import Image from "next/image";
import MainLogo from "../public/MainLogo.png";
import styles from "../styles/Main.module.css";

const Main = () => (
  <div className={styles.wallpaper}>
  <div className={styles.container}>
    <div className={styles.containerMain}>
      <div className={styles.title}>
        <h1>
          Cada <span className={styles.titleBlue}> Junior </span>es
          <span className={styles.titleYellow}> Único </span>
        </h1>
        <p className={styles.caption}>
          Te ofrecemos un ambiente donde puedas practicar trabajar en tech, para
          que ganes experiencia simulando un ambiente de trajo real.
        </p>
        <br />
        <div className={styles.containerIcon}>
          <div className={styles.icon}>
           <div className= {styles.subtitle}> <br/>
            <h3 >200K+</h3>
            <br />
            <a>
              Usuarios <br /> Nuevos
            </a>
            </div>
          </div>
          <div className={styles.icon}>
          <div className= {styles.subtitle}><br/>
            <h3>15K+</h3>
            <br />
            <a>
              Estudiantes <br /> Satisfechos
            </a>
            </div>
          </div>
          <div className={styles.icon}>
          <div className= {styles.subtitle}><br/>
            <h3>200+</h3>
            <br />
            <a>
              Proyectos <br /> Finalizados
            </a>
          </div>
          </div>
          <div className={styles.icon}>
          <div className= {styles.subtitle}><br/>
            <h3>50+</h3>
            <br />
            <a>
              Grupos <br /> Diseñados
            </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-2">
        <Image
          src={MainLogo}
          className="rounded-xl"
          alt="Logo de la página"
          width="900"
          height="800"
        />
      </div>
    </div>
  </div>
 </div>
);
export default Main;
