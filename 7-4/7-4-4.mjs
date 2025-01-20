console.log("start",new Date())

const tasi = (a,b) => {
    console.log("tasi",a+b,new Date())
}

const callbackFunk = (a,b,callbackFunk) => {
    setTimeout(() => {
        callbackFunk(a,b)
        setTimeout(() => {
        console.log("end",new Date())
            },5000)
    },2000)
}


callbackFunk(5,4,tasi)