
import React, {useState} from 'react';




const defaultOrganisation = {
    "_id": "",
    "name": "",
    "email": "",
    "credAuth": false,
    "logged": false,
    "encpass": "",
    "address": {
        "address": "",
        "city": "",
        "state": "",
        "zipcode": ""
    },
    "contacts": [
        {
            "name": "",
            "email": "",
            "mobile": ""
        }
    ],
    "documents": [],
    "payments": [],
    "buyerApp": {
        "subscriberID": "",
        "BAP_URL": "",
        "country": "",
        "domain": "",
        "environment": 0,
        "apptype": ""
    },
    "__v": 0
}

const OrgContext = React.createContext();

const OrgProvider = ({ children }) => {
    const [org, setOrg] = useState(defaultOrganisation);

    const updateOrgSingle = (key, value) => {
        setOrg(prev => ({
            ...prev,
            [key]: value
        }));
    };

    const logOffOrg = () =>{
        setOrg(defaultOrganisation)
    }


    return (
        <OrgContext.Provider value={{ org, setOrg, updateOrgSingle, logOffOrg }}>
            {children}
        </OrgContext.Provider>
    );
};


export { OrgContext, OrgProvider  };


