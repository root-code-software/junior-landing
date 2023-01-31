import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/logo.png";
import styles from "../styles/Navbar.module.css";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
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
            <Link href="/">
              <li className={styles.item}>Sobre Nosotros</li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
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
              <AiOutlineClose />
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li onClick={() => setNav(false)} className="py-10 text-sm">
                  Inicio
                </li>
              </Link>
              <Link href="/#projects">
                <li onClick={() => setNav(false)} className="py-10 text-sm">
                  Proyectos
                </li>
              </Link>
              <Link href="/#plans">
                <li onClick={() => setNav(false)} className="py-10 text-sm">
                  Planes
                </li>
              </Link>
              <Link href="/">
                <li onClick={() => setNav(false)} className="py-10 text-sm">
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
