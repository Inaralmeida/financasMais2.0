import React from 'react'
import { FieldError } from 'react-hook-form'
import BaseInput from '../BaseInput'
import InputBox from '../InputBox'

type InputStartIconProps = {
	placeholder: string
	register: any
	name: string
	id: string
	width?: string
	error?: FieldError | undefined
	type?: string
	icon?: React.ReactNode
	startIcon?: React.ReactNode
} & React.HTMLAttributes<HTMLInputElement>

const InputWithIcon = ({
	placeholder,
	register,
	name,
	id,
	width,
	error,
	type,
	icon,
	startIcon,
	...rest
}: InputStartIconProps) => {
	return (
		<InputBox
			hasError={error?.message ? true : false}
			width={width}
			messageError={error?.message}
		>
			{startIcon && icon}
			<BaseInput
				placeholder={placeholder}
				register={register}
				name={name}
				id={id}
				type={type}
				{...rest}
			/>
			{!startIcon && icon}
		</InputBox>
	)
}

export default InputWithIcon
