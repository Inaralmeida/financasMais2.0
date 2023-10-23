import '@testing-library/jest-dom'
import { fireEvent, render } from '@testing-library/react'
import Button from '../../components/common/Button'

describe('<button>', () => {
	it('should render button', () => {
		const { getByText, getByRole } = render(<Button>Button</Button>)
		expect(getByText('Button')).toBeInTheDocument()
		expect(getByRole('button')).toBeInTheDocument()
	})

	it('should exec onClick', () => {
		const mockOnClick = jest.fn()
		const { getByText } = render(<Button onClick={mockOnClick}>Button</Button>)

		const button = getByText('Button')

		fireEvent.click(button)

		expect(mockOnClick).toHaveBeenCalled()
	})

	it('should button is disable by prop disabled', () => {
		const { getByText } = render(<Button disabled>Button</Button>)

		const button = getByText('Button')

		expect(button).toBeDisabled()
	})

	it('should button text carregando... if prop isLoading is true', () => {
		const { getByText } = render(
			<Button isLoading messageLoading='carregando...'>
				Button
			</Button>
		)

		const textIsLoading = getByText('carregando...')
		expect(textIsLoading).toBeInTheDocument()
	})
})
