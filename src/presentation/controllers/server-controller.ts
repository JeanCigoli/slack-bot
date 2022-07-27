import { Controller } from '@/presentation/protocols';
import { ok } from '@/presentation/utils';
import { DICTIONARY } from '@/utils';

export class ServerController implements Controller {
  async handle(): Controller.Result {
    return ok(DICTIONARY.RESPONSE.DESCRIPTION.SERVER_ON, {});
  }
}
