import AdsPage from './pages/ads/AdsPage.jsx';
import { useAuth } from './pages/auth/context.jsx';
import LoginPage from './pages/auth/LoginPage.jsx';

function App() {
	const { isLogged } = useAuth();
	return (
		<div className='App'>
			{isLogged ? (
				<>
					<AdsPage />
				</>
			) : (
				<LoginPage />
			)}
		</div>
	);
}

export default App;
