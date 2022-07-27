import { taskAdapter } from '@/main/adapters';
import {
  makeCreateMessagesJob,
  makeFilterMessagesJob,
  makeListMessagesJob,
} from '@/main/factories';

import { Options } from '../protocols';

export const sendMessagesTask: Options = {
  enabled: true,
  cron: '46 14 * * *',
  handler: taskAdapter(
    makeListMessagesJob(),
    makeFilterMessagesJob(),
    makeCreateMessagesJob()
  ),
};
