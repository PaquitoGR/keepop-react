import { useState } from 'react';
import AdsPage from './pages/ads/AdsPage.jsx';
import LoginPage from './pages/auth/LoginPage.jsx';
import Clock from './components/Clock.jsx';

// eslint-disable-next-line react/prop-types
function App({ alreadyLogged }) {
	const [isLogged, setIsLogged] = useState(alreadyLogged);
	const handleLogin = () => setIsLogged(true);
	const handleLogout = () => setIsLogged(false);

	return (
		<div className='App'>
			<Clock />
			{isLogged ? (
				<AdsPage onLogout={handleLogout} />
			) : (
				<LoginPage onLogin={handleLogin} />
			)}
		</div>
	);
}

export default App;
