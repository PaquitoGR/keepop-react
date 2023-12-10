import { useState } from 'react';
import Content from '../../components/layout/Content';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';
import AdCard from '../../components/layout/AdCard';
import AdFilter from './AdFilter';
import './AdsListPage.css';

function AdsListPage() {
	const NoAds = () => (
		<div>
			<p>No adverts yet!</p>
			<Button as={Link} to='/ads/new'>
				Create Ad
			</Button>
		</div>
	);

	const [filteredAds, setFilteredAds] = useState([]);

	return (
		<Content title='Ad list'>
			<AdFilter className='filterForm' setFilteredAds={setFilteredAds} />
			<div>
				{filteredAds.length ? (
					<ul>
						{filteredAds.map((ad) => (
							<li key={ad.id}>
								<Link to={`/ads/${ad.id}`}>
									<AdCard ad={ad} imgWidth='100%' />
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
