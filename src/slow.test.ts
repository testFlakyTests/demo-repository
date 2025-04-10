import { describe, it, expect } from 'vitest'

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

describe('Slow Test Suite', () => {
  it('should be slow test 1', async () => {
    await sleep(2000) // 2 second delay
    expect(true).toBe(true)
  })

  it('should be slow test 2', async () => {
    await sleep(1500) // 1.5 second delay
    expect(true).toBe(true)
  })

  it('should be slow test 3', async () => {
    await sleep(1000) // 1 second delay
    expect(true).toBe(true)
  })
}) 