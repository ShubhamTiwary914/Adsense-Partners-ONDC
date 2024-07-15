const baseURL = "http://localhost:3001"

import * as org from './apis/org';
import * as analytics from './apis/analytics';


export const saveOrganisation = async (orgFormData) =>{
    return await org.addOrganisation(baseURL, orgFormData)
}

export const fetchOrganisation = async (searchQuery) =>{
    return await org.getOrganisation(baseURL, searchQuery)
}


export const fetchPerformances = async (performanceQuery) =>{
    return await analytics.getPerformanceData(performanceQuery, baseURL);
}

export const initPerformances = async (buyerAppId) =>{
    return await analytics.initialisePerformance(buyerAppId, baseURL);
}


export const fetchEarnings = async (earningsQuery) =>{
    return await analytics.getEarningsData(earningsQuery, baseURL);
}

