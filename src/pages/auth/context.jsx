import { createContext, useContext, useState, useMemo } from 'react';

const AuthContext = createContext(false);
const AuthContextHandlers = createContext(undefined);

export const useIsLogged = () => {
	const isLogged = useContext(AuthContext);
	return isLogged;
};

export const useAuthHandlers = () => {
	const authHandlers = useContext(AuthContextHandlers);
	return authHandlers;
};

export const AuthContextProvider = ({ alreadyLogged, children }) => {
	const [isLogged, setIsLogged] = useState(alreadyLogged);

	const authHandlers = useMemo(
		() => ({
			onLogin: () => setIsLogged(true),
			onLogout: () => setIsLogged(false),
		}),
		[]
	);

	return (
		<AuthContextHandlers.Provider value={authHandlers}>
			<AuthContext.Provider value={isLogged}>{children}</AuthContext.Provider>
		</AuthContextHandlers.Provider>
	);
};
