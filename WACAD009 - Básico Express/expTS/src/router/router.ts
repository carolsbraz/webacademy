import express, { Request, Response } from 'express';
import { loremIpsum } from 'lorem-ipsum';

const router = express.Router();

router.get('/lorem/:paragrafos', (req: Request, res: Response) => {
  res.send(
    loremIpsum({
      count: parseInt(req.params.paragrafos), // Number of "words", "sentences", or "paragraphs"
      format: 'html', // "plain" or "html"
      paragraphLowerBound: 3, // Min. number of sentences per paragraph.
      paragraphUpperBound: 7, // Max. number of sentences per paragraph.
      random: Math.random, // A PRNG function
      sentenceLowerBound: 5, // Min. number of words per sentence.
      sentenceUpperBound: 15, // Max. number of words per sentence.
      suffix: '\n', // Line ending, defaults to "\n" or "\r\n" (win32)
      units: 'paragraph', // paragraph(s), "sentence(s)", or "word(s)"
    }),
  );
});

router.get('/hb1', (req: Request, res: Response) => {
  res.render('hb1', {
    mensagem: 'Bem vindo ao WebAcademy, você está aprendendo Express passando mensagens',
    layout: false,
  });
});

router.get('/hb2', (req: Request, res: Response) => {
  res.render('hb2', {
    poweredByExpress: true,
    name: 'Express',
    type: 'Framework',
    layout: false,
  });
});

router.get('/hb3', (req: Request, res: Response) => {
  const profs = [
    { nome: 'David Fernandes', sala: 1338 },
    { nome: 'Moisés Carvalho', sala: 1339 },
    { nome: 'Alexandre Passito', sala: 1340 },
  ];
  res.render('hb3', {
    profs,
    layout: false,
  });
});

export default router;
