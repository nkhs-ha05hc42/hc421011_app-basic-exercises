const get811 = (req, res) => {
    res.send(
        JSON.stringify({
            id:req.query.id,
            code: req.query.code,
            name: "情報太郎"
        }),
    )
}




export const q8_1Controller = {
    get811,
}