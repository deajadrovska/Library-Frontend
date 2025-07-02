import React, { useState } from 'react';
import { Box, Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import InfoIcon from '@mui/icons-material/Info';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import PublicIcon from '@mui/icons-material/Public';
import EditCountryDialog from "./EditCountryDialog.jsx";
import DeleteCountryDialog from "./DeleteCountryDialog.jsx";
import { useNavigate } from "react-router";

const CountryCard = ({ country, onEdit, onDelete }) => {
    const navigate = useNavigate();
    const [editCountryDialogOpen, setEditCountryDialogOpen] = useState(false);
    const [deleteCountryDialogOpen, setDeleteCountryDialogOpen] = useState(false);

    // Get a color for the country card based on continent
    const getColorByContinent = (continent) => {
        const colors = {
            'Europe': 'primary.main',
            'Asia': 'secondary.main',
            'Africa': 'warning.main',
            'North America': 'success.main',
            'South America': 'info.main',
            'Australia': 'error.main',
            'Antarctica': 'grey.500'
        };
        return colors[continent] || 'primary.main';
    };

    return (
        <>
            <Card
                sx={{
                    boxShadow: 3,
                    borderRadius: 2,
                    p: 1,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    borderTop: 3,
                    borderColor: getColorByContinent(country.continent)
                }}
            >
                <CardContent sx={{ flexGrow: 1 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <PublicIcon
                            sx={{
                                mr: 1,
                                color: getColorByContinent(country.continent)
                            }}
                        />
                        <Typography variant="h5">
                            {country.name}
                        </Typography>
                    </Box>
                    <Typography variant="body1">
                        Continent: {country.continent}
                    </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: "space-between" }}>
                    <Button
                        size="small"
                        color="info"
                        startIcon={<InfoIcon />}
                        onClick={() => navigate(`/countries/${country.id}`)}
                    >
                        Details
                    </Button>
                    <Box>
                        <Button
                            size="small"
                            color="warning"
                            startIcon={<EditIcon />}
                            sx={{ mr: "0.25rem" }}
                            onClick={() => setEditCountryDialogOpen(true)}
                        >
                            Edit
                        </Button>
                        <Button
                            size="small"
                            color="error"
                            startIcon={<DeleteIcon />}
                            onClick={() => setDeleteCountryDialogOpen(true)}
                        >
                            Delete
                        </Button>
                    </Box>
                </CardActions>
            </Card>
            <EditCountryDialog
                open={editCountryDialogOpen}
                onClose={() => setEditCountryDialogOpen(false)}
                country={country}
                onEdit={onEdit}
            />
            <DeleteCountryDialog
                open={deleteCountryDialogOpen}
                onClose={() => setDeleteCountryDialogOpen(false)}
                country={country}
                onDelete={onDelete}
            />
        </>
    );
};

export default CountryCard;