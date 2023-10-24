import React from 'react'
import { TiPlus } from 'react-icons/ti'
import styled from 'styled-components'

type LogoProps = {
	color?: 'blue' | 'white'
	size?: 'medium' | 'large' | 'small'
}

const Logo = ({ color = 'blue', size = 'medium' }: LogoProps) => {
	return (
		<StyleLogo className={`${color} ${size}`}>
			Finanças
			<TiPlus />
		</StyleLogo>
	)
}

export default Logo

const StyleLogo = styled.div`
	width: fit-content;
	display: flex;
	align-items: center;
	gap: 4px;
	font-family: Montserrat;
	font-size: 32px;
	font-style: normal;
	font-weight: 700;
	line-height: normal;

	&.large {
		font-size: 64px;
	}

	&.medium {
		font-size: 48px;
	}

	&.small {
		font-size: 32px;
	}

	&.blue {
		color: ${(props) => props.theme.blue500};
	}
	&.white {
		color: ${(props) => props.theme.white50};
	}
`
