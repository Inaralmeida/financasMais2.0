import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import { MdEmail } from 'react-icons/md'
import { Link } from 'react-router-dom'
import images from '../../assets/images'
import Button from './../../components/common/Button/index'
import Fieldset from './../../components/common/Input/Fieldset/index'
import InputPassword from './../../components/common/Input/InputPassword/index'
import InputWithIcon from './../../components/common/Input/InputStartIcon/index'
import Logo from './../../components/common/Logo/index'
import useLogin from './../../core/hooks/useLogin'
import { StyleLogin } from './login.styles'

const Login = () => {
	const { defaultValue, handleLogin, loginSchema } = useLogin()
	const { register, handleSubmit, formState } = useForm({
		defaultValues: defaultValue,
		resolver: yupResolver(loginSchema),
		mode: 'onSubmit'
	})

	const { errors } = formState

	return (
		<StyleLogin>
			<div className='content-login'>
				<form onSubmit={handleSubmit(handleLogin)}>
					<Logo size='small' />
					<Fieldset id='email' name='Email'>
						<InputWithIcon
							id='email'
							placeholder='email@email.com'
							type='email'
							name='email'
							width='300px'
							register={register}
							icon={<MdEmail />}
							error={errors.email}
						/>
					</Fieldset>
					<Fieldset id='senha' name='Senha'>
						<InputPassword
							id='senha'
							placeholder='●●●●●●●'
							name='senha'
							width='300px'
							register={register}
							error={errors.senha}
						/>
					</Fieldset>

					<p style={{ fontSize: '14px' }}>
						Ainda não tem uma conta?{' '}
						<Link
							style={{ fontWeight: 'bold', fontSize: '14px' }}
							to={'/register'}
						>
							Cadastre-se
						</Link>
					</p>
					<Button variant='primary' type='submit' width='100%'>
						Entrar
					</Button>
				</form>
				<picture>
					<img src={images.others.login} alt='' />
				</picture>
			</div>
		</StyleLogin>
	)
}

export default Login
