import React from 'react'
import { render } from '@testing-library/react'

// mock next/link and motion/react used by Desktop/FloatingDock
jest.mock('next/link', () => ({
  __esModule: true,
  default: ({ children, href, className }: any) => React.createElement('a', { href, className }, children),
}))

jest.mock('motion/react', () => ({
  AnimatePresence: ({ children }: any) => React.createElement('div', null, children),
  motion: {
    div: (props: any) => React.createElement('div', props, props.children),
  },
  useMotionValue: () => ({ set: () => {} }),
  useSpring: (v: any) => v,
  useTransform: () => ({})
}))

import Desktop from './Desktop'

describe('Desktop component', () => {
  it('renders and matches snapshot', () => {
    const { asFragment } = render(<Desktop />)
    expect(asFragment()).toMatchSnapshot()
  })
})
