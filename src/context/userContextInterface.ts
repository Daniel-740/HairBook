import { User } from "@/interfaces/user.interface";

export interface UserContextInterface {
    userApp: User | null;
    logOut: () => void;
    setUserApp: React.Dispatch<React.SetStateAction<User | null>>;
}