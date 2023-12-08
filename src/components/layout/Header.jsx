import logo from '../../assets/images/keepop-logo.png';
import Button from '../Button';
import { logout } from '../../pages/auth/service';
import { useContext } from 'react';
import { AuthContext } from '../../pages/auth/context';

function Header({ isLogged, onLogout }) {
	const { isLogged, onLogout } = useContext(AuthContext);
	const handleLogout = async () => {
		await logout();
		onLogout();
	};

	return (
		<header>
			<div>
				<img src={logo} width='75' alt='logo keepop' />
			</div>
			<nav>
				{isLogged ? (
					<Button onClick={handleLogout}>Logout</Button>
				) : (
					<Button /*onClick={handleLogin}*/>Login</Button>
				)}
			</nav>
		</header>
	);
}

export default Header;
