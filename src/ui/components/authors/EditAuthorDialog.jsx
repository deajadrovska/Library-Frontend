import React, { useState, useEffect } from 'react';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField
} from "@mui/material";
import useCountries from "../../../hooks/useCountries.js";

const EditAuthorDialog = ({ open, onClose, author, onEdit }) => {
    const [formData, setFormData] = useState({
        "name": "",
        "surname": "",
        "countryId": ""
    });
    const { countries } = useCountries();


    const [errors, setErrors] = useState({
        name: false,
    });


    const [errorMessages, setErrorMessages] = useState({
        name: "",

    });

    useEffect(() => {
        if (author) {
            setFormData({
                "name": author.name || "",
                "surname": author.surname || "",
                "countryId": author.country?.id || ""
            });
            setErrors({
                name: false,
                availableCopies: false
            });
            setErrorMessages({
                name: "",
                availableCopies: ""
            });
        }
    }, [author]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });

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
            newErrorMessages.name = "Author name is required";
            valid = false;
        }

        if(!formData.surname.trim()){
            newErrors.surname = true;
            newErrorMessages.surname = "Author surname is required";
            valid = false;
        }


        setErrors(newErrors);
        setErrorMessages(newErrorMessages);
        return valid;
    };

    const handleSubmit = () => {
        if(validateForm()){
            console.log("About to submit edited form data:", JSON.stringify(formData, null, 2));
            onEdit(author.id, formData);
            onClose();
        }

    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Edit Author</DialogTitle>
            <DialogContent>
                <TextField
                    margin="dense"
                    label="First Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    fullWidth
                    required
                    error={errors.name}
                    helperText={errorMessages.name}
                />
                <TextField
                    margin="dense"
                    label="Last Name"
                    name="surname"
                    value={formData.surname}
                    onChange={handleChange}
                    fullWidth
                    required
                    error={errors.surname}
                    helperText={errorMessages.surname}
                />
                <FormControl fullWidth margin="dense">
                    <InputLabel>Country</InputLabel>
                    <Select
                        name="countryId"
                        value={formData.countryId}
                        onChange={handleChange}
                        label="Country"
                        variant="outlined">
                        {countries && countries.map((country) => (
                            <MenuItem key={country.id} value={country.id}>
                                {country.name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                <Button onClick={handleSubmit} variant="contained" color="warning">Edit</Button>
            </DialogActions>
        </Dialog>
    );
};

export default EditAuthorDialog;