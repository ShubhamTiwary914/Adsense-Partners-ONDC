"use client"
import { redirect } from "next/navigation";
import {getLocalData } from '@/app/utils/utils'
import PATH from '@/app/constant/ROUTES';


export default function Home() {
  const logged = getLocalData('logged')
  if(!logged)
    redirect(PATH.login);
  else
    redirect(PATH.dashboard)
  
  return (
    <div>
      
    </div>
  );
}