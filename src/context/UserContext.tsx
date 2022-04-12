import {createContext, useState} from 'react'
import useFetch, { test } from '../hooks/useFetch';


interface DataInfo {
    value? : string;
    setValue?: any;
    user? : test;
    isLoading?: boolean; 
}


export const UserContext = createContext<DataInfo>({})

export const User = ({children} : {children: JSX.Element}) => {
    const [value, setValue] = useState('');
    const {user, isLoading} = useFetch(value);

    return(
        <UserContext.Provider value={{value, setValue, user, isLoading}}>
            {children}
        </UserContext.Provider>
    )
}