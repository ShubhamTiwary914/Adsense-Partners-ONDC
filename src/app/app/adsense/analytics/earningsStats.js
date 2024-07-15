import { fetchEarnings } from "./../../../utils/requests/http";
import {getTimestamps, generateTimeLabels } from './../../../utils/timeUtils';
import { getLocalData } from '@/app/utils/utils'


const data = [
    { name: "Earnings", data: [355, 390, 300, 350, 390, 180, 355] },
];
const columns = ["tue", "wed", "thru", "fri", "sat", "sun", "mon(today)"]


const title  = 'Earnings Statistics'


const chartoptions = {
    series: data,
    options: {
        chart: { type: "area" },
        dataLabels: { enabled: false },
        grid: { strokeDashArray: 2, borderColor: "rgba(0,0,0,0.1)" },
        stroke: { curve: "smooth", width: 1 },
        xaxis: { categories: columns },
        colors:  ['#2ead9c']
    },
    title: title
};



function generator(index) {
    const newColumns = [
        ['12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm'],
        ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'],
        ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul'],
        [2020, 2021, 2022, 2023, 2024]
    ];

    const dataSize = newColumns[index].length;
    const ranges = [
        { min: 100, max: 400 }, // for hours
        { min: 200, max: 500 }, // for days of the week
        { min: 500, max: 1000 }, // for months
        { min: 1000, max: 5000 } // for years
    ];

    function getRandomData(size, range) {
        const { min, max } = range;
        return Array.from({ length: size }, () => Math.floor(Math.random() * (max - min + 1)) + min);
    }

    const newData = [
        { name: "Earnings", data: getRandomData(dataSize, ranges[index]) }
    ];

    const chartoptions = {
        series: newData,
        options: {
            chart: { type: "area" },
            dataLabels: { enabled: false },
            grid: { strokeDashArray: 2, borderColor: "rgba(0,0,0,0.1)" },
            stroke: { curve: "smooth", width: 1 },
            xaxis: { categories: newColumns[index] },
            colors: ['#2ead9c']
        },
        title: 'Earnings Statistics'
    };

    return chartoptions
}




async function getEarningsData(index, orgId){
    const lengths = [12, 7, 4, 6]
    const intervals = [60, 24*60, 7*24*60, 30*24*60]
    let length = lengths[index]
    let interval = intervals[index]

    const timestamps = getTimestamps(length, interval)
    const searchQuery = {
        "buyerAppID": orgId,
        "timestamps": timestamps
    }

    //Data & Column
    const columns = generateTimeLabels(index, length)
    const data = [
        { name: "Earnings", data: [] },
    ];
    
    let res = await fetchEarnings(searchQuery)
    let mini=0, maxi= 500
    let earnTotal = 0

    res.metrics.forEach(metric=>{
        let val = Math.round(metric.earnings)
        earnTotal += val
        mini = Math.min(mini, val)
        maxi = Math.max(maxi, val)
        data[0].data.push(val)
    })

    const chartoptions = {
        series: data,
        options: {
            chart: { type: "area" },
            dataLabels: { enabled: false },
            grid: { strokeDashArray: 2, borderColor: "rgba(0,0,0,0.1)" },
            stroke: { curve: "smooth", width: 1 },
            xaxis: { categories: columns },
            colors: ['#2ead9c']
        },
        title: 'Earnings'
    };

    return {
        data: data,
        config: chartoptions,
        total: earnTotal
    }
}


export { chartoptions, data, title, generator, getEarningsData }