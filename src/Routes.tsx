import { BrowserRouter, Route, Routes as Switch } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Transactions from './pages/Transactions'
import { GlobalStyle } from './style/GlobalStyle'

const Routes = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path='/' element={<Home />} />
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} />
				<Route path='/dashboard' element={<Dashboard />} />
				<Route path='/transactions/:type' element={<Transactions />} />
			</Switch>
			<GlobalStyle />
		</BrowserRouter>
	)
}

export default Routes
