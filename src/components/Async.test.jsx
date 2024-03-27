import { render, screen } from '@testing-library/react';
import Async from './Async'

describe('Async component', () => {
    test('renders posts if request succeeds', async () => {

        window.fetch = vi.fn()
        window.fetch.mockResolvedValueOnce({
            json: async () => [{id: 'p1', title: 'First Post'}]
        });

        // Arrange
        render(<Async />)

        // Act
        const listItemElements = await screen.findAllByRole('listitem', {}, { timeout: 3000 })

        // Assert
        expect(listItemElements).not.toHaveLength(0)
    })
})