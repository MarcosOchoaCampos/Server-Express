import { Router } from "express"
import {playerasHome, playerasAbout, playerasProducts, addProduct} from "../controllers/playeras.controller"

const router = Router()
  

router.get("/playeras", playerasHome)

router.get("/playeras/about", playerasAbout)

router.get("/playeras/products/:id", playerasProducts)

router.post("/playeras/products/:id", addProduct)

export default router