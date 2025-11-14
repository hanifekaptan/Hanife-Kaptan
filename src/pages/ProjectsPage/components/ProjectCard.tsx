import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import type { Project } from '../../../types';
import styles from '../ProjectsPage.module.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { getAssetUrl } from '../../../utils/imageHelper';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { t } = useTranslation(['projects', 'common']);

  const title = t(`${project.id}.title`, { ns: 'projects' });
  const description = t(`${project.id}.shortDescription`, { ns: 'projects' });
  const imageFileName = t(`${project.id}.imageUrl`, { ns: 'projects' });
  const imageUrl = getAssetUrl(imageFileName, 'projects');

  return (
    <div className={styles.projectCard}>
        <Link to={`/projects/${project.id}`} aria-label={title}>
            <div className={styles.imageContainer}>
                <img 
                    src={imageUrl} 
                    alt={title}
                    className={styles.image} 
                />
            </div>
        </Link>
        
        <div className={styles.content}>
            <h3 className={styles.cardTitle}>
                <Link to={`/projects/${project.id}`}>{title}</Link>
            </h3>
            
            <div className={styles.tags}>
                {project.tags.map(tagKey => (
                  <span key={tagKey} className={styles.tag}>
                    {t(`tags.${tagKey}`, { ns: 'common', defaultValue: tagKey })}
                  </span>
                ))}
            </div>

            <p className={styles.description}>{description}</p>
            
            <div className={styles.links}>
                <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer" aria-label={t('githubLinkAriaLabel', { ns: 'common' })}>
                    <FaGithub size={22} />
                </a>
                {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={t('liveDemoLinkAriaLabel', { ns: 'common' })}>
                        <FaExternalLinkAlt size={22} />
                    </a>
                )}
            </div>
        </div>
    </div>
  );
};

export default ProjectCard;