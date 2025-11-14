import React from 'react';
import styles from './Grid.module.css';

// Grid'e gelen her öğenin bir 'id'sinin olmasını zorunlu kılmak
// key ataması için en iyi yöntemdir.
interface GridProps<T extends { id: string }> {
    items: T[];
    renderItem: (item: T) => React.ReactNode;
    noResultsMessage?: string;
}

const Grid = <T extends { id: string }>({
    items,
    renderItem,
    noResultsMessage = "Sonuç bulunamadı."
}: GridProps<T>) => {
    return (
        <div className={styles.grid}>
            {items.length > 0 ? (
                items.map(item => (
                    // React.Fragment'a key vermek yerine doğrudan render edilen elemana key vermek daha yaygındır,
                    // ancak renderItem bir component döndürdüğü için bu yapı da doğrudur.
                    <React.Fragment key={item.id}>
                        {renderItem(item)}
                    </React.Fragment>
                ))
            ) : (
                <p className={styles.noResults}>{noResultsMessage}</p>
            )}
        </div>
    );
};

export default Grid;