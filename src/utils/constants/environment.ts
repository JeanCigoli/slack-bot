import 'dotenv/config';

export const SERVER = {
  PORT: process.env.PORT || 3000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  BASE_URI: process.env.BASE_URI || '',
};

export const APIS = {
  SLACK: process.env.API_SLACK || '',
  HOOK: process.env.API_HOOK || '',
};

export const DATABASE = {
  DB_DIALECT: process.env.DB_DIALECT || 'sqlite',
  DB_HOST: process.env.DB_HOST || '',
  DB_USERNAME: process.env.DB_USERNAME || '',
  DB_PASSWORD: process.env.DB_PASSWORD || '',
  DB_PORT: process.env.DB_PORT || '',
};

export const SLACK = {
  TOKEN: process.env.SLACK_TOKEN || '',
  HOOK: process.env.SLACK_HOOK || '',
};
