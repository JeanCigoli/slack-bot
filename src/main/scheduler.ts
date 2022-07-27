import { logger, Scheduler } from '@/utils';

import { schedulerSetup } from './configs/scheduler';

const scheduler = new Scheduler();

logger.log({ level: 'info', message: 'Scheduler started!' });

schedulerSetup(scheduler);
