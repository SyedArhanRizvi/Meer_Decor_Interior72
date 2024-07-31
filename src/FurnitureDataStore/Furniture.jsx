import { Children, createContext, useState } from "react";
export const StoreContext = createContext();
export const ContextProvider = ({children}) =>{
    const [data, setData] = useState([]);
    
    return (
        
    )
}