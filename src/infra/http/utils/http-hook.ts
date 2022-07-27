import { APIS } from '@/utils/constants';
import axios from 'axios';

export const httpHook = axios.create({
  baseURL: APIS.HOOK,
});
