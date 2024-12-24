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


const map6_6_3 = new Map(objectArray1.map(object => [object.key, object.value]))
for (const [key, value] of map6_6_3) {
     console.log(map6_6_3.has("A"))
     console.log(map6_6_3.get(key,value))
}