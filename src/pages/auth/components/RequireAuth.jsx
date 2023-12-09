import { useIsLogged } from '../context';
import { Navigate, useLocation } from 'react-router-dom';

function RequireAuth({ children }) {
	const location = useLocation();
	const isLogged = useIsLogged();

	return isLogged ? (
		children
	) : (
		<Navigate to='/login' state={{ from: location }} />
	);
}

export default RequireAuth;
