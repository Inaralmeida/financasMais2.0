import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Button from '../../../common/Button'
import BaseInput from '../../../common/Input/BaseInput'
import InputBox from '../../../common/Input/InputBox'
import { StyleBannerBemVindo } from '../BannerBemVindo'

const BannerTransforme = () => {
	const navigate = useNavigate()
	const { register } = useForm()
	return (
		<StyleBannerTransforme>
			<div className='content'>
				<article>
					<h2>Transforme sua relação com o dinheiro</h2>
					<h3>
						Cadastre-se no Finanças+ agora mesmo e comece sua jornada rumo a uma
						vida financeira mais próspera e realizada
					</h3>
				</article>

				<form onSubmit={() => navigate('/register')}>
					<InputBox width='100%'>
						<BaseInput
							placeholder='Seu melhor email'
							name='email'
							type='email'
							register={register}
						/>
					</InputBox>
					<Button variant='primary' type='submit'>
						Cadastre-se
					</Button>
				</form>
			</div>
		</StyleBannerTransforme>
	)
}

export default BannerTransforme

const StyleBannerTransforme = styled(StyleBannerBemVindo)`
	padding: 24px 12px;
	background-image: none;
	background-color: ${(props) => props.theme.blue100};

	.content > form {
		display: flex;
		flex-direction: column;
		gap: 24px;
		align-items: center;
		width: 48%;
	}
`
