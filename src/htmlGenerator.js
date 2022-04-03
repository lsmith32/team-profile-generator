//function to create all the employee profiles
const generateProfiles = (employees) => {
    let allProfiles = []
    employees.forEach(employee => {
  
    //looks for the unique values and puts them in template
      let specialField = ''
      let specialFieldValue
      if (employee.office) {
        specialField = 'Office' 
        specialFieldValue = employee.office
      } else if (employee.github) {
        specialField = 'GitHub'
        specialFieldValue = `<a href="https://github.com/${employee.github}">${employee.github}</a/>`
      } else {
        specialField = 'School'
        specialFieldValue = employee.school
      }
     
      let profile = `
      <div class="w3-card-4 w3-col m5 l3 w3-margin">
      <header class="w3-container w3-green">
        <h1>${employee.name}</h1>
        <h3>${employee.role}</h3>
      </header>
      <div class="w3-container w3-padding-32">
          <table class="w3-table w3-bordered">
            <tr>
              <th>ID:</th>
              <td>${employee.id}</td>
            </tr>
            <tr>
              <th>E-mail:</th>
              <td><a href="mailto:${employee.email}">${employee.email}</a></td>
            </tr>
            <tr>
              <th>${specialField}</th>
              <td>${specialFieldValue}</td>
            </tr>
          </table>
        </div>
    </div>`
    allProfiles.push(profile)
  })
  
  return allProfiles.join('')
  }
  
  // call to generate 
  const htmlGenerator = (employees) => {
    return `
    <!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>The Team</title>
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
  </head>
  <body>
  <header class="w3-container w3-red w3-center">
    <h1>Meet the Team</h1>
  </header>
   <section class="employee-cards w3-padding-large w3-row ">
       <!-- Placeholder for cards -->
       ${generateProfiles(employees)}
   </section> 
  </body>
</html>
    `
}

module.exports = htmlGenerator;