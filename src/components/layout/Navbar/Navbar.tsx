import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import styles from './Navbar.module.css';
import { getAssetUrl } from '../../../utils/imageHelper';

const Navbar: React.FC = () => {
    const { t } = useTranslation('common');

    const logoSrc = getAssetUrl(t('navbar.logo'),'navbar' );
    console.log('Logo Source:', logoSrc);

    const getNavLinkClass = ({ isActive }: { isActive: boolean }): string => {
        return isActive ? `${styles.navLink} ${styles.active}` : styles.navLink;
    };

    return (
        <header className={styles.navbar}>
            <div className={styles.container}>
                <Link to="/" className={styles.logo}>
                    {logoSrc && <img src={logoSrc} alt="Logo" className={styles.logoImage} />}
                    
                    </Link>

                <div className={styles.navRight}>
                    <nav className={styles.navLinks}>
                        <NavLink to="/" className={getNavLinkClass} end>
                            {t('navbar.home')}
                        </NavLink>
                        <NavLink to="/projects" className={getNavLinkClass}>
                            {t('navbar.projects')}
                        </NavLink>
                        <NavLink to="/posts" className={getNavLinkClass}>
                            {t('navbar.blog')}
                        </NavLink>
                        <NavLink to="/contact" className={getNavLinkClass}>
                            {t('navbar.contact')}
                        </NavLink>
                    </nav>
                    <LanguageSwitcher />
                </div>

            </div>
        </header>
    );
};

export default Navbar;