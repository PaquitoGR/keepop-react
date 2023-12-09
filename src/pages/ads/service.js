import client from '../../api/client';

const url = '/api/v1/adverts';

export const getAds = () => {
	return client.get(url);
};

export const getAd = (id) => {
	return client.get(`${url}/${id}`);
};

export const uploadAd = (data) => {
	return client.post(url, data, {
		headers: { 'Content-Type': 'multipart/form-data' },
	});
};
