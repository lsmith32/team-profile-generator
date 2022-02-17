const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
    const engineer = new Engineer('Professor', '2', 'Professor@someemail.com', 'Professor2')

    expect(engineer.name).toBe('Professor');
    expect(engineer.id).toBe('2');
    expect(engineer.email).toBe('Professor@someemail.com')
    expect(engineer.github).toBe('Professor2')
    expect(engineer.role).toBe('Engineer')
})