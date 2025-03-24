// Typescript to js
// node: tsc app.ts
// run js file in terminal: node.js
// wacth typescript file: tsc --watch app.ts
// Or use complile hero extension for converting.
var signContract = function (employee) {
    console.log("Contract signed by ".concat(employee.name, ", with email ").concat(employee.email));
};
signContract({ name: "Kelvin Gates", creditScore: 800, id: 787, email: "kev.dev@gmail.com" });
