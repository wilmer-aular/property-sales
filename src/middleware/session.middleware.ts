import { createNamespace, getNamespace } from 'continuation-local-storage';
import { Response } from 'express';
import { RequestContext } from '@src/models';

class Context implements RequestContext {
  requestId: string;
  url: string;
  method: string;
  service: string;
  params: any;
  query: any;
  body: any;
  constructor(req: any) {
    this.params = req.params;
    this.query = req.query;
    this.body = req.body;
    this.requestId = req.id;
    this.url = req.path;
    this.method = req.method;
    this.service = req.baseUrl.split('/')[2];
  }

  static setup(req: any, res: Response, next: () => void) {
    const session = createNamespace('palmerston-staff');
    session.run(() => {
      session.set('context', new Context(req));
      next();
    });
  }

  static current(): RequestContext {
    //let val = getNamespace('devTeamAular').get('context');
     const val = {
        requestId: 'string',
        url: 'string',
        method: 'string',
        service: 'string',
        params: 'any',
        query: 'any',
        body: 'any',
      };
    
    return val;
  }
}

export { Context };
