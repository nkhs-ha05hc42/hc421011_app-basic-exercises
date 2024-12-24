const objectArray1 = [
    {
        key:"A",
        value : "カレー"
    },
    {
        key:"B",
        value:"定食"
    }
]

const map6_6_1 = new Map(objectArray1.map(object => [object.key, object.value]))
for (const [key, value] of map6_6_1) {
     console.log(key, value) 
}
