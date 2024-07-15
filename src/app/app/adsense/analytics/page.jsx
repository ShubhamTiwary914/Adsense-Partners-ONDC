"use client";
import { 
    Box, Typography
} from "@mui/material"
import dynamic from 'next/dynamic';

const BarGraph = dynamic(() => import('./../../../components/graphs/BarGraph'), { ssr: false });
import * as Performance from './performanceStats'
import * as Earnings from './earningsStats'
import TopStats, * as topStats from './topStats';



import Charts from './../../../components/graphs/Charts'
import PageHeader from "@/app/components/ui/PageHeader"
import DropSelector from "@/app/components/ui/DropSelector.jsx"
import { useEffect, useState, useContext } from "react";

import { PerformanceContext } from '@/app/context/PerformanceProvider'
import { OrgContext } from "@/app/context/OrgProvider";
import { EarningsContext } from "@/app/context/EarningsProvider";



export default function Analytics(){
    const [ages, setAges] = useState([1,1,1])
    const [stats, setstats] = useState(null)

    const { org } = useContext(OrgContext);
    const { earnings, setEarnings } = useContext(EarningsContext)
    const [ earningsConfig, setEarningsConfig ] = useState(null)

    const { performance, setPerformance } = useContext(PerformanceContext)
    const [ performanceConfig, setPerformanceConfig ] = useState(null)


    const setter = async (index, val) => {
        if(index == 0){
            const performances = await Performance.getPerformanceData(val, org._id)
            const earningsData = await Earnings.getEarningsData(val, org._id)
            const performanceMetrics = performances.sums;
            const earnTotal = earningsData.total;
            setstats(prev=>{
                const newStats = performanceMetrics
                newStats['earnings'] = earnTotal
                return newStats
            });
        }
        else if(index == 1){
            const performances = await Performance.getPerformanceData(val, org._id)
            setPerformanceConfig(performances.barConfig)
            setPerformance(performances.data)
        }
        else{
            const earningsData = await Earnings.getEarningsData(val, org._id)
            setEarnings(earningsData.data)
            setEarningsConfig(earningsData.config)
        }
    }

    const ageSetter =  (index) => async (event) =>{
        const val = event.target.value;
        setAges((old)=>{
            const newAges = [...old]
            newAges[index] = val;
            return newAges;
        })
        setter(index, val);
    }

    //set on load
    useEffect(()=>{
        setter(0, 1)
        setter(1, 1)
        setter(2, 1)
    }, [])


    return (
        <Box sx={{ p: 3 }}>
            <PageHeader title="Analytics" subtitle="Learn how well your ads have performed over time"/>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 1, mt: 5 }}>
                <Typography variant="h5" component="div" sx={{ py: 1, flex: 1, textAlign: 'center' }}>
                    Currently Viewing Statistics for 
                </Typography>
                <Box>
                    <DropSelector ages={ages} ageSetter={ageSetter} index={0}/>
                </Box>
            </Box>

            <TopStats stats={stats}/>
            <Box container>
                <BarGraph stats={performance} barConfig={performanceConfig} ages={ages} ageSetter={ageSetter}/> 
                <Charts chartoptions={earningsConfig} ages={ages} ageSetter={ageSetter} />
            </Box>
        </Box>
    )
}

