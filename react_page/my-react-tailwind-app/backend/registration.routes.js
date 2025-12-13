import express from 'express';
import * as registrationController from "../controller/registration.controller.js";

const router=express.Router();
router.post('/register', registrationController.registerUser);
router.post('/login', registrationController.loginUser);

export default router;

