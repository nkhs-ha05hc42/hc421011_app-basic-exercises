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


const map6_6_4 = new Map(objectArray1.map(object => [object.key, object.value]))
map6_6_4.delete("A")
for (const [key, value] of map6_6_4) {
     console.log(map6_6_4.has("A"))
     console.log(map6_6_4.get("A"))
     console.log(map6_6_4.has("B"))
     console.log(map6_6_4.get("B"))
}