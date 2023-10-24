import styled from 'styled-components'

export const StyleRegister = styled.main`
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: space-between;
	background-color: ${(props) => props.theme.blue700};
	> section {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 48px;
		padding: 48px 24px;

		> picture {
			width: 60%;

			> img {
				width: 100%;
			}
		}
	}

	> form {
		width: 50%;
		max-width: 500px;
		min-width: 300px;
		height: 100%;
		justify-content: space-around;
		border-radius: 16px 0 0 16px;
		display: flex;
		align-items: center;
		flex-direction: column;
		gap: 24px;
		background-color: ${(props) => props.theme.white200};
		color: ${(props) => props.theme.blue900};
		padding: 48px;
		overflow-x: auto;
		> fieldset {
			width: 100%;
			display: flex;
			justify-content: space-between;
			border: none;
		}

		ul {
			width: 100%;
			font-size: 12px;
			> li {
				margin-left: 15px;
				list-style: disc;
			}
		}
	}

	@media screen and (max-width: 768px) {
		gap: 0;
		justify-content: center;
		align-items: center;
		padding: 48px;
		height: auto;
		> section {
			display: none;
		}

		> form {
			width: 80%;
			border-radius: 16px;
			> fieldset {
				flex-direction: column;
				gap: 12px;

				> div {
					width: 100%;
				}
			}
		}
	}
	@media screen and (max-width: 475px) {
		gap: 0;
		justify-content: center;
		height: auto;
		padding: 24px 12px;

		> section {
			display: none;
		}

		> form {
			padding: 24px 12px;
			width: 100%;
		}
	}
`
