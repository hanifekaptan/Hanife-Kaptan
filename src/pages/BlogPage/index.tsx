import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './BlogPage.module.css';
import { useFilters } from '../../hooks/useFilters';
import { POSTS_DATA } from '../../data/posts.data';
import type { Post } from '../../types';

import SearchInput from '../../components/ui/SearchInput/SearchInput';
import FilterButton from '../../components/ui/FilterButton/FilterButton';
import PostCard from './components/PostCard';

const BlogPage: React.FC = () => {
    const { t, i18n } = useTranslation(['posts', 'common']);

    const searchablePosts = useMemo(() => {
        return POSTS_DATA.map(post => ({
            ...post,
            title: t(`${post.id}.title`, { ns: 'posts' })
        }));
    }, [i18n.language]);

    const {
        searchTerm,
        setSearchTerm,
        filters,
        updateFilter,
        sortBy,
        setSortBy,
        filteredAndSortedItems: filteredPosts,
    } = useFilters(
        searchablePosts,
        { category: 'all' },
        'date_desc'
    );

    const filterPanelContent = (
        <>
            <div className={styles.filterGroup}>
                <h4 className={styles.filterTitle}>{t('filterByCategoryTitle', { ns: 'posts' })}</h4>
                <select value={filters.category} onChange={(e) => updateFilter('category', e.target.value)}>
                    <option value="all">{t('categories.all', { ns: 'common' })}</option>
                    <option value="ai">{t('categories.ai', { ns: 'common' })}</option>
                    <option value="web-development">{t('categories.web-development', { ns: 'common' })}</option>
                </select>
            </div>
            <hr className={styles.separator} />
            <div className={styles.filterGroup}>
                <h4 className={styles.filterTitle}>{t('filterBySortTitle', { ns: 'posts' })}</h4>
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                    <option value="date_desc">{t('sortNewest', { ns: 'posts' })}</option>
                    <option value="date_asc">{t('sortOldest', { ns: 'posts' })}</option>
                </select>
            </div>
        </>
    );

    return (
        <section className={styles.blogPage}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h1>{t('mainTitle', { ns: 'posts' })}</h1>
                    <p>{t('mainSubtitle', { ns: 'posts' })}</p>
                </div>

                <div className={styles.controls}>
                    <SearchInput
                        value={searchTerm}
                        onSearch={setSearchTerm}
                        placeholder={t('searchPlaceholder', { ns: 'posts' })}
                    />
                    <FilterButton panelContent={filterPanelContent} />
                </div>

                <div className={styles.postList}>
                    {filteredPosts.length > 0 ? (
                        filteredPosts.map((post: Post) => (
                            <PostCard key={post.id} post={post} />
                        ))
                    ) : (
                        <p className={styles.noResults}>
                            {t('noPostsFound', { ns: 'posts' })}
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default BlogPage;