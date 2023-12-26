import * as Yup from 'yup'

const useRegister = () => {
	const cadastroSchema = Yup.object().shape({
		name: Yup.string().required('O nome é obrigatório'),
		lastName: Yup.string().required('O sobrenome é obrigatório'),
		email: Yup.string()
			.required('O email é obrigatório')
			.email('Informe um email válido'),
		password: Yup.string()
			.required('A senha é obrigatória')
			.min(8, 'A senha deve ter pelo menos 8 caracteres')
			.matches(
				/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
				'Formato de senha inválido'
			),
		confirmPassword: Yup.string()
			.required('A confirmação senha é obrigatória')
			.min(8, 'A senha deve ter pelo menos 8 caracteres')
			.oneOf([Yup.ref('password'), ''], 'As senhas não coincidem')
	})

	const defaultValue = {
		name: '',
		lastName: '',
		email: '',
		password: '',
		confirmPassword: ''
	}

	const handleRegister = (data: any) => {
		console.log(data)
	}
	return {
		cadastroSchema,
		defaultValue,
		handleRegister
	}
}

export default useRegister
