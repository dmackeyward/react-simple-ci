import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Hello from './Hello'

describe('<Greeting /> component', () => {
    test('renders hello world test', () => {
        // Arrange
        render(<Hello />);

        // Act
        // ...nothing

        // Assert
        const helloWorldElement = screen.getByText('Hello World')
        expect(helloWorldElement).toBeDefined()
    })

    test('renders "good to see you" if the button was NOT clicked', () => {
        // Arrange
        render(<Hello />);

        // Act
        // ...nothing

        // Assert
        const outputElement = screen.getByText('good to see you', { exact: false })
        expect(outputElement).toBeDefined()
    })

    test('renders "Changed!" if the button was clicked', async () => {
        // Arrange
        render(<Hello />);

        // Act
        const buttonElement = screen.getByRole('button')
        await userEvent.click(buttonElement)

        // Assert
        const outputElement = screen.getByText('Changed!')
        expect(outputElement).toBeDefined()
    })

    test('does not render "good to see you" if the button was clicked', async () => {
        // Arrange
        render(<Hello />);

        // Act
        const buttonElement = screen.getByRole('button')
        await userEvent.click(buttonElement)

        // Assert
        const outputElement = screen.queryByText('good to see you', { exact: false })
        expect(outputElement).toBeNull()
    })
})