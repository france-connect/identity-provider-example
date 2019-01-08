import { isEmpty } from 'lodash';

import { findOneById as findOneUserById } from './user-manager';
import { checkMandatoryData } from './user-data-check';

export const findById = async (ctx, sub) => {
  const user = await findOneUserById(sub);

  if (isEmpty(user)) {
    return null;
  }

  return {
    accountId: sub,
    async claims() {
      const validUser = checkMandatoryData(user);

      return { sub, ...validUser };
    },
  };
};
