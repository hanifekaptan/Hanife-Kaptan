import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './ProjectsPage.module.css';

import { PROJECTS_DATA } from '../../data/projects.data';
import type { Project } from '../../types';

import { useFilters } from '../../hooks/useFilters';
import Grid from '../../components/layout/Grid/Grid';
import ProjectCard from './components/ProjectCard';
import SearchInput from '../../components/ui/SearchInput/SearchInput';
import FilterButton from '../../components/ui/FilterButton/FilterButton';

const ProjectsPage: React.FC = () => {
    const { t, i18n } = useTranslation(['projects', 'common']);

    const searchableProjects = useMemo(() => {
        return PROJECTS_DATA.map(project => ({
            ...project,
            title: t(`${project.id}.title`, { ns: 'projects' })
        }));
    }, [i18n.language]);

    const {
        searchTerm,
        setSearchTerm,
        filters,
        updateFilter,
        sortBy,
        setSortBy,
        filteredAndSortedItems
    } = useFilters(
        searchableProjects,
        { category: 'all', topic: 'all' },
        'year_desc'
    );

    const filterPanelContent = (
        <>
            <div className={styles.filterGroup}>
                <h4>{t('categories.title', { ns: 'common', defaultValue: 'Kategori' })}</h4>
                <select value={filters.category} onChange={(e) => updateFilter('category', e.target.value)}>
                    <option value="all">{t('categories.all', { ns: 'common' })}</option>
                    <option value="ai">{t('categories.ai', { ns: 'common' })}</option>
                    <option value="full-stack">{t('categories.full-stack', { ns: 'common' })}</option>
                </select>
            </div>
            <hr className={styles.separator} />
            <div className={styles.filterGroup}>
                <h4>{t('sortBy.title', { ns: 'common', defaultValue: 'Sırala' })}</h4>
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                    <option value="year_desc">{t('sortBy.newest', { ns: 'common', defaultValue: 'En Yeni' })}</option>
                    <option value="year_asc">{t('sortBy.oldest', { ns: 'common', defaultValue: 'En Eski' })}</option>
                </select>
            </div>
        </>
    );

    return (
        <section className={styles.projectsPage}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h1>{t('mainTitle', { ns: 'projects' })}</h1>
                    <p>{t('mainSubtitle', { ns: 'projects' })}</p>
                </div>

                <div className={styles.controls}>
                    <SearchInput
                        value={searchTerm}
                        onSearch={setSearchTerm}
                        placeholder={t('searchPlaceholder', { ns: 'common' })}
                    />
                    <FilterButton panelContent={filterPanelContent} />
                </div>

                <Grid
                    items={filteredAndSortedItems}
                    renderItem={(project: Project) => <ProjectCard project={project} />}
                    noResultsMessage={t('noProjectsFound', { ns: 'projects' })}
                />
            </div>
        </section>
    );
};

export default ProjectsPage;