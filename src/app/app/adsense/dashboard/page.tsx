"use client";
import React from "react";
import { 
    Box, Typography, Button,
    Card, Grid, Link
} from "@mui/material";



import PageHeader from "@/app/components/ui/PageHeader";

import analyticsIllustration from "./../../../assets/illustrations/dashboard/analytics-2.png";
import adsIllustration from "./../../../assets/illustrations/dashboard/ads-2.png";
import paymentsIllustration from "./../../../assets/illustrations/dashboard/payments-2.png";
import BlogCard from '../../../components/ui/BlogCard'
import FastForwardOutlinedIcon from '@mui/icons-material/FastForwardOutlined';
import CustomStepper from './../../../components/ui/CustomStepper'

import PATH from "@/app/constant/ROUTES";
import {COLORS} from '@/app/constant/THEME'

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
                "Ad Performance & Earnings",
            btncolor: "#4a5ee5",
            href: PATH.analytics,
            btnText: 'View Performance',
            btnVariant: 'contained'
        },
        {
            img: adsIllustration,
            title: "Ads",
            subtitle:"Control Buyer App's Ads",
            href: PATH.ads,
            btnText: 'Create Ad +',
            btnVariant: 'contained'
        },
        {
            img: paymentsIllustration,
            title: "Payment",
            subtitle:"Earnings Checkout Method",
            href: PATH.payments,
            btnText: 'Payment Methods',
            btnVariant: 'contained'
        },
];







const StepCard = () => {
    return (
      <Card sx={{ display: "flex", p: 3, borderRadius: 1, border: `1px solid ${COLORS.GRAY_LIGHT_1}`, boxShadow: 4, width: '85%' }} variant="outlined">
      <Grid container spacing={5}>
        <Grid item xs={5}>
          <Box>
            <Typography variant="h6"> Start Your Journey into our Adsense Partner Program</Typography>
            <Typography sx={{ mt: 2, fontSize: '14px' }}>
              Complete the following Steps to Get started With our Adsense Partners Program for Buyer Apps
            </Typography>
            
            <Link href={PATH.settings}>
              <Button variant="outlined" sx={{ color: '#4a5ee5', mt: 6, fontSize: 'smaller', ":hover": 
                  { cursor: 'pointer', backgroundColor: COLORS.SIDEBAR_LIGHT_BLUE, color: COLORS.SIDEBAR_DARK_BLUE, border: "none" } }}>
                Configure Organisation Settings
              </Button>
            </Link>
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
              <Box sx={{ mt: 2, display: 'flex', py: 1, justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                <Typography gutterBottom variant="h5" component="div">
                  Welcome as Our Adsense Partner
                </Typography>
                <Typography gutterBottom variant="h6">
                  Let&apos;s get started by setting up with the following steps
                </Typography>
              </Box>

              <Box sx={{ my: 2, borderRadius: 1,  display: 'flex', py: 1, justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                  <StepCard />
              </Box>

              <Box sx={{ display: "flex", justifyContent: "space-between", mt: 7, flexDirection: 'row-reverse' }}>
                  <BlogCard cards={cards} />
              </Box>
          </Box>
      </div>
  );

}