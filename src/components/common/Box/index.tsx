import styled from 'styled-components'
type BoxProps = {
	children?: React.ReactNode
	heigth?: string
	width?: string
}

const Box = ({ children, heigth, width }: BoxProps) => {
	return (
		<StyleBox width={width} heigth={heigth}>
			{children}
		</StyleBox>
	)
}

export default Box

const StyleBox = styled.div<BoxProps>`
	width: ${(props) => (props.width ? props.width : '100%')};
	height: ${(props) => (props.heigth ? props.heigth : 'fit-content')};
	border-radius: 8px;
	background-color: ${(props) => props.theme.white200};
	padding: 24px;
`
