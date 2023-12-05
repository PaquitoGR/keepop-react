import { useState } from 'react';
import AdsPage from './pages/ads/AdsPage.jsx';
import LoginPage from './pages/auth/LoginPage.jsx';

function App() {
	const [isLogged, setIsLogged] = useState(false);
	const handleLogin = () => setIsLogged(true);
	return (
		<div className='App'>
			{isLogged ? <AdsPage /> : <LoginPage onLogin={handleLogin} />}
		</div>
	);
}

export default App;
