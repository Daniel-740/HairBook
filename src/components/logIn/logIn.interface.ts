
export interface LogInProps {
    email: string;
    setEmail: (email: string) => void;
    setPassword: (password: string) => void;
    setShowPassword: (show: boolean) => void;
    password: string;
    showPassword: boolean;
    handleLogin: () => void;
}