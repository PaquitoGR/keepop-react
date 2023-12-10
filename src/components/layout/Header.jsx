import logo from '../../assets/images/keepop-logo.png';
import { Link, NavLink } from 'react-router-dom';
import AuthButton from '../../pages/auth/components/AuthButton';
import Button from '../Button';

function Header() {
	return (
		<header>
			<Link to='/ads'>
				<div>
					<img src={logo} width='75' alt='logo keepop' />
				</div>
			</Link>
			<nav>
				<NavLink to='/ads/new'>
					<Button>Create new advert</Button>
				</NavLink>
				<NavLink to='/ads' end>
					<Button>Ads List</Button>
				</NavLink>
				<AuthButton />
			</nav>
		</header>
	);
}

export default Header;
