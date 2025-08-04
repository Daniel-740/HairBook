import { PropsWithChildren, useState } from "react";
import { UserContext } from "./UserContext";
import { User } from "@/interfaces/user.interface";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const UserProvider = (props: PropsWithChildren) => {

    const [userApp, setUserApp] = useState<User | null>(null);

    const logOut = async () => {
        await AsyncStorage.removeItem('user');
        setUserApp(null);
    }

    return (
        <UserContext.Provider value={{
            userApp,
            setUserApp,
            logOut
        }}>
          {props.children}  
        </UserContext.Provider>
    )
}