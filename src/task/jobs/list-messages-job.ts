import { ListMessages } from '@/domain/usecases';
import { Logger } from '@/utils/logger';

import { Job } from '../protocols';

export class ListMessagesJob implements Job {
  constructor(
    private readonly listMessages: ListMessages,
    private readonly logger: Logger
  ) {}

  async handle(state: Job.State, next: Job.Next): Job.Result {
    try {
      const [, setState] = state;

      const messages = await this.listMessages.list();

      setState({
        listMessages: messages,
      });

      next();
    } catch (error: any) {
      this.logger.log(error);
    }
  }
}
