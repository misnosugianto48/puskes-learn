// ! Create Object With Object Literals
const user = {};

const service = {
  title: 'service one',
  description: 1,
  studies: {
    name: 'unilak',
  },
};

console.log('Get By DOT', service.title); // ! Use dot to access property title

console.log('Get By Square', service['description']); // ! Use square bracket to access property title
console.log('Get By Square', service.studies.name); // ! Use square bracket to access property title

// ! Use destructuring

const { title, description } = service;
const { name } = service.studies;

console.log('Destructure title: ', title);
console.log('Destructure study name: ', name);

// ! Change value description

service.description = 'New Description of Service';

// console.log(service.description);

delete service.description;
// delete service['title'];

console.log(service);

// ! Array constructor
const users = new Array(); // empty array

// ! Array.from
const foo = Array.from('foo'); // ['f', 'o', 'o']

const arrayFrom = Array.from([foo, true]);
console.log(arrayFrom);
console.log(arrayFrom[1]);
console.log(arrayFrom[0][1]);

// ! Array literals
const fruits = ['apple', 'banana', 'cherry'];

// ! Copied Array
// const users = new Array('John', 'Jane', 'Jack', 'Jill');
// const customer = Array.from(users);
// console.log(customer); // Output: ["John", "Jane", "Jack", "Jill"]

// ! Accessing Array
// console.log(customer[0]); // Output: 'John'

// ! Array of Objects

// const users = [
//   {
//     name: 'user 1',
//     hobby: 'swimming',
//   },
//   {
//     name: 'user 2',
//     hobby: 'padel',
//   },
// ];
