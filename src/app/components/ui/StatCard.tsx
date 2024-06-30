import React from 'react';
import { Card, CardContent, Typography, Avatar, Box } from '@mui/material';
import Image from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

interface StatCardProps {
    title: string;
    value: string;
    image: StaticImport
}

const StatCard: React.FC<StatCardProps> = ({ title, value, image }) => {
    return (
        <Card variant="outlined" sx={{ width: '250px', margin: 1, borderRadius: 2, backgroundColor: '#1A97f5', color: 'white' }}>
        <CardContent>
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}> 
                <Image src={image} width={50} alt="stat-icon"/>
                <Box sx={{ mx: 5 }}>
                    <Typography variant="subtitle1">{title}</Typography>
                    <Typography variant="h5" component="div">{value}</Typography>
                </Box>
            </Box>
            
        </CardContent>
        </Card>
    );
};

export default StatCard;
