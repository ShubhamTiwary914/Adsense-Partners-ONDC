import { Performances } from "../models/performance.model";


//region Saving & Updates

export async function savePerformanceData(input: {
  buyerAppId: string;
  timestamp: string;
  metric: { impressions: number; clicks: number; orders: number };
}) {
  const { buyerAppId, timestamp, metric } = input;
  const date = new Date(timestamp);
  let buyerApp = await Performances.findOne({ buyerAppId });

  if (!buyerApp) {
    // Create new buyer app entry if not exists
    buyerApp = new Performances({
      buyerAppId,
      hourly: [],
      daily: [],
      weekly: [],
      monthly: []
    });
  }

  try {
    await updateMetrics(buyerApp, "hourly", new Date(date.setMinutes(0, 0, 0)), metric);
    await updateMetrics(buyerApp, "daily", new Date(date.setHours(0, 0, 0, 0)), metric);
    await updateMetrics(buyerApp, "weekly", new Date(date.setDate(date.getDate() - date.getDay())), metric);
    await updateMetrics(buyerApp, "monthly", new Date(date.setDate(1)), metric);

    await clearQueue(buyerApp);

    const res = await buyerApp.save()
    return res
  } catch (err) {
    console.error('Error in savePerformanceData:', err);
    throw err;
  }
}

async function updateMetrics(
  buyerApp: any,
  interval: 'hourly' | 'daily' | 'weekly' | 'monthly',
  date: Date,
  metric: { impressions: number; clicks: number; orders: number }
) {
  try {
    const existingMetric = buyerApp[interval].find((m: any) => m.timestamp.getTime() === date.getTime());

    if (existingMetric) {
      existingMetric.impressions += metric.impressions;
      existingMetric.clicks += metric.clicks;
      existingMetric.orders += metric.orders;
    } else {
      buyerApp[interval].push({
        timestamp: date,
        impressions: metric.impressions,
        clicks: metric.clicks,
        orders: metric.orders
      });
    }
  } catch (err) {
    console.error('Error in updateMetrics:', err);
    throw err;
  }
}


//region Clear & Initialize


async function clearQueue(buyerApp: any) {
  const intervalLimits = {
    hourly: { time: 24 * 60 * 60 * 1000, items: 24 },
    daily: { time: 14 * 24 * 60 * 60 * 1000, items: 14 },
    weekly: { time: 8 * 7 * 24 * 60 * 60 * 1000, items: 8 },
    monthly: { time: 12 * 30 * 24 * 60 * 60 * 1000, items: 12 }
  };

  const currentTime = new Date().getTime();

  for (const interval of ['hourly', 'daily', 'weekly', 'monthly'] as const) {
    const { time: timeLimit, items: itemLimit } = intervalLimits[interval];

    // Remove old data
    buyerApp[interval] = buyerApp[interval].filter((m: any) => {
      return currentTime - m.timestamp.getTime() <= timeLimit;
    });

    // If still over the item limit, remove oldest entries
    if (buyerApp[interval].length > itemLimit) {
      buyerApp[interval] = buyerApp[interval].slice(-itemLimit);
    }
  }
}


export async function initPerformance(buyerAppId: String){
  const performance =  new Performances({
    buyerAppId,
    hourly: [],
    daily: [],
    weekly: [],
    monthly: []
  });

  let initializedPerformance = await performance.save()
  return initializedPerformance._id
}




//region Fetching


export async function fetchPerformanceData(input: {
  buyerAppId: string;
  start: string;
  end: string;
  mode: number;
}) {
  const { buyerAppId, start, end, mode } = input;
  const startDate = new Date(start);
  const endDate = new Date(end);
  const buyerApp = await Performances.findOne({ buyerAppId });

  if (!buyerApp) 
    throw new Error(`BuyerApp with id ${buyerAppId} not found.`);

  const getMetricsInRange = (metrics: any[], intervalStart: Date, intervalEnd: Date) => {
    return metrics.filter((m: any) => {
      const metricDate = new Date(m.timestamp);
      return metricDate >= intervalStart && metricDate <= intervalEnd;
    });
  };

  const modes = {
    0: "hourly",
    1: "daily",
    2: "weekly",
    3: "monthly"
  } as const;

  if (mode === 4) {
    return {
      hourly: getMetricsInRange(buyerApp.hourly, startDate, endDate),
      daily: getMetricsInRange(buyerApp.daily, startDate, endDate),
      weekly: getMetricsInRange(buyerApp.weekly, startDate, endDate),
      monthly: getMetricsInRange(buyerApp.monthly, startDate, endDate)
    };
  } else {
    const interval = modes[mode as keyof typeof modes];
    return getMetricsInRange(buyerApp[interval], startDate, endDate);
  }
}