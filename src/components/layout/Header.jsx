import logo from '../../assets/images/keepop-logo.png';
import { Link, NavLink } from 'react-router-dom';
import AuthButton from '../../pages/auth/components/AuthButton';
import Button from '../Button';
import './Header.css';

function Header() {
	return (
		<header>
			<div className='header__items'>
				<Link to='/ads'>
					<img src={logo} width='75' alt='logo keepop' />
				</Link>
			</div>
			<div className='header__items'>
				<nav className='header__nav'>
					<NavLink to='/ads/new'>
						<Button>Create new advert</Button>
					</NavLink>
					<NavLink to='/ads' end>
						<Button>Ads List</Button>
					</NavLink>
				</nav>
			</div>
			<div>
				<AuthButton />
			</div>
		</header>
	);
}

export default Header;
