const get812 = (req, res) => {
    console.log(req.body)
    res.send(
        JSON.stringify({
            code: req.query.code,
            postcode : req.query.postcode,
            address : req.query.address,
            status: "success",
        }),
    )
}




export const q8_2Controller = {
    get812,
}