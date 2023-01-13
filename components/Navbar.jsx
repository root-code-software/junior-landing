import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import logo from "../public/logo.png";

const Navbar = () => (
<<<<<<< HEAD
  <div className={styles.container}>
    <div className={styles.containerNavbar}>
      <Image src={logo} alt="/" width="125" height="50" />
      <div>
        <ul className="hidden md:flex">
          <Link href="/">
            <li className={styles.item}>Inicio</li>
          </Link>
          <Link href="/">
            <li className={styles.item}>Proyectos</li>
          </Link>
          <Link href="/">
            <li className={styles.item}>Planes</li>
          </Link>
          <Link href="/">
            <li className={styles.item}>Sobre Nosotros</li>
          </Link>
        </ul>
      </div>
    </div>
  </div>
);
=======
  
    <div className={styles.container}>
      <div className={styles.containerNavbar}>
        <Image src={logo} alt="/" width="125" height="50" />
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className={styles.item}>Inicio</li>
            </Link>
            <Link href="/">
              <li className={styles.item}>Proyectos</li>
            </Link>
            <Link href="/">
              <li className={styles.item}>Planes</li>
            </Link>
            <Link href="/">
              <li className={styles.item}>Sobre Nosotros</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
>>>>>>> 1e7defb1b342ee9e205d2ff151525e694479c988

export default Navbar;
