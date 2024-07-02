"use client";
import { Box, MenuItem, FormControl, Select } from "@mui/material";
import React from "react";



export default function DropSelector({ ages, ageSetter, index }){
    


    return (
        <Box sx={{ marginLeft: "auto", mt: { lg: 0, xs: 2 } }}>
            <FormControl variant="standard" sx={{ minWidth: 120 }}>
                <Select labelId="demo-simple-select-standard-label" 
                    id="demo-simple-select-standard" value={ages[index]} onChange={ageSetter(index)} label="Age">
                <MenuItem value={0}>Today</MenuItem>
                <MenuItem value={1}>Week</MenuItem>
                <MenuItem value={2}>Month</MenuItem>
                <MenuItem value={3}>Year</MenuItem>
                </Select>
            </FormControl>
        </Box>
    )
}