const express=require('express')
const userController=require('../src/User/userController')
const router=express.Router()
router.route('/User/login').post(userController.loginUserControllerFn);
router.route('/User/create').post(userController.createUserControllerFn);

module.exports=router