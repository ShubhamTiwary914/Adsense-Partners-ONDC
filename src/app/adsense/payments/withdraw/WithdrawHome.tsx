"use client";
import React, { useState } from 'react';
import { Box, Button, Container, Typography, Card, CardContent, Select, MenuItem } from '@mui/material';
import Icon from '@mui/icons-material/Face'; 
import { SelectChangeEvent } from '@mui/material/Select';
import DialogParent from '@/app/components/ui/DialogParent';
import Image from 'next/image';

import bankIcon from './../../../assets/icons/bank-2.png' 
import paypalIcon from './../../../assets/icons/paypal-1.png' 
import upiIcon from './../../../assets/icons/upi-1.png' 
import { useRouter } from 'next/navigation';


interface PaymentMethodInterface {
    onSelect: (method: number, currency: string) => void 
}



const PaymentMethodSelect: React.FC<PaymentMethodInterface> = ({ onSelect }) => {

    const [currencies, setCurrencies] = useState(["INR","INR","INR"]);
    const handleSelectChange = (id: number) => (event: SelectChangeEvent<string>) => {
        setCurrencies(oldCurr=>{
            const newCurr = [...oldCurr]
            newCurr[id] = event.target.value
            return newCurr;
        })
    };

    const handleCardClick = (id: number) => (event: React.MouseEvent<HTMLDivElement>) => {
        const target = event.target as HTMLElement;
        if (!target.closest('.MuiSelect-root')) {
            onSelect(id, currencies[id]);
        }
    };

    //@ts-ignore
    const renderCard = ({ id, title, defaultValue, descriptions, image }) => (
        <Card onClick={handleCardClick(id)} sx={{ marginBottom: 2, cursor: 'pointer', width: '100%' }}>
            <CardContent>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Box display="flex" alignItems="center">
                        <Box sx={{ mr: 3 }}>
                            <Image src={image} alt={title} style={{ width: 40, height: 40, marginRight: 8 }}/>
                        </Box>
                        <Typography variant="h6">{title}</Typography>
                    </Box>
                    <Box ml="auto">
                        <Select defaultValue={defaultValue} onClick={(e) => e.stopPropagation()} onChange={handleSelectChange(id)} size="small" className="MuiSelect-root">
                            <MenuItem value={defaultValue}>{defaultValue}</MenuItem>
                            <MenuItem value="USD">USD</MenuItem>
                            <MenuItem value="EUR">EUR</MenuItem>
                        </Select>
                    </Box>
                </Box>
                <Box marginTop={2}>
                    {descriptions.map((desc: any, index: any) => (
                        <Typography key={index} variant="body2" color="textSecondary">{desc}</Typography>
                    ))}
                </Box>
            </CardContent>
        </Card>
    );


    return (
        <Box>
            {renderCard({
                title: 'Card Transfer (Credit/Debit)',
                defaultValue: 'INR',
                descriptions: ['Up to 3 business Days', 'Fees may Apply', 'Funds will be converted into your local currency'],
                image:  bankIcon,
                id: 0
            })}
            {renderCard({
                title: 'Paypal',
                defaultValue: 'INR',
                descriptions: ['Up to 1 Business Day', 'Fees May Apply'],
                image: paypalIcon,
                id: 1
            })}
            {renderCard({
                title: 'UPI',
                defaultValue: 'INR',
                descriptions: ['Up to 3 Business Days', 'Fees May Apply'],
                image: upiIcon,
                id: 2
            })}
        </Box>
    );
};

const WithdrawHome: React.FC = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    //@ts-ignore
    const router = new useRouter();
    const AddPaymentMethod = (method: number, currency: string) => {
        handleClose();
        router.push(`/adsense/payments/add/${method}/`) 
    };


    return (
        <Container>
            <Typography variant="h4" sx={{ marginBottom: 2 }}>Withdraw Earnings</Typography>
            <Typography variant="body1" sx={{ marginBottom: 2 }}>Available for withdrawals</Typography>
            <Typography variant="h4" sx={{ marginBottom: 7 }}>Rs. 1200</Typography>
            <Typography variant="body1" sx={{ marginBottom: 2 }}>Start withdraw your Earnings</Typography>
            <Button variant="contained" sx={{ backgroundColor: 'black', color: 'white' }} onClick={handleOpen}>
                Add Payout Method
            </Button>

            <DialogParent open={open} onClose={handleClose}>
                <PaymentMethodSelect onSelect={AddPaymentMethod} />
            </DialogParent>
        </Container>
    );
};

export default WithdrawHome;
