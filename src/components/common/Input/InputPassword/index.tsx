import { useState } from 'react'
import { FieldError } from 'react-hook-form'
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs'
import BaseInput from '../BaseInput'
import InputBox from '../InputBox'

type InputPasswordProps = {
	register: any
	name: string
	id: string
	width?: string
	error?: FieldError | undefined
} & React.HTMLAttributes<HTMLInputElement>

const InputPassword = ({
	placeholder,
	register,
	name,
	id,
	width,
	error,
	...rest
}: InputPasswordProps) => {
	const [viewPassword, setViewPassword] = useState(false)
	const type = viewPassword ? 'text' : 'password'
	const icon = viewPassword ? (
		<BsFillEyeSlashFill onClick={handleViewPassword} />
	) : (
		<BsFillEyeFill onClick={handleViewPassword} />
	)
	function handleViewPassword() {
		setViewPassword(!viewPassword)
	}
	return (
		<InputBox
			hasError={error?.message ? true : false}
			width={width}
			messageError={error?.message}
		>
			<BaseInput
				placeholder={placeholder}
				register={register}
				name={name}
				id={id}
				type={type}
				{...rest}
			/>
			{icon}
		</InputBox>
	)
}

export default InputPassword
