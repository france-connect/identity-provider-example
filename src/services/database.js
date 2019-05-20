import path from 'path';
import csvdb from 'node-csv-query';
import fs from 'fs';

const database = { connection: null };

const filenames = [
  '../database.csv',
  ...fs.readdirSync(path.join(__dirname, '../../data')),
];

const filteredAbsoluteFilenames = filenames
  // change relative to absolute path
  .map(filename => path.join(__dirname, '../../data/', filename))
  // only takes data files
  .filter(filename => filename.endsWith('.csv'));

const filebuffers = filteredAbsoluteFilenames
  .map(filename => fs.readFileSync(filename));

const tempFilename = path.join(__dirname, '../../.aggregated_database.csv');

fs.writeFileSync(tempFilename, Buffer.concat(filebuffers));

csvdb(tempFilename, { rtrim: true, cast: false, comment: '#' }).then((db) => {
  // eslint-disable-next-line no-console
  console.log('Connected to database!');

  fs.unlinkSync(tempFilename);

  database.connection = db;
});

export default database;
