const describe = (desc, fn) => {
  console.log(desc)
  fn()
}

const it = (msg, fn) => describe('  ' + msg, fn)

const matchers = (exp) => ({
  toBe: (assertion) => {
    if (exp === assertion) {
      console.log('pass')
      return true
    } else {
      console.log('fail')
      return false
    }
  }
})

const expect = (exp) => matchers(exp)

// FUNCTIONS FOR TESTING

// ADDITION
function add(a, b) {
  return a + b 
}

describe('add', () => {
  it('adds two numbers', () => {
    const result = add(1, 2)
    expect(result).toBe(3)
  })
})

// SUBTRACTION
function subtract(a, b) {
  return a - b 
}

describe('subtract', () => {
  it('subtracts two numbers', () => {
    const result = subtract(10, 7)
    expect(result).toBe(3)
  })
})

// DIVISION
function divide(a, b) {
  return a / b 
}

describe('divide', () => {
  it('divides two numbers', () => {
    const result = divide(100, 10)
    expect(result).toBe(10)
  })
})

// MULTIPLICATION
function multiply(a, b) {
  return a * b 
}

describe('multiply', () => {
  it('multiplies two numbers', () => {
    const result = multiply(10, 10)
    expect(result).toBe(100)
  })
})


module.exports = {
  describe,
  expect,
  it,
  matchers
}