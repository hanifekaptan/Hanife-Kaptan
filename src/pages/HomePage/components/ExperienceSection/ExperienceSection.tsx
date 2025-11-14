import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './ExperienceSection.module.css';
import { getAssetUrl } from '../../../../utils/imageHelper';

interface ExperienceStep {
    date: string;
    title: string;
    company: string;
    description: string;
    imageUrl: string;
}

const ExperienceSection: React.FC = () => {
    const { t } = useTranslation('home');
    const experienceSteps = t('experience.steps', { returnObjects: true }) as ExperienceStep[];

    return (
        <section className={styles.experience}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>{t('experience.mainTitle')}</h2>
                </div>

                <div className={styles.timeline}>
                    {Array.isArray(experienceSteps) && experienceSteps.map((step, index) => {
                        const imageSrc = getAssetUrl(step.imageUrl, 'experience');

                        return (
                            <div key={index} className={styles.timelineItem}>
                                <div className={styles.timelineMarker}></div>
                                <div className={styles.timelineContent}>
                                    <div className={styles.logoContainer}>
                                        <img 
                                            className={styles.timelineLogo}
                                            src={imageSrc}
                                            alt={`${step.company} Logo`}
                                        />
                                    </div>
                                    <div className={styles.timelineText}>
                                        <span className={styles.date}>{step.date}</span>
                                        <h3 className={styles.stepTitle}>{step.title}</h3>
                                        <h4 className={styles.company}>{step.company}</h4>
                                        
                                        <div className={styles.description}>
                                            <ul>
                                                {step.description.split('\n').map((item, itemIndex) => (
                                                    item.trim() !== '' && (
                                                        <li key={itemIndex}>
                                                            {item.replace(/^•\s*/, '')}
                                                        </li>
                                                    )
                                                ))}
                                            </ul>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;