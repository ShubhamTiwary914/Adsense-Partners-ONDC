import React from 'react';
import {Button, Box, Typography, TextField, Grid } from '@mui/material';


const renderCardPaymentForm = () => (
  <Box>
    <Typography variant="h5">Card-info</Typography>
    <Grid container spacing={2} sx={{ mt: 5 }}>
      <Grid item xs={12}>
        <TextField fullWidth label="Name on Card" variant="outlined" />
      </Grid>
      <Grid item xs={12}>
        <TextField fullWidth label="Card Number" variant="outlined" />
      </Grid>
      <Grid item xs={6}>
        <TextField fullWidth label="Expires (dd/mm/yy)" variant="outlined" />
      </Grid>
      <Grid item xs={6}>
        <TextField fullWidth label="CVV" variant="outlined" inputProps={{ maxLength: 3 }} />
      </Grid>
    </Grid>
  </Box>
);

const renderPaypalForm = () => (
  <Box>
    <Typography variant="h5">Paypal</Typography>
    <Grid container spacing={2} sx={{ mt: 5 }}>
      <Grid item xs={12}>
        <TextField fullWidth label="Paypal Account Name" variant="outlined" />
      </Grid>
      <Grid item xs={12}>
        <TextField fullWidth label="Paypal Email" variant="outlined" />
      </Grid>
    </Grid>
  </Box>
);

const renderUpiForm = () => (
  <Box>
    <Typography variant="h5">UPI</Typography>
    <Grid container spacing={2} sx={{ mt: 5 }}>
      <Grid item xs={12}>
        <TextField fullWidth label="UPI ID" variant="outlined" />
      </Grid>
      <Grid item xs={12}>
        <TextField fullWidth label="Account Holder Name" variant="outlined" />
      </Grid>
      <Grid item xs={12}>
        <TextField fullWidth label="Branch IFSC Code" variant="outlined" />
      </Grid>
      <Grid item xs={12}>
        <TextField fullWidth label="Account Number" variant="outlined" />
      </Grid>
    </Grid>
  </Box>
);




const PaymentForm = ({ urlParams, cancelForm, nextTab }) => {

  const renderForm = () => {
    switch (urlParams['id']) {
      case '0':
        return renderCardPaymentForm();
      case '1':
        return renderPaypalForm();
      case '2':
        return renderUpiForm();
      default:
        return <Typography variant="h6">Invalid payment method selected</Typography>;
    }
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
        {renderForm()}
        <Controls cancelForm={cancelForm} nextTab={nextTab}/>
      </Box>
  )
};

export default PaymentForm;
