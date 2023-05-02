import Joi from 'joi'

const signUpSchema=Joi.object({
  name:Joi.string().alphanum().required().min(3).max(15),
  email:Joi.string().min(3).max(30).email(),
  password:Joi.string().required().min(4).max(30).alphanum(),
  rePassword: Joi.ref('password')
})

const signInSchema=Joi.object({
  email:Joi.string().email().min(5).max(30),
  password:Joi.string().required().min(4).max(30).alphanum()
})


export{
  signUpSchema,
  signInSchema
}