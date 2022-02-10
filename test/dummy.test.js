const dummy = require('../utils/list_helper').dummy

test('dummy returns on', () => {
    const blogs = []

    const result = dummy(blogs)
    expect(result).toBe(1)
})