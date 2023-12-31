import React from 'react'
import styled from 'styled-components'

type ButtonProps = {
	variant?: 'primary' | 'secondary'
	messageLoading?: string
	children: React.ReactNode
	disabled?: boolean
	isLoading?: boolean
	width?: string
	type?: 'button' | 'submit'
} & React.HTMLAttributes<HTMLButtonElement>
const Button = ({
	width,
	children,
	type,
	messageLoading,
	isLoading,
	variant = 'primary',
	disabled = false,
	...rest
}: ButtonProps) => {
	return (
		<StyleButton
			{...rest}
			disabled={disabled}
			className={variant}
			type={type}
			width={width}
		>
			<>{isLoading ? messageLoading : children}</>
		</StyleButton>
	)
}

export default Button

const StyleButton = styled.button<ButtonProps>`
	width: ${(props) => (props.width ? props.width : 'fit-content')};
	border-radius: 8px;
	box-shadow: 5px 6px 4px 0px rgba(0, 0, 0, 0.25);
	padding: 12px 48px;
	align-items: center;
	font-family: 'Roboto', sans-serif;
	font-size: 24px;
	font-style: normal;
	font-weight: 700;
	line-height: normal;
	transition: background 0.3s;

	&:disabled {
		opacity: 0.9;
		cursor: not-allowed;
		pointer-events: none;
	}

	&.primary {
		background-color: ${(props) => props.theme.blue700};
		border: none;
		color: ${(props) => props.theme.white50};

		&:hover {
			background-color: ${(props) => props.theme.blue500};
		}
	}

	&.secondary {
		background: transparent;
		border: 1px solid ${(props) => props.theme.blue700};
		color: ${(props) => props.theme.blue700};
	}
`
