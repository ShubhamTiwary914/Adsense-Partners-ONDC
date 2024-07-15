"use client";
import { Box } from "@mui/material";
import { useRouter } from "next/navigation";
import {getLocalData } from '@/app/utils/utils'
import PATH from "@/app/constant/ROUTES";


export default function AuthLayout({children}: Readonly<{ children: React.ReactNode;}>){
    const router = useRouter();
    if(getLocalData('org') && getLocalData('logged'))
        router.replace(PATH.dashboard)

    return (
        <Box>
            {children}
        </Box>
    );
}
