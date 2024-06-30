"use client";
import { Box, MenuItem, FormControl, Select } from "@mui/material";
import React from "react";


export default function DropSelector(){
    const [age, setAge] = React.useState(1);

    //@ts-ignore
    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <Box sx={{ marginLeft: "auto", mt: { lg: 0, xs: 2 } }}>
            <FormControl variant="standard" sx={{ minWidth: 120 }}>
                <Select labelId="demo-simple-select-standard-label" id="demo-simple-select-standard" value={age} onChange={handleChange} label="Age">
                <MenuItem value={0}>Today</MenuItem>
                <MenuItem value={1}>Week</MenuItem>
                <MenuItem value={2}>Month</MenuItem>
                <MenuItem value={3}>Year</MenuItem>
                </Select>
            </FormControl>
        </Box>
    )
}