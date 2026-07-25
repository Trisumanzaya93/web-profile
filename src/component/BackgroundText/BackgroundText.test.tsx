import React from 'react'
import { render } from '@testing-library/react'
import { Icon, generateRandomString } from './BackgroundText'

describe('BackgroundText component', () => {
  it('renders the Icon and matches snapshot', () => {
    const { asFragment } = render(<Icon className="test-icon" />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('generateRandomString returns a string of the requested length', () => {
    const result = generateRandomString(16)
    expect(result).toHaveLength(16)
    expect(result).toMatch(/^[A-Za-z0-9]{16}$/)
  })
})
