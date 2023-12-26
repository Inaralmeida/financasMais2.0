import { yupResolver } from '@hookform/resolvers/yup'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useMediaQuery } from 'react-responsive'
import { Link } from 'react-router-dom'
import images from '../../assets/images'
import Fieldset from '../../components/common/Input/Fieldset'
import useRegister from '../../core/hooks/useRegister'
import Button from './../../components/common/Button/index'
import BasicInput from './../../components/common/Input/BasicInput/index'
import InputPassword from './../../components/common/Input/InputPassword/index'
import Logo from './../../components/common/Logo/index'
import { StyleRegister } from './register.styles'

const Register = () => {
	const { defaultValue, handleRegister, cadastroSchema } = useRegister()
	const isTablet = useMediaQuery({ minWidth: 768 })
	const isMobile = useMediaQuery({ maxWidth: 475 })
	const { register, formState, handleSubmit, reset } = useForm({
		defaultValues: defaultValue,
		resolver: yupResolver(cadastroSchema),
		mode: 'all'
	})
	const { errors, isSubmitSuccessful } = formState

	useEffect(() => {
		if (isSubmitSuccessful) {
			reset(defaultValue)
		}
	}, [isSubmitSuccessful, defaultValue, reset])
	return (
		<StyleRegister>
			<section>
				<Logo size={isTablet ? 'medium' : 'large'} color='white' />
				<picture>
					<img src={images.others.cadastro} alt='' />
				</picture>
			</section>
			<form onSubmit={handleSubmit(handleRegister)}>
				{isMobile && <Logo size={'medium'} color='blue' />}
				<h2>Cadastro</h2>
				<Fieldset id='name' name='Nome' width='100%'>
					<BasicInput
						register={register}
						id='name'
						name='name'
						placeholder='Ex: Maria'
						width='auto'
						error={errors.name}
					/>
				</Fieldset>
				<Fieldset id='lastName' name='Sobrenome' width='100%'>
					<BasicInput
						register={register}
						id='lastName'
						name='lastName'
						placeholder='Ex: Silva'
						width='auto'
						error={errors.lastName}
					/>
				</Fieldset>
				<Fieldset id='email' name='Email' width='100%'>
					<BasicInput
						register={register}
						id='email'
						name='email'
						placeholder='Ex: 4KzE2@example.com'
						width='auto'
						error={errors.email}
					/>
				</Fieldset>
				<Fieldset id='password' name='Senha' width='100%'>
					<InputPassword
						register={register}
						id='password'
						name='password'
						placeholder='●●●●●●'
						width='auto'
						error={errors.password}
					/>
				</Fieldset>
				<Fieldset id='confirmPassword' name='Confirmar senha' width='100%'>
					<InputPassword
						register={register}
						id='confirmPassword'
						name='confirmPassword'
						placeholder='●●●●●●●'
						width='100%'
						error={errors.confirmPassword}
					/>
				</Fieldset>
				<ul className='box-password-requirements'>
					A senha precisa ter no mínimo
					<li>8 caracteres</li>
					<li>Caractere maiúsculo</li>
					<li>Caractere minúsculo</li>
					<li>Caractere um número</li>
					<li>Caractere especial</li>
				</ul>
				<p style={{ fontSize: '14px' }}>
					Já tem uma conta?{' '}
					<Link style={{ fontWeight: 'bold', fontSize: '14px' }} to={'/login'}>
						Faça login
					</Link>
				</p>
				<Button type='submit' width='100%' disabled={true}>
					Cadastrar
				</Button>
			</form>
		</StyleRegister>
	)
}

export default Register
