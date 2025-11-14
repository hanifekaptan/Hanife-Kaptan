import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styles from './HeroSection.module.css';



const HeroSection: React.FC = () => {
    const { t } = useTranslation('home');

    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.heroContent}>
                    <h1 className={styles.title}>
                        {t('hero.title')}
                    </h1>
                    <p className={styles.bio}>
                        {t('hero.bio')}
                    </p>
                    <div className={styles.ctaContainer}>
                        <Link to="/contact" className={`${styles.ctaButton} ${styles.ctaPrimary}`}>
                            {t('hero.ctaContact')}
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;