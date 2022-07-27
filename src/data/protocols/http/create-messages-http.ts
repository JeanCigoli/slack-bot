import { Message } from '@/domain/models';

export interface CreateMessagesHttp {
  create(params: CreateMessagesHttp.Params): CreateMessagesHttp.Result;
}

export namespace CreateMessagesHttp {
  export type Params = Pick<Message, 'text' | 'blocks'>;

  export type Result = Promise<{
    status: boolean;
    data: any;
  }>;
}
