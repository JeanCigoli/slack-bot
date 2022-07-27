import { CreateMessages } from '@/domain/usecases';
import { Logger } from '@/utils/logger';

import { CreateMessagesHttp } from '../protocols/http';

export class HttpCreateMessages implements CreateMessages {
  constructor(
    private readonly createMessagesHttp: CreateMessagesHttp,
    private readonly logger: Logger
  ) {}

  async create(params: CreateMessages.Params): CreateMessages.Result {
    for await (const message of params) {
      const result = await this.createMessagesHttp.create(message);

      if (!result.status) {
        this.logger.log({
          level: 'warn',
          message: 'There was an error sending the message in the channel',
          payload: result.data,
        });
      }
    }
  }
}
