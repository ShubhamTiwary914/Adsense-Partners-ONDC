import { 
    Box, Typography
} from "@mui/material"
import BarGraph from "./../../components/graphs/BarGraph"
import StatCard from "./../../components/ui/StatCard" 
import * as performance from './performanceStats'
import * as earnings from './earningsStats'

import PageHeader from "@/app/components/ui/PageHeader"
import DropSelector from "@/app/components/ui/DropSelector"


import impressionsIcon from '../../assets/icons/analytics/megaphone.png'
import clicksIcon from '../../assets/icons/analytics/pay-per-click.png'
import ordersIcon from '../../assets/icons/analytics/order-1.png'
import earnIcon from '../../assets/icons/analytics/income.png'



export default function Analytics(){
    return (
        <Box sx={{ p: 3 }}>
            <PageHeader title="Analytics" subtitle="Learn how well your ads have performed over time"/>
        
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', padding: 1, mt: 5 }}>
            <Typography gutterBottom variant="h5" component="div" sx={{ borderBottom: '3px solid #1A97f5', display: 'inline', py: 1 }}> Showing Statistics For </Typography>
                <DropSelector />    
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 10, mt: 3 }}>
                <StatCard title="Impressions" value="12k" image={impressionsIcon}/>
                <StatCard title="Clicks" value="183" image={clicksIcon}/>
                <StatCard title="Orders" value="21" image={ordersIcon}/>
                <StatCard title="Earnings" value="$60" image={earnIcon}/>
            </Box>
            <Box sx={{ mb: 8 }}>
                <BarGraph title={performance.performanceTitle} graphConfig={performance.performanceConfig} graphData={performance.performanceData}/>
            </Box>
            
            <BarGraph title={earnings.earningsTitle} graphConfig={earnings.earningsConfig} graphData={earnings.earningsData} />
        </Box>
    )
}

