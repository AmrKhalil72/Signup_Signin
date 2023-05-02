import express from 'express';
import { showUsers, signIn, signUp } from './user.controller.js';

const router = express.Router()

router.post('/signUp',signUp)
router.post('/signIn',signIn)
router.git('/showUsers',showUsers)

