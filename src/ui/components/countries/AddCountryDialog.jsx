import React, { useState } from 'react';
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

const initialFormData = {
    "name": "",
    "continent": ""
};

const continents = [
    "Europe",
    "Asia",
    "Africa",
    "North America",
    "South America",
    "Australia",
    "Antarctica"
];

const AddCountryDialog = ({ open, onClose, onAdd }) => {
    const [formData, setFormData] = useState(initialFormData);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = () => {
        console.log("About to submit form data:", JSON.stringify(formData, null, 2));
        onAdd(formData);
        setFormData(initialFormData);
        onClose();
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Add Country</DialogTitle>
            <DialogContent>
                <TextField
                    margin="dense"
                    label="Country Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    fullWidth
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
                <Button onClick={handleSubmit} variant="contained" color="primary">Add</Button>
            </DialogActions>
        </Dialog>
    );
};

export default AddCountryDialog;