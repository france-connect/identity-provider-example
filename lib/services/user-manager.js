'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authenticate = exports.findOneByLogin = exports.findOneById = undefined;

var _lodash = require('lodash');

var _database = require('./database');

var _database2 = _interopRequireDefault(_database);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const findOneById = exports.findOneById = async id => {
  const users = await _database2.default.connection.find({ id });

  return (0, _lodash.isEmpty)(users) ? null : users[0];
};

const findOneByLogin = exports.findOneByLogin = async login => {
  const users = await _database2.default.connection.find({
    identifiant: login
  });

  return (0, _lodash.isEmpty)(users) ? null : users[0];
};

const authenticate = exports.authenticate = async (login, password) => {
  const user = await findOneByLogin(login);

  if ((0, _lodash.isEmpty)(user)) {
    throw new Error('invalid_credentials');
  }

  const doPasswordMatch = password === user.motDePasse;

  if (!doPasswordMatch) {
    throw new Error('invalid_credentials');
  }

  return user;
};