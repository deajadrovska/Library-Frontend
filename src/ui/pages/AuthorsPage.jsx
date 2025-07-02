// src/ui/pages/AuthorsPage.jsx
import React, { useState } from 'react';
import { Box, Button, CircularProgress, Typography } from "@mui/material";
import useAuthors from "../../hooks/useAuthors.js";
import "./AuthorsPage.css";
import AddAuthorDialog from "../components/authors/AddAuthorDialog.jsx";
import AuthorsGrid from "../components/authors/AuthorsGrid.jsx";

const AuthorsPage = () => {
    const { authors, loading, onAdd, onEdit, onDelete } = useAuthors();
    const [addAuthorDialogOpen, setAddAuthorDialogOpen] = useState(false);

    return (
        <>
            <Box className="authors-box">
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                    <Typography variant="h4" component="h1">
                        Authors Directory
                    </Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => setAddAuthorDialogOpen(true)}
                    >
                        Add Author
                    </Button>
                </Box>

                {loading && (
                    <Box className="progress-box">
                        <CircularProgress />
                    </Box>
                )}

                {!loading && (
                    <AuthorsGrid
                        authors={authors}
                        onEdit={onEdit}
                        onDelete={onDelete}
                    />
                )}
            </Box>

            <AddAuthorDialog
                open={addAuthorDialogOpen}
                onClose={() => setAddAuthorDialogOpen(false)}
                onAdd={onAdd}
            />
        </>
    );
};

export default AuthorsPage;