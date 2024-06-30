"use client";
import React from "react";
import { 
    Box, Typography, Paper,
    Card, Divider, Step, Stepper, StepLabel, StepContent, Button, StepConnector, StepIconProps, 
    CardActionArea, CardContent, styled
} from "@mui/material";


import Arrows from "./../../assets/illustrations/rights-3.png"
import steps from './steps'
import PageHeader from "@/app/components/ui/PageHeader";

import analyticsIllustration from "./../../assets/illustrations/analytics-page.png";
import adsIllustration from "./../..//assets/illustrations/ads-page.png";
import paymentsIllustration from "./../../assets/illustrations/payments-page.png";
import Image from "next/image"; 
import { useRouter } from "next/navigation";
import BlogCard from '../../components/ui/BlogCard'



const cards = [
        {
            img: analyticsIllustration,
            title: "Analytics",
            subtitle:
                "Learn Insights on how well you perform on various metrics",
            btncolor: "black",
            href: 'analytics',
            color: '#0bb7af'
        },
        {
            img: adsIllustration,
            title: "Ads Management",
            subtitle:
                "Create, Manage & Place Ads onto your Buyer App",
            btncolor: "black",
            href: 'ads',
            color: '#0bb7af'
        },
        {
            img: paymentsIllustration,
            title: "Payment Gateways",
            subtitle:
                "Checkout on your Earnings gained from Ads & Withdrawal",
            btncolor: "black",
            href: 'payments',
            color: '#0bb7af'
        },
];


const CustomConnector = styled(StepConnector)(({ theme }) => ({
  '& .MuiStepConnector-line': {
    borderColor: 'white',
  },
}));

const CustomStepLabel = styled(StepLabel)(({ theme }) => ({
  '& .MuiStepLabel-label': {
    color: 'black',
  },
  '& .Mui-active .MuiStepLabel-label': {
    color: 'black',
  },
  '& .Mui-completed .MuiStepLabel-label': {
    color: 'black',
  },
}));

const CustomStepContent = styled(StepContent)(({ theme }) => ({
  color: 'black',
  '& .MuiStepContent-root': {
    color: 'black',
  },
}));

const CustomStepIconRoot = styled('div')<StepIconProps>(({ theme, active, completed }) => ({
  backgroundColor: '#35363b',
  zIndex: 1,
  color: 'white',
  width: 24,
  height: 24,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
}));


const CustomStepIcon: React.FC<StepIconProps> = (props) => {
  const { active, completed, className } = props;

  return (
    //@ts-ignore
    <CustomStepIconRoot active={active} completed={completed} className={className}>
      {String(props.icon)}
    </CustomStepIconRoot>
  );
};

interface Step {
  label: string;
  description: string;
}

interface VerticalStepperProps {
  steps: Step[];
  activeStep: number;
}

const VerticalStepper: React.FC<VerticalStepperProps> = ({ steps, activeStep }) => {
  return (
    <Box sx={{ maxWidth: 400, ml: 5 }}>
      <Stepper activeStep={activeStep} orientation="vertical" connector={<CustomConnector />}>
        {steps.map((step, index) => (
          <Step key={step.label}>
            <CustomStepLabel StepIconComponent={CustomStepIcon} sx={{ color: 'white' }}>
              {step.label}
            </CustomStepLabel>
            <CustomStepContent sx={{ borderLeft: '1px solid black' }}>
              <Typography sx={{ color: 'black' }}>{step.description}</Typography>
              <Box>
                <div>
                  <Button
                    variant="contained"
                    sx={{ backgroundColor: '#35363b', color: 'white', fontSize: '10px', my:1 }}
                    onClick={() => console.log('Step button clicked')}
                  >
                    {index === steps.length - 1 ? 'Finish' : 'Continue'}
                  </Button>
                </div>
              </Box>
            </CustomStepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography sx={{ color: 'white' }}>All steps completed - you&apos;re finished!</Typography>
        </Paper>
      )}
    </Box>
  );
};



const StepCard = () => {
    return (
        <Card sx={{ 
            display: "flex", p: 2, borderRadius: 3, paddingBottom: "0", boxShadow: 1, flexDirection: 'row'
            }} variant="outlined">
            <Box sx={{ flex: 3, p: 2 }}>
                <Typography variant="h6">Start Your Journey as Adsense Partner</Typography>
                <Typography variant="body1" sx={{ mt: 5 }}>Complete the steps to start getting earnings from our Adsense Partners Program</Typography>
                <Box sx={{ mt: 2, display: "flex", alignItems: "center"}}>
                    <Image src={Arrows} width={110} height={80} alt="arrows"/>
                </Box>
            </Box>
            <Box sx={{ flex: 3, p: 2}}>
              <VerticalStepper steps={steps} activeStep={0}/>
            </Box>
        </Card>
    );
};






export default function DashBoard() {
    //@ts-ignore
    const router = new useRouter();

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