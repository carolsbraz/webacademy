import express, { Request, Response } from 'express';
import { loremIpsum } from 'lorem-ipsum';

const router = express.Router();

router.get('/lorem/:paragrafos', (req: Request, res: Response) => {
  res.send(
    loremIpsum({
      count: parseInt(req.params.paragrafos), // Number of "words", "sentences", or "paragraphs"
      format: 'html', // "plain" or "html"
      paragraphLowerBound: 3, // Min. number of sentences per paragraph.
      paragraphUpperBound: 7, // Max. number of sentences per paragarph.
      random: Math.random, // A PRNG function
      sentenceLowerBound: 5, // Min. number of words per sentence.
      sentenceUpperBound: 15, // Max. number of words per sentence.
      suffix: '\n', // Line ending, defaults to "\n" or "\r\n" (win32)
      units: 'paragraph', // paragraph(s), "sentence(s)", or "word(s)"
    }),
  );
});

export default router;
