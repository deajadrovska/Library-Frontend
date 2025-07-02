// src/hooks/useCategories.js
import { useState, useEffect } from "react";

// The book categories defined in your backend enum
const BOOK_CATEGORIES = [
    'NOVEL',
    'THRILLER',
    'HISTORY',
    'FANTASY',
    'BIOGRAPHY',
    'CLASSICS',
    'DRAMA'
];

const useCategories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        // Since categories are predefined in an enum, we can just return them directly
        setCategories(BOOK_CATEGORIES);
    }, []);

    return categories;
};

export default useCategories;