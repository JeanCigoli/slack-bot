import { APIS } from '@/utils/constants';
import axios from 'axios';

export const httpSlack = axios.create({
  baseURL: APIS.SLACK,
});
