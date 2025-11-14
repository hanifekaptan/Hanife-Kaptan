import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './ContactPage.module.css';
import ContactForm from './components/ContactForm/ContactForm';

const ContactPage: React.FC = () => {
    const { t } = useTranslation('contact');

    return (
        <section className={styles.contactPage}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h1>{t('mainTitle')}</h1>
                    <p>{t('mainSubtitle')}</p>
                </div>
                <div className={styles.formContainer}>
                    <ContactForm />
                </div>
            </div>
        </section>
    );
};

export default ContactPage;