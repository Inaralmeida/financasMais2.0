import styled from 'styled-components'

export const StyleLogin = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: ${(props) => props.theme.blue700};

	> .content-login {
		display: flex;
		align-items: center;
		background-color: ${(props) => props.theme.white50};
		gap: 24px;
		border-radius: 8px;
		padding: 24px;
		justify-content: center;

		> form {
			padding: 24px;
			border-radius: 16px;
			box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);
			background-color: ${(props) => props.theme.white200};
			gap: 24px;
			display: flex;
			align-items: center;
			flex-direction: column;
		}

		@media (max-width: 768px) {
			width: 700px;
			align-items: center;
			> picture {
				width: 43%;
				> img {
					width: 100%;
				}
			}
		}
	}

	@media (max-width: 475px) {
		padding: 24px;
		> .content-login {
			background-color: transparent;
			width: fit-content;
			align-items: center;
			> picture {
				display: none;
			}
		}
	}
`
