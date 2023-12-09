import { useState } from 'react';
import Button from '../../components/Button';
import { login } from './service.js';
import Layout from '../../components/layout/Layout.jsx';
import { useAuth } from './context.jsx';

function LoginPage() {
	const { onLogin } = useAuth();
	const [credentials, setCredentials] = useState({
		email: '',
		password: '',
		remember: false,
	});

	const handleSubmit = async (event) => {
		event.preventDefault();

		await login(credentials);
		onLogin();
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
		<Layout title='Login'>
			<div>
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
					<label htmlFor='remember'>Remember me</label>
					<input
						id='remember'
						name='remember'
						type='checkbox'
						checked={credentials.remember}
						onChange={handleChange}
					/>
					<Button type='submit' disabled={disabled}>
						Log in
					</Button>
				</form>
			</div>
		</Layout>
	);
}

export default LoginPage;
