import React from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../../components/ui/Button/Button';
import styles from './NotFoundPage.module.css';

const NotFoundPage: React.FC = () => {
    const { t } = useTranslation('common');

    return (
        <section className={styles.notFoundPage}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h1 className={styles.title}>404</h1>
                    <h2 className={styles.subtitle}>
                        {t('notFound.title', { defaultValue: 'Sayfa Bulunamadı' })}
                    </h2>
                    <p className={styles.description}>
                        {t('notFound.description', {
                            defaultValue: 'Aradığınız sayfa mevcut değil veya taşınmış olabilir.'
                        })}
                    </p>
                    <div className={styles.actions}>
                        <Button to="/" variant="primary">
                            {t('notFound.backHome', { defaultValue: 'Ana Sayfaya Dön' })}
                        </Button>
                        <Button to="/projects" variant="secondary">
                            {t('notFound.viewProjects', { defaultValue: 'Projeleri Gör' })}
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NotFoundPage;

