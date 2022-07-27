import path from 'path';

export default {
  client: 'sqlite3',
  connection: {
    filename: path.join(__dirname, 'database', 'database.sqlite'),
  },
  migrations: {
    directory: path.join(__dirname, 'database', 'migrations'),
  },
  seeds: {
    directory: path.join(__dirname, 'database', 'seeds'),
  },
  useNullAsDefault: true,
};
