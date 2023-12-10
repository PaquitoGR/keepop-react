import { useState } from 'react';
import Button from '../../components/Button';
import { login } from './service.js';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuthHandlers } from '../auth/context.jsx';
import './LoginPage.css';

function LoginPage() {
	const { onLogin } = useAuthHandlers();
	const [credentials, setCredentials] = useState({
		email: '',
		password: '',
		rememberMe: false,
	});

	const [isFetching, setIsFetching] = useState(false);
	const location = useLocation();
	const navigate = useNavigate();

	const handleSubmit = async (event) => {
		event.preventDefault();

		try {
			setIsFetching(true);
			await login(credentials);
			setIsFetching(false);
			onLogin();
			const to = location?.state?.from?.pathname || '/';
			navigate(to);
		} catch (error) {
			setIsFetching(false);
			console.log(error);
		}
	};

	const handleChange = (event) => {
		setCredentials((currentCredentials) => ({
			...currentCredentials,
			[event.target.name]:
				event.target.type === 'checkbox'
					? event.target.checked
					: event.target.value,
		}));
	};

	const disabled = !(credentials.email && credentials.password);

	return (
		<div className='form-container'>
			<h2>Login</h2>
			<form onSubmit={handleSubmit}>
				<div className='form-row'>
					<input
						placeholder='email'
						type='text'
						name='email'
						value={credentials.email}
						onChange={handleChange}
					/>
					<input
						placeholder='password'
						type='password'
						name='password'
						value={credentials.password}
						onChange={handleChange}
					/>
				</div>
				<div className='form-row'>
					<Button type='submit' disabled={disabled}>
						{isFetching ? 'Loading...' : 'Log in'}
					</Button>
					<div className='rememberMe'>
						<label htmlFor='rememberMe'>Remember me</label>
						<input
							id='rememberMe'
							name='rememberMe'
							type='checkbox'
							checked={credentials.remember}
							onChange={handleChange}
						/>
					</div>
				</div>
			</form>
		</div>
	);
}

export default LoginPage;
