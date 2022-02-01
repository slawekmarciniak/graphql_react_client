import { createContext, useState } from "react";

export const AppContext = createContext(null);

const AppProvider = ({ children }) => {
    const [users, setUsers] = useState(null);

    return (
        <AppContext.Provider
            value={{
                users,
                setUsers,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;
