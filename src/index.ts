// --- Welcome ---

// console.log("Hello World");

// --- Debug ---

// let age: number = 23;

// if (age < 50) {
//   age += 10;
// }

// --- any Type ---

// let sales: number = 123_456_789;
// let course: string = "Typescript";
// let isFree: boolean = true;

// let what;
// what = 10;
// what = "a";

// function render(document) {
//   console.log(document);
// }

// --- Array Type ---

// let numbers: number[] = [1, 2, "3"];
// let numbers = [1, 2, 3];
// let numbers = [];

// --- Tuple Type ---

// let user: [number, string] = [123, "Hammad"];
// user.push(52);

// --- Enums Type ---

// const small = 1;
// const medium = 2;
// const large = 3;

// enum Size {
//   Small = "sm",
//   Medium = "md",
//   Large = "lg",
// }

// let mySize: Size = Size.Large;
// console.log(mySize);

// --- Function Type ---

// function calculateTax(income: number, taxYear = 2023): number {
//   // or 'void' if not returning anything
//   if (income < 50_000 && taxYear < 2023) {
//     return income * 1.2;
//   }

//   return income * 1.2;

//   // let a;

//   // if nothing is returned, 'undefined' is returned automatically by JS
// }

// calculateTax(60_000, 2022, 'hi');

// --- Object Type ---

// let employee: { readonly id: number; name: string; retire: (date: Date) => void } = {
//   id: 1,
//   name: "Hammad",
//   retire: (date: Date) => {
//     console.log(date);
//   },
// };

// // employee.id = 2;
// // employee.name = "Her";

// --- Type Aliases ---

// type Employee = {
//   readonly id: number;
//   name: string;
//   retire: (date: Date) => void;
// };

// let employee: Employee = {
//   id: 1,
//   name: "Hammad",
//   retire: (date) => {
//     console.log(date);
//   },
// };

// --- Union Type ---

// function kgToLbs(weight: number | string): number {
//   if (typeof weight === "number") {
//     return weight * 2.2;
//   } else {
//     return parseInt(weight) * 2.2;
//   }
// }

// kgToLbs(10);
// kgToLbs("10kg");

// --- Intersection Type ---

// type Draggable = {
//   drag: () => void;
// };

// type Resizable = {
//   resize: () => void;
// };

// type UIWidget = Draggable & Resizable;

// let textArea: UIWidget = {
//   drag: () => {},
//   resize: () => {},
// };

// --- Literal Type ---

// type Quantity = 50 | 100;
// type Metric = "cm" | "inch";

// let quantity: Quantity = 50;

// --- Nullable Type ---

// function greet(name: string | null | undefined) {
//   if (name) console.log(name.toUpperCase());
//   else console.log("Hi");
// }

// greet(null);

// --- Optional Chaining Type ---

// type Customer = {
//   birthday: Date;
// };

// function getCustomer(id: number): Customer | null | undefined {
//   return id === 0 ? null : { birthday: new Date() };
// }

// const customer = getCustomer(0);
// console.log(customer?.birthday.getFullYear());

// --- Finished ---
