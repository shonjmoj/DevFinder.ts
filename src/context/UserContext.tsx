import {createContext, useState} from 'react'
import useFetch, { UserInfo } from '../hooks/useFetch';


interface ResponseInfo {
    value? : string;
    setValue?: any;
    user? : UserInfo;
    isLoading?: boolean; 
}


export const UserContext = createContext<ResponseInfo>({})

export const User = ({children} : {children: JSX.Element}) => {
    const [value, setValue] = useState('');
    const {user, isLoading} = useFetch(value);

    return(
        <UserContext.Provider value={{value, setValue, user, isLoading}}>
            {children}
        </UserContext.Provider>
    )
}