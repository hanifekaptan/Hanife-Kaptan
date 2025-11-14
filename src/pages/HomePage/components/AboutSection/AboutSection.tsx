import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './AboutSection.module.css';

const AboutSection: React.FC = () => {
    const { t } = useTranslation('home');

    return (
        <section className={styles.about}>
            <div className={styles.container}>
                <h2 className={styles.title}>{t('about.title')}</h2>
                <div className={styles.content}>
                    <p>{t('about.paragraph1')}</p>
                    <p>{t('about.paragraph2')}</p>
                    <p>{t('about.paragraph3')}</p>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;