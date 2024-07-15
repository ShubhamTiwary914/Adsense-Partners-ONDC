const mongoose = require('mongoose');

const metricSchema = new mongoose.Schema({
  timestamp: {
    type: Date,
    required: true
  },
  impressions: {
    type: Number,
    default: 0
  },
  clicks: {
    type: Number,
    default: 0
  },
  orders: {
    type: Number,
    default: 0
  }
}, { _id: false });



const performanceSchema = new mongoose.Schema({
  buyerAppId: {
    type: String,
    required: true,
    unique: true
  },
  hourly: {
    type: [metricSchema],
    default: []
  },
  daily: {
    type: [metricSchema],
    default: []
  },
  weekly: {
    type: [metricSchema],
    default: []
  },
  monthly: {
    type: [metricSchema],
    default: []
  }
});



const Performances = mongoose.models.Performance || mongoose.model('Performance', performanceSchema);


export {
    performanceSchema, Performances
}
