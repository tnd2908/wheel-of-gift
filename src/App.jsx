import React from 'react';
import './App.scss';
import AppRoutes from './routes';
import { ContextProvider } from './context/Context';

function App() {
  	return (
		<ContextProvider>
			<AppRoutes />
		</ContextProvider>
  	);
}

export default App;
