import test from 'node:test'
import assert from 'node:assert/strict'
import { titleCase } from '../src/words.js'

test('titleCase keeps single spaces between words', () => {
  assert.equal(titleCase('hello wide world'), 'Hello Wide World')
})

test('titleCase leaves empty input empty', () => {
  assert.equal(titleCase(''), '')
})