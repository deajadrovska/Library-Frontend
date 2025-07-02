// src/hooks/useAuthors.js
import { useCallback, useEffect, useState } from "react";
import authorRepository from "../repository/authorRepository.js";

const initialState = {
    "authors": [],
    "loading": true,
};

const useAuthors = () => {
    const [state, setState] = useState(initialState);

    const fetchAuthors = useCallback(() => {
        authorRepository
            .findAll()
            .then((response) => {
                setState({
                    "authors": response.data,
                    "loading": false,
                });
            })
            .catch((error) => console.log(error));
    }, []);

    const onAdd = useCallback((data) => {
        console.log("Original form data:", JSON.stringify(data, null, 2));

        // Transform the data to match the expected backend structure if needed
        const transformedData = {
            name: data.name,
            surname: data.surname,
            countryId: data.countryId
        };

        console.log("Transformed data for API:", JSON.stringify(transformedData, null, 2));

        authorRepository
            .add(transformedData)
            .then(() => {
                console.log("Successfully added a new author.");
                fetchAuthors();
            })
            .catch((error) => console.log(error));
    }, [fetchAuthors]);

    const onEdit = useCallback((id, data) => {
        console.log("Original edit form data:", JSON.stringify(data, null, 2));

        // Transform the data to match the expected backend structure if needed
        const transformedData = {
            name: data.name,
            surname: data.surname,
            countryId: data.countryId
        };

        console.log("Transformed edit data for API:", JSON.stringify(transformedData, null, 2));

        authorRepository
            .edit(id, transformedData)
            .then(() => {
                console.log(`Successfully edited the author with ID ${id}.`);
                fetchAuthors();
            })
            .catch((error) => console.log(error));
    }, [fetchAuthors]);

    const onDelete = useCallback((id) => {
        authorRepository
            .delete(id)
            .then(() => {
                console.log(`Successfully deleted the author with ID ${id}.`);
                fetchAuthors();
            })
            .catch((error) => console.log(error));
    }, [fetchAuthors]);

    useEffect(() => {
        fetchAuthors();
    }, [fetchAuthors]);

    return { ...state, onAdd, onEdit, onDelete };
};

export default useAuthors;