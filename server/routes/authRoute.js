import express  from "express";
import { registerController,loginController, testcontroller,forgotPasswordController} from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middleware/authMiddleware.js";


//router object
const router = express.Router()

//routing
//REGISTER  || METHOD
router.post('/register',registerController)

//LOGIN
router.post('/login',loginController)

//forgot Password
router.post('/forgot-password',forgotPasswordController)

//test routes
router.get("/user-auth", requireSignIn, (req, res) => {
    res.status(200).send({ ok: true });
  });


  //Admin Route
router.get("/admin-auth", requireSignIn,isAdmin, (req, res) => {
    res.status(200).send({ ok: true });
  });

//test
router.get('/test',requireSignIn,isAdmin,testcontroller)

export default router ;