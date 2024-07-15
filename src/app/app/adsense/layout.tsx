"use client";
import SideNav from '@/app/components/nav/SideNav'
import Header from '@/app/components/nav/Header'
import { Box } from "@mui/material";
import { useEffect, useState } from 'react';
import { PerformaceProvider } from '@/app/context/PerformanceProvider';
import { EarningsProvider } from '@/app/context/EarningsProvider';


const sideBar_widthExpanded = 230;
const sideBar_widthMinimized = 90;


export default function AdsenseLayout({children}: Readonly<{ children: React.ReactNode;}>){
    const [sideBarWidth, setSideBarWidth] = useState(sideBar_widthExpanded);
    //0=icons+ text(default) | 1=only icons
    const [navSize, setNavSize] = useState(0);  

    useEffect(()=>{
        if(!navSize)
            setSideBarWidth(sideBar_widthExpanded)
        else
            setSideBarWidth(sideBar_widthMinimized)
    })


    return (
        <PerformaceProvider>
            <EarningsProvider>
                <Box sx={{backgroundColor: 'rgba(213,243,242,0.13)'}}>
                    <Header navSize={navSize} setNavSize={setNavSize}/>
                    <SideNav isSidebarOpen={true} sideBarWidth={sideBarWidth} navMode={navSize}/>
                    <Box sx={{ ml: `${sideBarWidth+20}px`, mt: 5 }}>
                        {children}
                    </Box>
                </Box>
            </EarningsProvider>
        </PerformaceProvider>
    );
}
