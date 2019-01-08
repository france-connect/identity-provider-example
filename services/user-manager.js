import { isEmpty } from 'lodash';

import database from './database';

export const findOneById = async (id) => {
  const users = await database.connection.find({
    $oid: id,
  });

  return isEmpty(users) ? null : users[0];
};

export const findOneByLogin = async (login) => {
  const users = await database.connection.find({
    identifiant: login,
  });

  return isEmpty(users) ? null : users[0];
};

export const authenticate = async (login, password) => {
  const user = await findOneByLogin(login);

  if (isEmpty(user)) {
    throw new Error('invalid_credentials');
  }

  const doPasswordMatch = password === user.password;

  if (!doPasswordMatch) {
    throw new Error('invalid_credentials');
  }

  return user;
};
