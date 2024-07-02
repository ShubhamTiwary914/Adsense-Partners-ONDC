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
    colors: ["#1e4db7"],
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
        categories: ["tue", "wed", "thru", "fri", "sat", "sun", "mon(today)"],
        labels: { style: { cssClass: "grey--text lighten-2--text fill-color" } },
    },
    yaxis: {
        show: true,
        min: 100,
        max: 400,
        tickAmount: 3,
        labels: { style: { cssClass: "grey--text lighten-2--text fill-color" } },
    },
    stroke: { show: true, width: 5, lineCap: "butt", colors: ["transparent"] },
    tooltip: { theme: "dark" },
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



export { chartoptions, data, title, barConfig, generator }