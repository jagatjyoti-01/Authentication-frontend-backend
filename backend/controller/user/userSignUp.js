const UserModel = require("../../models/usermodel");
const bcrypt = require('bcrypt');

async function userSignUpController(req, res) {
    try {
    //requisting the user data from the request body
        const {name ,email, password } = req.body;
  


        if (!email, !password, !name) {
            return res.json({
                message: "Please fill all the fields",
                success: false,
                error: true
            })
        }

        //checking if the user already exists
        const exititingUSer=await UserModel.findOne({email})
        if(exititingUSer){
            return res.status(400).json({
                message: "User already exists",
                success: false,
                error: true
            })
        }

        //hashing the password
        const saltRounds = 10;
        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(password, salt);
        if(!hash){
             throw new Error("Error in hashing the password");
        }

        const payload={
            ...req.body,
            password: hash
        }

        const userData=await UserModel.create(payload);
        const saveData= await userData.save();

        res.status(201).json({
            message: "User created successfully",
            success: true,
            data: saveData,
            error: false
        })




    } catch (err) {

        console.log("Error in userSignUpController", err);
        res.json({
            message: err.message,
            success: false,
            error: true,


        })
    }
}


module.exports = userSignUpController;
