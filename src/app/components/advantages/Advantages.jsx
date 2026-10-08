import React from 'react'
import styles from './advantages.module.css';
import Image from 'next/image';

const Advantages = () => {
    return (
        <section>
            <ul className={styles.advantages__grid}>
                <li className={styles.advantages__item}>
                    <Image src="./advantages/delivery.svg" width="180" height="180" alt="Логотип доставка" />
                    <h4 className={styles.advantages__title}>Доставка</h4>
                    <p className={styles.advantages__text}>По Ангарску и по России</p>
                </li>
                <li className={styles.advantages__item}>
                    <Image src="./advantages/payment.svg" width="180" height="180" alt="Логотип оплата" />
                    <h4 className={styles.advantages__title}>Удобная оплата</h4>
                    <p className={styles.advantages__text}>Наличными или переводом</p>
                </li>
                <li className={styles.advantages__item}>
                    <Image src="./advantages/support.svg" width="180" height="180" alt="Логотип всегда на связи" />
                    <h4 className={styles.advantages__title}>Всегда на связи</h4>
                    <p className={styles.advantages__text}>Поможем с выбором и ответим на вопросы</p>
                </li>
            </ul>
        </section>
    )
}

export default Advantages
