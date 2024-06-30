"use client";
import React, { useState } from 'react';
import { Box, Container, Typography, Tabs, Tab, Grid, Button } from '@mui/material';
import PageHeader from '@/app/components/ui/PageHeader';

import WithdrawalHistory from './history/WithdrawalHistory';
import WithdrawHome from './withdraw/WithdrawHome';
import EarningsHistory from './history/EarningsHistory';


export default function Payments() {
    const [activeTab, setActiveTab] = useState(0);
    const PaymentsTabs = [
        <WithdrawHome />,
        <WithdrawalHistory />,
        <EarningsHistory />
    ]

    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setActiveTab(newValue);
    };


    return (
        <Box sx={{ p:3 }}> 
            <PageHeader title="Payments" subtitle="Add Payout Methods & Checkout Withdrawals on your Earnings" />
            <Tabs value={activeTab} onChange={handleTabChange}  sx={{ mt: 5, mb: 3}}>
                <Tab label="Withdraw Earnings" />
                <Tab label="Withdrawal History" />
                <Tab label="Earnings History" />
            </Tabs>
            <Box sx={{ mt: 5 }}>
                { PaymentsTabs[activeTab] }
            </Box>
        </Box>
    );
    
    }