const numbers = [1,2,3,4,5,6,7,8,9,10,11];

const result = numbers.slice(1,4)

console.log(result);

//slice() original array change করে না ✅
//নতুন array return করে ✅
//slice() → array থেকে copy নেয়
//Array এর একটি অংশ কেটে নতুন array তৈরি করে 
//Array এর একটি অংশ কেটে নতুন array তৈরি করে, original array অপরিবর্তিত থাকে।
