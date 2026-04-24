import express from 'express';
import { validateUserData } from '../middleware/auth-data-validation.js';
import { login, logout, signup } from '../controller/auth-controller.js';
import { validateToken } from '../middleware/token-verification.js';

const router = express.Router();

router.post('/signup',validateUserData,signup);
router.post('/login',validateUserData,login);
router.post('/logout',validateToken,logout);

export default router;