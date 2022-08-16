/* eslint no-undef: "off" */
import { Response } from 'express';
import { LogService } from '@src/services/logs.service';

export async function resolver<T>(
  promise: Promise<T>,
  res: Response,
  service?: string,
): Promise<void> {
  try {
    const data = await promise;
    res.json(data);
  } catch (error : any) {
    const stack: string[] = error.stack.split('\n');
    await LogService.createError(error);

    res.status(500),
      res.json({
        service,
        message: error.message,
        stack: stack,
      });
  }
}