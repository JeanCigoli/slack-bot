import { SERVER } from '@/utils/constants';
import { logger } from '@/utils/logger';

import { server } from './application';

(async () => {
  try {
    server.listen(SERVER.PORT, async () => {
      logger.log({
        level: 'info',
        message: `Server is running on port: ${SERVER.PORT}`,
      });
    });
  } catch (error: any) {
    logger.log(error);
  }
})();
