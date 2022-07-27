import { HttpListMessages } from '@/data/usecases';
import { ListMessagesServices } from '@/infra/http';
import { RequestAdapter } from '@/infra/http/adapters';
import { httpSlack } from '@/infra/http/utils';
import { ListMessagesJob } from '@/task';
import { convertObjectToQueryParams, logger } from '@/utils';

export const makeListMessagesJob = () => {
  const requestAdapter = new RequestAdapter(httpSlack);

  const listMessagesServices = new ListMessagesServices(
    requestAdapter,
    convertObjectToQueryParams
  );

  const httpListMessages = new HttpListMessages(listMessagesServices);

  return new ListMessagesJob(httpListMessages, logger);
};
