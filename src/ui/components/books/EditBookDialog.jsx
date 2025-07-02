// src/ui/components/books/EditBookDialog.jsx
import React, { useState, useEffect } from 'react';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormControl,
    FormHelperText,
    InputLabel,
    MenuItem,
    Select,
    TextField
} from "@mui/material";
import useAuthors from "../../../hooks/useAuthors.js";
import useCategories from "../../../hooks/useCategories.js";

const EditBookDialog = ({ open, onClose, book, onEdit }) => {
    const [formData, setFormData] = useState({
        name: "",
        category: "",
        authorId: "",
        availableCopies: ""
    });

    // Add validation state
    const [errors, setErrors] = useState({
        name: false,
        availableCopies: false
    });

    // Add error messages
    const [errorMessages, setErrorMessages] = useState({
        name: "",
        availableCopies: ""
    });

    const { authors } = useAuthors();
    const categories = useCategories();

    useEffect(() => {
        if (book) {
            setFormData({
                name: book.name || "",
                category: book.category || "",
                authorId: book.author?.id || "",
                availableCopies: book.availableCopies || ""
            });
            // Reset errors when book changes
            setErrors({
                name: false,
                availableCopies: false
            });
            setErrorMessages({
                name: "",
                availableCopies: ""
            });
        }
    }, [book]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });

        // Clear error when field is changed
        setErrors({
            ...errors,
            [name]: false
        });
        setErrorMessages({
            ...errorMessages,
            [name]: ""
        });
    };

    const validateForm = () => {
        let valid = true;
        const newErrors = { ...errors };
        const newErrorMessages = { ...errorMessages };

        // Validate name
        if (!formData.name.trim()) {
            newErrors.name = true;
            newErrorMessages.name = "Book title is required";
            valid = false;
        }

        // Validate available copies
        if (formData.availableCopies === "" || isNaN(formData.availableCopies) || parseInt(formData.availableCopies) < 0) {
            newErrors.availableCopies = true;
            newErrorMessages.availableCopies = "Please enter a valid number of copies (0 or more)";
            valid = false;
        }

        setErrors(newErrors);
        setErrorMessages(newErrorMessages);
        return valid;
    };

    const handleSubmit = () => {
        // Validate form before submission
        if (validateForm()) {
            console.log("About to submit edited form data:", JSON.stringify(formData, null, 2));
            onEdit(book.id, formData);
            onClose();
        }
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Edit Book</DialogTitle>
            <DialogContent>
                <TextField
                    margin="dense"
                    label="Title"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    fullWidth
                    required
                    error={errors.name}
                    helperText={errorMessages.name}
                />
                <FormControl
                    fullWidth
                    margin="dense"
                >
                    <InputLabel id="category-label">Category</InputLabel>
                    <Select
                        labelId="category-label"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        label="Category"
                    >
                        {categories.map((category) => (
                            <MenuItem key={category} value={category}>
                                {category}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <FormControl
                    fullWidth
                    margin="dense"
                >
                    <InputLabel id="author-label">Author</InputLabel>
                    <Select
                        labelId="author-label"
                        name="authorId"
                        value={formData.authorId}
                        onChange={handleChange}
                        label="Author"
                    >
                        {authors && authors.map((author) => (
                            <MenuItem key={author.id} value={author.id}>
                                {author.name} {author.surname}
                            </MenuItem>
                        ))}
                    </Select>
                    {errors.authorId && <FormHelperText>{errorMessages.authorId}</FormHelperText>}
                </FormControl>
                <TextField
                    margin="dense"
                    label="Available Copies"
                    name="availableCopies"
                    type="number"
                    value={formData.availableCopies}
                    onChange={handleChange}
                    fullWidth
                    required
                    error={errors.availableCopies}
                    helperText={errorMessages.availableCopies}
                    inputProps={{ min: 0 }}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                <Button
                    onClick={handleSubmit}
                    variant="contained"
                    color="warning"
                >
                    Edit
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default EditBookDialog;