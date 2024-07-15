import React, {useState} from 'react';


const PerformanceContext = React.createContext();

const performanceDefault = null;



const PerformaceProvider = ({ children }) => {
    const [performance, setPerformance] = useState(performanceDefault);

    const updatePerformanceSingle = (key, value) => {
        setPerformance(prev => ({
            ...prev,
            [key]: value
        }));
    };

    return (
        <PerformanceContext.Provider value={{ 
            performance, setPerformance, updatePerformanceSingle 
        }}>
            {children}
        </PerformanceContext.Provider>
    );
};


export { PerformanceContext, PerformaceProvider };
