import express  from "express";
import { registerController,loginController, testcontroller} from "../controllers/authController.js";
import { requireSignIn } from "../middleware/authMiddleware.js";


//router object
const router = express.Router()

//routing
//REGISTER  || METHOD
router.post('/register',registerController)

//LOGIN
router.post('/login',loginController)

//test
router.get('/test',requireSignIn,testcontroller)

export default router ;