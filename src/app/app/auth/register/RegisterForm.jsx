"use client";
import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import { Box, Typography } from '@mui/material';

import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';

import SvgIcon from '@mui/material/SvgIcon';
import OrDivider from "@/app/components/form/auth/OrDivider"
import Copyright from '@/app/components/form/auth/Copyright';

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import firebaseApp from "@/app/utils/requests/firebase"
import { fetchOrganisation } from '@/app/utils/requests/http';


import {Snackbar} from '@mui/material';
import {Alert} from '@mui/material';
import PATH from '@/app/constant/ROUTES';


const GoogleIcon= (props) => (
    <SvgIcon {...props}>
        <path d="M21.35 11.1h-9.15v2.86h5.26c-0.23 1.2-0.9 2.22-1.89 2.92v2.42h3.06c1.79-1.64 2.82-4.05 2.82-6.78 0-0.58-0.05-1.15-0.1-1.71l-0.01-0.01z" fill="#4285F4"/>
        <path d="M12.2 22.1c2.43 0 4.46-0.81 5.95-2.19l-3.06-2.42c-0.83 0.55-1.87 0.89-2.99 0.89-2.31 0-4.26-1.56-4.95-3.66h-3.12v2.31c1.5 2.96 4.51 4.98 8.17 4.98z" fill="#34A853"/>
        <path d="M7.25 14.72c-0.2-0.6-0.31-1.23-0.31-1.88s0.11-1.28 0.31-1.88v-2.31h-3.12c-0.64 1.28-1.01 2.71-1.01 4.19s0.37 2.91 1.01 4.19l3.12-2.31z" fill="#FBBC05"/>
        <path d="M12.2 7.04c1.29 0 2.44 0.44 3.35 1.31l2.51-2.51c-1.49-1.39-3.52-2.25-5.86-2.25-3.66 0-6.68 2.02-8.17 4.98l3.12 2.31c0.68-2.1 2.63-3.66 4.95-3.66z" fill="#EA4335"/>
    </SvgIcon>
);






const defaultTheme = createTheme();


export default function RegisterForm({ email, setEmail, password, setPassword, setCredAuth, setMode }) {

    const emailHandler = (event) => setEmail(event.target.value);
    const pwdHandler = (event) => setPassword(event.target.value);

    //region toast controls
    const [open, setOpen] = React.useState(false);
    const [toastMessage, setToastMessage] = useState('');
    const [toastColor, setToastColor] = useState('red');
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') 
            return;
        setOpen(false);
    };


    const checkExists_account = async (credAuth, email, password='') =>{
        //found -> send alert
        try{
            await fetchOrganisation({ email: email })
            setToastMessage('An Account already exists with that email!')
            setToastColor('red')
            setOpen(true)
        }
        //not found-> can create acc
        catch(err){
            setCredAuth(credAuth)
            setEmail(email)
            setPassword(password)
            setMode(1)
        }
    }

    //region firebase signup
    const GoogleSignUpButton= ({ setEmail, setMode }) => {
        const auth = getAuth(firebaseApp);
        const provider = new GoogleAuthProvider();
    
        const googleSignUp = () =>{
            signInWithPopup(auth, provider)
                .then((result) => {
                    const userEmail = result.user.email; 
                    checkExists_account(false, userEmail)
                }).catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode)
                    console.log(errorMessage)
                    throw error;
                });
        }
    
        return (
            <Button variant="contained" color="inherit" fullWidth startIcon={<GoogleIcon />} style={{ 
                textTransform: 'none',
                backgroundColor: '#fff',
                color: '#000',
                border: '1px solid #ccc'
            }}
            onClick={googleSignUp}>
                Sign Up with Google
            </Button>
        );
    };
    



    //region credentials signup
    const handleSubmit = async (event) =>{
        await checkExists_account(true, email, password)
    }


    return (
    <ThemeProvider theme={defaultTheme}>
        <Snackbar open={open} autoHideDuration={1000} onClose={handleClose} anchorOrigin={{ vertical: "top", horizontal: "center" }}>
            <Alert
                onClose={handleClose}
                severity="success"
                variant="filled"
                sx={{ width: '100%', backgroundColor: toastColor, borderRadius: 2 }}
            >
            {toastMessage}
            </Alert>
        </Snackbar>

        <Container component="main" maxWidth="xs">
    
        <CssBaseline />
        <Box sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            boxShadow: 4,
            p: 4,
            borderRadius: 2
            }}
        >

            <Typography component="h1" variant="h6" sx={{ fontWeight: 'bold' }}>
            Adsense Registration
            </Typography>
            <Typography component="h1" variant="body1">
            Onboard Your Organisation Buyer App
            </Typography>
            <Box sx={{ mt: 5 }}>
            <Grid container spacing={2}>
                
                <Grid item xs={12}>
                <TextField required fullWidth id="email" label="Email Address" name="email" 
                    autoComplete="email" value={email} onChange={emailHandler} /> 
                </Grid>
                <Grid item xs={12}>
                <TextField required fullWidth name="password" label="Password" 
                    type="password" id="password" autoComplete="new-password" value={password} onChange={pwdHandler}/>
                </Grid>

                <Grid item xs={12}>
                <Button type="submit" fullWidth variant="contained" onClick={handleSubmit}>
                    Sign Up
                </Button>
                </Grid>

                <Grid item xs={12} sx={{ mt: 1 }}>
                <OrDivider/>
                </Grid>
                
                <Grid item xs={12} sx={{ mt: 1 }}>
                <GoogleSignUpButton setEmail={setEmail} setMode={setMode}/>
                </Grid>
            </Grid>


            <Grid container justifyContent="flex-start">
                <Grid item>
                <Link href={PATH.login} variant="body2" >
                    Already have an account? Sign in
                </Link>
                </Grid>
            </Grid>
            </Box>
        </Box>

        <Copyright sx={{ mt: 5 }} />
        </Container>
    </ThemeProvider>
    );
}
