import { fetchPerformances } from "./../../../utils/requests/http";
import { generateTimeLabels } from './../../../utils/timeUtils';
import { getLocalData } from '@/app/utils/utils'

const columns = ['mon', 'tue', 'wed', 'thru', 'fri', 'sat', 'sun']


const data = [
    { name: "Orders", data: [355, 390, 300, 350, 390, 180, 355] },
    { name: "Clicks", data: [280, 250, 325, 215, 250, 310, 280] },
    { name: "Impressions", data: [223, 240, 195, 243, 50, 310, 220] },
];

const title  = 'Performance Overview'


function getTimestamp(mode) {
    const endTime = new Date();
    let startTime = new Date(endTime);

    // Round up end time
    if (mode === 0) {
        endTime.setMinutes(0, 0, 0);
        endTime.setHours(endTime.getHours());
    } else if (mode == 1){
        endTime.setHours(0, 0, 0, 0);
        endTime.setDate(endTime.getDate() + 1);
    }
    else if(mode == 2){
        endTime.setDate(endTime.getDate() - endTime.getDay())
    }
    else
        endTime.setDate(1)

    switch(mode) {
        case 0: // 12 hours before
            startTime.setHours(endTime.getHours() - 12, 0, 0, 0);
            break;
        case 1: // 7 days before
            startTime.setDate(endTime.getDate() - 7);
            startTime.setHours(0, 0, 0, 0);
            break;
        case 2: // 4 weeks before
            startTime.setDate(endTime.getDate() - 28);
            startTime.setHours(0, 0, 0, 0);
            break;
            case 3: // 6 months before
            startTime.setMonth(endTime.getMonth() - 6);
            startTime.setDate(1);
            startTime.setHours(0, 0, 0, 0);
            break;
        default:
            break;
    }

    
    const intervals = [];
    let currentTime = new Date(startTime);

    while (currentTime < endTime) {
        intervals.push(currentTime.toISOString());
        switch(mode) {
            case 0:
                currentTime.setHours(currentTime.getHours() + 1);
                break;
            case 1:
                currentTime.setDate(currentTime.getDate() + 1);
                break;
            case 2:
                currentTime.setDate(currentTime.getDate() + 7);
                break;
            case 3:
                currentTime.setMonth(currentTime.getMonth() + 1);
                break;
            default:
                break;
        }
    }

    return {
        start: startTime.toISOString(),
        end: endTime.toISOString(),
        intervals: intervals
    };
}




async function processPerformanceData(mode, orgId) {
    const {start, end, intervals} = getTimestamp(mode);
    const searchQuery = {
        buyerAppId: orgId,
        start: start,
        end: end,
        mode: mode
    };


    try {
        const response = await fetchPerformances(searchQuery);
        const data = [
            { name: "Orders", data: [] },
            { name: "Clicks", data: [] },
            { name: "Impressions", data: [] }
        ];

        // Sort the response data
        response.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
        let index=0;
        let mini=0, maxi=100
        let sums = { "impressions": 0, "clicks": 0, orders: 0 }
        
        while (index < intervals.length) {
            const existingData = response.find(item => item.timestamp === intervals[index]);
            index += 1;
            if (existingData) {
                mini = Math.min(mini, existingData.orders, existingData.clicks, existingData.impressions)
                maxi = Math.max(maxi, existingData.orders, existingData.clicks, existingData.impressions)
                sums.impressions += existingData.impressions;
                sums.clicks += existingData.clicks;
                sums.orders += existingData.orders;
                data[0].data.push(existingData.orders);
                data[1].data.push(existingData.clicks);
                data[2].data.push(existingData.impressions);
            } else {
                data[0].data.push(0);
                data[1].data.push(0);
                data[2].data.push(0);
            }
        }
        return {
            data: data,
            mini: mini, maxi: maxi,
            sums: sums
        };
    } catch (error) {
        console.error("Error fetching performance data:", error);
        throw error;
    }
}



async function getPerformanceData(index, orgId){
    //Data & Column
    const lengths = [12, 7, 4, 6]
    let length = lengths[index]
    const columns = generateTimeLabels(index, length)
    const { data, mini, maxi, sums } = await processPerformanceData(index, orgId)
    


    const barConfig = {
        grid: {
            show: true,
            borderColor: "transparent",
            strokeDashArray: 3,
            padding: { left: 0, right: 0, bottom: 0 },
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: "50%",
                endingShape: "rounded",
                borderRadius: 5,
            },
        },
        colors: ["#ffd43b", "#69db76", "#228be6"],
        fill: { type: "solid", opacity: 1 },
        chart: {
            offsetX: -15,
            toolbar: { show: false },
            foreColor: "#adb0bb",
            fontFamily: "'DM Sans',sans-serif",
            sparkline: { enabled: false },
        },
        dataLabels: { enabled: false },
        markers: { size: 0 },
        legend: { show: false },
        xaxis: {
            type: "category",
            categories: columns,
            labels: { style: { cssClass: "grey--text lighten-2--text fill-color" } },
        },
        yaxis: {
            show: true,
            min: mini,
            max: maxi,
            tickAmount: 5,
            labels: { style: { cssClass: "grey--text lighten-2--text fill-color" } },
        },
        stroke: { show: true, width: 5, lineCap: "butt", colors: ["transparent"] },
        tooltip: { theme: "dark" },
        series: data
    };

    return {
        barConfig: barConfig,
        data: data,
        title: title,
        sums: sums
    };
}





export {  columns, data, title, getPerformanceData }