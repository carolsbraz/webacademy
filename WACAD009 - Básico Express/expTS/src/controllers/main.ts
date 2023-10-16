import { Request, Response } from 'express';
import { loremIpsum } from 'lorem-ipsum';

const lorem = (req: Request, res: Response) => {
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
};

const index = (req: Request, res: Response) => {
  res.send('Hello world');
};

const about = (req: Request, res: Response) => {
  res.send('Página sobre');
};

const hb1 = (req: Request, res: Response) => {
  res.render('main/hb1', {
    mensagem: 'Bem vindo ao WebAcademy, você está aprendendo Express passando mensagens',
  });
};

const hb2 = (req: Request, res: Response) => {
  res.render('main/hb2', {
    poweredByExpress: true,
    name: 'Express',
    type: 'Framework',
  });
};

const hb3 = (req: Request, res: Response) => {
  const profs = [
    { nome: 'David Fernandes', sala: 1338 },
    { nome: 'Moisés Carvalho', sala: 1339 },
    { nome: 'Alexandre Passito', sala: 1340 },
  ];
  res.render('main/hb3', {
    profs,
  });
};

const hb4 = (req: Request, res: Response) => {
  const technologies = [
    { name: 'Express', type: 'Framework', poweredByNodejs: true },
    { name: 'Laravel', type: 'Framework', poweredByNodejs: false },
    { name: 'React', type: 'Library', poweredByNodejs: true },
    { name: 'Handlebars', type: 'Engine View', poweredByNodejs: true },
    { name: 'Django', type: 'Framework', poweredByNodejs: false },
    { name: 'Docker', type: 'Virtualization', poweredByNodejs: false },
    { name: 'Sequelize', type: 'ORM tool', poweredByNodejs: true },
  ];
  res.render('main/hb4', {
    technologies,
  });
};

const paginaComImagem = (req: Request, res: Response) => {
  res.render('main/paginaComImagem');
};

export default { lorem, index, about, hb1, hb2, hb3, hb4, paginaComImagem };
