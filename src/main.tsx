import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import Routes from './Routes.tsx'
import { theme } from './style/theme.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<Routes />
		</ThemeProvider>
	</React.StrictMode>
)
