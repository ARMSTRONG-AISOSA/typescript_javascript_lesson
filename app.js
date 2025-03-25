// Typescript to js
// node: tsc app.ts
// run js file in terminal: node.js
// wacth typescript file: tsc --watch app.ts
// Or use complile hero extension for converting.
var employee = {
    employeeId: 231243123,
    startDate: new Date(),
    name: "Johnny",
    department: "Acquisitions",
};
console.log(employee);
employee.name = "Jake";
employee.department = "Finance";
console.log(employee);
