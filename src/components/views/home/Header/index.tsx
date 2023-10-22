import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Button from '../../../common/Button'
import Logo from '../../../common/Logo/index'

const Header = () => {
	const navigate = useNavigate()
	return (
		<StyleHeader>
			<Logo />
			<nav>
				<ul>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='/login'>Entrar</Link>
					</li>
					<li>
						<Button onClick={() => navigate('/register')} variant='primary'>
							Cadastre-se
						</Button>
					</li>
				</ul>
			</nav>
		</StyleHeader>
	)
}

export default Header

export const StyleHeader = styled.header`
	width: 100%;
	max-width: 1200px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 24px 12px;
	margin: 0 auto;
	> nav > ul {
		display: flex;
		align-items: center;
		gap: 24px;

		> li {
			color: ${(props) => props.theme.blue500};

			&:hover {
				opacity: 0.9;
			}
		}
	}
`
