import { DbFilterMessages } from '@/data/usecases';
import { FilterMessagesJob } from '@/task';
import { logger } from '@/utils';

export const makeFilterMessagesJob = () => {
  const dbFilterMessages = new DbFilterMessages();

  return new FilterMessagesJob(dbFilterMessages, logger);
};
