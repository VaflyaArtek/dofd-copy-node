const validateValue = require('./validate-value');

describe('validateValue', () => {
    test('Correct value', () => {
        expect(validateValue(50)).toBe(true)
    })

    test('Limit value at the top', () => {
        expect(validateValue(0)).toBe(true)
    })

    test('Limit value at the bottom', () => {
        expect(validateValue(100)).toBe(true)
    })

    test('Less', () => {
        expect(validateValue(-1)).toBe(false)
    })

    test('Grater', () => {
        expect(validateValue(101)).toBe(false)
    })
})

