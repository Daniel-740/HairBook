
export interface FilterHomeProps {
    categories: string[];
    selectedCategory: string | null;
    setSelectedCategory: (category: string | null) => void;
}