import { useParams, useNavigate } from 'react-router';
import Content from '../../components/layout/Content';
import { useEffect, useState } from 'react';
import { getAd } from './service';
import AdCard from '../../components/layout/AdCard';

function AdDetailPage() {
	const params = useParams();
	const navigate = useNavigate();
	const adId = params.adId;
	const [ad, setAd] = useState(null);

	useEffect(() => {
		getAd(adId)
			.then((ad) => setAd(ad))
			.catch((error) => {
				if (error.status === 404) {
					navigate('/404');
				}
			});
	}, [navigate, adId]);

	return (
		<Content title='Ad detail'>
			{ad && <AdCard ad={ad} imgWidth='300px' />}
		</Content>
	);
}

export default AdDetailPage;
