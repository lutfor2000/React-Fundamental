//===reduce() কী কাজ করে?

//===reduce() array-এর সব element নিয়ে একটা final result বানায়
যেমন:
sum (যোগফল)
product (গুণফল)
object তৈরি
grouping
flatten array


//====Syntex====
array.reduce((accumulator, currentValue) => {
    return updatedAccumulator;
}, initialValue);

//=============Parameters========
accumulator → আগের result (store করে)
currentValue → current item
initialValue → শুরুতে accumulator এর value


const numbers = [1, 2, 3, 4, 5, 6];

const result = numbers.reduce((previusValue,currentValue) =>{
    return previusValue + currentValue;
},0)

console.log(result);

//=========Short Syntex========
const result = numbers.reduce((previusValue,currentValue) => previusValue + currentValue ,0)


//================================Example=================

Example 1: Sum (সবচেয়ে common)
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((acc, curr) => {
    return acc + curr;
}, 0);

console.log(sum); // 15

👉 Flow:

acc=0, curr=1 → 1
acc=1, curr=2 → 3
acc=3, curr=3 → 6
acc=6, curr=4 → 10
acc=10, curr=5 → 15
🔹 Example 2: Max Number বের করা
const numbers = [10, 5, 20, 8];

const max = numbers.reduce((acc, curr) => {
    return curr > acc ? curr : acc;
}, numbers[0]);

console.log(max); // 20
🔹 Example 3: Object তৈরি করা
const users = ["Shanto", "Rahim", "Karim"];

const result = users.reduce((acc, user) => {
    acc[user] = true;
    return acc;
}, {});

console.log(result);
// { Shanto: true, Rahim: true, Karim: true }
🔹 Example 4: Count করা
const fruits = ["apple", "banana", "apple", "orange", "banana"];

const count = fruits.reduce((acc, fruit) => {
    acc[fruit] = (acc[fruit] || 0) + 1;
    return acc;
}, {});

console.log(count);
// { apple: 2, banana: 2, orange: 1 }




//========product total price add============
const products = [
  { name: "Mobile", price: 15000 },
  { name: "Laptop", price: 50000 },
  { name: "Mouse", price: 1000 }
];

const totalPrice = products.reduce((total, product) => {
  return total + product.price;
}, 0);

console.log(totalPrice);



//===========Max Price select============
const numbers = [5, 20, 8, 15];

const max = numbers.reduce((largest, current) => {
  return current > largest ? current : largest;
});

console.log(max);
