const Manager = require('../lib/Manager');

test('creates an manager object', () => {
    const manager = new Manager('Skipper', '1', 'Skipper@someemail.com', '666')

    expect(manager.name).toBe('Skipper');
    expect(manager.id).toBe('1');
    expect(manager.email).toBe('Skipper@someemail.com')
    expect(manager.office).toBe('666')
})