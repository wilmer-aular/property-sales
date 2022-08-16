import { model, Schema, Model, Document } from 'mongoose';
import { RequestContext } from '..';

enum LogType {
  error = 'error',
  info = 'info',
  warning = 'warning',
  success = 'success',
  request = 'request',
}

interface ILog extends Document {
  date: Date;
  type?: LogType;
  service: string;
  url: string;
  user?: string;
  request?: RequestContext;
  message?: string;
  trace?: string[];
}

const LogSchema: Schema = new Schema({
  date: { type: Date, default: Date.now },
  service: { type: String, require: true },
  url: { type: String, require: true },
  user: { type: String, require: false },
  request: { type: Schema.Types.Mixed, require: false },
  message: { type: String, require: false },
  type: { type: String, require: false, default: 'info' },
  trace: { type: [String], require: false },
});

const LogModel: Model<ILog> = model<ILog>('Log', LogSchema);

export { LogModel, ILog, LogType };
