import React, { useState } from 'react';
import { Box, Typography, TextField, IconButton, Grid, FormControlLabel, Radio, RadioGroup, FormControl, Button } from '@mui/material';
import { Visibility, VisibilityOff, Upload } from '@mui/icons-material';

const FormPage = ({ cancelForm, nextTab }) => {
    const [showPassword, setShowPassword] = useState({ adhaar: false, gstin: false, pan: false });

    const handleTogglePassword = (field) => {
        setShowPassword((prev) => ({ ...prev, [field]: !prev[field] }));
    };


    const Controls = ({ cancelForm, nextTab }) => {
        return (
            <Grid item xs={12} sx={{ mt: 8 }}>
                    <Box display="flex" justifyContent="space-between">
                        <Button variant="contained" color="error" onClick={cancelForm}>Cancel</Button>
                        <Box>
                        <Button variant="contained" sx={{ mr: 2 }}>Save for now</Button>
                        <Button variant="contained" color="primary" onClick={nextTab}>Next</Button>
                        </Box>
                    </Box>
            </Grid>
        )
    }

    return (
        <Box p={3}>
        <Grid container spacing={2}>
            <Grid item xs={12}>
            <TextField fullWidth type={showPassword.adhaar ? 'text' : 'password'} label="Adhaar" variant="outlined"
                InputProps={{ endAdornment: (
                <IconButton onClick={() => handleTogglePassword('adhaar')}>
                    {showPassword.adhaar ? <VisibilityOff /> : <Visibility />}
                </IconButton>) 
                }} 
            />
            </Grid>
            <Grid item xs={12}>
            <Button variant="contained" component="label" startIcon={<Upload />}>
                Upload Adhaar (front)
                <input type="file" hidden />
            </Button>
            </Grid>
            <Grid item xs={12}>
            <Button variant="contained" component="label" startIcon={<Upload />}>
                Upload Adhaar (back)
                <input type="file" hidden />
            </Button>
            </Grid>
            <Grid item xs={5} sx={{ mt: 8 }}>
            <Typography variant="h6">GST Identification Number (GST IN)</Typography>
            </Grid>
            <Grid item xs={12}>
            <FormControl component="fieldset">
                <RadioGroup row>
                <FormControlLabel value="yes" control={<Radio />} label="We have a registered GSTIN" />
                <FormControlLabel value="no" control={<Radio />} label="We don't have a GSTIN" />
                </RadioGroup>
            </FormControl>
            </Grid>
            <Grid item xs={12}>
            <TextField fullWidth type={showPassword.gstin ? 'text' : 'password'} label="GST IN" variant="outlined"
                InputProps={{ endAdornment: (
                <IconButton onClick={() => handleTogglePassword('gstin')}>
                    {showPassword.gstin ? <VisibilityOff /> : <Visibility />}
                </IconButton>) 
                }} 
            />
            </Grid>
            <Grid item xs={12}>
            <Button variant="contained" component="label" startIcon={<Upload />}>
                Upload GST Certificate
                <input type="file" hidden />
            </Button>
            </Grid>
            <Grid item xs={12} sx={{ mt: 8 }}>
            <TextField fullWidth type={showPassword.pan ? 'text' : 'password'} label="PAN" variant="outlined"
                InputProps={{ endAdornment: (
                <IconButton onClick={() => handleTogglePassword('pan')}>
                    {showPassword.pan ? <VisibilityOff /> : <Visibility />}
                </IconButton>) 
                }} 
            />
            </Grid>
            <Grid item xs={12}>
            <TextField fullWidth label="PAN Owner's Name" variant="outlined" />
            </Grid>
            <Grid item xs={12}>
            <TextField fullWidth label="Beneficiary Name" variant="outlined" />
            </Grid>
            <Grid item xs={12} className="mt-5">
            <Button variant="contained" component="label" startIcon={<Upload />}>
                Upload PAN
                <input type="file" hidden />
            </Button>
            </Grid>

            <Controls cancelForm={cancelForm} nextTab={nextTab}/>
        </Grid>
        </Box>
    );
};

export default FormPage;
