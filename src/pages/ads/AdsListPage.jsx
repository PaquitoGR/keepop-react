import { useEffect, useState } from 'react';
import { getAds } from './service';
import Content from '../../components/layout/Content';
import Button from '../../components/Button';
import { Link, Navigate } from 'react-router-dom';

const NoAds = () => (
	<div>
		<p>No adverts yet!</p>
		<Button as={Link} to='/ads/new'>
			Create Ad
		</Button>
	</div>
);

function AdsListPage() {
	const [ads, setAds] = useState([]);

	const url = '/api/v1/adverts';

	useEffect(() => {
		getAds(url).then((ads) => setAds(ads));
	}, []);

	return (
		<Content title='Ad list'>
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
		</Content>
	);
}

export default AdsListPage;
