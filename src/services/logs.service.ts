import { LogModel, ILog, RequestContext, LogType } from '@src/models';
import CrudService from './crud.service';
import { Context } from '@src/middleware';

class LogService extends CrudService<ILog> {
  constructor() {
    super(LogModel);
  }

  static async createError(error: any): Promise<void> {
    const request: RequestContext = Context.current();
    const stack: string[] = error.stack.split('\n');
    const log = {
      service: request.service,
      url: request.url,
      request,
      type: LogType.error,
      message: error.message,
      trace: stack,
    };
    const logService = new LogService();
    await logService.create(log);
  }

  static async createRequest(): Promise<void> {
    const request: RequestContext = Context.current();
    const log = {
      service: request.service,
      url: request.url,
      request,
      type: LogType.request,
    };
    const logService = new LogService();
    await logService.create(log);
  }
}

export { LogService };
