import React, { useState } from 'react';
import { Box, Button, Card, CardActions, CardContent, Typography, Chip } from "@mui/material";
import InfoIcon from '@mui/icons-material/Info';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import EditBookDialog from "./EditBookDialog.jsx";
import DeleteBookDialog from "./DeleteBookDialog.jsx";
import { useNavigate } from "react-router";

const BookCard = ({ book, onEdit, onDelete }) => {
    const navigate = useNavigate();
    const [editBookDialogOpen, setEditBookDialogOpen] = useState(false);
    const [deleteBookDialogOpen, setDeleteBookDialogOpen] = useState(false);

    return (
        <>
            <Card sx={{ boxShadow: 3, borderRadius: 2, p: 1, height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h5">{book.name}</Typography>
                    <Box sx={{ display: 'flex', gap: 1, my: 1 }}>
                        <Chip label={book.category} color="primary" size="small" />
                        <Chip label={`${book.availableCopies} copies`} color="secondary" size="small" />
                    </Box>
                    <Typography variant="body1">
                        By: {book.author?.name} {book.author?.surname}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        From: {book.author?.country?.name}
                    </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: "space-between" }}>
                    <Button
                        size="small"
                        color="info"
                        startIcon={<InfoIcon />}
                        onClick={() => navigate(`/books/${book.id}`)}
                    >
                        Details
                    </Button>
                    <Box>
                        <Button
                            size="small"
                            color="warning"
                            startIcon={<EditIcon />}
                            sx={{ mr: "0.25rem" }}
                            onClick={() => setEditBookDialogOpen(true)}
                        >
                            Edit
                        </Button>
                        <Button
                            size="small"
                            color="error"
                            startIcon={<DeleteIcon />}
                            onClick={() => setDeleteBookDialogOpen(true)}
                        >
                            Delete
                        </Button>
                    </Box>
                </CardActions>
            </Card>
            <EditBookDialog
                open={editBookDialogOpen}
                onClose={() => setEditBookDialogOpen(false)}
                book={book}
                onEdit={onEdit}
            />
            <DeleteBookDialog
                open={deleteBookDialogOpen}
                onClose={() => setDeleteBookDialogOpen(false)}
                book={book}
                onDelete={onDelete}
            />
        </>
    );
};

export default BookCard;