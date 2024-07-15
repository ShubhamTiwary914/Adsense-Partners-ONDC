import { Box , Typography } from "@mui/material";
import PageHeader from "@/app/components/ui/PageHeader";

export default function Ads() {

    return (
        <Box sx={{m: 3}}>
            <PageHeader title="Ads Manager" subtitle="Create & Manage your Buyer App Ads"/>
            <Typography variant="h4" sx={{ mt: 10, mx: 2  }}>
                Work in Progress
            </Typography>
        </Box>
    );
    
    }