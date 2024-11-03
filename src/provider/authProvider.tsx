import {createContext, ReactNode} from "react";
import { useQuery } from "@tanstack/react-query";
import { getAccessToken } from "@/app/services/api";
import { AuthContextType } from "@/types/authTypes"

const defaultAuthData = {
    isLoading: true,
    accessToken: undefined,
    isLogin: false
};

const AuthContext = createContext<AuthContextType>(defaultAuthData);

export const AuthProvider = ({children}: {children: ReactNode}) => {
    // only pass an object to parameter, it takes 2 properties - query function and query keys
    //query key : react query use this query key as former identification for the query for the cache
    const { data: accessToken, isLoading } = useQuery({
        queryFn: () => getAccessToken(),
        queryKey: ["access_token"]
    });

    const result = {
        isLoading,
        accessToken,
        isLogin: accessToken ? true : false
    }

    return (
        <AuthContext.Provider value={result}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;