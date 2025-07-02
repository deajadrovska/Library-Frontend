import React, { useState } from 'react';
import { Box, Button, Card, CardActions, CardContent, Typography, Avatar } from "@mui/material";
import InfoIcon from '@mui/icons-material/Info';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import PersonIcon from '@mui/icons-material/Person';
import EditAuthorDialog from "./EditAuthorDialog.jsx";
import DeleteAuthorDialog from "./DeleteAuthorDialog.jsx";
import { useNavigate } from "react-router";

const AuthorCard = ({ author, onEdit, onDelete }) => {
    const navigate = useNavigate();
    const [editAuthorDialogOpen, setEditAuthorDialogOpen] = useState(false);
    const [deleteAuthorDialogOpen, setDeleteAuthorDialogOpen] = useState(false);

    return (
        <>
            <Card sx={{ boxShadow: 3, borderRadius: 2, p: 1, height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flexGrow: 1 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <Avatar sx={{ bgcolor: 'primary.main', mr: 1 }}>
                            <PersonIcon />
                        </Avatar>
                        <Typography variant="h5">
                            {author.name} {author.surname}
                        </Typography>
                    </Box>
                    <Typography variant="body1">
                        From: {author.country?.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Continent: {author.country?.continent}
                    </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: "space-between" }}>
                    <Button
                        size="small"
                        color="info"
                        startIcon={<InfoIcon />}
                        onClick={() => navigate(`/authors/${author.id}`)}
                    >
                        Details
                    </Button>
                    <Box>
                        <Button
                            size="small"
                            color="warning"
                            startIcon={<EditIcon />}
                            sx={{ mr: "0.25rem" }}
                            onClick={() => setEditAuthorDialogOpen(true)}
                        >
                            Edit
                        </Button>
                        <Button
                            size="small"
                            color="error"
                            startIcon={<DeleteIcon />}
                            onClick={() => setDeleteAuthorDialogOpen(true)}
                        >
                            Delete
                        </Button>
                    </Box>
                </CardActions>
            </Card>
            <EditAuthorDialog
                open={editAuthorDialogOpen}
                onClose={() => setEditAuthorDialogOpen(false)}
                author={author}
                onEdit={onEdit}
            />
            <DeleteAuthorDialog
                open={deleteAuthorDialogOpen}
                onClose={() => setDeleteAuthorDialogOpen(false)}
                author={author}
                onDelete={onDelete}
            />
        </>
    );
};

export default AuthorCard;