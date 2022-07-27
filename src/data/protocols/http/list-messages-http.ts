import { Message } from '@/domain/models';

export interface ListMessagesHttp {
  list(params: ListMessagesHttp.Params): ListMessagesHttp.Result;
}

export namespace ListMessagesHttp {
  export type Params = {
    channel: string;
  };

  export type Result = Promise<{
    status: boolean;
    data: Message[];
  }>;
}
