import { q971Model } from "./model.mjs" 

/*
const getOne971 = async (req, res) => {
    const id = req.params.id  
    if (!id) {   
          return res.send(JSON.stringify({ status: "error" }))  
        } 
        const result = await q971Model.selectOne(id)
        if (!result) {   
            return res.send(JSON.stringify({ status: "not found" }))  
        }   
        res.send(JSON.stringify({ status: "success", data: result })) 
    } 
 */   
    const getAll971 = async (req, res) => { 
        const result = await q971Model.selectAll971() 
        res.send(JSON.stringify({ status: "success", list: result }))
} 


export const q9_7_1Controller = { 

      getAll971,
} 