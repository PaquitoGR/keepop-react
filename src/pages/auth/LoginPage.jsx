import { useContext, useState } from 'react';
import Button from '../../components/Button';
import { login } from './service.js';
import Layout from '../../components/layout/Layout.jsx';
import { AuthContext } from './context.js';

function LoginPage() {
	const [credentials, setCredentials] = useState({
		email: '',
		password: '',
	});
	const { onLogin } = useContext(AuthContext);

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
					<Button type='submit' disabled={disabled}>
						Log in
					</Button>
				</form>
			</div>
		</Layout>
	);
}

export default LoginPage;
