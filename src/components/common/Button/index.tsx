import styled from 'styled-components'

type ButtonProps = {
	variant?: 'primary' | 'secondary'
	messageLoading?: string
	children: React.ReactNode
	disabled?: boolean
	isLoading?: boolean
	type?: 'button' | 'submit'
} & React.HTMLAttributes<HTMLButtonElement>
const Button = ({
	children,
	type,
	messageLoading,
	isLoading,
	variant = 'primary',
	disabled = false,
	...rest
}: ButtonProps) => {
	return (
		<StyleButton {...rest} disabled={disabled} className={variant} type={type}>
			<>{isLoading ? messageLoading : children}</>
		</StyleButton>
	)
}

export default Button

const StyleButton = styled.button`
	width: auto;
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
