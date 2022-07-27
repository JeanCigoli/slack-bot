import { ListMessages } from '@/domain/usecases';

import { ListMessagesHttp } from '../protocols/http';

export class HttpListMessages implements ListMessages {
  constructor(private readonly listMessagesHttp: ListMessagesHttp) {}

  async list(): ListMessages.Result {
    const data = {
      channel: 'C03PYV1PBJ5',
    };

    const messages = await this.listMessagesHttp.list(data);

    if (!messages.status) {
      throw new Error(ListMessages.Exceptions.MESSAGE_ERROR);
    }

    return messages.data.map((value) => ({
      text: value.text,
      blocks: value.blocks,
    }));
  }
}
