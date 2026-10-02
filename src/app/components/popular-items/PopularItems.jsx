import React from 'react'
import styles from './popular-items.module.css';
import Image from 'next/image';
import popularItems from './popular-items.json'

const PopularItems = () => {
    return (
        <section className={styles.popular__section}>
            <div className={styles.popular__heading}>
                <h3>Популярные изделия</h3>
                <a href="#!">Смотреть все</a>
            </div>
            <ul className={styles.popular__grid}>
                {popularItems.items.map((item) => (
                    <li key={item.id}>
                        <a href="#!">
                            <Image src={item.image} width={250} height={250} alt={item.title} className={styles.popular__img} />
                            <h4 className={styles.popular__title}>{item.title}</h4>
                            <p className={styles.popular__price}>{item.price} ₽</p>
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default PopularItems
