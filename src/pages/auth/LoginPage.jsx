import { useState } from 'react';
import Button from '../../components/Button';
import { login } from './service.js';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuthHandlers } from '../auth/context.jsx';

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
		<div>
			<h1>Login</h1>
			<form onSubmit={handleSubmit}>
				<input
					type='text'
					name='email'
					value={credentials.email}
					onChange={handleChange}
				/>
				<input
					type='password'
					name='password'
					value={credentials.password}
					onChange={handleChange}
				/>
				<label htmlFor='rememberMe'>Remember me</label>
				<input
					id='rememberMe'
					name='rememberMe'
					type='checkbox'
					checked={credentials.remember}
					onChange={handleChange}
				/>
				<Button type='submit' disabled={disabled}>
					{isFetching ? 'Loading...' : 'Log in'}
				</Button>
			</form>
		</div>
	);
}

export default LoginPage;
