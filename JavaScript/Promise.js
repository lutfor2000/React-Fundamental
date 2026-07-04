const promiseOne = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve("Promise 1 resolved");
    },3000)
})


const promiseTwo = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve("Promise 2 resolved");
    },2000)
})

Promise.all([promiseOne,promiseTwo]).then((result)=>{
    console.log(result)
})
