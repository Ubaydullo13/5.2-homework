// 1

let array = ["a", "b"];

[array[0], array[1]] = [array[1], array[0]];

console.log(array);

// 2

// 3
const myArray = [1, 2, 3, 4, 5];

const [first, second, ...remaining] = myArray;

console.log("First two elements:", [first, second]);
console.log("Remaining elements:", remaining);

// 4

const myObject = {
  person:{
    name: "John",
    age: 30
  }
}

const {person:{name, age} } = myObject;

console.log(name, age);

// 5

const car = {
  brand: 'BMW',
  color: 'black',
  design_type: 'Sedan'
};

// Destructuring with default values
const {
  brand,
  color = 'grey',
  design_type,
  weight = '1200',
  model = 'M5 CS'

} = car;
console.log(brand);
console.log(color);
console.log(weight);
console.log(model);



// 6

const users = [
  {name: 'John', age:30, city: 'New York'},
  {name: 'Jane', age:28, city: 'London'},
  {name: 'Bob', age:35, city:'Los Angeles'}
]

const newArr = users.map(({name, age}) => ({name, age}));

console.log(newArr);

// 7