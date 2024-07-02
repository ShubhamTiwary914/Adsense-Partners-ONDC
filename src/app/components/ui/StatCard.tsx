import React from 'react';
import { Card, CardContent, Typography, SvgIconTypeMap, Box } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';


interface StatCardProps {
    title: string;
    value: string;
    Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>,
    bg: string,
    color: string
}

const StatCard: React.FC<StatCardProps> = ({ title, value, Icon, bg, color }) => {
    return (
        <Card variant="outlined" sx={{ width: '230px', margin: 1, borderRadius: 2, boxShadow: 2}}>
        <CardContent>
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}> 
                <Box sx={{ width: 70, height: 70, borderRadius: '50%', backgroundColor: bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon sx={{ color: color, fontSize: 40 }} />
                </Box>
                <Box sx={{ mx: 2 }}>
                    <Typography variant="subtitle1">{title}</Typography>
                    <Typography variant="h5" component="div">{value}</Typography>
                </Box>
            </Box>
            
        </CardContent>
        </Card>
    );
};

export default StatCard;
