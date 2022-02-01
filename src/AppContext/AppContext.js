import { createContext, useState } from "react";

export const AppContext = createContext(null);

const AppProvider = ({ children }) => {
    const [isLogged, setIsLogged] = useState(false);

    return (
        <AppContext.Provider
            value={{
                isLogged,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;
