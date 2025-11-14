import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'; // <-- Link component'ini import ediyoruz
import styles from './ProjectsSection.module.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { getAssetUrl } from '../../../../utils/imageHelper';

interface Project {
    slug: string;
    imageUrl: string;
    category: string;
    title: string;
    description: string;
    tags: string[];
    sourceUrl: string;
    liveUrl?: string;
}

const ProjectsSection: React.FC = () => {
    const { t } = useTranslation('home');
    const projects = t('projects.featured', { returnObjects: true }) as Project[];

    return (
        <section className={styles.projectsSection}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>{t('projects.mainTitle')}</h2>
                </div>

                <div className={styles.grid}>
                    {Array.isArray(projects) && projects.map((project, index) => {
                        const imageUrl = getAssetUrl(project.imageUrl, 'projects');
                        const projectDetailUrl = `/projects/${project.slug}`;

                        return (
                        <div key={index} className={styles.card}>
                            <Link to={projectDetailUrl} aria-label={project.title}>
                                <div className={styles.imageContainer}>
                                    <img src={imageUrl} alt={project.title} className={styles.image} />
                                </div>
                            </Link>

                            <div className={styles.content}>
                                <h3 className={styles.cardTitle}>
                                    <Link to={projectDetailUrl}>{project.title}</Link>
                                </h3>
                                <div className={styles.tags}>
                                    {project.tags.map(tag => <span key={tag} className={styles.tag}>{tag}</span>)}
                                </div>
                                <p className={styles.description}>{project.description}</p>
                                <div className={styles.links}>
                                    <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository">
                                        <FaGithub size={24} />
                                    </a>
                                    {project.liveUrl && (
                                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
                                            <FaExternalLinkAlt size={24} />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                        );
                    })}
                </div>

                <div className={styles.seeAllContainer}>
                    <Link to="/projects" className={styles.seeAllButton}>
                        {t('projects.seeAllText')}
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;