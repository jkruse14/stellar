import { Request, Response } from 'express';

// tslint:disable-next-line no-var-requires
Promise = require('bluebird');

export default interface BaseControllerInterface {
    index: (req: Request, res: Response) => Promise<any>;
}
