import React from 'react'
import { render } from '@testing-library/react'

// Simple motion mock if used
jest.mock('motion/react', () => ({
  motion: { div: (props: any) => React.createElement('div', props, props.children) },
  useMotionValue: () => ({ set: () => {} }),
}))

import BgMeteor from './BgMeteor'

describe('BgMeteor', () => {
  it('renders and matches snapshot', () => {
    const { asFragment } = render(<BgMeteor />)
    expect(asFragment()).toMatchSnapshot()
  })
})
