import path from 'path';
import csvdb from 'node-csv-query';
import fs from 'fs';

const database = { connection: null };

export function getFilePathList(paths) {
  return (
    fs
      .readdirSync(path.join.apply(null, paths))
      // only takes data files
      .filter(filename => filename.endsWith('.csv'))
      // prepend path to filename
      .map(filename => path.join.apply(null, [...paths, filename]))
  );
}

const filenames = [
  path.join(__dirname, '../../database.csv'),
  ...getFilePathList([__dirname, '../../data']),
];

if (typeof process.env.DATABASE_PATH !== 'undefined') {
  filenames.push(...getFilePathList([process.env.DATABASE_PATH]));
}

const filebuffers = filenames.map(filename => fs.readFileSync(filename));

const tempFilename = path.join(__dirname, '../../.aggregated_database.csv');

fs.writeFileSync(tempFilename, Buffer.concat(filebuffers));

csvdb(tempFilename, { rtrim: true, cast: false, comment: '#' }).then((db) => {
  // eslint-disable-next-line no-console
  console.log('Connected to database!');

  fs.unlinkSync(tempFilename);

  database.connection = db;
});

export default database;
