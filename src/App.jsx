import React from 'react';
import './App.scss';
import AppRoutes from './routes';
import { ContextProvider } from './context/Context';
import { ConfigProvider } from 'antd';

function App() {
	return (
		<ConfigProvider
			theme={{
				token: {
					colorPrimary: '#cf1322',
				},
				components: {
					InputNumber: {
						borderRadiusLG: 2,
						borderRadius: 0,
						colorBgContainer: '#f6f6f6',
						controlOutline:false,
						lineWidth: 0,
					},
					Input: {
						borderRadiusLG: 2,
						colorBgContainer: '#f6f6f6',
						controlOutline:false,
						borderRadius: 0,
						lineWidth: 0,
					},
					Select: {
						borderRadiusLG: 2,
						colorBgContainer: '#f6f6f6',
						controlOutline:false,
						borderRadius: 0,
						lineWidth: 0,
					},
					Popover: {
						colorBgContainer: '#222020',
						colorBgBase: '#222020',
						colorBgLayout: '#222020',
						colorBgElevated: '#cf1322'
					},
					Button: {
						borderRadius: 2,
						borderRadiusLG: 4
					}
				},
			}}
		>
			<ContextProvider>
				<AppRoutes />
			</ContextProvider>
		</ConfigProvider>
	);
}

export default App;
