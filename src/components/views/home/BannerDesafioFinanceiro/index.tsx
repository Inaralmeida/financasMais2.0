import styled from 'styled-components'
import images from '../../../../assets/images/images'
import { StyleBannerBemVindo } from '../BannerBemVindo'

const BannerDesafioFinanceiro = () => {
	return (
		<StyleBannerDesafioFinanceiro>
			<div className='content'>
				<picture>
					<img
						src={images.home.banner2}
						alt='Figura estilo vetorde uma mulher negra vestida com uma camisa socail branca euma calça azul segurando uma bandeira, apondando para cima em cima de uma pliha de moedas representando a concretização dos seus objetivos financeiros'
					/>
				</picture>

				<article>
					<h2>O desafio Financeiro</h2>
					<h3>
						Sabemos que lidar com finanças pode ser um desafio para muitas
						pessoas.
					</h3>
					<p>
						A falta de organização, o desconhecimento das despesas e o medo de
						não conseguir atingir suas metas financeiras são obstáculos comuns
						enfrentados por todos nós.
					</p>

					<p>
						É por isso que desenvolvemos o Finanças+ - para ajudá-lo a superar
						esses desafios e alcançar a liberdade financeira que você tanto
						deseja.
					</p>
				</article>
			</div>
		</StyleBannerDesafioFinanceiro>
	)
}

export default BannerDesafioFinanceiro

const StyleBannerDesafioFinanceiro = styled(StyleBannerBemVindo)`
	background-image: none;
	background-color: ${(props) => props.theme.white200};
	padding: 24px 12px;
`
