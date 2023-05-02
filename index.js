process.on('uncaughtException',err=>console.log('syntax error',err))
process.on('unhandledRejection',err=>console.log('error outside express',err))
import express from 'express';
import *as donenv from 'dotenv';
import { dbConnecton } from './database/dbConnection.js';
import { showUsers, signIn, signUp } from './src/modules/user.controller.js';
import { AppError } from './src/utils/AppError.js';
import { globalError } from './src/utils/globalError.js';
import { validation } from './src/middleware/validation.js';
import { signInSchema, signUpSchema } from './src/modules/user.validation.js';
donenv.config();

const app = express()
app.use(express.json())
app.listen(process.env.PORT,()=>{
  console.log('server is running');
});
app.get('/',(req,res)=>{
  res.send('hello world');
});

dbConnecton()

app.use('/signUp',validation(signUpSchema),signUp)
app.use('/signIn',validation(signInSchema),signIn)
app.use('/showUsers',showUsers)

app.all('*',(req,res,next)=>{
  next(new AppError('invalid url'+req.originalUrl,404))
})

app.use(globalError)
