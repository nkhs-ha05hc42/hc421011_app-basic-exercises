const add = (ar,a) => {
    ar[2] = a
    return ar
}

const ar = ['A','B']
const value = 'C' 
const result = add(ar,value)
console.log(result)
