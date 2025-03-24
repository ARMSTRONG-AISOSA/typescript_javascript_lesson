// Typescript to js
// node: tsc app.ts
// run js file in terminal: node.js
// wacth typescript file: tsc --watch app.ts
// Or use complile hero extension for converting.

// ============== Define Data Types
// // string
// let message: string = "Hello World!";
// console.log(message);

// let textData: string = "Good";
// console.log(textData);

// // number
// let id: number = 3;
// console.log(id);

// // Boolean
// let isPublished: boolean = true;
// console.log(isPublished);

// // anyType
// let anyData: any = "Pethrov";
// console.log(anyData);





// // ============== Define Array Types
// // an array of strings
// let colorData: string[] = ['red', 'blue', 'green'];
// console.log(colorData);


// // an array of number
// let idNum: number[] = [2, 4, 6, 8, 10];
// console.log(idNum);

// // an array of differen type
// let anyType: any[] = [true, "green", false, 7, "red"];
// console.log(anyType);






// ============== Functions

// // string
// const concatValues = (a: string, b: string) => {
//     return a + b;
// }
// console.log(concatValues("Hello ", "World"));
// console.log(concatValues('2', '4'));

// // number
// const addValues = (c: number, d: number) => {
//     return c + d;
// }
// console.log(addValues(2, 4));

// // Define return type
// // number
// const multiplyValues = (c: number, d: number): number => {
//     return c * d;
// }
// console.log(multiplyValues(3, 4));

// // any
// const anyValues = (c: any, d: any, e: any): any => {
//     return c + d + e;
// }
// console.log(anyValues('3', '5', ' red'));





// // ============== Objects

// // Defining the data types of object structure
// interface UserInterface {
//     id: number;
//     name: string;
//     age: number;
//     //adding the "?" makes it optional for being used
//     optional?: any;
//     // Used to define a function; The argument (message) and the return values are both defined. In this case a string and void respectively as nothing is being returned
//     salute(message: string): void;
// }

// // By default typescript would define the data types: hover over "User" to see id
// // i.e: user has type interface; we forced the defination
// const User: UserInterface = {
//     id: 1,
//     name: "Pedro",
//     age: 25,
//     salute(message) {
//         console.log(message);
//     }
// };

// console.log(User.age);

// if (!User.optional) {
//     console.log("No options for user stated");
//     //defaults to undefined
//     console.log(User.optional);
// }

// User.salute("Hello");






// ============== Data types Union

// // The ideaa is sometimes back end data from apis could be strings or numbers
// const printID = (id: string | number | boolean | number[]) :void => {
//     console.log("ID: " + id);
// }

// printID(567); //number
// printID("Ted123"); //string
// printID("Ben"); //string
// printID([2, 3, 4, 6]); //number array
// printID(true); //boolean

// // To Make the id type defination less complex we use "type" which is similar to "interface".
// // Interface is esclusive to objects, "types" is exclusive to single fields.
// type IDFieldType = string | number;

// const printID2 = (id2: IDFieldType) :void => {
//     console.log("ID: " + id2);
// };

// printID2(456);
// printID2("Rex456");







// ============== Data types Intersection
// Here you intersect multiple data types/interfaces
// An example below is a person in a company database that is both an employee/user and business partner
interface BusinessPartner {
    name: string;
    creditScore: number;
}

interface UserIdentity {
    id: number;
    email: string;
}

type Employee = BusinessPartner & UserIdentity

const signContract = (employee: Employee): void => {
    console.log(`Contract signed by ${employee.name}, with email ${employee.email}`);
}

signContract({ name: "Kelvin Gates", creditScore: 800, id: 787, email: "kev.dev@gmail.com" });
