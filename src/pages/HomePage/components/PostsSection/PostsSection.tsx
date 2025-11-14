import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import styles from './PostsSection.module.css';

interface Post {
    slug: string;
    title: string;
    summary: string;
    link: string;
}

const PostsSection: React.FC = () => {
    const { t } = useTranslation('home');
    const posts = t('posts.selected', { returnObjects: true }) as Post[];

    return (
        <section className={styles.postsSection}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>{t('posts.mainTitle')}</h2>
                </div>

                <div className={styles.postList}>
                    {Array.isArray(posts) && posts.map((post) => (
                        <Link to={post.link} key={post.slug} className={styles.postCard}>
                            <h3 className={styles.postTitle}>{post.title}</h3>
                            <p className={styles.postSummary}>{post.summary}</p>
                            <span className={styles.readMore}>
                                {t('posts.readMoreText')}
                            </span>
                        </Link>
                    ))}
                </div>
                
                <div className={styles.seeAllContainer}>
                    <Link to="/posts" className={styles.seeAllButton}>
                        {t('posts.seeAllText')}
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default PostsSection;