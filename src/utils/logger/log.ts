import path from 'path';
import {
  createLogger,
  format,
  Logger as LogWinston,
  transports,
} from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';

import { cli, file } from './formats';

type LogParams = {
  level:
    | 'error'
    | 'warn'
    | 'info'
    | 'http'
    | 'verbose'
    | 'debug'
    | 'silly'
    | String;
  message: string;
  payload?: object;
  [key: string]: any;
};

const { combine, timestamp, colorize } = format;

const defaultTimestamp = timestamp({ format: 'YYYY-MM-DD HH:mm:ss' });

export interface Logger {
  log(params: LogParams): void;
  log(error: Error): void;
  log(params: LogParams | Error): void;
}

export class CustomLogger {
  private static instance: CustomLogger;

  private logger!: LogWinston;

  constructor() {
    this.logger = createLogger({
      transports: [
        new DailyRotateFile({
          filename: 'logs',
          extension: '.log',
          datePattern: 'YYYY-MM-DD',
          dirname: path.resolve('logs'),
          level: 'verbose',
          format: combine(defaultTimestamp, file),
        }),
        new transports.Console({
          level: 'debug',
          format: combine(defaultTimestamp, cli, colorize({ all: true })),
        }),
      ],
    });
  }

  public static getInstance(): CustomLogger {
    if (!CustomLogger.instance) {
      CustomLogger.instance = new CustomLogger();
    }

    return CustomLogger.instance;
  }

  public log(error: Error): void;
  public log(params: LogParams): void;
  public log(params: LogParams | Error): void {
    if (params instanceof Error) {
      this.logger.log({
        name: params.name,
        message: params.message,
        stack: params.stack,
        level: 'error',
      });

      return;
    }

    const { level, message, ...any } = params;

    const customLevel = level as string;

    this.logger.log({
      message,
      level: customLevel,
      ...any,
    });
  }
}
