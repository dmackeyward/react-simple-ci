// App.test.jsx
import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from './App' // Adjust the import path based on your file structure

describe('App component', () => {
  it('renders "Hello World"', () => {
    render(<App />)
    const headingElement = screen.getByText(/Hello World/i)
    expect(headingElement).toBeDefined()
  })

  it('renders "Hello World"', () => {
    render(<App />)
    const headingElement1 = screen.getByText(/DAVID IS COOL/i)
    expect(headingElement1).toBeDefined()
  })

  
})
