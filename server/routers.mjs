import express from "express"
import path from "path"

import { sample1Controller } from "./api/controllers.mjs"
import { q8_1Controller } from "./api/controllers.mjs"
import { q8_2Controller } from "./api/controllers.mjs"
import { q8_3Controller } from "./api/controllers.mjs"
import { q8_4Controller } from "./api/controllers.mjs"
import { q8_2_1Controller } from "./api/controllers.mjs"
import { q8_2_2Controller } from "./api/controllers.mjs"
import { q8_2_3Controller } from "./api/controllers.mjs"
import { q8_2_4Controller } from "./api/controllers.mjs"
import { q8_3_1Controller } from "./api/controllers.mjs"

const routers = express.Router()

routers.post("/api/sample1",sample1Controller.postSample1)

routers.get("/api/sample1",sample1Controller.getSample1)

routers.put("/api/sample1",sample1Controller.putSample1)

routers.delete("/api/sample1",sample1Controller.deleteSample1)

routers.get("/api/sample1/:id",sample1Controller.getPathParamSample1)

routers.get("/api/8-1/",q8_1Controller.get811)

routers.post("/api/8-1/",q8_2Controller.post812)

routers.put("/api/8-1/",q8_3Controller.put813)

routers.delete("/api/8-1/",q8_4Controller.delete814)

routers.get("/api/8-2/",q8_2_1Controller.get821)

routers.post("/api/8-2",q8_2_2Controller.post822)

routers.put("/api/8-2",q8_2_3Controller.put823)

routers.delete("/api/8-2",q8_2_4Controller.delete824)

routers.get("/api/8-3",q8_3_1Controller.get831)

// client配下は、ブラウザサイドで実行されるファイル（HTML/JS/CSS/画像など）を配置する
routers.use(express.static(`${path.resolve()}/client`))

export default routers
