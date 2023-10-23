import BaseInput from '../BaseInput'
import InputBox from '../InputBox'

type BasicInputProps = {
	error?: any
	placeholder: string
	register: any
	name: string
	id: string
	width?: string
	type?: string
} & React.HTMLAttributes<HTMLInputElement>

const BasicInput = ({
	error,
	placeholder,
	register,
	name,
	id,
	width,
	type,
	...rest
}: BasicInputProps) => {
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
		</InputBox>
	)
}

export default BasicInput
