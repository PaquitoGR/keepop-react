import { useEffect, useState } from 'react';
import { getAds } from './service';
import Layout from '../../components/layout/Layout';
import Button from '../../components/Button';

const NoAds = () => (
	<div>
		<p>No adverts yet!</p>
		<Button>Create Ad</Button>
	</div>
);

function AdsPage() {
	const [ads, setAds] = useState([]);

	const url = '/api/v1/adverts';

	useEffect(() => {
		getAds(url).then((ads) => setAds(ads));
	}, []);

	return (
		<Layout title='Ad list'>
			<div>
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
		</Layout>
	);
}

export default AdsPage;
