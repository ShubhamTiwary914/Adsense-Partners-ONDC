"use client";
import React, { useState } from 'react';
import { Box, Container, Typography, Tabs, Tab, Grid, Button } from '@mui/material';
import PageHeader from '@/app/components/ui/PageHeader';


interface SettingsItem {
    label: string;
    value: string;
}

const settingsData: SettingsItem[][] = [
    [
        { label: 'Contact Name', value: 'xxxxxx' },
        { label: 'Contact Email', value: 'xxxxxx' },
        { label: 'Mobile Number', value: 'xxxxxx' },
    ],
    [
        { label: 'Business Name', value: 'xxxxxx' },
        { label: 'Business Address', value: 'xxxxxx' },
    ],
    [
        { label: 'App Version', value: 'xxxxxx' },
        { label: 'Last Update', value: 'xxxxxx' },
    ],
    [
        { label: 'Document Type', value: 'xxxxxx' },
        { label: 'Document Status', value: 'xxxxxx' },
    ],
    [
        { label: 'KYC Status', value: 'Pending' },
        { label: 'KYC Expiry', value: 'xxxxxx' },
    ],
];

const Settings: React.FC = () => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setActiveTab(newValue);
    };

    const handleEdit = (label: string) => {
        console.log(`Edit ${label}`);
    };

    return (
        <Container sx={{ p:3 }}> 
            <PageHeader title="Settings" subtitle="Control your Organisation & Buyer App Details"/>
            <Tabs value={activeTab} onChange={handleTabChange} aria-label="settings tabs" sx={{ mt: 5, mb: 3 }}>
                <Tab label="Contact Details" />
                <Tab label="Business Details" />
                <Tab label="Buyer App Details" />
                <Tab label="Document Details" />
                <Tab label="Support Details" />
            </Tabs>

            <Box sx={{ border: '1px solid black', padding: 5 , marginTop: 2, maxWidth: 800, borderRadius: 5 }}>
                {settingsData[activeTab].map((item) => (
                <Grid container key={item.label} spacing={2} alignItems="center" sx={{ marginBottom: 5 }}>
                    <Grid item xs={12}>
                        <Typography variant="body1">{item.label}</Typography>
                    </Grid>
                        <Grid item xs={12} display="flex" alignItems="center">
                    <Typography variant="body1">{item.value}</Typography>
                    <Typography variant="body1" color="primary" sx={{ cursor: 'pointer', marginLeft: 1 }} onClick={() => handleEdit(item.label)}>
                        Edit
                    </Typography>
                    </Grid>
                </Grid>
                ))}
                
                <Box sx={{ textAlign: 'right' }}>
                    <Button variant="outlined" color="success">Complete KYC</Button>
                </Box>
            </Box>
        </Container>
    );
};

export default Settings;
