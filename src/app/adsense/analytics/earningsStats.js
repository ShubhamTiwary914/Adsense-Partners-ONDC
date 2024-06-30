const earningsConfig = {
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


const earningsData = [
    { name: "Earnings", data: [355, 390, 300, 350, 390, 180, 355] },
];


const earningsTitle  = 'Earnings Statistics'


export { earningsConfig, earningsData, earningsTitle }