import { Router } from "express"
import { fastfurios } from "../controllers/unity.controller"

const router = Router()

router.get("/fastfurios", fastfurios)

export default router