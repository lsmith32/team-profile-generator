const Employee = require('../lib/_mock_/fake.js');

jest.mock('../lib/Employee.js');

test('creates an enemy object', () => {
  const employee = new Employee('MaryAnne', 'Employee');

  expect(employee.name).toBe('MaryAnne');
  expect(employee.role).toBe('Employee');
  expect(employee.email).toBe('MaryAnne@someemail.com');
});