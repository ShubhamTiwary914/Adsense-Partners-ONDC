import React, {useState, useEffect} from 'react';
import { Box, Typography, TextField, Radio, RadioGroup, FormControlLabel, Tooltip, IconButton, Button } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import {COLORS} from '@/app/constant/THEME'


const KeyValueField = ({ label, tooltipText, value, onChange, type = 'text', options = [] }) => {
    const renderInput = () => {
        switch (type) {
            case 'text':
                return <TextField value={value} onChange={onChange} fullWidth variant="outlined" />;
            case 'radio':
                return (
                    <RadioGroup value={value} onChange={onChange}>
                    {options.map((option) => (
                        <FormControlLabel key={option.value} value={option.value} control={<Radio />} label={option.label} />
                    ))}
                    </RadioGroup>
                );
            // Add more cases for other input types as needed
            default:
                return null;
        }   
    };

    return (
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Box sx={{ width: '30%', display: 'flex', alignItems: 'center' }}>
            <Typography variant="body1">{label}</Typography>
            <Tooltip title={tooltipText}>
                <IconButton size="small" sx={{ml:1}}>
                    <InfoIcon fontSize="small" sx={{ color: COLORS.SIDEBAR_DARK_BLUE }}/>
                </IconButton>
            </Tooltip>
            </Box>
            <Box sx={{ width: '70%' }}>{renderInput()}</Box>
        </Box>
    );
};


const SettingsForm = ({ fields, initialData, settingsUpdate, formTitle }) => {
    const [formData, setFormData] = useState({});
    const [formChanged, setformChanges] = useState(false);
    

    useEffect(() => {
        // Initialize form data with initial values
        const initialFormData = fields.reduce((acc, field) => {
        acc[field.stateName] = initialData[field.stateName] || '';
        return acc;
        }, {});
        setFormData(initialFormData);
    }, [fields, initialData]);

    const handleChange = (field) => (event) => {
        if(!formChanged)
            setformChanges(true)
        setFormData({ ...formData, [field]: event.target.value });
    };

    const handleSaveChanges = () => {
        settingsUpdate(formData);
    };

    return (
        <Box sx={{ p: 3 }}>
        <Typography variant="h6" sx={{ mb: 3 }}> {formTitle} </Typography>
        {fields.map((field) => (
            <KeyValueField
            key={field.label}
            label={field.label}
            tooltipText={field.tooltipText}
            value={formData[field.stateName] || ''}
            onChange={handleChange(field.stateName)}
            type={field.type || 'text'}
            options={field.options}
            />
        ))}
        <Button variant="contained" color="primary" disabled={!formChanged} onClick={handleSaveChanges} sx={{ mt: 4 }}>
            Save Changes
        </Button>
        </Box>
    );
};





export default function TabFormat({ fields, initialData, handleSettingsUpdate, formTitle }){

    return (
        <Box sx={{ width: '85%', border: `1px solid black`, borderRadius: 1, p:2 }}>
            <SettingsForm
                fields={fields}
                initialData={initialData}
                settingsUpdate={handleSettingsUpdate}
                formTitle={formTitle}
            />
        </Box>
    )
}