import { useMediaQuery } from 'react-responsive'
import styled from 'styled-components'
import images from '../../../../assets/images/images'
import Box from '../../../common/Box'
import { StyleBannerBemVindo } from '../BannerBemVindo'

const BannerTransformacoes = () => {
	const isMobile = useMediaQuery({ maxWidth: 475 })

	return (
		<StyleBannerTransformacoes>
			<div className='content'>
				<picture>
					<img
						src={images.home.banner3}
						alt='Figura estilo vetorde uma mulher negra vestida com uma camisa socail branca euma calça azul segurando uma bandeira, apondando para cima em cima de uma pliha de moedas representando a concretização dos seus objetivos financeiros'
					/>
				</picture>

				<article>
					<h2>Transformações Financeiras Reais</h2>
					<h3>
						Sabemos que lidar com finanças pode ser um desafio para muitas
						pessoas.
					</h3>
					<p>
						Descubra como nossos usuários alcançaram suas metas, controlaram
						suas finanças e conquistaram sonhos que pareciam distantes.
					</p>

					<Box
						heigth='fit-content'
						direction={isMobile ? 'column-reverse' : 'row'}
					>
						<picture>
							<img
								className='picture-profile'
								src={images.home.lpprofile}
								alt='foto de perfil de uma mulher banca com cabelos longos, camisa de manga vermelha e sorrindo '
							/>
						</picture>

						<div>
							<p className='name-user'>Ana, usuária do Finanças+</p>
							<small className='testimony'>
								"Desde que comecei a usar o Finanças+, minha relação com o
								dinheiro mudou completamente. Agora, eu sei exatamente para onde
								meu dinheiro está indo, e consigo planejar minhas despesas de
								maneira muito mais eficiente.Nunca imaginei que teria tanto
								controle sobre minhas finanças, e isso me deu uma sensação
								incrível de empoderamento."
							</small>
						</div>
					</Box>
				</article>
			</div>
		</StyleBannerTransformacoes>
	)
}

export default BannerTransformacoes

const StyleBannerTransformacoes = styled(StyleBannerBemVindo)`
	background-image: none;
	padding: 24px 12px;

	.content > article {
		width: 60%;
		h2 {
			text-align: center;
		}
	}

	.name-user {
		font-weight: bold;
		font-size: 18px;
		margin-bottom: 8px;
	}

	.picture-profile {
		width: 100px;
		height: 100px;
	}

	@media screen and (max-width: 475px) {
		padding: 24px 0px;
		.content {
			flex-direction: column;
			align-items: center;
			text-align: center;
			gap: 24px;
			> article,
			> picture,
			img {
				width: 100%;
			}

			picture {
				order: 1;
			}

			article {
				order: 2;
			}
		}
	}
	@media screen and (max-width: 768px) {
		picture {
			width: 30%;
			> img {
				width: 100%;
			}
		}
	}
`
