import React from 'react'
import styles from './footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <section className={styles.footer__wrapper}>
                <div className={styles.footer__title}>Тёплые истории</div>
                <div className={styles.footer__city}>Ангарск</div>
            </section>
        </footer>
    )
}

export default Footer
