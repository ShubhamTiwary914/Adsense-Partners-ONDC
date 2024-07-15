"use client";
import { useState } from 'react';
import { Box, Container, Typography, Tabs, Tab, Grid, Button } from '@mui/material';
import { useRouter } from 'next/navigation';


import AddressDetails from "./detailForms/AddressDetails"
import AccountDetails from "./detailForms/AccountDetails"
import BusinessDetails from "./detailForms/BusinessDetails"
import PATH from './../../../../../constant/ROUTES'



const AddPayment = ({ params }) => {
    const [activeTab, setActiveTab] = useState(0);
    const [urlParams, setUrlParams] = useState(params);
    const router = new useRouter();

    function nextTab(){
        if(activeTab >= 2)
            router.replace(PATH.payments)
        setActiveTab(activeTab+1)
    }

    function cancelForm(){
        router.replace(PATH.payments)
    }


    const DetailForm = [
        <AddressDetails  key="address" nextTab={nextTab} cancelForm={cancelForm}/>,
        <AccountDetails key="account" urlParams={urlParams} cancelForm={cancelForm} nextTab={nextTab}/>,
        <BusinessDetails key="business" cancelForm={cancelForm} nextTab={nextTab}/>
    ]
    
    return (
        <Box>
            <Tabs value={activeTab} sx={{ p: 4, maxWidth: 600, margin: 'auto' }}>
                <Tab label="Address Detals" />
                <Tab label="Account Details" />
                <Tab label="Business Details" />
            </Tabs>

            <Container>
                { DetailForm[activeTab] }
            </Container>
        </Box>
    );
};

export default AddPayment;