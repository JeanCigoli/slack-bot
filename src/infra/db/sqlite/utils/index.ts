import knex from 'knex';

import connection from './connection';

const defaultConnection = knex(connection);

export { defaultConnection };
