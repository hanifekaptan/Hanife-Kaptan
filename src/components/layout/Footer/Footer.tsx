import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Footer.module.css';

// Sosyal medya ikonları için react-icons gibi bir kütüphane kullanabilirsiniz.
// npm install react-icons
// import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {
    const { t } = useTranslation('common');
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.socialLinks}>
                <a
                    href="https://github.com/hanifekaptan"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                >
                    {/* <FaGithub size={24} /> */}
                    GitHub
                </a>
                <a
                    href="https://linkedin.com/in/hanifekaptan"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                >
                    {/* <FaLinkedin size={24} /> */}
                    LinkedIn
                </a>
            </div>
            <p className={styles.copyright}>
                {/* i18next ile dinamik veri (yıl) gönderme örneği */}
                {t('footer.copyright', { year: currentYear })}
            </p>
        </footer>
    );
};

export default Footer;