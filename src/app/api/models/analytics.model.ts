const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Analytics
const performanceSchema = new Schema({
    buyerAppID: { type: Schema.Types.ObjectId, ref: 'BuyerApp' },
    timestamp: Date,
    metrics: {
        impressions: Number,
        clicks: Number,
        orders: Number
    },
    storeID: Schema.Types.ObjectId,
    campaignID: Schema.Types.ObjectId
});


const earningsSchema = new Schema({
    buyerAppID: { type: Schema.Types.ObjectId, ref: 'BuyerApp' },
    timestamp: Date,
    metrics: {
        earnings: Number,
        seller: String,
        action: String
    }
});


const Performances = mongoose.models.Performance || mongoose.model('Performance', performanceSchema);
const Earnings = mongoose.models.Earnings || mongoose.model('Earnings', earningsSchema);


export {
    performanceSchema, Performances,
    earningsSchema, Earnings
}

