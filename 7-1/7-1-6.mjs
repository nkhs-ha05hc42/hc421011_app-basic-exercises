const kakeru = (a) =>{
    if(a > 100) return
    kakeru(a*2)
    console.log(a)
    
}

const result = kakeru(10)

const result1 = kakeru(25)