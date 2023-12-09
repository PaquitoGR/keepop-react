import client from '../../api/client';

export const getAds = (url) => {
	return client.get(url);
};

export const removeAd = (url) => {
	return client.delete(url);
};
