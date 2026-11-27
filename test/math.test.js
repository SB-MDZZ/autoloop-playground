import test from 'node:test'
import assert from 'node:assert/strict'
import { add, clock } from '../src/math.js'

test('add sums two positive numbers', () => {
  assert.equal(add(2, 3), 5)
})

test('add sums negatives', () => {
  assert.equal(add(-4, 1), -3)
})

test('clock pads seconds', () => {
  assert.equal(clock(65), '1:05')
})

test('clock clamps negatives', () => {
  assert.equal(clock(-3), '0:00')
})