// src/hooks/useCountries.js
import { useCallback, useEffect, useState } from "react";
import countryRepository from "../repository/countryRepository.js";

const initialState = {
    "countries": [],
    "loading": true,
};

const useCountries = () => {
    const [state, setState] = useState(initialState);

    const fetchCountries = useCallback(() => {
        countryRepository
            .findAll()
            .then((response) => {
                setState({
                    "countries": response.data,
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
            continent: data.continent
        };

        console.log("Transformed data for API:", JSON.stringify(transformedData, null, 2));

        countryRepository
            .add(transformedData)
            .then(() => {
                console.log("Successfully added a new country.");
                fetchCountries();
            })
            .catch((error) => console.log(error));
    }, [fetchCountries]);

    const onEdit = useCallback((id, data) => {
        console.log("Original edit form data:", JSON.stringify(data, null, 2));

        // Transform the data to match the expected backend structure if needed
        const transformedData = {
            name: data.name,
            continent: data.continent
        };

        console.log("Transformed edit data for API:", JSON.stringify(transformedData, null, 2));

        countryRepository
            .edit(id, transformedData)
            .then(() => {
                console.log(`Successfully edited the country with ID ${id}.`);
                fetchCountries();
            })
            .catch((error) => console.log(error));
    }, [fetchCountries]);

    const onDelete = useCallback((id) => {
        countryRepository
            .delete(id)
            .then(() => {
                console.log(`Successfully deleted the country with ID ${id}.`);
                fetchCountries();
            })
            .catch((error) => console.log(error));
    }, [fetchCountries]);

    useEffect(() => {
        fetchCountries();
    }, [fetchCountries]);

    return { ...state, onAdd, onEdit, onDelete };
};

export default useCountries;