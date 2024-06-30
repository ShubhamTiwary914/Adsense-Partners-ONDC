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

import OrDivider from "@/app/components/form/auth/OrDivider"
import GoogleSignUpButton from './/GoogleButton';
import Copyright from '@/app/components/form/auth/Copyright';
import { useRouter } from 'next/navigation';

const defaultTheme = createTheme();

export default function Register() {
    const router = useRouter();


    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
        email: data.get('email'),
        password: data.get('password'),
        });
        router.replace('/adsense/dashboard')
    };


    
    return (
        <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
            >
        
            <Typography component="h1" variant="h5">
                Login as Adsense Organisation
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 10 }}>
                <Grid container spacing={2}>
                
                <Grid item xs={12}>
                    <TextField required fullWidth id="email" label="Email Address" name="email" autoComplete="email" /> 
                </Grid>
                <Grid item xs={12}>
                    <TextField required fullWidth name="password" label="Password" type="password" id="password" autoComplete="new-password" />
                </Grid>

                <Grid item xs={12}>
                    <Button type="submit" fullWidth variant="contained">
                    Sign In
                    </Button>
                </Grid>

                <Grid item xs={12} sx={{ mt: 1 }}>
                    <OrDivider/>
                </Grid>
                
                <Grid item xs={12} sx={{ mt: 1 }}>
                    <GoogleSignUpButton />
                </Grid>
                </Grid>

        
                <Grid container justifyContent="flex-start">
                <Grid item>
                    <Link href="/auth/register/" variant="body2">
                        Not Onboarded onto our Adsense? Join in Now
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
