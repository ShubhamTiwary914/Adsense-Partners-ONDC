const columns = ['mon', 'tue', 'wed', 'thru', 'fri', 'sat', 'sun']


const data = [
    { name: "Orders", data: [355, 390, 300, 350, 390, 180, 355] },
    { name: "Clicks", data: [280, 250, 325, 215, 250, 310, 280] },
    { name: "Impressions", data: [223, 240, 195, 243, 50, 310, 220] },
];

const title  = 'Performance Overview'

const chartoptions = {
    series: data,
    options: {
        chart: { type: "area" },
        dataLabels: { enabled: false },
        grid: { strokeDashArray: 2, borderColor: "rgba(0,0,0,0.1)" },
        stroke: { curve: "smooth", width: 1 },
        xaxis: { categories: columns },
        colors:  ['#2ead9c', '#1f9324', '#a8c10e']
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
        { name: "Orders", data: getRandomData(dataSize, ranges[index]) },
        { name: "Clicks", data: getRandomData(dataSize, ranges[index]) },
        { name: "Impressions", data: getRandomData(dataSize, ranges[index]) }
    ];

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
            categories: newColumns[index],
            labels: { style: { cssClass: "grey--text lighten-2--text fill-color" } },
        },
        yaxis: {
            show: true,
            min: ranges[index].min,
            max: ranges[index].max,
            tickAmount: 3,
            labels: { style: { cssClass: "grey--text lighten-2--text fill-color" } },
        },
        stroke: { show: true, width: 5, lineCap: "butt", colors: ["transparent"] },
        tooltip: { theme: "dark" },
        series: newData
    };

    return {
        barConfig: barConfig,
        data: newData,
        title: title
    };
}





export { barConfig, columns, data, title, chartoptions, generator }