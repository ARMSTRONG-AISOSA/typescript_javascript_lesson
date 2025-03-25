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
// interface BusinessPartner {
//     name: string;
//     creditScore: number;
// }

// interface UserIdentity {
//     id: number;
//     email: string;
// }

// type Employee = BusinessPartner & UserIdentity

// const signContract = (employee: Employee): void => {
//     console.log(`Contract signed by ${employee.name}, with email ${employee.email}`);
// }

// signContract({ name: "Kelvin Gates", creditScore: 800, id: 787, email: "kev.dev@gmail.com" });






// ============== Enum
// An enum (short for enumeration) in TypeScript is a special type that allows you to define a set of named constants. It provides a way to associate names with numeric or string values, making the code more readable and maintainable.

// // Error handing
// enum LoginError {
//     Unauthorised = "unauthorised",
//     NoUser = "nouser",
//     WrongCredentials = "wrongcredentials",
//     Internal = "internal",
// }

// const logErrorMsg = (error: LoginError) => {
//     if (error === LoginError.Unauthorised) {
//         console.log("User not authorised!");
//     } else if (error === LoginError.NoUser) {
//         console.log("No user was found with that username.");
//     } else if (error === LoginError.WrongCredentials) {
//         console.log("Wrong username/password combination");
//     } else if (error === LoginError.Internal) {
//         console.log("Internal Error.");
//     } else {
//         console.log("Unknown issue");
//     }
// }

// logErrorMsg(LoginError.Unauthorised);
// logErrorMsg(LoginError.Internal);


// Handling API Statuses
// enum HttpStatus {
//     OK = 200,
//     NotFound = 404,
//     InternalServerError = 500
// }

// // what "" does is 
// // Explicitly declares responseStatus as a variable of type HttpStatus.
// // Now, responseStatus can hold any value from the HttpStatus enum, rather than being fixed to 200.
// const responseStatus: HttpStatus = HttpStatus.OK;
// console.log(responseStatus);


// // Defining user roles
// enum UserRole {
//     Admin = "ADMIN",
//     Editor = "EDITOR",
//     Viewer = "VIEWER",
// }

// const thisUserRole: UserRole = UserRole.Editor;
// console.log(thisUserRole);
// const thisUserRole2: UserRole = UserRole.Admin;
// console.log(thisUserRole2);

// // NB: (role: UserRole) → Declares a parameter named role with the type UserRole.
// function checkUserAccess(role: UserRole) {
//     if (role === UserRole.Admin) {
//         console.log("Access granted: Admin role.");
//     } else if (role === UserRole.Editor) {
//         console.log("Access granted: Editor role.");
//     } else if (role === UserRole.Viewer) {
//         console.log("Access granted: Viewer role.");
//     } else {
//         console.log("No role not found: Access denied");
//     }
// }

// checkUserAccess(UserRole.Admin);

// const John = UserRole.Viewer;
// checkUserAccess(John);






// ============== Generics
// Generics in TypeScript allow you to write flexible, reusable, and type-safe code. They enable functions, classes, and interfaces to work with multiple data types without losing type safety.
// PS: TypeScript infers generic types automatically

// <"T">: this is a place holder for the different data types that can be used such as strings or numbers
// class StorageContainer<T> {
//     // private → This means the contents variable can only be accessed inside the class. It cannot be accessed outside the class.
//     // contents → This is the name of the variable that holds the stored items.
//     // T[] → This declares contents as an array of type T, where T is a generic type.
//     private contents: T[];

//     constructor() {
//         this.contents = [];
//     };

//     addItem(item: T): void {
//         this.contents.push(item);
//     };

//     getItem(idx: number): T | undefined {
//         return this.contents[idx];
//     };
// }

// // <string> passes the datatype of string to <"T">
// const usernames = new StorageContainer<string>();
// usernames.addItem("Geto");
// usernames.addItem("Grid");
// usernames.addItem("Baka");

// console.log(usernames.getItem(2));
// console.log(usernames);

// const menu = new StorageContainer<string>();
// menu.addItem("Tomato");
// menu.addItem("Pasta");
// menu.addItem("Spices");
// menu.addItem("Meat");
// menu.addItem("Vegitables");
// menu.addItem("Stock");

// console.log(menu);
// console.log(menu.getItem(4));

// const numOfFriends = new StorageContainer<number>();
// numOfFriends.addItem(27);
// numOfFriends.addItem(16);
// numOfFriends.addItem(19);








// ============== Read-Only Variables
// Used for data that should never change such as an employee Id and the day they first started their work at the business
interface Employee {
    // Immutable data
    readonly employeeId: number;
    readonly startDate: Date;

    name: string;
    department: string;
}

const employee: Employee = {
    employeeId: 231243123,
    startDate: new Date(),
    name: "Johnny",
    department: "Acquisitions",
};

console.log(employee);

employee.name = "Jake";
employee.department = "Finance";
console.log(employee);