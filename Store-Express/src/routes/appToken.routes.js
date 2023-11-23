import { Router } from "express"
import { appToken, login, register } from "../controllers/appToken.controller"
import authenticateToken from "../middlewares/authenticateToken"

const router = Router()

router.get("/appToken", appToken)
router.post("/appToken/register", register)
router.post("/appToken/login", login)

router.get("/appToken/verify", authenticateToken)
  
  export default router