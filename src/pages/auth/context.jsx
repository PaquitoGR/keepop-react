import { createContext, useContext, useState } from 'react';

export const AuthContext = createContext(false);

export const useAuth = () => {
	const auth = useContext(AuthContext);
	return auth;
};

export const AuthContextProvider = ({ alreadyLogged, children }) => {
	const [isLogged, setIsLogged] = useState(alreadyLogged);

	const handleLogin = () => setIsLogged(true);
	const handleLogout = () => setIsLogged(false);

	const authValue = {
		isLogged,
		onLogout: handleLogout,
		onLogin: handleLogin,
	};

	return (
		<AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
	);
};
