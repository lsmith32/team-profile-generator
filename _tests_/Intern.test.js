const Intern = require('../lib/Intern');

test('creates an intern object', () => {
    const intern = new Intern('Gilligan', '3', 'Gilligan@someemail.com', 'S.S. Minnow')

    expect(intern.name).toBe('Gilligan');
    expect(intern.id).toBe('3');
    expect(intern.email).toBe('Gilligan@someemail.com')
    expect(intern.school).toBe('S.S. Minnow')
    expect(intern.role).toBe('Intern')
})