import { useState, useMemo } from 'react';

export const useFilters = <T extends { [key: string]: any }>(
    initialItems: (T & { title: string })[],
    initialFilters: { [key: string]: string },
    initialSortBy: string
) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filters, setFilters] = useState(initialFilters);
    const [sortBy, setSortBy] = useState(initialSortBy);

    const filteredAndSortedItems = useMemo(() => {
        let items = initialItems
            .filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase()));

        Object.keys(filters).forEach(key => {
            if (filters[key] !== 'all') {
                items = items.filter(item => item[key] === filters[key]);
            }
        });

        const sortKey = sortBy.includes('date') ? 'date' : 'year';

        if (sortBy.endsWith('_desc')) {
            items.sort((a, b) => new Date(b[sortKey]).getTime() - new Date(a[sortKey]).getTime());
        }
        if (sortBy.endsWith('_asc')) {
            items.sort((a, b) => new Date(a[sortKey]).getTime() - new Date(b[sortKey]).getTime());
        }

        return items;
    }, [searchTerm, filters, sortBy, initialItems]);

    const updateFilter = (filterType: string, value: string) => {
        setFilters(prev => ({ ...prev, [filterType]: value }));
    };

    return { searchTerm, setSearchTerm, filters, updateFilter, sortBy, setSortBy, filteredAndSortedItems };
};