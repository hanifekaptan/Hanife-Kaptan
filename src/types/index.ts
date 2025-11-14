export interface Project {
    id: string;
    category: 'ai' | 'frontend' | 'full-stack' | 'desktop';
    tags: string[];
    year: number;
    sourceUrl: string;
    liveUrl?: string;
    difficulty?: string;
    rating?: number;
}
export interface Post {
    id: string;
    category: string;
    date: string;
}