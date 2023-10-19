import 'styled-components'

import theme from './theme'

export type Theme = typeof theme

declare module 'styled-components' {
	export interface DefaultTheme extends Theme {
		blue900: string
		blue700: string
		blue500: string
		blue200: string
		blue100: string
		white50: string
		white200: string
		red700: string
		red500: string
		red50: string
		green700: string
		green500: string
		green50: string
	}
}
