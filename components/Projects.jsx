import React from "react";
import Image from "next/image";
import logo from "../public/logo.png";
import styles from "../styles/Projects.module.css";

const Projects = () => (
    <div id="projects" className={styles.container}>
      <div className={styles.containerLogo}>
        <div className="col-span-4">
          <h1>Algunos de nuestros proyectos</h1>
     </div>
        <div className={styles.logoprojects}>
          <Image src={logo} className="rounded-xl" alt="/" width="250" height="400"/><br/>
          <h4>
            Lorem ipsum dolor sit amet<br/>
            consectetur adipisicing elit.<br/>
            Nihil molestias nobis sequi
          </h4>
     </div>
        <div className={styles.logoprojects}>
          <Image src={logo} className="rounded-xl" alt="/" width="250" height="400"/><br/>
          <h4 className="text-center">
            Lorem ipsum dolor sit amet<br/>
            consectetur adipisicing elit.<br/>
            Nihil molestias nobis sequi
          </h4>
        </div>
        <div className={styles.logoprojects}>
          <Image src={logo}className="rounded-xl" alt="/" width="250" height="400"/><br/>
          <h4 className="text-center">
            Lorem ipsum dolor sit amet<br/>
            consectetur adipisicing elit. <br/>
            Nihil molestias nobis sequi
          </h4>
        </div>
        <br />
        <div className="col-span-4">
          <h3>Si quieres ver mas proyectos puedes verlos aqui</h3><br/>
          <button href="/">Ver mas</button>
        </div>
      </div>
    </div>
  );

export default Projects;
