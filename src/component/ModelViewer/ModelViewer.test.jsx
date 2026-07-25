import React from 'react'
import { render } from '@testing-library/react'

// Mock heavy 3D deps
jest.mock('@react-three/fiber', () => ({
  Canvas: ({ children }: any) => React.createElement('div', { 'data-testid': 'canvas-root' }, children),
}))

jest.mock('@react-three/drei', () => ({
  OrbitControls: () => React.createElement('div', { 'data-testid': 'orbit-controls' }),
  Preload: ({ children }: any) => React.createElement('div', null, children),
  useGLTF: () => ({ scene: {} }),
}))

import ModelViewer from './ModelViewer'

describe('ModelViewer', () => {
  it('renders container and matches snapshot', () => {
    const { asFragment, getByTestId } = render(React.createElement(ModelViewer))
    expect(asFragment()).toMatchSnapshot()
    expect(getByTestId('canvas-root')).toBeTruthy()
  })
})
