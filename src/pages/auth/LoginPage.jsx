import { useState } from 'react';
import Button from '../../components/Button';
import { login } from './service';

// eslint-disable-next-line react/prop-types
function LoginPage({ onLogin }) {
	const [credentials, setCredentials] = useState({
		email: '',
		password: '',
	});

	const handleSubmit = async (event) => {
		event.preventDefault();

		await login(credentials);

		onLogin();
	};

	const handleChange = (event) => {
		setCredentials((currentCredentials) => ({
			...currentCredentials,
			[event.target.name]: event.target.value,
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
				<Button type='submit' disabled={disabled}>
					Log in
				</Button>
			</form>
		</div>
	);
}

export default LoginPage;
