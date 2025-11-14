import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './FilterButton.module.css';
import { FaFilter } from 'react-icons/fa';

interface FilterButtonProps {
    panelContent: React.ReactNode;
}

const FilterButton: React.FC<FilterButtonProps> = ({ panelContent }) => {

    const { t } = useTranslation('common');
    const [isPanelOpen, setIsPanelOpen] = useState(false);
    const filterRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (filterRef.current && !filterRef.current.contains(event.target as Node)) {
                setIsPanelOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className={styles.filterContainer} ref={filterRef}>
            <button className={styles.filterButton} onClick={() => setIsPanelOpen(!isPanelOpen)}>
                <FaFilter />
                <span>{t('filterButtonText')}</span>
            </button>
            {isPanelOpen && (
                <div className={styles.filterPanel}>
                    {panelContent}
                </div>
            )}
        </div>
    );
};

export default FilterButton;