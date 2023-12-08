import { useEffect, useState } from 'react';
import Button from '../../components/Button';
import { logout } from '../auth/service';
import { getAds } from './service';

const NoAds = () => (
	<div>
		<p>No adverts yet!</p>
		<Button>Create Ad</Button>
	</div>
);

// eslint-disable-next-line react/prop-types
function AdsPage({ onLogout }) {
	const [ads, setAds] = useState([]);

	const url = '/api/v1/adverts';

	useEffect(() => {
		const fetchData = async () => {
			const response = await getAds(url);
			setAds(response);
		};

		fetchData();
	}, []);

	const handleLogout = () => {
		logout();
		onLogout();
	};
	return (
		<div>
			<h1>YOU ARE LOGGED</h1>
			<Button onClick={handleLogout}>Logout</Button>
			{ads.length ? (
				<ul>
					{ads.map((ad) => (
						<li key={ad.id}>
							<img src={ad.photo} width='150'></img>
							<p>Item: {ad.name}</p>
							<p>Type: {ad.sale ? 'sale' : 'buy'}</p>
							<p>Price: {ad.price}</p>
							<p>Tags: {ad.tags}</p>
						</li>
					))}
				</ul>
			) : (
				<NoAds />
			)}
		</div>
	);
}

export default AdsPage;
