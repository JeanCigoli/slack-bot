import { Message } from '../models';

export interface FilterMessages {
  filter(params: FilterMessages.Params): FilterMessages.Result;
}

export namespace FilterMessages {
  export type Params = Pick<Message, 'text' | 'blocks'>[];

  export type Result = Promise<Pick<Message, 'text' | 'blocks'>[]>;
}
