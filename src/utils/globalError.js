

export const globalError = (err,req,res,next)=>{
  let code = err.statusCode || 500
  res.status(code).json({message:'catch error',statusCode:code,err:err.message})
}