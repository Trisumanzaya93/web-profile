import { cn } from './utils'

describe('cn util', () => {
  it('combines class names and preserves duplicates when needed', () => {
    expect(cn('btn', 'btn-primary', 'btn')).toBe('btn btn-primary btn')
  })

  it('handles falsy values', () => {
    expect(cn('btn', false && 'hidden', undefined, 'active')).toBe('btn active')
  })
})
