//=====Don't Change main/orginal Array======

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

const result = numbers.map( (number,index) =>{
    return `Index number is ${index} - Number is ${number}`
});

console.log(result);
