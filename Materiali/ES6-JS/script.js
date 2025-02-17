
//! Keyword this
// const firstName = 'Mister X';

// const firstObject = {
//     firstName: 'Alessandro',
//     description: 'Descrizione di prova',
//     price: 80,
//     quantity: 3,
//     getCapitalName: function() {
//         console.log(this.firstName);
//     },
//     totalPrice: function() {
//         return this.price * this.quantity;
//     }
// }

// firstObject.getCapitalName();
// console.log(firstObject.totalPrice());

// const secondObject = {
//     firstName: 'Alessandro',
//     description: 'Descrizione di prova',
//     getCapitalName: () => {
//         console.log(this.firstName);
//     }
// }

// secondObject.getCapitalName();

//! Destrutturazione
// const myObj = {
//     firstName: 'Mario',
//     lastName: 'Rossi',
//     phone: '231231231'
// }

// const firstName = myObj.firstName;
// const lastName = myObj.lastName;

// const { firstName, lastName, phone } = myObj;

// console.log(`${firstName} ${lastName}`);

// const student1 = {
//     firstName: 'Mario',
//     lastName: 'Rossi',
//     role: 'Learner'
// }

// const student2 = {
//     firstName: 'Alessandro',
//     lastName: 'Abbro',
//     role: 'Teacher'
// }

// function oldGreet (myObject) {
//     console.log(`${myObject.firstName} ${myObject.lastName}`);
// }

// function greet ({firstName, lastName}) {
//     console.log(`${firstName} ${lastName}`);
// }

// greet(student1);
// oldGreet(student1);

//! Spread operator
//* Es1
// const obj1 = { name: 'John', age: 22 };
// const obj2 = { name: 'Rambo', gender: 'M' };

// const obj3 = {...obj1, ...obj2, phone: '123141412'};

// console.log(obj3);

//* Es2
// const myString = "This is a string";

// const characters = [...myString];

// console.log(characters);

//* Es3
// const numbers = [1, 3, 4, 6, 7];

// const union = [...numbers, 10, 30, 40]

// console.log(union);

//* Es4
// const myArray = [1, 1, 1, 2];
// const myObject = {
//     name: 'John',
//     age: 22,
//     name: 'Rambo',
//     gender: 'M',
//     phone: '123141412'
// };

// const numbers = [1, 3, 4, 6, 7];
// const otherNumbers = [7, 10, 30, 40];

// const union = [...numbers, ...otherNumbers]

// console.log(union);

// const myStudents = [
//     { name: 'John', age: 22 },
//     { name: 'John', age: 22 }
// ];

// const otherStudents = [
//     { name: 'Alessandro', age: 23 }
// ]

// const unionStudents = [...myStudents, ...otherStudents];

// console.log(unionStudents);


//* Es 5
// let a = 1;
// let b = a;

// a = 3;

// console.log('a', a);
// console.log('b', b);

// let a = 'myString';
// let b = a;

// a = 'newString';

// console.log('a', a);
// console.log('b', b);


// let myUser = { 
//     name: 'John',
//     age: 22,
//     phone: '123141412'
// };

// let myUserCopy = {...myUser};

// myUser.age = 25;
// myUser.city = 'Rome';

// console.log('myUser', myUser);
// console.log('myUserCopy', myUserCopy);

//! Array methods
//* https://www.w3schools.com/js/js_array_methods.asp
//? find
//* Input: callback, Output: la prima occorrenza che rispetta la condizione oppure undefined
//* Es1
// const numbers = [24, 41, 23, 16, 59];

// const foundedNumber = numbers.find((number) => {
//     return number > 30
// });

// console.log(foundedNumber);

// const foundedNumbers = numbers.filter((number) => number > 30);

// console.log(foundedNumbers);

//* Es2
// const myStudents = [
//     { id: 1, name: 'John', age: 22 },
//     { id: 2, name: 'Mario', age: 25 },
//     { id: 3, name: 'Verdi', age: 27 },
//     { id: 4, name: 'John', age: 24 },
// ];

// const foundedStudent = myStudents.find((myStudent) => myStudent.name = 'John');

// console.log(foundedStudent);

// const foundedStudens = myStudents.filter(myStudent => myStudent.age > 24);
// const marioStudent = foundedStudens.find((myStudent) => myStudent.name == 'Mario');
// console.log(marioStudent);



//? findIndex
//* Input: callback, Output: indice dell'array originario oppure -1 se non trova nulla

//* Es1
// const numbers = [24, 41, 23, 16, 59];

// const foundedNumber = numbers.findIndex((number) => number > 30);

// console.log(foundedNumber);


//* Es2
// const myStudents = [
//     { id: 1331, name: 'John', age: 22 },
//     { id: 2, name: 'Mario', age: 25 },
//     { id: 3, name: 'Verdi', age: 27 },
//     { id: 4, name: 'John', age: 24 },
// ];

// const foundedStudent = myStudents.findIndex((myStudent) => myStudent.id == 1331);
// //Mi costruisco il HMTL per lo studente

// console.log(foundedStudent);

//? includes
//* Input: Value, Output: Boolean
// const numbers = [24, 41, 23, 16, 59];

// console.log(numbers.includes(24));

// console.log(numbers.includes(8));

// const strings = ['ciao', 'a', 'tutti'];

// console.log(strings.includes('tutti'));

// console.log(strings.includes('buongiorno'));

