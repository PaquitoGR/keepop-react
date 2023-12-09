import { useEffect, useState } from 'react';
import { getAds } from './service';
import Content from '../../components/layout/Content';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';
import AdCard from '../../components/layout/AdCard';

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
								<Link to={`/ads/${ad.id}`}>
									<AdCard ad={ad} imgWidth='100px' />
								</Link>
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
