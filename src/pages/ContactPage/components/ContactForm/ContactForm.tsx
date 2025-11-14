import React from 'react';
import { useTranslation } from 'react-i18next';
import { useForm, ValidationError } from '@formspree/react';
import styles from './ContactForm.module.css';

const ContactForm: React.FC = () => {
    const { t } = useTranslation('contact');

    const [state, handleSubmit] = useForm("xgvreenb");

    if (state.succeeded) {
        return <p className={styles.successMessage}>{t('form.successMessage', 'Mesajınız için teşekkürler!')}</p>;
    }

    const formErrors = state.errors?.getFormErrors();

    return (
        <form onSubmit={handleSubmit} className={styles.contactForm}>
            <div className={styles.formGroup}>
                <label htmlFor="name">{t('form.nameLabel', 'Adınız')}</label>
                <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder={t('form.namePlaceholder', 'Adınızı girin...')}
                    required
                    className={styles.input}
                />
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="email">{t('form.emailLabel', 'E-posta Adresiniz')}</label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder={t('form.emailPlaceholder', 'E-posta adresinizi girin...')}
                    required
                    className={styles.input}
                />

                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                    className={styles.validationError}
                />
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="message">{t('form.messageLabel', 'Mesajınız')}</label>
                <textarea
                    id="message"
                    name="message"
                    rows={6}
                    placeholder={t('form.messagePlaceholder', 'Mesajınızı buraya yazın...')}
                    required
                    className={styles.textarea}
                />
                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                    className={styles.validationError}
                />
            </div>

            <button type="submit" className={styles.submitButton} disabled={state.submitting}>
                {state.submitting ? t('form.submittingButton', 'Gönderiliyor...') : t('form.submitButton', 'Mesaj Gönder')}
            </button>

            {formErrors && formErrors.length > 0 && (
                <p className={styles.errorMessage}>{t('form.errorMessage', 'Bir hata oluştu, lütfen tekrar deneyin.')}</p>
            )}
        </form>
    );
};

export default ContactForm;