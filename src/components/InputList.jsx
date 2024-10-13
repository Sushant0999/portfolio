import React, { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';

const InputList = ({ label, name, initialItems, onItemsChange, fields }) => {
    const [items, setItems] = useState(initialItems || []);

    const handleAddItem = () => {
        const newItem = fields.reduce((acc, field) => {
            acc[field.key] = ''; // Initialize each field with an empty string
            return acc;
        }, {});
        setItems((prevItems) => [...prevItems, newItem]);
    };

    const handleItemChange = (index, field, value) => {
        const newItems = [...items];
        newItems[index][field] = value; // Update the specific field
        setItems(newItems);
        onItemsChange(newItems); // Notify parent about changes
    };

    const handleRemoveItem = (index) => {
        const newItems = items.filter((_, i) => i !== index);
        setItems(newItems);
        onItemsChange(newItems); // Notify parent about changes
    };

    return (
        <div>
            {items.map((item, index) => (
                <Grid container key={index} spacing={1} alignItems="center">
                    {fields.map((field) => (
                        <Grid item xs={5} key={field.key}>
                            <TextField
                                margin="normal"
                                fullWidth
                                label={`${field.label} ${index + 1}`}
                                name={`${name}_${field.key}`}
                                value={item[field.key]} // Display the specific field value
                                onChange={(e) => handleItemChange(index, field.key, e.target.value)}
                            />
                        </Grid>
                    ))}
                    <Grid item xs={2}>
                        <Button onClick={() => handleRemoveItem(index)} variant="outlined" color="error">
                            Remove
                        </Button>
                    </Grid>
                </Grid>
            ))}
            <Button onClick={handleAddItem} variant="contained" color="primary">
                Add {label}
            </Button>
        </div>
    );
};

export default InputList;
