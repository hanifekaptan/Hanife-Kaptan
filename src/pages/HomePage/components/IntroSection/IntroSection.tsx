import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './IntroSection.module.css';
import { getAssetUrl } from '../../../../utils/imageHelper';

const IntroSection: React.FC = () => {
    const { t } = useTranslation('home');
    const skillsArray = t('intro.skillsList', { returnObjects: true }) as string[];
    const imageUrl = t('intro.imageUrl');
    const profilePhoto = getAssetUrl(imageUrl, 'intro');

    return (
        <section className={styles.intro}>
            <div className={styles.container}>
                <div className={styles.gridContainer}>

                    <div className={styles.leftColumn}>
                        <div className={`${styles.infoCard} ${styles.cardBiography}`}>
                            <span className={styles.cardLabel}>{t('intro.bioLabel')}</span>
                            <p className={styles.cardText}>{t('intro.bioText')}</p>
                        </div>
                        <div className={`${styles.infoCard} ${styles.cardProjects}`}>
                            <span className={styles.cardValue}>{t('intro.projectsNumber')}</span>
                            <span className={styles.cardLabel}>{t('intro.projectsLabel')}</span>
                        </div>
                    </div>

                    <div>
                        <img src={profilePhoto} alt={t('intro.imageAlt')} className={styles.profileImage} />
                    </div>

                    <div className={styles.rightColumn}>
                        <div className={`${styles.infoCard} ${styles.cardExperience}`}>
                            <span className={styles.cardValue}>{t('intro.experienceYears')}</span>
                            <span className={styles.cardLabel}>{t('intro.experienceLabel')}</span>
                        </div>
                        <div className={`${styles.infoCard} ${styles.cardSkills}`}>
                            <span className={styles.cardLabel}>{t('intro.skillsLabel')}</span>
                            <div className={styles.skillsList}>
                                {skillsArray.map((skill, index) => (
                                    <span key={index}>{skill}</span>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default IntroSection;