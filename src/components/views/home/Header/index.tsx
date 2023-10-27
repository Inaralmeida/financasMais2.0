import React, { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Button from '../../../common/Button'
import ButtonMenuResponsivo from '../../../common/ButtonMenuResponsivo'
import Logo from '../../../common/Logo/index'

const Header = () => {
	const navigate = useNavigate()
	const isMobile = useMediaQuery({ maxWidth: 475 })

	const [openMenu, setOpenMenu] = useState(false)
	return (
		<StyleHeader>
			<div className='menu-mobile'>
				<Logo />

				{isMobile && (
					<ButtonMenuResponsivo isOpen={openMenu} onClose={setOpenMenu} />
				)}
			</div>
			{(openMenu || !isMobile) && (
				<nav>
					<ul>
						<li>
							<Link to='/'>Home</Link>
						</li>
						<li>
							<Link to='/login'>Entrar</Link>
						</li>
						<li>
							<Button
								onClick={() => navigate('/register')}
								variant='primary'
								width={isMobile ? '100%' : 'fit-content'}
							>
								Cadastre-se
							</Button>
						</li>
					</ul>
				</nav>
			)}
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
	@media screen and (max-width: 475px) {
		flex-direction: column;
		align-items: flex-start;

		> .menu-mobile {
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: space-between;
		}
		> nav {
			width: 100%;
			> ul {
				flex-direction: column;
				width: 100%;
				align-items: flex-start;
				gap: 12px;

				> li {
					width: 100%;
					display: flex;
					height: fit-content;
					align-items: center;
					padding-bottom: 8px;

					&:not(:last-child) {
						border-bottom: 1px solid ${(props) => props.theme.blue500};
					}
				}
			}
		}
	}
`
