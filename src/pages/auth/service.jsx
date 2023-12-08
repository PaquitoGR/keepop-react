import client, {
	setAuthorizationHeader,
	removeAuthorizationHeader,
} from '../../api/client';
import storage from '../../utils/storaje';

export const login = (credentials) => {
	return client.post('/api/auth/login', credentials).then(({ accessToken }) => {
		setAuthorizationHeader(accessToken);
		storage.set('token', accessToken);
	});
};

export const signup = (userData) => {
	return client.post('/api/auth/signup', userData);
};

export const logout = () => {
	removeAuthorizationHeader();
	storage.remove('token');
};
