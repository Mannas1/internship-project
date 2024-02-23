import { createContext, useState } from "react";

const defaultState = {
    
    userAuth: false,
    changeAuthState: () => {},
    checkAuthStatus: () => {}
}

export const UserContext = createContext(defaultState);

const UserState = ({children}:any) => {
    const [userAuth, setUserAuth] = useState(false);
    const changeAuthState = () => {
        setUserAuth(true);
    }
    const checkAuthStatus = () => {
        if (localStorage.getItem("cookieFalback") != null || "") {
            setUserAuth(true);
            
        } else {
            return false;
        }
    }

    return (
        <UserContext.Provider value={{userAuth, changeAuthState, checkAuthStatus}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserState;