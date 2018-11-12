import assert from 'assert';
import database from './database';
import UserDataCheck from '../helpers/UserDataCheck';

const store = new Map();
const logins = new Map();
const userDataCheck = new UserDataCheck();
const uuid = require('uuid/v4');

let user = null;

function setUserData(dbData) {
  user = dbData;
}

function checkCredentials(formData, dbData) {
  let result;
  if (formData === dbData) {
    result = true;
  } else {
    result = false;
  }
  return result;
}

class Account {
  constructor(id) {
    this.accountId = id || uuid();
    store.set(this.accountId, this);
  }

  /**
   * @param use - can either be "id_token" or "userinfo", depending on
   *   where the specific claims are intended to be put in.
   * @param scope - the intended scope, while oidc-provider will mask
   *   claims depending on the scope automatically you might want to skip
   *   loading some claims from external resources etc. based on this detail
   *   or not return them in id tokens but only userinfo and so on.
   */
  async claims(use, scope) { // eslint-disable-line no-unused-vars
    if (user !== null) {
      const checkedUser = userDataCheck.checkMandatoryData(user);
      return { sub: this.accountId, ...checkedUser };
    }
    return null;
  }

  static async findByLogin(login) {
    if (!logins.get(login)) {
      logins.set(login, new Account());
    }
    return logins.get(login);
  }

  static async findById(ctx, id, token) { // eslint-disable-line no-unused-vars
    // token is a reference to the token used for which a given account is being loaded,
    //   it is undefined in scenarios where account claims are returned from authorization endpoint
    // ctx is the koa request context
    if (!store.get(id)) {
      new Account(id); // eslint-disable-line no-new
    }
    return store.get(id);
  }

  static async authenticate(login, password) {
    let output = null;
    assert(login, 'identifiant must be provided');
    assert(password, 'password must be provided');
    await database.connection.find({
      identifiant: login,
    }).then((result) => {
      if (result[0]) {
        if (checkCredentials(login, result[0].identifiant)) {
          output = result;
          setUserData(result);
        }
      } else {
        output = null;
      }
    /* eslint-disable arrow-body-style */
    }).catch((err) => {
      return err;
    });
    return output;
  }
}
module.exports = Account;
