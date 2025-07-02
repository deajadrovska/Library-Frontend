// src/ui/pages/BooksPage.jsx
import React, { useState } from 'react';
import { Box, Button, CircularProgress, Typography } from "@mui/material";
import useBooks from "../../hooks/useBooks.js";
import "./BooksPage.css";
import AddBookDialog from "../components/books/AddBookDialog.jsx";
import BooksGrid from "../components/books/BooksGrid.jsx";

const BooksPage = () => {
    const { books, loading, onAdd, onEdit, onDelete } = useBooks();
    const [addBookDialogOpen, setAddBookDialogOpen] = useState(false);

    return (
        <>
            <Box className="books-box">
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                    <Typography variant="h4" component="h1">
                        Books Collection
                    </Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => setAddBookDialogOpen(true)}
                    >
                        Add Book
                    </Button>
                </Box>

                {loading && (
                    <Box className="progress-box">
                        <CircularProgress />
                    </Box>
                )}

                {!loading && (
                    <BooksGrid
                        books={books}
                        onEdit={onEdit}
                        onDelete={onDelete}
                    />
                )}
            </Box>

            <AddBookDialog
                open={addBookDialogOpen}
                onClose={() => setAddBookDialogOpen(false)}
                onAdd={onAdd}
            />
        </>
    );
};

export default BooksPage;