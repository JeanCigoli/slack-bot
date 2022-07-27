import { Message } from '../models';

export interface CreateMessages {
  create(params: CreateMessages.Params): CreateMessages.Result;
}

export namespace CreateMessages {
  export type Params = Pick<Message, 'text' | 'blocks'>[];

  export type Result = Promise<void>;
}
