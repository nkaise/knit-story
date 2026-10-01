'use client';
import Image from "next/image";
import React, { useState } from "react";
import styles from './header.module.css';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMobileMenu = () => {
        setIsOpen(prev => !prev);
    };
    const closeMobileMenu = () => {
        setIsOpen(false);
    };
    return (
        <>
            <nav className={styles.header}>
                <div className={styles.header__logo}>
                    <Image src="./logo.svg" alt="Логотип" width="225" height="25" />
                </div>
                <ul className={styles.header__list}>
                    <li><a href="#!">Каталог</a></li>
                    <li><a href="#!">О мастере</a></li>
                    <li><a href="#!">Как заказать</a></li>
                    <li><a href="#!">Доставка</a></li>
                    <li><a href="#!">Контакты</a></li>
                </ul>
                <a href="#!" className={styles.header__button}>Заказать звонок</a>
                <div className={styles.header__logoMobile} onClick={toggleMobileMenu}>
                    <Image src={isOpen ? "./close-mobile-menu.svg" : "./mobile-menu.svg"}
                        alt={isOpen ? "Закрыть меню" : "Открыть меню"} width="30" height="24" />
                </div>
            </nav>
            {isOpen && (
                <ul className={styles.mobileMenuOpen}>
                    <li><a href="#!" onClick={closeMobileMenu}>Каталог</a></li>
                    <li><a href="#!" onClick={closeMobileMenu}>О мастере</a></li>
                    <li><a href="#!" onClick={closeMobileMenu}>Как заказать</a></li>
                    <li><a href="#!" onClick={closeMobileMenu}>Доставка</a></li>
                    <li><a href="#!" onClick={closeMobileMenu}>Контакты</a></li>
                </ul>
            )}
        </>
    );
};

export default Header;
