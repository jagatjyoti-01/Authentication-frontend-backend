const express=require('express');
const router=express.Router();


const userSignUpController=require('../controller/user/userSignUp');
const userSignInController=require('../controller/user/userSignin');
const authToken = require('../middleware/authToken');
const userDetailsController = require('../controller/user/userDetails');


// User Sign Up Route
router.post("/signUp",userSignUpController);
router.post("/signIn",userSignInController);

router.get("/userDetails",authToken,userDetailsController)



module.exports=router;
