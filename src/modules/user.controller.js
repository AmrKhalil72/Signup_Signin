import bcrypt from 'bcrypt';
import { userModel } from '../../database/models/SchemaModel.js';
import { catchError } from '../utils/catchError.js';
import { AppError } from '../utils/AppError.js';


export const signUp = catchError(async(req,res,next)=>{
  const {name,email,password} = req.body
  const user = await userModel.findOne({email})
  if(user){
    next(new AppError('email alredy in use',400))
  }else{
    const hash = bcrypt.hashSync(password,Number(process.env.ROUND));
    await userModel.insertMany({name,email,password:hash})
      res.status(200).json({message:'success',})
  }
})

export const signIn = catchError(async(req,res,next)=>{
  const{email,password} = req.body
  const user = await userModel.findOne({email})
  if(user){
    const match = bcrypt.compareSync(password,user.password)
    if(match){
      res.status(200).json({message:'success login'})
    }else{
      next(new AppError('inccorect email or password',400))
    }
  }else{
    next(new AppError('account not found',400))
  }
})

export const showUsers =catchError(async(req,res,next)=>{
  const user =await userModel.find({})
  res.status(200).json({message:'success',user})
})
