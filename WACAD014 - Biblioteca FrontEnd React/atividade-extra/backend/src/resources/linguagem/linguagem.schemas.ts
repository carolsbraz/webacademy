import Joi from "joi";

const linguagemSchema = Joi.object().keys({
  lang: Joi.string().valid("pt-BR", "en-US").required(),
});

export default linguagemSchema;
