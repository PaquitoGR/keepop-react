import Button from '../../../components/Button';
import { useAuthHandlers, useIsLogged } from '../context';
import { Link } from 'react-router-dom';
import { logout } from '../service';

function AuthButton() {
	const isLogged = useIsLogged();
	const { onLogout } = useAuthHandlers();

	const handleLogoutClick = async () => {
		await logout();
		onLogout();
	};

	return isLogged ? (
		<Button onClick={handleLogoutClick}>Logout</Button>
	) : (
		<Button as={Link} to='/login'>
			Login
		</Button>
	);
}

export default AuthButton;
