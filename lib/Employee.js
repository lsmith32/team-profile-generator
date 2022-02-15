class Employee {
    constructor (name ='', id, email){
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = 'Employee'
    }
    getName() {
        return name
    }
    getId() {
        return id
    }
    getEmail() {
        return email
    }
    getRole() {
        return this.role
    }
}

module.exports = Employee;