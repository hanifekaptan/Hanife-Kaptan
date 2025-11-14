import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import type { Post } from '../../../types';
import styles from '../BlogPage.module.css';

const PostCard: React.FC<{ post: Post }> = ({ post }) => {
    const { t } = useTranslation(['posts']);

    const title = t(`${post.id}.title`);
    const summary = t(`${post.id}.summary`);
    const readMoreText = t('readMoreText');

    return (
        <Link to={`/posts/${post.id}`} className={styles.postCard}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.summary}>{summary}</p>
            <span className={styles.readMore}>
                {readMoreText} →
            </span>
        </Link>
    );
};

export default PostCard;