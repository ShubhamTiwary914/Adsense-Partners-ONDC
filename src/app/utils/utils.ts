
export const getLocalData = (key: string) =>{
    if (typeof window !== 'undefined') {
        const item = localStorage.getItem(key);
        return item;
    }
    return null;
}


export const setLocalData = (key: string, value: any) =>{
    if (typeof window !== 'undefined') 
        localStorage.setItem(key, value);
}


export const clearLocalData = (key: string) =>{
    if (typeof window !== 'undefined') 
        localStorage.removeItem(key)
}


export function removeKey(obj: any, key: string) {
    if (obj.hasOwnProperty(key)) { 
        const newObj = { ...obj }; 
        delete newObj[key]; 
        return newObj; 
    }
    return obj;
}