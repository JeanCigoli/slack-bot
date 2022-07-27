import { FilterMessages } from '@/domain/usecases';
import { Logger } from '@/utils/logger';

import { Job } from '../protocols';

export class FilterMessagesJob implements Job {
  constructor(
    private readonly filterMessages: FilterMessages,
    private readonly logger: Logger
  ) {}

  async handle([state, setState]: Job.State, next: Job.Next): Job.Result {
    try {
      if (!state.listMessages) {
        throw new Error('LIST_MESSAGES_MIDDLEWARE');
      }

      const messages = await this.filterMessages.filter(state.listMessages);

      setState({
        filterMessages: messages,
      });

      next();
    } catch (error: any) {
      this.logger.log(error);
    }
  }
}
