"use client";

import React from 'react';
import { useState, useContext } from 'react';
import { Container, Typography } from '@mui/material';

import OrganisationForm from './OrgOnboard'
import BuyerAppOnboardingForm from './BuyerOnboard';

import BaseCard from '@/app/components/form/BaseCard';
import { saveOrganisation, initPerformances } from '../../../utils/requests/http';
import { removeKey, setLocalData } from "./../../../utils/utils"
import {Snackbar} from '@mui/material';
import {Alert} from '@mui/material';

import { useRouter } from 'next/navigation';

import { OrgContext } from '@/app/context/OrgProvider';

function isFilled(obj, excludeKeys = []) {
    for (const key in obj) {
        if (!excludeKeys.includes(key) && (obj[key] === '' || obj[key] === null || obj[key] === undefined)) 
            return false;
    }
    return true;
}


export default function OnboardForm({  email, password, credAuth, setMode }) {
    //region toast controls
    const [open, setOpen] = React.useState(false);
    const [toastMessage, setToastMessage] = useState('');
    const [toastColor, setToastColor] = useState('red');
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') 
            return;
        setOpen(false);
    };

    const { org, setOrg, updateOrgSingle } = useContext(OrgContext)

    const router = useRouter()

    const [orgForm, setOrgForm] = useState({
        organisation: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        contactEmail: email,
        contactNo: '',
        contactName: '',
        onboarded: false,
        subscriberID: '',
        bapURL: '',
        bapCountry: '',
        domain: 'Retail',
        env: 'staging',
        app: 'web',
        encpass: password,
        credAuth: credAuth,
    })
    const setOrgData = (key, val) =>{
        setOrgForm(oldForm=>{
            const newForm = {...oldForm}
            newForm[key] = val;
            return newForm;
        })
    }

    
    //region orgForm controls
    async function submitForm(event){
        event.preventDefault();
        //first make sure everything is filled
        const uncounted = ['encpass']
        const filled = isFilled(orgForm, uncounted)
        if(!filled){
            setToastMessage('Fill all the Fields to proceed!')
            setToastColor('red')
            setOpen(true)
            return;
        }

        try{
            //returned org id(if successful)
            let orgData = await saveOrganisation(orgForm);
            orgData = orgData.data.org
            orgData = removeKey(orgData, 'encpass')
            orgData = removeKey(orgData, 'credAuth')
            
            const initStatus = await initPerformances(orgData._id)
            if(initStatus == 200 || initStatus == 201){   
                setOrg(orgData)
                updateOrgSingle('logged', true)
                router.replace(PATH.dashboard)
            }
            else
                return initStatus;
        }
        catch(err){
            throw err;
        }
    }


    //0=textField | 1=dropdown | 2=check
    const changeOrgForm = (key, check=0) => (event) =>{
        if(!check){
            setOrgData(key, event.target.value)
        }
        else if(check == 1){
            setOrgData(key, event.target.value)
        }
        else{
            setOrgData(key, event.target.checked)
        }
    }


return (
    <BaseCard styles={{ m: 10, ml: 25, width: '60%', borderRadius: 7 }}>
        <Snackbar open={open} autoHideDuration={2000} onClose={handleClose} anchorOrigin={{ vertical: "top", horizontal: "center" }}>
            <Alert
                onClose={handleClose}
                severity="success"
                variant="filled"
                sx={{ width: '100%', backgroundColor: toastColor, borderRadius: 2 }}
            >
            {toastMessage}
            </Alert>
        </Snackbar>

        <Container maxWidth="md" sx={{ width: '100%', mt: 4 }}>    
            <Typography sx={{color: '#1A97f5', m: 2, ":hover": { cursor: 'pointer' }}} onClick={()=> setMode(0)}>
                back to register
            </Typography>
            <OrganisationForm changeData={changeOrgForm} orgForm={orgForm}/>
            <BuyerAppOnboardingForm onSubmit={submitForm} orgForm={orgForm} setOrgForm={setOrgForm} changeData={changeOrgForm}/>
        </Container>
    </BaseCard>
    );
}
