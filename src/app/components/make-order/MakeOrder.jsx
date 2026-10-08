import React from 'react'
import styles from './make-order.module.css';

const MakeOrder = () => {
    return (
        <section className={styles.makeOrder__section}>
            <div className={styles.makeOrder__sectionWrapper}>
                <h3 className={styles.makeOrder__title}>Не нашли, что ищете?</h3>
                <p className={styles.makeOrder__text}>Свяжем по вашему желанию - <br /> цвет, размер, узор, материал.</p>
                <a href="#!" className={styles.makeOrder__button}>Оставить заявку</a>
            </div>
        </section>
    )
}

export default MakeOrder
