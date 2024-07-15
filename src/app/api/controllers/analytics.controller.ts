import { performanceSchema, earningsSchema, Performances, Earnings } from "../models/analytics.model";
import { InferSchemaType } from "mongoose";


type PerformanceInterface = InferSchemaType<typeof performanceSchema>;
type EarningInterface = InferSchemaType<typeof earningsSchema>;

interface searchquery_params {
    buyerAppID: string,
    timestamps: [Date]
}

//region performance
export async function savePerformanceData(performanceData: Omit<PerformanceInterface, '_id'>) {
    try {
        const newPerformance = new Performances(performanceData);
        return newPerformance.save();
    } catch (error) {
        return { error: 'Error saving performance data' };
    }
}

export async function fetchPerformances(query: searchquery_params){
    const {buyerAppID, timestamps} = query;
    if (!buyerAppID || !timestamps || !Array.isArray(timestamps)) {
        return console.error('Invalid Input Entered While fetching Performance @api/routes/analytics/performance/fetch/');
    }

    const results = [];
    for (let i = 0; i < timestamps.length - 1; i++) {
        const startTime = new Date(timestamps[i]);
        const endTime = new Date(timestamps[i + 1]);

        const [leftDoc, rightDoc] = await Promise.all([
            Performances.findOne({
                buyerAppID,
                timestamp: { $lte: startTime }
            }).sort({ timestamp: -1 }),
            Performances.findOne({
                buyerAppID,
                timestamp: { $gte: endTime }
            }).sort({ timestamp: 1 })
        ]);

        let resultant = {}
        if(rightDoc == null && leftDoc == null)
            resultant = {"impressions": 0, "clicks": 0, "orders": 0}
        else if(rightDoc == null || leftDoc == null){
            const doc = (rightDoc == null) ? leftDoc : rightDoc;
            resultant = {
                "impressions": doc.metrics.impressions,
                "clicks": doc.metrics.clicks,
                "orders": doc.metrics.orders
            }
        }
        else{
            resultant = {
                "impressions": rightDoc.metrics.impressions - leftDoc.metrics.impressions,
                "clicks": rightDoc.metrics.clicks - leftDoc.metrics.clicks,
                "orders": rightDoc.metrics.orders - leftDoc.metrics.orders,
            }
        }
        results.push(resultant);
    }

    // console.log("{Performance Fetched Results: \n")
    // console.log(results)

    return ({ metrics: results })
}



//region earnings
export async function saveEarningsData(earningsData: Omit<EarningInterface, '_id'>) {
    try {
        const newEarnings = new Earnings(earningsData);
        return newEarnings.save();
    } catch (error) {
        return { error: 'Error saving earnings data' };
    }
}




export async function fetchEarnings(query: searchquery_params){
    const {buyerAppID, timestamps} = query;
    if (!buyerAppID || !timestamps || !Array.isArray(timestamps)) {
        return console.error('Invalid Input Entered While fetching earnings @api/routes/analytics/earnings/fetch/');
    }

    const results = [];
    for (let i = 0; i < timestamps.length - 1; i++) {
        const startTime = new Date(timestamps[i]);
        const endTime = new Date(timestamps[i + 1]);

        const [leftDoc, rightDoc] = await Promise.all([
            Earnings.findOne({
                buyerAppID,
                timestamp: { $lte: startTime }
            }).sort({ timestamp: -1 }),
            Earnings.findOne({
                buyerAppID,
                timestamp: { $gte: endTime }
            }).sort({ timestamp: 1 })
        ]);

        let resultant = {}
        if(rightDoc == null && leftDoc == null)
            resultant = {"earnings": 0}
        else if(rightDoc == null || leftDoc == null){
            const doc = (rightDoc == null) ? leftDoc : rightDoc;
            resultant = {
                "earnings": doc.metrics.earnings,
            }
        }
        else{
            resultant = { "earnings": rightDoc.metrics.earnings - leftDoc.metrics.earnings }
        }
        results.push(resultant);
    }

    return ({ metrics: results })
}
