import React from 'react'
import styled from 'styled-components'

type BaseInputProps = {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	register?: any
	name: string
	type?: string
} & React.HTMLAttributes<HTMLInputElement>

const BaseInput = ({
	name,
	type = 'text',
	register,
	id,
	...rest
}: BaseInputProps) => {
	return (
		<StyleBasicInput
			id={`baseInput ${id}`}
			type={type}
			name={name}
			{...register(name)}
			{...rest}
		/>
	)
}

export default BaseInput

export const StyleBasicInput = styled.input`
	width: 100%;
	height: 100%;
	background: inherit;
	outline: none;
	border: none;
	font-family: 'Roboto';
	font-size: 16px;
	font-style: normal;
	font-weight: 300;
	line-height: normal;
`
