import client from '../../api/client';

export const getAds = (url) => {
	return client.get(url);
};
