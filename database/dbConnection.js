import mongoose from 'mongoose';

export const dbConnecton = ()=>{
  mongoose.connect(process.env.DB_CONECTION).then(()=>{
    console.log('database connected')
  }).catch(err=>{
    console.log('database error',err)
  })
}