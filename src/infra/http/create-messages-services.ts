import { CreateMessagesHttp } from '@/data/protocols/http';
import {
  convertCamelCaseKeysToSnakeCase,
  convertSnakeCaseKeysToCamelCase,
  SLACK,
} from '@/utils';

import { HttpClientAdapter } from './protocols';

export class CreateMessagesServices implements CreateMessagesHttp {
  constructor(private readonly httpClient: HttpClientAdapter) {}

  async create(params: CreateMessagesHttp.Params): CreateMessagesHttp.Result {
    const result = await this.httpClient.request({
      method: 'POST',
      url: `services/${SLACK.HOOK}`,
      body: convertCamelCaseKeysToSnakeCase(params),
    });

    return {
      data: convertSnakeCaseKeysToCamelCase(result.body),
      status: result.statusCode === 200 && result.body === 'ok',
    };
  }
}
