import { createContext, ReactElement, useContext, useState } from "react";
type Props = {
    loading: boolean;
    setLoading: (loading: boolean) => void;
};
const LoadingContext = createContext<Props | undefined>(undefined);

export const useLoading = () => {
    const context = useContext(LoadingContext);
    if (!context) throw new Error("Error");
    return context;
};

export const LoadingProvider = ({ children }: { children: ReactElement }) => {
    const [loading, setLoading] = useState<boolean>(false);
    return (
        <LoadingContext.Provider value={{ loading, setLoading }}>
            {children}
        </LoadingContext.Provider>
    );
};
