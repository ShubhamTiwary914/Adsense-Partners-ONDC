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
        <Card variant="outlined" sx={{ width: 200, margin: 1, borderRadius: 2, boxShadow: 2, mx: 3, ":hover": {
            boxShadow: 5, cursor: 'pointer'
        }}}>
        <CardContent>
            <Box> 
                <Box sx={{ backgroundColor: bg, p: 2, display: 'inline', borderRadius: 2 }}>
                    <Icon sx={{ color: color, fontSize: 30 }} />
                </Box>
                <Box sx={{  my: 2 }}>
                    <Typography variant="h6">{title}</Typography>
                    <Typography variant="h5" component="div" sx={{ mt: 2, fontWeight: 'bold' }}>{value}</Typography>
                </Box>
            </Box>
            
        </CardContent>
        </Card>
    );
};

export default StatCard;
