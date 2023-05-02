import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
  name:{
    type: String,
    required:true,
    minLength:3,
    maxLength:15,
  },
  email:{
    type: String,
    required:true,
    minLength:8,
    maxLength:25,
  },
  password:{
    type: String,
    required:true,
    minLength:4,
  },
  role:{
    type:String,
    enum:['admin','user'],
    default:'user'
  },
},
  {
    timestamps:true
  });

export const userModel = mongoose.model('user',userSchema)