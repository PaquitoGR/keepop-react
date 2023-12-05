import client from '../../api/client';

const adsUrl = '/api/v1/adverts';

export const getAds = () => {
	return client.get(adsUrl);
};
