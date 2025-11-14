import React from 'react';
import styles from './SearchInput.module.css';
import { useTranslation } from 'react-i18next';

interface SearchInputProps {
    value: string;
    onSearch: (term: string) => void;
    placeholder?: string;
}

const SearchInput: React.FC<SearchInputProps> = ({ value, onSearch, placeholder }) => {
    const { t } = useTranslation('common');

    const inputPlaceholder = placeholder || t('searchPlaceholder');

    return (
        <input
            type="text"
            placeholder={inputPlaceholder}
            className={styles.searchInput}
            value={value}
            onChange={(e) => onSearch(e.target.value)}
        />
    );
};

export default SearchInput;