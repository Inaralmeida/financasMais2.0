import * as Yup from 'yup'

const useLogin = () => {
	const loginSchema = Yup.object().shape({
		email: Yup.string()
			.required('O email é obrigatório')
			.email('Informe um email válido'),
		senha: Yup.string()
			.required('A senha é obrigatória')
			.min(8, 'A senha deve ter pelo menos 8 caracteres')
	})

	const defaultValue = {
		email: '',
		senha: ''
	}

	const handleLogin = (data: any) => {
		console.log(data)
	}

	return {
		loginSchema,
		defaultValue,
		handleLogin
	}
}

export default useLogin
