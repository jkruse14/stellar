import { Request, Response } from 'express';
// tslint:disable-next-line no-var-requires
const pkg = require(__dirname + '/../../package.json');

export let index = (req: Request, res: Response) => {
  res.json({
    message: 'Welcome to API sekeleton.',
    version: pkg.version,
  });
}