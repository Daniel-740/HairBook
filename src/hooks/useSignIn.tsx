import { useEffect, useState } from "react";
import { login } from "@/services/user.service";
import { StackNavigation } from "@/navigation";
import { Routes } from "@/navigation/routes";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useUser } from "@/context/UserContext";


export const useSignIn = ({navigation}: StackNavigation) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const { setUserApp } = useUser();
    
    const validateEmail = (email: string) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    const validatePassword = (password: string) => {
        return password.length >= 4;
    }

    const handleLogin = async () => {
        setIsLoading(true);
        setError(null);
        
        try {
            if (!validateEmail(email)) {
                throw new Error("Formato de email inválido");
            }

            if (!validatePassword(password)) {
                throw new Error("La contraseña debe tener al menos 4 caracteres");
            }

            const userLog = login(email, password);

            if (!userLog) {
                throw new Error("Credenciales incorrectas");
            }

            await AsyncStorage.setItem('user', JSON.stringify(userLog));
            setUserApp(userLog);
            navigation.navigate(Routes.HOME);
            return true;
            
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Error desconocido');
            return false;
        }
    };

    useEffect(() => {
        const checkUser = async () => {
            const userData = await AsyncStorage.getItem('user');
            if (userData) {
                const user = JSON.parse(userData);
                setUserApp(user);
                navigation.navigate(Routes.HOME);
            }
        };

        checkUser();
        setIsLoading(false);
    }, [])
    
    return {
        email,
        setEmail,
        password,
        setPassword,
        showPassword,
        setShowPassword,
        error,
        isLoading,
        handleLogin,
    };
}