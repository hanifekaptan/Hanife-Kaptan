import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { PROJECTS_DATA } from '../../data/projects.data';
import type { Project } from '../../types';
import Button from '../../components/ui/Button/Button';
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from 'react-icons/fa';
import styles from './ProjectDetailPage.module.css';
import NotFoundPage from '../NotFoundPage';
import { getAssetUrl } from '../../utils/imageHelper';

const ProjectDetailPage: React.FC = () => {
    const { projectId } = useParams<{ projectId: string }>();
    const { t, i18n } = useTranslation(['projects', 'common']);
    const navigate = useNavigate();

    const project = PROJECTS_DATA.find((p: Project) => p.id === projectId);

    if (!project) {
        return <NotFoundPage />;
    }

    const title = t(`${project.id}.title`, { ns: 'projects' });
    const description = t(`${project.id}.description`, { ns: 'projects' });
    const shortDescription = t(`${project.id}.shortDescription`, { ns: 'projects' });
    const technologies = t(`${project.id}.technologies`, { ns: 'projects', returnObjects: true }) as string[];
    const features = t(`${project.id}.features`, { ns: 'projects', returnObjects: true }) as string[];
    const challenges = t(`${project.id}.challenges`, { ns: 'projects', returnObjects: true }) as string[];
    const lessons = t(`${project.id}.lessons`, { ns: 'projects', returnObjects: true }) as string[];

    const imageFileName = t(`${project.id}.imageUrl`, { ns: 'projects' });
    const imageUrl = getAssetUrl(imageFileName, 'projects');
    const category = t(`categories.${project.category}`, { ns: 'common', defaultValue: project.category });

    return (
        <section className={styles.projectDetailPage}>
            <div className={styles.container}>
                <Button
                    variant="outline"
                    size="small"
                    onClick={() => navigate(-1)}
                    className={styles.backButton}
                >
                    <FaArrowLeft /> {t('common:back', { defaultValue: 'Geri' })}
                </Button>

                <div className={styles.header}>
                    <div className={styles.imageContainer}>
                        <img src={imageUrl} alt={title} className={styles.image} />
                    </div>
                    <div className={styles.headerContent}>
                        <div className={styles.meta}>
                            <span className={styles.category}>{category}</span>
                            <span className={styles.year}>{project.year}</span>
                        </div>
                        <h1 className={styles.title}>{title}</h1>
                        <p className={styles.shortDescription}>{shortDescription}</p>
                        <div className={styles.actions}>
                            {project.liveUrl && (
                                <Button
                                    href={project.liveUrl}
                                    variant="primary"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaExternalLinkAlt /> {t('common:viewLive', { defaultValue: 'Canlı Görüntüle' })}
                                </Button>
                            )}
                            {project.sourceUrl && (
                                <Button
                                    href={project.sourceUrl}
                                    variant="secondary"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaGithub /> {t('common:viewSource', { defaultValue: 'Kaynak Kodu' })}
                                </Button>
                            )}
                        </div>
                    </div>
                </div>

                <div className={styles.content}>
                    <div className={styles.mainContent}>
                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>
                                {t('common:description', { defaultValue: 'Açıklama' })}
                            </h2>
                            <p className={styles.description}>{description}</p>
                        </section>

                        {technologies && technologies.length > 0 && (
                            <section className={styles.section}>
                                <h2 className={styles.sectionTitle}>
                                    {t('common:technologies', { defaultValue: 'Kullanılan Teknolojiler' })}
                                </h2>
                                <div className={styles.tags}>
                                    {technologies.map((tech, index) => (
                                        <span key={index} className={styles.tag}>
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </section>
                        )}

                        {features && features.length > 0 && (
                            <section className={styles.section}>
                                <h2 className={styles.sectionTitle}>
                                    {t('common:features', { defaultValue: 'Özellikler' })}
                                </h2>
                                <ul className={styles.list}>
                                    {features.map((feature, index) => (
                                        <li key={index}>{feature}</li>
                                    ))}
                                </ul>
                            </section>
                        )}

                        {challenges && challenges.length > 0 && (
                            <section className={styles.section}>
                                <h2 className={styles.sectionTitle}>
                                    {t('common:challenges', { defaultValue: 'Karşılaşılan Zorluklar' })}
                                </h2>
                                <ul className={styles.list}>
                                    {challenges.map((challenge, index) => (
                                        <li key={index}>{challenge}</li>
                                    ))}
                                </ul>
                            </section>
                        )}

                        {lessons && lessons.length > 0 && (
                            <section className={styles.section}>
                                <h2 className={styles.sectionTitle}>
                                    {t('common:lessons', { defaultValue: 'Öğrenilen Dersler' })}
                                </h2>
                                <ul className={styles.list}>
                                    {lessons.map((lesson, index) => (
                                        <li key={index}>{lesson}</li>
                                    ))}
                                </ul>
                            </section>
                        )}
                    </div>

                    <aside className={styles.sidebar}>
                        <div className={styles.sidebarCard}>
                            <h3 className={styles.sidebarTitle}>
                                {t('common:projectInfo', { defaultValue: 'Proje Bilgileri' })}
                            </h3>
                            <div className={styles.infoItem}>
                                <span className={styles.infoLabel}>
                                    {t('common:category', { defaultValue: 'Kategori' })}
                                </span>
                                <span className={styles.infoValue}>{category}</span>
                            </div>
                            <div className={styles.infoItem}>
                                <span className={styles.infoLabel}>
                                    {t('common:year', { defaultValue: 'Yıl' })}
                                </span>
                                <span className={styles.infoValue}>{project.year}</span>
                            </div>
                            {project.difficulty && (
                                <div className={styles.infoItem}>
                                    <span className={styles.infoLabel}>
                                        {t('common:difficulty', { defaultValue: 'Zorluk' })}
                                    </span>
                                    <span className={styles.infoValue}>
                                        {t(`common:difficultyLevels.${project.difficulty}`, { defaultValue: project.difficulty })}
                                    </span>
                                </div>
                            )}
                            {project.rating && (
                                <div className={styles.infoItem}>
                                    <span className={styles.infoLabel}>
                                        {t('common:rating', { defaultValue: 'Değerlendirme' })}
                                    </span>
                                    <span className={styles.infoValue}>
                                        {'⭐'.repeat(project.rating)}
                                    </span>
                                </div>
                            )}
                        </div>
                    </aside>
                </div>
            </div>
        </section>
    );
};

export default ProjectDetailPage;

