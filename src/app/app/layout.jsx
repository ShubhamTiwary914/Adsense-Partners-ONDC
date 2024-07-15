"use client";
import {OrgProvider} from '@/app/context/OrgProvider'



export default function AppLayout({children}){
    return (
        <OrgProvider>
            { children }
        </OrgProvider>
    )
}