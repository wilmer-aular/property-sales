/* eslint no-undef: "off" */
import { Request, Response } from 'express';
import { LogService } from '@src/services/logs.service';

const logRequest = (req: Request, res: Response, next: () => any) => {
  LogService.createRequest().then(() => next());
};

export { logRequest };
