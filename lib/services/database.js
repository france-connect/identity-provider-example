'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _nodeCsvQuery = require('node-csv-query');

var _nodeCsvQuery2 = _interopRequireDefault(_nodeCsvQuery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const database = { connection: null };

(0, _nodeCsvQuery2.default)(_path2.default.join(__dirname, '../../database.csv'), { rtrim: true, cast: false, comment: '#' }).then(db => {
  // eslint-disable-next-line no-console
  console.log('Connected to database!');

  database.connection = db;
});

exports.default = database;