import React from "react";
import Image from "next/image";
import logo from "../public/logo.png";
import styles from "../styles/Projects.module.css";

const Projects = () => (
    <div id="Projects" className="w-full lg:h-screen p-2">
      <div className={styles.container}>
        <h1 className="py-4">Algunos de nuestros proyectos</h1><br/>
        <div className={styles.containerLogo}>
          <div>
            <div className={styles.logoProjects}>
              <div className="m-auto">
              <Image src={logo} className="rounded-xl" alt="/" width="250" height="400"/> 
              </div>
              <div className={styles.descriptionProjects}>
                <h4>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                   Inventore, nobis. Facilis ad officia deserunt expedita nostrum 
                   similique porro consequatur ipsam facere quis. 
                </h4>
              </div>
            </div>
          </div>
          <div>
          <div className={styles.logoProjects}>
              <div className="m-auto">
              <Image src={logo} className="rounded-xl" alt="/" width="250" height="400"/> 
              </div>
              <div className={styles.descriptionProjects}>
                <h4>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                   Inventore, nobis. Facilis ad officia deserunt expedita nostrum 
                   similique porro consequatur ipsam facere quis. 
                </h4>
              </div>
            </div>
          </div>
          <div>
           <div className={styles.logoProjects}>
              <div className="m-auto">
              <Image src={logo} className="rounded-xl" alt="/" width="250" height="400"/> 
              </div>
              <div className={styles.descriptionProjects}>
                <h4>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                   Inventore, nobis. Facilis ad officia deserunt expedita nostrum 
                   similique porro consequatur ipsam facere quis. 
                </h4>
              </div>
            </div>
          </div>
        </div><br/>
        <h3 className="py-4">Si quieres ver mas proyectos puedes verlos aqui</h3>
        <button className={styles.btn}>Ver mas</button>
      </div>
    </div>
  );

export default Projects;
