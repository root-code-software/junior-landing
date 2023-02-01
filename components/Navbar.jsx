import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/logo.png";
import AiconClosed from "../public/aicons/AiconClosed.png";
import AiconMenu from "../public/aicons/AiconMenu.png";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  const [nav, isNavOpen] = useState(false);

  const handleNav = () => {
    isNavOpen(!nav);
  };

  return (
    <div className={styles.container}>
      <div className={styles.containerNavbar}>
        <Image src={logo} alt="/" width="125" height="50" />
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className={styles.item}>Inicio</li>
            </Link>
            <Link href="/#projects">
              <li className={styles.item}>Proyectos</li>
            </Link>
            <Link href="/#plans">
              <li className={styles.item}>Planes</li>
            </Link>
            <Link href="/#sobreNosotros">
              <li className={styles.item}>Sobre Nosotros</li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <Image src={AiconMenu} alt="/icono menu" sizes="25"></Image>
          </div>
        </div>
      </div>
        <div className={ nav ? `${styles.open}` : `${styles.close}`}>
          <div className={styles.logoMobile}>
            <Image src={logo} alt="/" width="87" height="35" />
            <div
              onClick={handleNav}
              className={styles.iconsMobile}
            >
             <Image src={AiconClosed} alt="/icono cerrar" ></Image>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li onClick={() => isNavOpen(false)} className="py-10 text-sm">
                  Inicio
                </li>
              </Link>
              <Link href="/#projects">
                <li onClick={() => isNavOpen(false)} className="py-10 text-sm">
                  Proyectos
                </li>
              </Link>
              <Link href="/#plans">
                <li onClick={() => isNavOpen(false)} className="py-10 text-sm">
                  Planes
                </li>
              </Link>
              <Link href="/#sobreNosotros">
                <li onClick={() => isNavOpen(false)} className="py-10 text-sm">
                  Sobre Nosotros
                </li>
              </Link>
            </ul>
          </div>
        </div>
    </div>
  );
};
export default Navbar;
