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

const continents = [
    "Europe",
    "Asia",
    "Africa",
    "North America",
    "South America",
    "Australia",
    "Antarctica"
];

const EditCountryDialog = ({ open, onClose, country, onEdit }) => {
    const [formData, setFormData] = useState({
        "name": "",
        "continent": ""
    });

    // Add validation state
    const [errors, setErrors] = useState({
        name: false,
    });

    // Add error messages
    const [errorMessages, setErrorMessages] = useState({
        name: "",

    });

    useEffect(() => {
        if (country) {
            setFormData({
                "name": country.name || "",
                "continent": country.continent || ""
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
    }, [country]);

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
            newErrorMessages.name = "Country name is required";
            valid = false;
        }


        setErrors(newErrors);
        setErrorMessages(newErrorMessages);
        return valid;
    };

    const handleSubmit = () => {
        if(validateForm()){
            console.log("About to submit edited form data:", JSON.stringify(formData, null, 2));
            onEdit(country.id, formData);
            onClose();
        }

    };


    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Edit Country</DialogTitle>
            <DialogContent>
                <TextField
                    margin="dense"
                    label="Country Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    fullWidth
                    required
                    error={errors.name}
                    helperText={errorMessages.name}
                />
                <FormControl fullWidth margin="dense">
                    <InputLabel>Continent</InputLabel>
                    <Select
                        name="continent"
                        value={formData.continent}
                        onChange={handleChange}
                        label="Continent"
                        variant="outlined">
                        {continents.map((continent) => (
                            <MenuItem key={continent} value={continent}>
                                {continent}
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

export default EditCountryDialog;