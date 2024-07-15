"use client";
import React, { useState, useContext } from 'react';
import { Box, Container, Typography, Tabs, Tab, Grid, Button } from '@mui/material';


import PageTabs from '@/app/components/nav/PageTabs'
import { OrgContext } from '@/app/context/OrgProvider';
import TabFormat from './tabs/TabFormat'
import SupportTab from './tabs/SupportTab'

import * as tabs from './tabs/tabs'


const components = [
    'Contact Details', 'Business Details', 'BuyerApp Details', 'Document Details', 'Support Deatils'
]


const Settings= () => {
    const {org, setOrg } = useContext(OrgContext);
    const [tab, setTab] = useState(0);

    const settingsUpdate = () =>{

    }

    const ComponentsTab = [
        <TabFormat  key={0} fields={tabs.contactFields} initialData={tabs.contactData} handleSettingsUpdate={settingsUpdate} formTitle="Contact Details"/>,
        <TabFormat key={1} fields={tabs.organizationFields} initialData={tabs.organizationData} handleSettingsUpdate={settingsUpdate} formTitle="Business Details"/>,
        <TabFormat key={2} fields={tabs.buyerAppFields} initialData={tabs.buyerAppData} handleSettingsUpdate={settingsUpdate} formTitle="Buyer App Details"/>,
        <TabFormat key={3} fields={tabs.documentFields} initialData={tabs.documentData} handleSettingsUpdate={settingsUpdate} formTitle="Documents Details"/>,
        <SupportTab key={4}/>,
    ]


    return (
        <Box sx={{ p:3, mt: 7 }}> 
            <PageTabs components={components} tab={tab} setTab={setTab}/>
            <Box sx={{ mt: 5 }} >
                { ComponentsTab[tab] }
            </Box>
        </Box>
    );
};

export default Settings;
