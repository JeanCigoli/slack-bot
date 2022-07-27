import { HttpCreateMessages } from '@/data/usecases';
import { CreateMessagesServices } from '@/infra/http';
import { RequestAdapter } from '@/infra/http/adapters';
import { httpHook } from '@/infra/http/utils';
import { CreateMessagesJob } from '@/task';
import { logger } from '@/utils';

export const makeCreateMessagesJob = () => {
  const requestAdapter = new RequestAdapter(httpHook);

  const createMessagesServices = new CreateMessagesServices(requestAdapter);

  const httpCreateMessages = new HttpCreateMessages(
    createMessagesServices,
    logger
  );

  return new CreateMessagesJob(httpCreateMessages, logger);
};
