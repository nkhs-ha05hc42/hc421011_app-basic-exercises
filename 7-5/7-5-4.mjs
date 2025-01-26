import { resolve } from "path"

const promiseTest = () =>  
     new Promise((resolve) => {    
        resolve("Test1")   
})

const promiseNew = (promiseTest) =>
     new Promise((resolve) => {
        resolve("New" + promiseTest)

})

promiseTest()    
    .then((result1) => {  
        console.log(result1)
        return promiseNew(result1);
        })     
            .then((result2) => {
                console.log(result2);   
        })   





