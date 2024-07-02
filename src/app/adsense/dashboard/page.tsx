"use client";
import React from "react";
import { 
    Box, Typography, Paper,
    Card, Grid, Link
} from "@mui/material";



import PageHeader from "@/app/components/ui/PageHeader";

import analyticsIllustration from "./../../assets/illustrations/dashboard/analytics-1.jpeg";
import adsIllustration from "./../..//assets/illustrations/dashboard/ads-1.png";
import paymentsIllustration from "./../../assets/illustrations/dashboard/payments-1.png";
import BlogCard from '../../components/ui/BlogCard'
import FastForwardOutlinedIcon from '@mui/icons-material/FastForwardOutlined';
import CustomStepper from './../../components/ui/CustomStepper'




const steps = [
  {
      label: 'KYC',
      description: `Add details about your organisation before getting started`,
  },
  {
      label: 'Payout Methods',
      description:
      'Start withdrawing your Earnings',
  },
  {
      label: 'Ad Unit',
      description: `Place Ads onto your Buyer App to start Earning`,
  },
];


const cards = [
        {
            img: analyticsIllustration,
            title: "Analytics",
            subtitle:
                "Learn Insights on how well you perform on various metrics",
            btncolor: "#4a5ee5",
            href: 'analytics'
        },
        {
            img: adsIllustration,
            title: "Ads Management",
            subtitle:
                "Create, Manage & Place Ads onto your Buyer App",
            btncolor: "#eb5c4b",
            href: 'ads',
            color: '#0bb7af'
        },
        {
            img: paymentsIllustration,
            title: "Payment Gateways",
            subtitle:
                "Checkout on your Earnings gained from Ads & Withdrawal",
            btncolor: "#a66cff",
            href: 'payments',
            
        },
];







const StepCard = () => {
    return (
      <Card sx={{ display: "flex", p: 3, borderRadius: 5, border: '1px solid #35363b', boxShadow: 1, width: '85%' }} variant="outlined">
      <Grid container spacing={5}>
        <Grid item xs={5}>
          <Box>
            <Typography variant="h6"> Start Your Journey into our Adsense Partner Program</Typography>
            <Typography sx={{ mt: 2, fontSize: '14px' }}>
              Complete the following Steps to Get started With our Adsense Partners Program for Buyer Apps
            </Typography>
            <Typography sx={{ color: '#4a5ee5', mt: 4, fontSize: 'smaller', ":hover": { cursor: 'pointer' } }}>
              <Link href="/adsense/settings">
                <FastForwardOutlinedIcon sx={{ mr: 1 }} />
                Configure my Organisation Settings
              </Link>
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={7}>
          <Box>
            <CustomStepper />
          </Box>
        </Grid>
      </Grid>
    </Card>
    );
};



export default function DashBoard() {
  return (
      <div>
          <Box sx={{ p: 3 }}>
              <PageHeader title="Dasboard" subtitle="Overview of your Organisation's ONDC Adsense Network"/>
              <Box sx={{ my: 3, borderRadius: 10, mb: 10 }}>
                  <StepCard />
              </Box>
              <Typography gutterBottom variant="h6" component="div" sx={{ borderBottom: '3px solid #1A97f5', display: 'inline', py: 1 }}> Get Started With </Typography>
              <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
                  <BlogCard cards={cards} />
              </Box>
          </Box>
      </div>
  );

}