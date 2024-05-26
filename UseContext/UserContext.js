import React, {createContext, useRef} from 'react';

export const UserContext = createContext();

export const UserProvider = ({children}) => {
    const data = useRef([
        { date: "01/05/24", category: "Food", amount: "50" },
        { date: "02/05/24", category: "Clothing", amount: "30" },
        { date: "03/05/24", category: "Entertainment", amount: "20" },
        { date: "04/05/24", category: "Utilities", amount: "100" },
        { date: "05/05/24", category: "Transportation", amount: "40" },
        { date: "07/05/24", category: "Healthcare", amount: "80" },
        { date: "08/05/24", category: "Rent", amount: "500" },
        { date: "09/05/24", category: "Electronics", amount: "200" },
        { date: "10/05/24", category: "Miscellaneous", amount: "70" },
    ]);
    return(
        <UserContext.Provider value={{data}}>
            {children}
        </UserContext.Provider>
    )
};