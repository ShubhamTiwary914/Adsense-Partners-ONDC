import { Box, Grid, TextField, Typography, Checkbox,  FormControlLabel } from '@mui/material';


const OrganisationForm = ({ changeData, orgForm }) => {

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
                <Grid item xs={12} sm={6}><TextField fullWidth label="Organisation" variant="outlined" onChange={changeData('organisation')}/></Grid>
                <Grid item xs={12} sm={6}><TextField fullWidth label="Address Line 1" variant="outlined" onChange={changeData('address')}/></Grid>
            </Grid>
    
            {/* Row 2: City, State & Postal Code */}
            <Grid container spacing={2} mb={2}>
                <Grid item xs={12} sm={4}><TextField fullWidth label="City" variant="outlined" onChange={changeData('city')}/></Grid>
                <Grid item xs={12} sm={4}><TextField fullWidth label="State" variant="outlined" onChange={changeData('state')}/></Grid>
                <Grid item xs={12} sm={4}><TextField fullWidth label="Postal Code" variant="outlined" onChange={changeData('zip')}/></Grid>
            </Grid>
    
            {/* Row 3: Country Code & Contact Name */}
            <Grid container spacing={2} mb={2}>
                <Grid item xs={12} sm={4}><TextField fullWidth label="Contact Email"  value={orgForm['contactEmail']} variant="outlined" onChange={changeData('contactEmail')}/></Grid>
                <Grid item xs={12} sm={4}><TextField fullWidth label="Contact No." variant="outlined" onChange={changeData('contactNo')}/></Grid>
                <Grid item xs={12} sm={4}><TextField fullWidth label="Contact Name" variant="outlined" onChange={changeData('contactName')}/></Grid>
            </Grid>
    
            {/* Final Row: Continue Checkbox */}
            <Grid container>
                <Grid item>
                <FormControlLabel control={<Checkbox />} label="Has your organisation Onboarded the ONDC Network?" onChange={changeData('onboarded', 2)}/>
                </Grid>
            </Grid>
            </form>
        </Box>
        );
};


export default OrganisationForm