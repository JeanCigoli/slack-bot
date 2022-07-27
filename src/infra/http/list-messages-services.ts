import { ListMessagesHttp } from '@/data/protocols/http';
import { convertSnakeCaseKeysToCamelCase, SLACK } from '@/utils';

import { ConvertObjectToQuery, HttpClientAdapter } from './protocols';

export class ListMessagesServices implements ListMessagesHttp {
  constructor(
    private readonly httpClient: HttpClientAdapter,
    private readonly convertObjectToQueryParams: ConvertObjectToQuery
  ) {}

  async list(params: ListMessagesHttp.Params): ListMessagesHttp.Result {
    const result = await this.httpClient.request({
      method: 'GET',
      url: `/conversations.history?${this.convertObjectToQueryParams(params)}`,
      headers: {
        authorization: `Bearer ${SLACK.TOKEN}`,
      },
    });

    return {
      data: convertSnakeCaseKeysToCamelCase(result.body.messages),
      status: result.statusCode === 200 && result.body.ok,
    };
  }
}
