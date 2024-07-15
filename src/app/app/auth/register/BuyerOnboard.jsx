
import { Box, Grid, TextField, Typography, MenuItem,  FormControlLabel, Radio, Button, RadioGroup } from '@mui/material';


const BuyerAppOnboardingForm = ({ onSubmit, orgForm, setOrgForm, changeData }) => {
    const setOrgData = (key, val) =>{
        setOrgForm(oldForm=>{
            const newForm = {...oldForm}
            newForm[key] = val;
            return newForm;
        })
    }


    return (
        <Box p={3}>
        <Typography variant="h6" gutterBottom>
            Buyer App Onboarding
        </Typography>
        <form>
            {/* Row 1: subscriberID & BAP_URL */}
            <Grid container spacing={2} mb={2}>
            <Grid item xs={12} sm={6}><TextField fullWidth label="SubscriberID" variant="outlined" onChange={changeData('subscriberID')}/></Grid>
            <Grid item xs={12} sm={6}><TextField fullWidth label="BAP_URL" variant="outlined" onChange={changeData('bapURL')}/></Grid>
            </Grid>

            {/* Row 2: Country & Domain */}
            <Grid container spacing={2} mb={2}>
            <Grid item xs={12} sm={6}><TextField fullWidth label="Country" variant="outlined" onChange={changeData('bapCountry')}/></Grid>
            <Grid item xs={12} sm={6}>
                <TextField select fullWidth label="Domain" variant="outlined" value={orgForm['domain']} onChange={changeData('domain', 1)}>
                <MenuItem value="Retail">Retail</MenuItem>
                <MenuItem value="Electronics">Electronics</MenuItem>
                <MenuItem value="Grocery">Grocery</MenuItem>
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
                <RadioGroup row value={orgForm['env']} onChange={(e) => setOrgData('env', e.target.value)}>
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
                <RadioGroup row value={orgForm['app']} onChange={(e) => setOrgData('app', e.target.value)}>
                <FormControlLabel value="web" control={<Radio />} label="Web App" />
                <FormControlLabel value="android" control={<Radio />} label="Android" />
                <FormControlLabel value="ios" control={<Radio />} label="iOS" />
                </RadioGroup>
            </Grid>
            </Grid>

            {/* Row 7: Continue button */}
            <Grid container spacing={2} mt={5}>
            <Grid item xs={12} textAlign="center">
                <Button variant="contained" sx={{ 
                    backgroundColor: 'black', color: 'white','&:hover': { backgroundColor: '#033f54' } }}
                    onClick={onSubmit}
                >Continue</Button>
            </Grid>
            </Grid>
        </form>
        </Box>
    );
};


export default BuyerAppOnboardingForm