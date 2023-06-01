import express from 'express'
import {isAdmin,requireSignIn} from '../middleware/authMiddleware.js'
import { createProductController ,getProductController,getSingleProductController,productPhotoController,deleteProductController,updateProductController} from '../controllers/productController.js'
import formidable from 'express-formidable'

const router = express.Router()

//routes
router.post("/create-product",requireSignIn,isAdmin,formidable(),createProductController);

router.get("/get-product",requireSignIn,getProductController);

router.get("/get-product/:slug",getSingleProductController)

router.get("/product-photo/:pid",productPhotoController)

router.delete("/product/:pid",deleteProductController)

router.put("/update-product/:pid",requireSignIn,isAdmin,formidable(),updateProductController);

export default router ;