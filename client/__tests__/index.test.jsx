import { render, screen } from '@testing-library/react'
import Contact from '../pages';
import '@testing-library/jest-dom'

describe('Home', () => {
  it('renders home page', () => {
    render(<Contact />)

    const homepage = screen.getByText('homepage', {
      name: "We're here",
    }) 

    expect(homepage).toBeInTheDocument()
  })
})