import Joi from 'joi'

export const saleOrderItemSchema = Joi.object({
  productName: Joi.string().required(),
  quantity: Joi.number().integer().required(),
  price: Joi.number().precision(2).required(),
})
