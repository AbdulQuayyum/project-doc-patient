import { Router } from "express"

import * as UserController from "../Controllers/User.Controller.js"

const router = Router()

router.route("/CreateUser").post(UserController.CreateUser)

export default router