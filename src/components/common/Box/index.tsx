import styled from 'styled-components'
type BoxProps = {
	children?: React.ReactNode
	heigth?: string
	width?: string
	direction: 'row' | 'column'
}

const Box = ({ children, heigth, width, direction }: BoxProps) => {
	return (
		<StyleBox width={width} heigth={heigth} direction={direction}>
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
	display: flex;
	gap: 12px;
	flex-direction: ${(props) => props.direction};
`
