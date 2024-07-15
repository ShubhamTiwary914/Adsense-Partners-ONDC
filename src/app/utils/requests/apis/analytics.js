
import axios from "axios";


//region performances
export const getPerformanceData = async (performanceQuery, baseURL) =>{
    console.log(performanceQuery)
    const fetchURL = `${baseURL}/api/routes/analytics/performance/fetch/`
    const res = await axios.post(fetchURL, performanceQuery)
    return res.data;
}


export const initialisePerformance = async (buyerAppId, baseURL) =>{
    const initURL = `${baseURL}/api/routes/analytics/performance/init/`
    const res = await axios.post(initURL, { buyerAppId: buyerAppId })
    return res.status;
}



//region earnings
export const getEarningsData = async (performanceQuery, baseURL) =>{
    const fetchURL = `${baseURL}/api/routes/analytics/earnings/fetch/`
    const res = await axios.post(fetchURL, performanceQuery)
    return res.data;
}