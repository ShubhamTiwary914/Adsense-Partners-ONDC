'use client'
import Table from './../../../../components/ui/Table';
import { Box, Grid, TextField, Button } from '@mui/material';


const earningsData = [
    {
        date: "2024-06-01",
        baseEarnings: "1500",
        addOnEarnings: "500",
        totalEarnings: "2000",
        type: "click",
    },
    {
        date: "2024-06-02",
        baseEarnings: "1800",
        addOnEarnings: "300",
        totalEarnings: "2100",
        type: "order",
    },
    {
        date: "2024-06-03",
        baseEarnings: "1200",
        addOnEarnings: "200",
        totalEarnings: "1400",
        type: "impressions",
    },
    {
        date: "2024-06-04",
        baseEarnings: "1700",
        addOnEarnings: "400",
        totalEarnings: "2100",
        type: "click",
    },
    {
        date: "2024-06-05",
        baseEarnings: "1600",
        addOnEarnings: "350",
        totalEarnings: "1950",
        type: "order",
    },
    {
        date: "2024-06-06",
        baseEarnings: "1400",
        addOnEarnings: "450",
        totalEarnings: "1850",
        type: "impressions",
    },
    {
        date: "2024-06-07",
        baseEarnings: "1300",
        addOnEarnings: "250",
        totalEarnings: "1550",
        type: "click",
    },
    {
        date: "2024-06-08",
        baseEarnings: "1900",
        addOnEarnings: "600",
        totalEarnings: "2500",
        type: "order",
    },
    {
        date: "2024-06-15",
        baseEarnings: "1400",
        addOnEarnings: "350",
        totalEarnings: "1750",
        type: "impressions",
    },
];


const earningsColumns = [
    { id: 'date', label: 'Date' },
    { id: 'baseEarnings', label: 'Base Earnings' },
    { id: 'addOnEarnings', label: 'Add on Earnings' },
    { id: 'totalEarnings', label: 'Total Earnings' },
    { id: 'type', label: 'Type' },
];


const CalendarInput = () => {
  
};



export default function EarningsHistory(){
    return (
        <div>
            <CalendarInput />
            <Table columns={earningsColumns} items={earningsData}/>
        </div>
    )
}