import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import styles from './CTASection.module.css';

const CTASection: React.FC = () => {
    const { t } = useTranslation('home');

    return (
        <section className={styles.cta}>
            <div className={styles.container}>
                <h2 className={styles.title}>{t('cta.title')}</h2>
                <p className={styles.subtitle}>{t('cta.subtitle')}</p>
                <Link to="/contact" className={styles.ctaButton}>
                    {t('cta.buttonText')}
                </Link>
            </div>
        </section>
    );
};

export default CTASection;