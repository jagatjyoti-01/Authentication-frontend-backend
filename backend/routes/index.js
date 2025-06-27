const express=require('express');
const router=express.Router();


const userSignUpController=require('../controller/user/userSignUp');
const userSignInController=require('../controller/user/userSignin');

// User Sign Up Route
router.post("/signUp",userSignUpController);
router.post("/signIn",userSignInController);



module.exports=router;
