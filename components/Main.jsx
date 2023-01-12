import React from "react";
import Image from "next/image";
import MainLogo from "../public/MainLogo.png";
import styles from "../styles/Main.module.css";

const Main = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerMain}>
        <div className={styles.title}>
          <h1>
            Cada <span className="text-[#5651e5]"> Junior </span>es
            <span className="text-[#edf03c]"> Único </span>
          </h1>

          <p className={styles.caption}>
            Te ofrecemos un ambiente donde puedas practicar trabajar en tech,
            para que ganes experiencia simulando un ambiente de trajo real.
          </p>
          <br></br>
          <div className={styles.containerIcon}>
            <div className={styles.icon}>
              <h2>200K+</h2>
              <br></br>
              <a>
                Usuarios <br></br>Nuevos
              </a>
            </div>
            <div className={styles.icon}>
              <h2>15K+</h2>
              <br></br>
              <a>
                Estudiantes <br></br>Satisfechos
              </a>
            </div>

            <div className={styles.icon}>
              <h2>200+</h2>
              <br></br>
              <a>
                Proyectos <br></br>Finalizados
              </a>
            </div>

            <div className={styles.icon}>
              <h2>50+</h2>
              <br></br>
              <a>
                Grupos <br></br>Diseñados
              </a>
            </div>
          </div>
        </div>

        <div className="col-span-2">
          <Image
            src={MainLogo}
            className="rounded-xl"
            alt="/"
            width="900"
            height="800"
          />
        </div>
      </div>
    </div>
  );
};
export default Main;
