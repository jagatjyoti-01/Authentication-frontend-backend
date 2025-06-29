const UserModel = require("../../models/usermodel");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
async function userSignInController(req, res) {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.json({
                message: "Please fill all the fields",
                success: false,
                error: true
            })
        }

        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.status(400).json({
                message: "not a register user please register ",
                success: false,
                error: true
            })

        }

        const checkPassword = await bcrypt.compare(password, user.password);
        if (!checkPassword) {
            return res.status(400).json({
                message: "Invalid credentials",
                success: false,
                error: true
            })
        } else {
            const tokondata = {
                _id: user._id,
                email: user.email,
                password: user.password,
            }



            const token = jwt.sign(
                { tokondata }, process.env.TOKEN_SECRET_KEY, { expiresIn: '1h' });
                console.log("process.env is", process.env.TOKEN_SECRET_KEY)
            console.log("token", token)
            const tokenoption = {
                httpOnly: true,
                secure: true
            }
        
        // res.status(200).json({
        //     message: "login successfull",
        //     data: token,
        //     success: true,
        //     error: false
        // });


         res.cookie("token", token, tokenoption).json({
                message: "login successfull",
                data: token,
                success: true,
                error: false

            })

    }


    } catch (err) {
        console.log("Error in userSignInController", err);
        res.json({
            message: err.message,
            success: false,
            error: true
        })
    }
}
module.exports = userSignInController;