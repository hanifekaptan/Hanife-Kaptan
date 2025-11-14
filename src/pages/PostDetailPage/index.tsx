import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { POSTS_DATA } from '../../data/posts.data';
import type { Post } from '../../types';
import Button from '../../components/ui/Button/Button';
import { FaArrowLeft, FaCalendarAlt, FaTag } from 'react-icons/fa';
import styles from './PostDetailPage.module.css';
import NotFoundPage from '../NotFoundPage';

const PostDetailPage: React.FC = () => {
    const { postId } = useParams<{ postId: string }>();
    const { t, i18n } = useTranslation(['posts', 'common']);
    const navigate = useNavigate();

    const post = POSTS_DATA.find((p: Post) => p.id === postId);

    if (!post) {
        return <NotFoundPage />;
    }

    const title = t(`${post.id}.title`, { ns: 'posts' });
    const content = t(`${post.id}.content`, { ns: 'posts' });
    const summary = t(`${post.id}.summary`, { ns: 'posts' });
    const category = t(`categories.${post.category}`, { ns: 'common', defaultValue: post.category });

    const formattedDate = new Date(post.date).toLocaleDateString(i18n.language === 'tr' ? 'tr-TR' : 'en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <section className={styles.postDetailPage}>
            <div className={styles.container}>
                <Button
                    variant="outline"
                    size="small"
                    onClick={() => navigate(-1)}
                    className={styles.backButton}
                >
                    <FaArrowLeft /> {t('common:back', { defaultValue: 'Geri' })}
                </Button>

                <article className={styles.article}>
                    <header className={styles.header}>
                        <div className={styles.meta}>
                            <span className={styles.category}>
                                <FaTag /> {category}
                            </span>
                            <span className={styles.date}>
                                <FaCalendarAlt /> {formattedDate}
                            </span>
                        </div>
                        <h1 className={styles.title}>{title}</h1>
                        {summary && <p className={styles.summary}>{summary}</p>}
                    </header>

                    <div className={styles.content}>
                        {typeof content === 'string' ? (
                            <div
                                className={styles.contentText}
                                dangerouslySetInnerHTML={{ __html: content }}
                            />
                        ) : (
                            <div className={styles.contentText}>
                                {content}
                            </div>
                        )}
                    </div>

                    <footer className={styles.footer}>
                        <div className={styles.tags}>
                            <span className={styles.tagLabel}>
                                {t('common:tags', { defaultValue: 'Etiketler' })}:
                            </span>
                            <span className={styles.tag}>{category}</span>
                        </div>
                        <Button
                            to="/blog"
                            variant="secondary"
                        >
                            {t('common:backToBlog', { defaultValue: 'Tüm Yazılara Dön' })}
                        </Button>
                    </footer>
                </article>
            </div>
        </section>
    );
};

export default PostDetailPage;

