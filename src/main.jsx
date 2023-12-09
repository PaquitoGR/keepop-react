import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import storage from './utils/storaje.js';
import { setAuthorizationHeader } from './api/client.jsx';
import { AuthContextProvider } from './pages/auth/context.jsx';

const accessToken = storage.get('token');
if (accessToken) {
	setAuthorizationHeader(accessToken);
}

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<AuthContextProvider alreadyLogged={!!accessToken}>
			<App />
		</AuthContextProvider>
	</React.StrictMode>
);
