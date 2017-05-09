import { assert } from 'chai'

import { isItBalanced } from '../src'

describe('codeTest', () => {
    it('(){}[] // true', () => {
      const INPUT = '(){}[]'

      assert.isTrue(isItBalanced(INPUT))
    })
    it('({[]}) // true', () => {
      const INPUT = '({[]})'

      assert.isTrue(isItBalanced(INPUT))
    })
    it('([)] // false', () => {
      const INPUT = '([)]'

      assert.isFalse(isItBalanced(INPUT))
    })
    it('}{ // false', () => {
      const INPUT = '}{'

      assert.isFalse(isItBalanced(INPUT))
    })
    it('function(){ var newArray = [{()}];} // true', () => {
      const INPUT = 'function(){ var newArray = [{()}];}'

      assert.isTrue(isItBalanced(INPUT))
    })
    it('function(){ var newArray = [{()}]; // false', () => {
      const INPUT = 'function(){ var newArray = [{()}];'

      assert.isFalse(isItBalanced(INPUT))
    })
})