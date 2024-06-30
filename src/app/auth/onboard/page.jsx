"use client";

import React from 'react';
import { useState } from 'react';
import { Box, Grid, TextField, Typography, MenuItem, Checkbox,  FormControlLabel, Container, RadioGroup, Radio, Button } from '@mui/material';

import BaseCard from '@/app/components/form/BaseCard';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';


const OrganisationForm = () => {
return (
    <Box p={3}>
        <Typography variant="h5" gutterBottom mb={7}>
            Organisation Onboarding with Buyer App
        </Typography>

        <Typography variant="h6" gutterBottom>
            Organisation Details
        </Typography>
        <form>
        {/* Row 1: Organisation & Address Line 1 */}
        <Grid container spacing={2} mb={2}>
            <Grid item xs={12} sm={6}><TextField fullWidth label="Organisation" variant="outlined" /></Grid>
            <Grid item xs={12} sm={6}><TextField fullWidth label="Address Line 1" variant="outlined" /></Grid>
        </Grid>

        {/* Row 2: City, State & Postal Code */}
        <Grid container spacing={2} mb={2}>
            <Grid item xs={12} sm={4}><TextField fullWidth label="City" variant="outlined" /></Grid>
            <Grid item xs={12} sm={4}><TextField fullWidth label="State" variant="outlined" /></Grid>
            <Grid item xs={12} sm={4}><TextField fullWidth label="Postal Code" variant="outlined" /></Grid>
        </Grid>

        {/* Row 3: Country Code & Contact Name */}
        <Grid container spacing={2} mb={2}>
            <Grid item xs={12} sm={4}>
            <TextField select fullWidth label="Country Code" variant="outlined">
                <MenuItem value="+1">+1</MenuItem>
                <MenuItem value="+91">+91</MenuItem>
                {/* Add more country codes as needed */}
            </TextField>
            </Grid>
            <Grid item xs={12} sm={4}><TextField fullWidth label="Contact No." variant="outlined" /></Grid>
            <Grid item xs={12} sm={4}><TextField fullWidth label="Contact Name" variant="outlined" /></Grid>
        </Grid>

        {/* Final Row: Continue Checkbox */}
        <Grid container>
            <Grid item>
            <FormControlLabel control={<Checkbox />} label="Has your organisation Onboarded the ONDC Network?" />
            </Grid>
        </Grid>
        </form>
    </Box>
    );
};



const BuyerAppOnboardingForm = ({ onboardBuyer }) => {
    const [domain, setDomain] = useState('');
    const [bapEnvironment, setBapEnvironment] = useState('');
    const [applicationType, setApplicationType] = useState('');

    return (
        <Box p={3}>
        <Typography variant="h6" gutterBottom>
            Buyer App Onboarding
        </Typography>
        <form>
            {/* Row 1: subscriberID & BAP_URL */}
            <Grid container spacing={2} mb={2}>
            <Grid item xs={12} sm={6}><TextField fullWidth label="SubscriberID" variant="outlined" /></Grid>
            <Grid item xs={12} sm={6}><TextField fullWidth label="BAP_URL" variant="outlined" /></Grid>
            </Grid>

            {/* Row 2: Country & Domain */}
            <Grid container spacing={2} mb={2}>
            <Grid item xs={12} sm={6}><TextField fullWidth label="Country" variant="outlined" /></Grid>
            <Grid item xs={12} sm={6}>
                <TextField select fullWidth label="Domain" variant="outlined" value={domain} onChange={(e) => setDomain(e.target.value)}>
                <MenuItem value="domain1">Domain 1</MenuItem>
                <MenuItem value="domain2">Domain 2</MenuItem>
                <MenuItem value="domain3">Domain 3</MenuItem>
                {/* Add more domains as needed */}
                </TextField>
            </Grid>
            </Grid>

            {/* Row 3: Current BAP environment? */}
            <Grid container spacing={2} mt={5}>
            <Grid item xs={12}>
                <Typography variant="subtitle1">Current BAP environment?</Typography>
            </Grid>
            </Grid>

            {/* Row 4: Radio buttons for BAP environment */}
            <Grid container spacing={2} mb={2}>
            <Grid item xs={12}>
                <RadioGroup row value={bapEnvironment} onChange={(e) => setBapEnvironment(e.target.value)}>
                <FormControlLabel value="staging" control={<Radio />} label="Staging" />
                <FormControlLabel value="pre-prod" control={<Radio />} label="Pre-prod" />
                <FormControlLabel value="prod" control={<Radio />} label="Prod" />
                </RadioGroup>
            </Grid>
            </Grid>

            {/* Row 5: Application Type? */}
            <Grid container spacing={2} mb={2}>
            <Grid item xs={12}>
                <Typography variant="subtitle1">Application Type?</Typography>
            </Grid>
            </Grid>

            {/* Row 6: Radio buttons for Application Type */}
            <Grid container spacing={2} mb={2}>
            <Grid item xs={12}>
                <RadioGroup row value={applicationType} onChange={(e) => setApplicationType(e.target.value)}>
                <FormControlLabel value="staging" control={<Radio />} label="Web App" />
                <FormControlLabel value="pre-prod" control={<Radio />} label="Mobile" />
                <FormControlLabel value="pre-prod" control={<Radio />} label="iOS" />
                </RadioGroup>
            </Grid>
            </Grid>

            {/* Row 7: Continue button */}
            <Grid container spacing={2} mt={5}>
            <Grid item xs={12} textAlign="center">
                <Button variant="contained"  sx={{ 
                    backgroundColor: 'black', color: 'white','&:hover': { backgroundColor: '#033f54' } }}onClick={onboardBuyer}>Continue</Button>
            </Grid>
            </Grid>
        </form>
        </Box>
    );
    };


    
export default function Onboard() {
    const router = new useRouter();

    function onboardBuyer(){
        Cookies.set('logged', 'true', { expires: 1 });
        router.push('/adsense/dashboard')
    }


return (
    <BaseCard styles={{ m: 10, ml: 25, width: '60%', borderRadius: 7 }}>
        <Container maxWidth="md" sx={{ width: '100%', mt: 4 }}>
            <OrganisationForm/>
            <BuyerAppOnboardingForm onboardBuyer={onboardBuyer}/>
        </Container>
    </BaseCard>
    );
}
