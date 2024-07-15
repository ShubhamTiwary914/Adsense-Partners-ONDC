import React, {useState} from 'react';


const EarningsContext = React.createContext();

const earningsDefault = null;



const EarningsProvider = ({ children }) => {
    const [earnings, setEarnings] = useState(earningsDefault);


    return (
        <EarningsContext.Provider value={{ 
            earnings, setEarnings 
        }}>
            {children}
        </EarningsContext.Provider>
    );
};


export { EarningsContext, EarningsProvider };
