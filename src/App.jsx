import { Routes, Route, Navigate } from 'react-router-dom';
import AdsListPage from './pages/ads/AdsListPage.jsx';
import LoginPage from './pages/auth/LoginPage.jsx';
import AdDetailPage from './pages/ads/AdDetailPage.jsx';
import AdCreatePage from './pages/ads/AdCreatePage.jsx';
import Layout from './components/layout/Layout';
import NotForundPage from './pages/ads/NotFoundPage.jsx';

function App() {
	return (
		<Routes>
			<Route path='/login' element={<LoginPage />} />
			<Route path='/ads' element={<Layout />}>
				<Route index element={<AdsListPage />} />
				<Route path=':adId' element={<AdDetailPage />} />
				<Route path='new' element={<AdCreatePage />} />
			</Route>
			<Route path='/' element={<Navigate to='/ads' />} />
			<Route path='/404' element={<NotForundPage />} />
			<Route path='*' element={<Navigate to='/404' />} />
		</Routes>
	);
}

export default App;
