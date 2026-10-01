import React from 'react'
import styles from './hero.module.css';

const Hero = () => {
    return (
        <section className={styles.hero__section}>
            <div className={styles.hero__sectionWrapper}>
                <h1 className={styles.hero__title}>Вязаные вещи <br /> ручной работы</h1>
                <p className={styles.hero__text}>Создаём вручную в Ангарске. <br /> Для всей семьи.</p>
                <ul className={styles.hero__list}>
                    <li className={styles.hero__item}>Связано вручную</li>
                    <li className={styles.hero__item}>Уникальные изделия</li>
                    <li className={styles.hero__item}>Вяжем на заказ</li>
                    <li className={styles.hero__item}>Доставка по Ангарску и по России</li>
                </ul>
                <a href="#!" className={styles.hero__button}>Посмотреть каталог</a>
            </div>
        </section>
    )
}

export default Hero
