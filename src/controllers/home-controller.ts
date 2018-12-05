import { Request, Response } from 'express';
import BaseControllerInterface from '../interfaces/base-controller-interface';

// used to get around Promise now being a reserved word:
// https://github.com/Microsoft/TypeScript/issues/8331
// tslint:disable-next-line no-var-requires
Promise = require('bluebird');

// tslint:disable-next-line no-var-requires
const pkg = require(__dirname + '/../../package.json');

class HomeController implements BaseControllerInterface {
    public async index(req: Request, res: Response): Promise<void> {
        res.json({
            message: 'Welcome to API sekeleton.',
            version: pkg.version,
        });
    }
}

export default new HomeController();

// const hc = new HomeController();

// module.exports = {
//     index: hc.index.bind(hc),
// };
