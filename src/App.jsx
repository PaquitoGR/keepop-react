import { useState } from 'react';
import AdsPage from './pages/ads/AdsPage.jsx';
import LoginPage from './pages/auth/LoginPage.jsx';
import { AuthContext } from './pages/auth/context.js';

function App({ alreadyLogged }) {
	const [isLogged, setIsLogged] = useState(alreadyLogged);

	const handleLogin = () => setIsLogged(true);
	const handleLogout = () => setIsLogged(false);

	const authValue = {
		isLogged,
		onLogout: handleLogout,
		onLogin: handleLogin,
	};

	return (
		<AuthContext.Provider value={authValue}>
			<div className='App'>
				{isLogged ? (
					<>
						<AdsPage />
					</>
				) : (
					<LoginPage />
				)}
			</div>
		</AuthContext.Provider>
	);
}

export default App;
