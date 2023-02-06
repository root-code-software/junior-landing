import React from "react";
import styles from "../styles/Plans.module.css";
import Link from "next/link";

const Plans = () => (
  <div id="plans">
    <div className={styles.container}>
      <br />
      <h1 className="py-4 text-center">Planes</h1>
      <br />
      <div className={styles.containerPlans}>
        <div className={styles.descriptionPlans}>
          <h3>Simple</h3>
          <br />
          <h4>0 U$D</h4>
          <br />
          <ul>
            <li> - Acceso limitado a proyectos</li>
          </ul>
        </div>
        <div className={styles.descriptionPlans}>
          <h3>Pro</h3>
          <br />
          <h4>0 U$D por mes</h4><br/>
          <ul>
            <li>- Acceso limitado a proyectos</li>
            <br />
            <li>- Seguimiento en el proyecto</li>
            <br />
            <li> -Grupos prediseñados</li>
            <br />
            <li>-Certificados </li>
          </ul>
        </div>
        <div className={styles.descriptionPlans}>
          <h3>Avanzado</h3>
          <br />
          <h4>50 U$D por año</h4><br/>
          <ul>
            <li>-Feedback constante del mentor</li>
            <br />
            <li>-acceso limitado a proyectos</li>
            <br />
            <li>-Seguimiento en el proyecto</li>
            <br />
            <li>-Crear un perfil en Linkedin</li>
            <br />
            <li>-Grupos prediseñados</li>
            <br />
            <li>-Crear un portafolio</li>
            <br />
            <li>-Certificados</li>
            <br />
            <li>-Crear un CV</li>
          </ul>
        </div>
      </div>
      <br />
      <Link href='/PayForm'>
      <button className={styles.btn}>Contratar</button>
        </Link>
      <br />
    </div>
  </div>
);
export default Plans;
