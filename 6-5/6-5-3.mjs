let sum = 0
let cnt = 0

for(let i = 1 ; i < 101;i++){
    if(i % 2 === 0){
        sum = sum + i
        if(sum > 50){
            break
        }
    }
    cnt = cnt + 1
    
}

console.log(sum,cnt)