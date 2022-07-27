import { CreateMessages } from '@/domain/usecases';
import { Logger } from '@/utils';

import { Job } from '../protocols';

export class CreateMessagesJob implements Job {
  constructor(
    private readonly createMessages: CreateMessages,
    private readonly logger: Logger
  ) {}

  async handle([state]: Job.State, next: Function): Job.Result {
    try {
      if (!state.filterMessages) {
        throw new Error('FILTER_MESSAGES_MIDDLEWARE');
      }

      await this.createMessages.create(state.filterMessages);

      next();
    } catch (error: any) {
      this.logger.log(error);
    }
  }
}
