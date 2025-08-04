import { createContext, useContext } from "react";
import { UserContextInterface } from "./userContextInterface";

export const UserContext = createContext<UserContextInterface | undefined>(undefined);

export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error("useUser must be used within a UserProvider");
    }
    return context;
} 