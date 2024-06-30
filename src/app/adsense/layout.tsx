import SideNav from '@/app/components/sidebar/SideNav'
import { Box } from "@mui/material";

import { useRouter } from 'next/navigation';


export default function RootLayout({children}: Readonly<{ children: React.ReactNode;}>){
    const sidebarWith = 270;

    return (
        <Box sx={{backgroundColor: 'rgba(213,243,242,0.13)'}}>
            <SideNav isSidebarOpen={true} sidebarWidth={sidebarWith}/>
            <Box sx={{ ml: `${sidebarWith+20}px` }}>
                {children}
            </Box>
        </Box>
    );
}
