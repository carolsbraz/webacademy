import Joi, { Schema } from 'joi'

export const produtoSchema = Joi.object().keys({
    nome: Joi.string().min(2).max(50).required(),
    preco: Joi.number().required(),
    estoque: Joi.number().integer().required()
});

const celular = {
    nome: "C",
    preco: 347.5,
    estoque: 10
}

const result = produtoSchema.validate(celular);
console.log(result);