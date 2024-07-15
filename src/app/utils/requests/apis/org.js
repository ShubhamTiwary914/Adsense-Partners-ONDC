import axios from "axios"
import { setLocalData } from '@/app/utils/utils'


export const addOrganisation = async (baseURL, org) =>{
    const creationPath = `${baseURL}/api/routes/org/onboard/`;
    const parseEnv = (envStr) =>
        ( (envStr == "staging") ? 0 : ( (envStr == "pre-prod") ? 1 : 2 ) );
    let envr = parseEnv(org['env'])
    
    const orgData = {
        "name": org['organisation'],
        "email": org['contactEmail'],
        "address": {
            "address": org['address'],
            "city": org['city'],
            "state": org['state'],
            "zipcode": org['zip'],
        },
        "contacts": [
            {
                "name": org['contactName'],
                "email": org['contactEmail'],
                "mobile": org['contactNo']
            }
        ],
        "documents": [],
        "payments": [],
        "buyerApp": {
            "subscriberID": org['subscriberID'],
            "BAP_URL": org['bapURL'],
            "country": org['bapCountry'],
            "domain": org['domain'],
            "environment": envr,
            "apptype": org['app'],
        },
        "encpass": org['encpass'],
        "credAuth": org['credAuth']
    }

    const res = await axios.post(creationPath, orgData);
    setLocalData('org', JSON.stringify(orgData))
    //gets org id
    return res;
}




export const getOrganisation = async (baseURL, query) =>{ 
    const fetchPath = `${baseURL}/api/routes/org/fetch/`;
    const res = await axios.post(fetchPath, query)
    return res;
}