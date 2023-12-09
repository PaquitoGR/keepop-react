import logo from '../../assets/images/keepop-logo.png';
import { Link, NavLink } from 'react-router-dom';
import AuthButton from '../../pages/auth/components/AuthButton';

function Header() {
	return (
		<header>
			<Link to='/'>
				<div>
					<img src={logo} width='75' alt='logo keepop' />
				</div>
			</Link>
			<nav>
				<NavLink to='/ads/new'>Create new advert</NavLink>
				<NavLink to='/ads' end>
					Ads List
				</NavLink>
				<AuthButton />
			</nav>
		</header>
	);
}

export default Header;
