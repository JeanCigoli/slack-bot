import path from 'path';

const defaultConnection = {
  client: 'sqlite3',
  connection: {
    filename: path.join(
      __dirname,
      '..',
      '..',
      '..',
      '..',
      '..',
      'database',
      'database.sqlite'
    ),
  },
};

export default defaultConnection;
