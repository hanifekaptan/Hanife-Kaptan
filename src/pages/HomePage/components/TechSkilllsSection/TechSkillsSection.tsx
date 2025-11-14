import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './TechSkillsSection.module.css';

import { 
    FaBrain, 
    FaServer, 
    FaCode,
    FaCloudUploadAlt, 
    FaVial,
    FaCogs
} from 'react-icons/fa';

interface SkillCategory {
    icon: string;
    title: string;
    items: string[];
}

const iconMap: { [key: string]: React.ElementType } = {
    FaBrain,
    FaServer,
    FaCode,
    FaCogs,
    FaCloudUploadAlt,
    FaVial
};

const TechSkillsSection: React.FC = () => {
    const { t } = useTranslation('home');
    const skillData = t('skills.categoryList', { returnObjects: true }) as SkillCategory[];

    return (
        <section className={styles.skills}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>{t('skills.mainTitle')}</h2>
                </div>

                <div className={styles.grid}>
                    {Array.isArray(skillData) && skillData.map((categoryGroup, index) => {
                        const IconComponent = iconMap[categoryGroup.icon];

                        return (
                            <div key={index} className={styles.skillCard}>
                                <div className={styles.cardHeader}>
                                    {IconComponent && <IconComponent size={36} className={styles.cardIcon} />}
                                    <h3 className={styles.cardTitle}>{categoryGroup.title}</h3>
                                </div>
                                <ul className={styles.skillList}>
                                    {categoryGroup.items.map((skill, skillIndex) => (
                                        <li key={skillIndex} className={styles.skillItem}>
                                            {skill}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default TechSkillsSection;