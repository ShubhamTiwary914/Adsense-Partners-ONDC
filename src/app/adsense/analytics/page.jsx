"use client";
import { 
    Box, Typography
} from "@mui/material"
import dynamic from 'next/dynamic';

const BarGraph = dynamic(() => import('./../../components/graphs/BarGraph'), { ssr: false });
import * as performance from './performanceStats'
import * as earnings from './earningsStats'
import * as topStats from './topStats';


import StatCard from "./../../components/ui/StatCard" 
import Charts from './../../components/graphs/Charts'
import PageHeader from "@/app/components/ui/PageHeader"
import DropSelector from "@/app/components/ui/DropSelector.jsx"
import { useState } from "react";




export default function Analytics(){
    const [ages, setAges] = useState([1,1,1])
    const [stats, setstats] = useState(topStats.generator())
    const [performanceStats, setperformanceStats] = useState(performance.generator(ages[1]))
    const [earningStats, setearningStats] = useState(earnings.generator(ages[2]))


    const ageSetter = (index) => (event) =>{
        const val = event.target.value;
        setAges((old)=>{
            const newAges = [...ages]
            newAges[index] = val;
            return newAges;
        })

        switch(index){
            case 0:
                setstats(topStats.generator());
                break;
            case 1:
                setperformanceStats(performance.generator(val))
                break;
            case 2:
                setearningStats(earnings.generator(val))
                break;
        }
    }
    
    console.log(earningStats)

    return (
        <Box sx={{ p: 3 }}>
            <PageHeader title="Analytics" subtitle="Learn how well your ads have performed over time"/>
        
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', padding: 1, mt: 5 }}>
            <Typography gutterBottom variant="h5" component="div" sx={{ borderBottom: '3px solid #ffd43b', display: 'inline', py: 1 }}> Showing Statistics For </Typography>
                <DropSelector ages={ages} ageSetter={ageSetter} index={0}/>    
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 10, mt: 3 }}>
                {stats.map((stat, index) => (
                    <StatCard title={stat.title} value={stat.value} Icon={stat.Icon} bg={stat.bg} color={stat.color} key={index}/>
                ))}
            </Box>
            <Box container>
                <BarGraph stats={performanceStats} ages={ages} ageSetter={ageSetter}/>
                <Charts chartoptions={earningStats} ages={ages} ageSetter={ageSetter}/>
            </Box>
        </Box>
    )
}

