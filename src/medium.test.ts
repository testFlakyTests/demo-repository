import { describe, it, expect } from 'vitest'

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

describe('Medium Speed Test Suite', () => {
  it('should be medium test 1', async () => {
    await sleep(800) // 800ms delay
    expect(true).toBe(true)
  })

  it('should be medium test 2', async () => {
    await sleep(600) // 600ms delay
    expect(true).toBe(true)
  })

  it('should be medium test 3', async () => {
    await sleep(700) // 700ms delay
    expect(true).toBe(true)
  })
}) 