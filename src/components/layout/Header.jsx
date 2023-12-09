import logo from '../../assets/images/keepop-logo.png';
import Button from '../Button';
import { logout } from '../../pages/auth/service';
import { useAuth } from '../../pages/auth/context';

function Header() {
	const { isLogged, onLogout } = useAuth();
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
				{isLogged ? <Button onClick={handleLogout}>Logout</Button> : <></>}
			</nav>
		</header>
	);
}

export default Header;
