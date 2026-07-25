import React from 'react'
import { render } from '@testing-library/react'

// mock FloatingDock import used by Footer
jest.mock('@/components/ui/floating-dock', () => ({
  FloatingDock: ({ items }: any) => React.createElement('div', { 'data-testid': 'floating-dock' }, items?.length || 0),
}))

import Footer from './Footer'

describe('Footer', () => {
  it('renders and matches snapshot', () => {
    const scrollEl = document.createElement('div')
    const { asFragment, getByTestId } = render(<Footer scrollReff={{ current: scrollEl }} />)
    expect(asFragment()).toMatchSnapshot()
    expect(getByTestId('floating-dock')).toBeTruthy()
  })
})
