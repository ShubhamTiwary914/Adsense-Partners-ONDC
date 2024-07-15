"use client";
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
import AdsClickOutlinedIcon from '@mui/icons-material/AdsClickOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined';

import StatCard from "./../../../components/ui/StatCard" 
import { Box } from '@mui/material';
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import {COLORS} from '@/app/constant/THEME'


let topStats = [
    {
        title: 'Impressions',
        key: 'impressions',
        value: 0,
        unit: '',
        Icon: CampaignOutlinedIcon,
    },
    {
        title: 'Clicks',
        key: 'clicks',
        value: 0,
        unit: '',
        Icon: AdsClickOutlinedIcon,
    },
    {
        title: 'Orders',
        key: 'orders',
        value: 0,
        unit: '',
        Icon: ShoppingCartOutlinedIcon,
    },
    {
        title: 'Earnings',
        key: 'earnings',
        value: 0,
        unit: '$',
        Icon: CurrencyExchangeOutlinedIcon,
    }
]


const updateStats = (data, topStats) =>{
    topStats.map(stat=>{
        if(stat.key in data){
            let val = data[stat.key]
            stat.value = `${val}${stat.unit}`
        }
        return stat
    })
    return topStats
}



function TopStats({ stats }){
    if(stats != null)
        topStats = updateStats(stats, topStats)

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 10, mt: 3 }}>
            {topStats.map((stat, index) => (
                (stats != null) ? (
                    <StatCard  key={index} title={stat.title} value={stat.value} Icon={stat.Icon} bg={COLORS.GRAY_LIGHT_1} color={COLORS.SIDEBAR_DARK_BLUE}/>
                ) : (<Skeleton height={100} key={index}/>)
            ))}
        </Box>
    )
}




export default TopStats