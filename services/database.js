import path from 'path';
import csvdb from 'node-csv-query';

const database = { connection: null };

csvdb(path.join(__dirname, '../database.csv'), { rtrim: true }).then((db) => {
  // eslint-disable-next-line no-console
  console.log('Connected to database!');

  database.connection = db;
});

export default database;
