// src/ui/pages/CountriesPage.jsx
import React, { useState } from 'react';
import { Box, Button, CircularProgress, Typography } from "@mui/material";
import useCountries from "../../hooks/useCountries.js";
import "./CountriesPage.css";
import AddCountryDialog from "../components/countries/AddCountryDialog.jsx";
import CountriesGrid from "../components/countries/CountriesGrid.jsx";

const CountriesPage = () => {
    const { countries, loading, onAdd, onEdit, onDelete } = useCountries();
    const [addCountryDialogOpen, setAddCountryDialogOpen] = useState(false);

    return (
        <>
            <Box className="countries-box">
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                    <Typography variant="h4" component="h1">
                        Countries Registry
                    </Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => setAddCountryDialogOpen(true)}
                    >
                        Add Country
                    </Button>
                </Box>

                {loading && (
                    <Box className="progress-box">
                        <CircularProgress />
                    </Box>
                )}

                {!loading && (
                    <CountriesGrid
                        countries={countries}
                        onEdit={onEdit}
                        onDelete={onDelete}
                    />
                )}
            </Box>

            <AddCountryDialog
                open={addCountryDialogOpen}
                onClose={() => setAddCountryDialogOpen(false)}
                onAdd={onAdd}
            />
        </>
    );
};

export default CountriesPage;