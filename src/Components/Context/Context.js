import React, {createContext, useReducer } from 'react';
import {Reducer,data} from './Reducer';

export const GlobalContext = createContext('Initial Value');

function ContextProvider({ children }) {
   
    const [state, dispatch] = useReducer(Reducer, data);

    return (
        <GlobalContext.Provider value={{ state, dispatch }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default ContextProvider;