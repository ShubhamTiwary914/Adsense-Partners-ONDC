"use client"
import React, { FunctionComponent, useState } from "react";
import {
    FormControl,
    InputAdornment,
    TextField,
} from "@mui/material"

import SearchIcon from '@mui/icons-material/Search';





const TypeSearch: FunctionComponent = () => {
    //@ts-ignore
    const [showClearIcon, setShowClearIcon] = useState("none");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setShowClearIcon(event.target.value === "" ? "none" : "flex");
    };

    const handleClick = (): void => {
        // TODO: Clear the search input
        console.log("clicked the clear icon...");
    };

    return (
        <div id="app">
        <FormControl>
            <TextField
                size="small"
                onChange={handleChange}
                sx={{ border: '0.2px solid black', borderRadius: 2 }}
                InputProps={{
                    startAdornment: (
                    <InputAdornment position="start">
                        <SearchIcon />
                    </InputAdornment>
                    ),
                    endAdornment: (
                    <InputAdornment
                        position="end"
                        style={{ display: showClearIcon }}
                        onClick={handleClick}
                    >
                    </InputAdornment>
                    )
                }}
            
            />
        </FormControl>
        </div>
    );
};

export default TypeSearch;