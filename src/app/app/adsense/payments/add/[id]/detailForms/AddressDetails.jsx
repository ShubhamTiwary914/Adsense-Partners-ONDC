"use client";
import React, { useState } from 'react';
import { Box, TextField, FormControlLabel, Radio, Select, MenuItem, Button, Grid, FormControl, InputLabel } from '@mui/material';

const AddressDetails = ({ nextTab, cancelForm }) => {
    const [isSameAsRegistered, setIsSameAsRegistered] = useState(false);
    const [address, setAddress] = useState({ street: '', city: '', state: '', country: '', zip: '' });

    const cities = ['City1', 'City2', 'City3'];
    const states = ['State1', 'State2', 'State3'];
    const countries = ['Country1', 'Country2', 'Country3'];

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setAddress({ ...address, [name]: value });
    };
    const handleRadioChange = (event) => setIsSameAsRegistered(event.target.checked);

    
    return (
        <Box component="form" sx={{ p: 4, maxWidth: 600, margin: 'auto' }}>
        <Grid container spacing={3} alignItems="center">
            <Grid item xs={12}>
            <FormControlLabel control={<Radio checked={isSameAsRegistered} onChange={handleRadioChange} />}
                label="Is same as registered address of organisation" labelPlacement="start" sx={{ justifyContent: 'space-between', width: '100%' }} />
            </Grid>

            <Grid item xs={12}>
            <TextField fullWidth label="Street Address" name="street" value={address.street} onChange={handleInputChange} />
            </Grid>

            <Grid item xs={6}>
            <FormControl fullWidth>
                <InputLabel>City</InputLabel>
                <Select label="City" name="city" value={address.city} onChange={handleInputChange}
                inputProps={{ 'aria-label': 'City' }} MenuProps={{ PaperProps: { sx: { maxHeight: 200 } } }}
                displayEmpty renderValue={(selected) => selected || ''}>
                {cities.map((city, index) => <MenuItem key={index} value={city}>{city}</MenuItem>)}
                </Select>
            </FormControl>
            </Grid>

            <Grid item xs={6}>
            <FormControl fullWidth>
                <InputLabel>State</InputLabel>
                <Select label="State" name="state" value={address.state} onChange={handleInputChange}
                inputProps={{ 'aria-label': 'State' }} MenuProps={{ PaperProps: { sx: { maxHeight: 200 } } }}
                displayEmpty renderValue={(selected) => selected || ''}>
                {states.map((state, index) => <MenuItem key={index} value={state}>{state}</MenuItem>)}
                </Select>
            </FormControl>
            </Grid>

            <Grid item xs={6}>
            <FormControl fullWidth>
                <InputLabel>Country</InputLabel>
                <Select label="Country" name="country" value={address.country} onChange={handleInputChange}
                inputProps={{ 'aria-label': 'Country' }} MenuProps={{ PaperProps: { sx: { maxHeight: 200 } } }}
                displayEmpty renderValue={(selected) => selected || ''}>
                {countries.map((country, index) => <MenuItem key={index} value={country}>{country}</MenuItem>)}
                </Select>
            </FormControl>
            </Grid>

            <Grid item xs={6}>
            <TextField fullWidth label="ZIP / Postal Code" name="zip" value={address.zip} onChange={handleInputChange} />
            </Grid>

            <Grid item xs={12} sx={{ mt: 8 }}>
            <Box display="flex" justifyContent="space-between">
                <Button variant="contained" color="error" onClick={cancelForm}>Cancel</Button>
                <Box>
                <Button variant="contained" sx={{ mr: 2 }}>Save for now</Button>
                <Button variant="contained" color="primary" onClick={nextTab}>Next</Button>
                </Box>
            </Box>
            </Grid>
        </Grid>
        </Box>
    );
};

export default AddressDetails;
