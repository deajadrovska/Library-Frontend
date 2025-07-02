import React from 'react';
import { Grid } from "@mui/material";
import CountryCard from "./CountryCard.jsx";

const CountriesGrid = ({ countries, onEdit, onDelete }) => {
    return (
        <Grid container spacing={{ xs: 2, md: 3 }}>
            {countries.map((country) => (
                <Grid item key={country.id} xs={12} sm={6} md={4} lg={3}>
                    <CountryCard country={country} onEdit={onEdit} onDelete={onDelete} />
                </Grid>
            ))}
        </Grid>
    );
};

export default CountriesGrid;