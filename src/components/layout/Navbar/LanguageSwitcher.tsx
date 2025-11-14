import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { FaGlobe } from 'react-icons/fa';
import styles from './Navbar.module.css'; // Navbar'ın stilini paylaşabilir

const LanguageSwitcher: React.FC = () => {
    const { i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);


    const languages = [
        { code: 'tr', name: 'Türkçe' },
        { code: 'en', name: 'English' },
    ];

    const handleLanguageChange = (langCode: string) => {
        i18n.changeLanguage(langCode);
        setIsOpen(false); // Dil seçildikten sonra menüyü kapat
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className={styles.languageSwitcher} ref={dropdownRef}>
            <button className={styles.globeButton} onClick={() => setIsOpen(!isOpen)} aria-label="Change language">
                <FaGlobe size={20} />
            </button>

            {isOpen && (
                <div className={styles.dropdownMenu}>
                    {languages.map((lang) => (
                        <button
                            key={lang.code}
                            onClick={() => handleLanguageChange(lang.code)}
                            className={i18n.language === lang.code ? styles.activeLang : ''}
                        >
                            {lang.name}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default LanguageSwitcher;