type InputBoxProps = {
	children: React.ReactNode
	width?: string
	hasError?: boolean
	messageError?: string
}
import styled from 'styled-components'

const InputBox = ({
	children,
	width,
	hasError,
	messageError
}: InputBoxProps) => {
	return (
		<>
			<StyleInputBox width={width} hasError={hasError} id='input-box'>
				{children}
			</StyleInputBox>
			{messageError && <StyleMessageError>{messageError}</StyleMessageError>}
		</>
	)
}

export default InputBox

const StyleInputBox = styled.div<InputBoxProps>`
	width: ${(props) => (props.width ? props.width : 'fit-content')};
	padding: 8px 12px;
	height: fit-content;
	display: flex;
	align-items: center;
	gap: 12px;
	justify-content: space-between;
	border-radius: 8px;
	background: ${(props) => props.theme.white50};
	outline: none;
	border: 2px solid transparent;
	box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);
	font-family: 'Roboto';
	font-size: 16px;
	font-style: normal;
	font-weight: 300;
	line-height: normal;

	&.active {
		border: 2px solid ${(props) => props.theme.blue700};
	}

	${(props) =>
		props.hasError &&
		`
    border: 2px solid ${props.theme.red500};
    color: ${props.theme.red500};
  `};
`
const StyleMessageError = styled.p`
	font-family: 'Roboto';
	font-size: 16px;
	font-style: normal;
	font-weight: 300;
	line-height: normal;
	color: ${(props) => props.theme.red500};
`
