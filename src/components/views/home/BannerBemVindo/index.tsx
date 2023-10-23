import styled from 'styled-components'
import images from '../../../../assets/images/images'

const BannerBemVindo = () => {
	return (
		<StyleBannerBemVindo>
			<div className='content'>
				<article>
					<h2>Bem-vindo ao Finanças+</h2>
					<h3>
						O seu aliado para uma gestão financeira bem-sucedida e a realização
						dos seus objetivos financeiros.
					</h3>
					<p>
						Nosso aplicativo foi projetado para proporcionar a você o controle
						total sobre suas finanças pessoais, tornando o processo de gerenciar
						suas receitas, despesas e metas financeiras uma tarefa simples e
						prazerosa.
					</p>
				</article>

				<picture>
					<img
						src={images.home.banner1}
						alt='Figura estilo vetorde uma mulher negra vestida com uma camisa socail branca euma calça azul segurando uma bandeira, apondando para cima em cima de uma pliha de moedas representando a concretização dos seus objetivos financeiros'
					/>
				</picture>
			</div>
		</StyleBannerBemVindo>
	)
}

export default BannerBemVindo

export const StyleBannerBemVindo = styled.section`
	width: 100%;
	display: flex;
	align-items: center;
	padding: 0 24px 100px 0;
	justify-content: center;
	background-image: url(${images.home.bgbanner1});
	background-repeat: no-repeat;
	background-position: bottom;
	object-fit: cover;
	background-size: contain;

	> .content {
		width: 100%;
		max-width: 1200px;
		padding: 0 24px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		color: ${(props) => props.theme.blue900};

		> article {
			width: 50%;
			max-width: 500px;
			min-width: 300px;
			display: flex;
			flex-direction: column;
			gap: 24px;
			align-items: flex-start;
			justify-content: center;
			flex-shrink: 1;
			flex-grow: 1;
		}
		picture,
		picture > img {
			flex-grow: 3;
			flex-shrink: 5;
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

	@media screen and (max-width: 475px) {
		padding: 24px 0px;
		text-align: center;
		.content {
			flex-direction: column;
			align-items: center;
			gap: 24px;
			> article,
			> picture,
			img {
				width: 90%;
			}

			picture {
				order: 1;
			}

			article {
				order: 2;
			}
		}
	}
`
