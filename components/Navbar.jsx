import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import logo from "../public/logo.png";

const Navbar = () => (
  <div className={styles.container}>
    <div className={styles.containerNavbar}>
      <Image src={logo} alt="/" width="125" height="50" />
      <div>
        <ul className="hidden md:flex">
          <Link href="/">
            <li className={styles.item}>Inicio</li>
          </Link>
          <Link href='/#projects'>
            <li className={styles.item}>Proyectos</li>
          </Link>
          <Link href='/#plans' >
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

export default Navbar;
