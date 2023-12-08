import Button from '../../components/Button';
import { useState } from 'react';
import { signup } from './service';

// eslint-disable-next-line react/prop-types
function SignupPage({ onSignup }) {
	const [userData, setUserData] = useState({
		email: '',
		password: '',
		username: '',
		name: '',
	});

	const handleSubmit = async (event) => {
		event.preventDefault();

		await signup(userData);

		onSignup();
	};

	const handleChange = (event) => {
		setUserData((currentUserData) => ({
			...currentUserData,
			[event.target.name]: event.target.value,
		}));
	};

	const { email, password, username, name } = userData;
	const disabled = !(email && password && username && name);

	return (
		<div>
			<h1>Signup</h1>
			<form onSubmit={handleSubmit}>
				<input type='text' name='name' value={name} onChange={handleChange} />
				<input
					type='text'
					name='username'
					value={username}
					onChange={handleChange}
				/>
				<input type='text' name='email' value={email} onChange={handleChange} />
				<input
					type='password'
					name='password'
					value={password}
					onChange={handleChange}
				/>
				<Button type='submit' disabled={disabled}>
					Signup
				</Button>
			</form>
		</div>
	);
}

export default SignupPage;
