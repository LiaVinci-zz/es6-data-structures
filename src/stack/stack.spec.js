// External Imports
import chai from 'chai'
const expect = chai.expect

// Lib Imports
import Stack from './stack.js'

describe('Stack', () => {
  it('should be an instace of a class', () => {
    expect(Stack.prototype.constructor).to.be.a('function')
  })
});
