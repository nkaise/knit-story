import React from 'react'
import styles from './about.module.css';

const About = () => {
    return (
        <section className={styles.about__section}>
            <div className={styles.about__sectionWrapper}>
                <h3 className={styles.about__title}>О мастере</h3>
                <p className={styles.about__text}>Меня зовут Светлана. Я живу в Ангарске и вяжу с любовью. <br /> В каждом изделии частичка тепла, заботы и хорошего настроения.</p>
                <ul className={styles.about__list}>
                    <li className={styles.about__item}>Опыт вязания более 40 лет</li>
                    <li className={styles.about__item}>Много довольных клиентов</li>
                    <li className={styles.about__item}>Индивидуальный подход</li>
                    <li className={styles.about__item}>Сделано в Ангарске</li>
                </ul>
            </div>
        </section>
    )
}

export default About
