"use client";
import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import Chart from 'react-apexcharts';
import DropSelector from "../ui/DropSelector";


const BarGraph = ({ graphConfig, title, graphData }) => {
return (
    <Card variant="outlined" sx={{ paddingBottom: "0", borderRadius: 5, boxShadow: 2 }}>
        <CardContent sx={{ paddingBottom: "16px !important" }}>
        <Box sx={{ display: { sm: "flex", xs: "block" }, alignItems: "center" }}>
            <Box>
                <Typography variant="h5" sx={{ marginBottom: "0" }} gutterBottom> {title} </Typography>
            </Box>
            <Box sx={{ marginLeft: "auto", display: "flex", mt: { lg: 0, xs: 2 } }}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    {graphData.map((data, index) => (
                        <Box key={index} sx={{ display: "flex", alignItems: "center", marginLeft: index === 0 ? 0 : "20px" }}>
                        <Box sx={{ backgroundColor: graphConfig.colors[index], borderRadius: "50%", height: 8, width: 8, mr: 1 }} />
                        <Typography variant="body1" sx={{ color: graphConfig.colors[index] }}>{data.name}</Typography>
                        </Box>
                    ))}
                </Box>
            </Box>
            <DropSelector />
        </Box>
        <Box sx={{ marginTop: "25px" }}>
            <Chart options={graphConfig} series={graphData} type="bar" height="295px" />
        </Box>
        </CardContent>
    </Card>
);
};

export default BarGraph;
