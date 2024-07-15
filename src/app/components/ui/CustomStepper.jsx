import React from "react";
import {
    Box,
    Typography,
} from "@mui/material";


import Timeline from "@mui/lab/Timeline";
import TimelineItem, {timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import PATH from "@/app/constant/ROUTES";


const activities = [
    {
        header: "Fill out KYC",
        text: "Organisation Details to Get Started with Payment & Ads",
        color: "#4a5ee5",
        page: `${PATH.settings}kyc`
    },
    {
        header: "Earnings Checkout",
        text: "Payment Method for Earnings Withdrawal",
        color: "#eb5c4b",
        page: PATH.payments
    },
    {
        header: "Place Ad Units",
        text: "Start Placing Ads onto your Buyer App",
        color: "#a66cff",
        page: PATH.ads
    }
];


const CustomStepper = () => {
    return (
        <Box>
            <Timeline sx={{ [`& .${timelineItemClasses.root}:before`]: { flex: 0, padding: 0,}}}>
            {activities.map((activity, index) => (
                    <TimelineItem key={index}>
                        <TimelineSeparator>
                            <TimelineDot variant="outlined" sx={{ borderColor: activity.color }} />
                            {
                                (index < activities.length-1) ? <TimelineConnector /> : ''
                            }
                        </TimelineSeparator>
                        <TimelineContent>
                            <Typography variant="body2" > {activity.header} </Typography>
                            <Typography sx={{ fontSize: 'small', color: '#4a5ee5' }}>
                                <a href={activity.page}>
                                    {activity.text}  &gt;
                                </a>
                            </Typography>
                        </TimelineContent>
                    </TimelineItem>
                ))}
            </Timeline>
        </Box>
    );
};


export default CustomStepper;
