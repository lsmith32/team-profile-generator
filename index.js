const inquirer = require('inquirer');
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
let employees = []
const htmlGenerator = require('./src/htmlGenerator')
const fs = require('fs');
const readline = require('readline')
const regExEmail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/

//Prompts for Manager
const addManager = async () => {
    await inquirer
      .prompt([{
      type: 'text',
      name: 'name',
      message: 'Who is the Manager?',
      validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log('You need to enter a name');
            return false;
        }
      }},
      {
        type: 'text',
        name: 'id',
        message: 'What is the manager\'s ID?',
        validate: idInput => {
          if (idInput) {
              return true;
          } else {
              console.log('You need to enter an ID');
              return false;
          }
      }},
      {
        type: 'text',
        name: 'email',
        message: 'What is the manager\'s email?',
        validate: emailInput => {
          if (emailInput && regExEmail.test(emailInput)) {
              return true;
          } else {
              console.log('You need to enter a valid email');
              return false;
          }
      }},
      {
        type: 'text',
        name: 'office',
        message: 'What is the Manager\'s office?',
        validate: officeInput => {
          if (officeInput) {
              return true;
          } else {
              console.log('You need to enter an office');
              return false;
          }
      }},

    ]).then(({name, id, email, office}) => {
      return employees.push(new Manager(name, id, email, office));
  })}

  const addEmployee = async () => {
    await inquirer.prompt([
    {
      type: 'list',
      name: 'type',
      message: 'What type of employee would you like to add?',
      choices: ['None', 'Engineer', 'Intern']
    },
  ]).then(({type}) => {
      switch (type) {
        case 'Engineer': addEngineer()
        break;
        case 'Intern': addIntern()
        break;
        case 'None': createFile()
        break;
        default: console.log('An error has occured')
      }
    })
}

  const addEngineer = async () => {
    await inquirer
    .prompt([{
    type: 'text',
    name: 'name',
    message: 'What is the engineer\'s name?',
    validate: nameInput => {
      if (nameInput) {
          return true;
      } else {
          console.log('You need to enter a name');
          return false;
      }
    }},
    {
      type: 'text',
      name: 'id',
      message: 'What is the engineer\'s ID?',
      validate: idInput => {
        if (idInput) {
            return true;
        } else {
            console.log('You need to enter an ID');
            return false;
        }
    }},
    {
      type: 'text',
      name: 'email',
      message: 'What is the engineer\'s email?',
      validate: emailInput => {
        if (emailInput && regExEmail.test(emailInput)) {
            return true;
        } else {
            console.log('You need to enter a valid Email');
            return false;
        }
    }},
    {
      type: 'text',
      name: 'github',
      message: 'What is the engineer\'s Github username?',
      validate: githubInput => {
        if (githubInput) {
            return true;
        } else {
            console.log('You need to enter a Github username');
            return false;
        }
    }},
    {
      type: 'confirm',
      name: 'confirmAnotherEmployee',
      message: 'Would you like to enter another employee?',
      default: false
    },
  ]).then(({name, id, email, github, confirmAnotherEmployee}) => {
    employees.push(new Engineer(name, id, email, github));
    confirmAnotherEmployee ? addEmployee() : createFile()
})
}

const addIntern = async () => {
  await inquirer
  .prompt([{
  type: 'text',
  name: 'name',
  message: 'What is the intern\'s name?',
  validate: nameInput => {
    if (nameInput) {
        return true;
    } else {
        console.log('You need to enter a name');
        return false;
    }
  }},
  {
    type: 'text',
    name: 'id',
    message: 'What is the intern\'s ID?',
    validate: idInput => {
      if (idInput) {
          return true;
      } else {
          console.log('You need to enter an ID');
          return false;
      }
  }},
  {
    type: 'text',
    name: 'email',
    message: 'What is the intern\'s email?',
    validate: emailInput => {
      if (emailInput && regExEmail.test(emailInput)) {
          return true;
      } else {
          console.log('You need to enter a valid email');
          return false;
      }
  }},
  {
    type: 'text',
    name: 'school',
    message: 'What is the interns school?',
    validate: schoolInput => {
      if (schoolInput) {
          return true;
      } else {
          console.log('You need to enter a school');
          return false;
      }
  }},
  {
    type: 'confirm',
    name: 'confirmAnotherEmployee',
    message: 'Would you like to add another employee?',
    default: false
  },
]).then(({name, id, email, school, confirmAnotherEmployee}) => {
  employees.push(new Intern(name, id, email, school));
  confirmAnotherEmployee ? addEmployee() : createFile()
})
}

//Generates HTML file
const createFile = () => {
  writeToFile(htmlGenerator(employees))
}

//creates HTML file
writeToFile = fileContent => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./dist/index.html', fileContent, err => {
      if (err) {
        reject(err);
        return;
      }
        resolve({
        ok: true,
        message: 'Success!'
      });
    });
  });
}; 

addManager().then(addEmployee)