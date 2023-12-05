import Button from '../../components/Button';
import { login } from './service';

function LoginPage({ onLogin }) {
	const handleSubmit = async (event) => {
		event.preventDefault();
		await login({
			email: event.target.email.value,
			password: event.target.password.value,
		});

		onLogin();
	};

	return (
		<div>
			<h1>Login</h1>
			<form onSubmit={handleSubmit}>
				<input type='text' name='email' />
				<input type='password' name='password' />
				<Button type='submit'>Log in</Button>
			</form>
		</div>
	);
}

export default LoginPage;