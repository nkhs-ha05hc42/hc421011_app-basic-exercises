const post812 = (req, res) => {
    console.log(req.body)
    res.send(
        JSON.stringify({
            code: req.query.code,
            postcode : req.query.postcode,
            address : req.query.address,
            status: "ok",
        }),
    )
}




export const q8_2Controller = {
    post812,
}