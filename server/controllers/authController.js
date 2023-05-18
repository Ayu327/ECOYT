import userModel from "../models/userModel.js"
import { hashPassword } from "../helper/authHelper.js"

export const registerController = async(req,res)=>{
    try{
        const {name,email,password,phone,address} = req.body

        //validations
        if(!name){
            return res.send({error: 'Name is required'})
        }
        if(!email){
            return res.send({error: 'email is required'})
        }
        if(!password){
            return res.send({error: 'password is required'})
        }
        if(!phone){
            return res.send({error: 'phone is required'})
        }
        if(!address){
            return res.send({error: 'address is required'})
        }
         
        //check user
        const exisitingUser = await userModel.findOne({email})
        //exisiring user
        if(exisitingUser){
            return res.status(200).send({
                success : true,
                message : 'Already Registered please login'
            })
        }

        //register user
        const hashedPassword = await hashPassword(password)
        //user
        const user = new userModel({name,email,phone,address,password:hashedPassword}).save()

        res.status(201).send({
            success :true,
            message:'User Registered Successfully',
            user
        })

    }catch(error){
        console.log(error)
        res.status(500).send({
            success : false,
            message : 'Error in Registration',
            error
        })
    }
}

