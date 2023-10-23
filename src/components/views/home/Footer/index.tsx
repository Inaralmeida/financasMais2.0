import { MdEmail, MdLocalPhone } from 'react-icons/md'
import { RiFacebookFill, RiInstagramFill, RiLinkedinFill } from 'react-icons/ri'
import styled from 'styled-components'
import Logo from '../../../common/Logo'

const Footer = () => {
	return (
		<StyleFooter>
			<nav>
				<ul className='contact'>
					<li>
						<Logo color='white' size='small' />
					</li>
					<li className='icon'>
						<MdEmail />
						financasmais@gmail.com
					</li>
					<li className='icon'>
						<MdLocalPhone /> 0800 987 6543
					</li>
				</ul>

				<ul className='site-sections'>
					<li>Sobre nós</li>
					<li>Perguntas frequentes</li>
					<li>Politica de Privacidade</li>
					<li>Termos de uso</li>
					<li>Carreiras</li>
				</ul>

				<ul className='socials-network'>
					<li className='social'>
						<RiFacebookFill size={32} />
					</li>
					<li className='social'>
						<RiInstagramFill size={32} />
					</li>
					<li className='social'>
						<RiLinkedinFill size={32} />
					</li>
				</ul>
			</nav>
		</StyleFooter>
	)
}

export default Footer

const StyleFooter = styled.footer`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: ${(props) => props.theme.blue700};
	color: ${(props) => props.theme.white50};

	> nav {
		width: 100%;
		max-width: 1200px;
		padding: 24px 12px;
		display: flex;
		justify-content: space-between;
		align-items: flex-start;

		> ul {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			gap: 12px;

			&.socials-network {
				flex-direction: row;
				align-items: center;
				gap: 24px;
				height: 150px;
			}

			> li {
				cursor: pointer;
				color: ${(p) => p.theme.white50};
				transition: all 0.2s;

				&.icon {
					display: flex;
					gap: 8px;
				}
				&.social {
					padding: 6px;
					border: 1px solid ${(p) => p.theme.white50};
					border-radius: 50%;
					display: flex;
					align-items: center;
					justify-content: center;
					&:hover {
						background-color: ${(p) => p.theme.blue500};
					}
				}

				&:hover {
					font-weight: 500;
				}
			}
		}

		@media screen and (max-width: 475px) {
			flex-direction: column;
			gap: 24px;

			> ul.socials-network {
				height: fit-content;
				width: 100%;
				justify-content: space-around;
			}
		}
	}
`
