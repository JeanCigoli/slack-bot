import { ConvertObjectToQuery } from '@/infra/http/protocols';

export const convertObjectToQueryParams: ConvertObjectToQuery = (data) =>
  Object.entries(data)
    .map(([key, value]) => `${key}=${value}`)
    .join('&');
