import styled from 'styled-components'
import images from '../../../../assets/images'

const BannerVantagens = () => {
	return (
		<StyleBannerVantagens>
			<div>
				<img src={images.home.lpicon1} alt='' />
				<h2>Orçamento Inteligente e Eficiente</h2>
			</div>
			<div>
				<img src={images.home.lpicon2} alt='' />
				<h2>Controle Financeiro Simplificado</h2>
			</div>
			<div>
				<img src={images.home.lpicon3} alt='' />
				<h2>Metas Realistas e Alcançáveis</h2>
			</div>
		</StyleBannerVantagens>
	)
}

export default BannerVantagens

const StyleBannerVantagens = styled.section`
	width: 100%;
	max-width: 1200px;
	padding: 24px 12px;
	display: flex;
	justify-content: space-between;
	align-items: baseline;
	margin: 0 auto;
	color: ${(props) => props.theme.blue900};

	> div {
		display: flex;
		align-items: center;
		flex-direction: column;
		gap: 12px;

		> h2 {
			font-size: 32px;
			text-align: center;
		}
	}
	@media screen and (max-width: 475px) {
		flex-direction: column;
		align-items: center;
		gap: 24px;
	}
`
