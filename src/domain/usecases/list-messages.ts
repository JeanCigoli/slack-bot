import { Message } from '../models';

export interface ListMessages {
  list(): ListMessages.Result;
}

export namespace ListMessages {
  export type Result = Promise<Pick<Message, 'text' | 'blocks'>[]>;

  export enum Exceptions {
    MESSAGE_ERROR = 'Unable to retrieve messages',
  }
}
