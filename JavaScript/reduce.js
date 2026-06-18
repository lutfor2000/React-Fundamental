

const numbers = [1, 2, 3, 4, 5, 6];

const result = numbers.reduce((previusValue,currentValue) =>{
    return previusValue + currentValue;
},0)

console.log(result);

//=========Short Syntex========
const result = numbers.reduce((previusValue,currentValue) => previusValue + currentValue ,0)
