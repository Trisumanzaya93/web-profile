import React from 'react'
import { render } from '@testing-library/react'

// Mocks to avoid heavy animation/next/link behavior
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

import { FloatingDock } from './FloatingDock.component'

describe('FloatingDock', () => {
  it('renders and matches snapshot', () => {
    const items = [
      { title: 'One', icon: React.createElement('span', null, 'I1'), href: '/' },
      { title: 'Two', icon: React.createElement('span', null, 'I2'), href: '/two' },
    ]
    const { asFragment } = render(<FloatingDock items={items} />)
    expect(asFragment()).toMatchSnapshot()
  })
})
