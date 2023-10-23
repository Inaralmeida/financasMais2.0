import React, { useState } from 'react'
import { BiExit } from 'react-icons/bi'
import {
	HiOutlineArrowTrendingDown,
	HiOutlineArrowTrendingUp
} from 'react-icons/hi2'
import { MdOutlineSpaceDashboard } from 'react-icons/md'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { styled } from 'styled-components'
import Modal from '../../common/Modal/ModalOneButton'
import Button from './../../common/Button/index'
import Logo from './../../common/Logo/index'

type LayoutProps = {
	children: React.ReactNode
	titlePage: string
	textButtonPrincipal: string
	onClickPrincipal: () => void
}
const Layout = ({
	children,
	titlePage,
	textButtonPrincipal,
	onClickPrincipal
}: LayoutProps) => {
	const [modalExit, setModalExit] = useState(false)
	const navigate = useNavigate()
	const location = useLocation()

	return (
		<>
			<StyleLayout>
				<aside>
					<Logo color='white' size='small' />
					<nav>
						<ul>
							<li>
								<Link
									to='/dashboard'
									className={
										location.pathname.includes('dashboard') ? 'active' : ''
									}
								>
									<MdOutlineSpaceDashboard />
									Dashboard
								</Link>
							</li>
							<li>
								<Link
									to='/transactions/entrada'
									className={
										location.pathname.includes('entrada') ? 'active' : ''
									}
								>
									<HiOutlineArrowTrendingUp />
									Entradas
								</Link>
							</li>
							<li>
								<Link
									to='/transactions/saída'
									className={
										location.pathname.includes('saída') ? 'active' : ''
									}
								>
									<HiOutlineArrowTrendingDown />
									Saídas
								</Link>
							</li>
						</ul>
					</nav>
				</aside>
				<section>
					<header>
						<p>Olá, nome</p>
						<p
							aria-roledescription='button'
							aria-label='Botão sair'
							onClick={() => setModalExit(true)}
						>
							Sair
							<BiExit />
						</p>
					</header>
					<main>
						<div className='settingPage'>
							<h2>{titlePage}</h2>
							<Button variant='primary' onClick={onClickPrincipal}>
								{textButtonPrincipal}
							</Button>
						</div>
						{children}
					</main>
				</section>
			</StyleLayout>
			<Modal title='Sair' open={modalExit} onClose={() => setModalExit(false)}>
				<p style={{ fontWeight: '500' }}>Tem certeza que deseja sair?</p>
				<div
					style={{
						width: '100%',
						display: 'flex',
						justifyContent: 'space-between',
						marginTop: '50px'
					}}
				>
					<Button variant='secondary' onClick={() => setModalExit(false)}>
						Cancelar
					</Button>
					<Button variant='primary' onClick={() => navigate('/')}>
						Sim
					</Button>
				</div>
			</Modal>
		</>
	)
}

export default Layout

const StyleLayout = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	> aside {
		padding: 12px 24px;
		width: fit-content;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 24px;
		background-color: ${(props) => props.theme.blue500};
		color: ${(props) => props.theme.white50};

		> nav > ul {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			gap: 12px;
			width: 100%;

			> li {
				border-bottom: 2px solid transparent;
				transition: all 0.3s;
				width: 100%;
				margin-bottom: 4px;

				> a {
					display: flex;
					align-items: center;
					gap: 8px;

					&.active {
						font-weight: bold;
					}
				}

				&:hover {
					border-bottom: 2px solid ${(props) => props.theme.white50};
				}
			}
		}
	}

	> section {
		width: calc(100% - 234px);
		display: flex;
		flex-direction: column;

		> header {
			width: 100%;
			padding: 12px;
			display: flex;
			align-items: center;
			justify-content: space-between;
			background-color: ${(props) => props.theme.blue500};
			color: ${(props) => props.theme.white50};

			> p {
				padding: 6px 12px;
				border-radius: 8px;
				display: flex;
				align-items: center;
				gap: 8px;
				cursor: pointer;
				transition: background 0.3s;

				&:hover {
					background-color: ${(props) => props.theme.blue700};
				}
			}
		}

		> main {
			width: 100%;
			height: calc(100% - 65px);
			padding: 12px;
			gap: 24px;
			color: ${(props) => props.theme.blue900};

			.settingPage {
				width: 100%;
				display: flex;
				align-items: center;
				justify-content: space-between;

				> h2 {
					text-transform: uppercase;
				}
			}
		}
	}
`
