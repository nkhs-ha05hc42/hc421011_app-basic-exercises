import { resolve } from "path"

const promiseSetTimeout = (timeout) =>
    new Promise((resolve) => {
        setTimeout(() => resolve(),timeout)
    })


const promiseTest = async () => {
         
    return await Promise.resolve("Test1")
     
}

const promiseNew = async (promise) => {
    
    return await Promise.resolve("New" + promise)

}

const promiseA = async () => {
    const result1 = await promiseTest()
    const result2 = await promiseNew(result1)
    console.log(result1,result2)

}


promiseA()

