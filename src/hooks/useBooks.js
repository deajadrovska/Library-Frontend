// src/hooks/useBooks.js
import { useCallback, useEffect, useState } from "react";
import bookRepository from "../repository/bookRepository.js";

const initialState = {
    "books": [],
    "loading": true,
};

const useBooks = () => {
    const [state, setState] = useState(initialState);

    const fetchBooks = useCallback(() => {
        bookRepository
            .findAll()
            .then((response) => {
                setState({
                    "books": response.data,
                    "loading": false,
                });
            })
            .catch((error) => console.log(error));
    }, []);

    const onAdd = useCallback((data) => {
        console.log("Original form data:", JSON.stringify(data, null, 2));

        // Make sure data matches CreateBookDto requirements
        const bookData = {
            name: data.name,
            category: data.category,
            authorId: data.authorId,
            availableCopies: parseInt(data.availableCopies)
        };

        console.log("Transformed data for API:", JSON.stringify(bookData, null, 2));

        bookRepository
            .add(bookData)
            .then(() => {
                console.log("Successfully added a new book.");
                fetchBooks();
            })
            .catch((error) => console.log(error));
    }, [fetchBooks]);

    const onEdit = useCallback((id, data) => {
        console.log("Original edit form data:", JSON.stringify(data, null, 2));

        // Transform the data to match the expected backend structure if needed
        const transformedData = {
            name: data.name,
            category: data.category,
            authorId: data.authorId,
            availableCopies: parseInt(data.availableCopies)
        };

        console.log("Transformed edit data for API:", JSON.stringify(transformedData, null, 2));

        bookRepository
            .edit(id, transformedData)
            .then(() => {
                console.log(`Successfully edited the book with ID ${id}.`);
                fetchBooks();
            })
            .catch((error) => console.log(error));
    }, [fetchBooks]);

    const onDelete = useCallback((id) => {
        bookRepository
            .delete(id)
            .then(() => {
                console.log(`Successfully deleted the book with ID ${id}.`);
                fetchBooks();
            })
            .catch((error) => {
                console.log("Error deleting book:", error);
                // More detailed error logging
                if (error.response) {
                    console.log("Response data:", error.response.data);
                    console.log("Response status:", error.response.status);
                    console.log("Response headers:", error.response.headers);
                }
            });
    }, [fetchBooks]);

    useEffect(() => {
        fetchBooks();
    }, [fetchBooks]);

    return { ...state, onAdd, onEdit, onDelete };
};

export default useBooks;