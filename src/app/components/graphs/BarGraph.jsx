"use client";
import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import Chart from 'react-apexcharts';
import DropSelector from "../ui/DropSelector";

import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'


const BarGraph = ({ stats, barConfig, ages, ageSetter }) => {
    if(stats == null || barConfig == null){
        return (<Skeleton height={300}/>);
    }
    else
    {
        return (
            <Box sx={{ 
                borderRadius: 2 , boxShadow: 2, width: '90%', mx: 3, my: 3
            }}>
                <Card>
                    <CardContent sx={{ paddingBottom: "16px !important" }}>
                    <Box sx={{ display: { sm: "flex", xs: "block" }, alignItems: "center" }}>
                        <Box>
                            <Typography variant="h6" sx={{ marginBottom: "0" }} gutterBottom> Performance Data </Typography>
                        </Box>
                        <Box sx={{ marginLeft: "auto", display: "flex", mt: { lg: 0, xs: 2 } }}>
                            <Box sx={{ display: "flex", alignItems: "center" }}>
                                {stats.map((data, index) => (
                                    <Box key={index} sx={{ display: "flex", alignItems: "center", marginLeft: index === 0 ? 0 : "20px" }}>
                                    <Box sx={{ backgroundColor: barConfig.colors[index], borderRadius: "50%", height: 8, width: 8, mr: 1 }} />
                                    <Typography variant="body1" sx={{ color: barConfig.colors[index] }}>{data.name}</Typography>
                                    </Box>
                                ))}
                            </Box>
                        </Box>
                        <DropSelector ages={ages} ageSetter={ageSetter} index={1}/>
                    </Box>
                    <Box sx={{ marginTop: "25px" }}>
                        <Chart options={barConfig} series={stats} type="bar" height="295px" />
                    </Box>
                    </CardContent>
                </Card>
            </Box>
        );
    }
};

export default BarGraph;
