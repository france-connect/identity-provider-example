/* eslint-env mocha */
import { expect } from 'chai';
import { authenticate } from '../../src/services/user-manager';

describe('data/Account', () => {
  describe('authenticate', () => {
    it('should return a user if valid credentials', async () => {
      // Setup
      const login = 'test';
      const password = '123';
      const expectedId = '1';
      // Action
      const { id } = await authenticate(login, password);
      // Assert
      expect(id).to.equal(expectedId);
    });

    it('should throw an error if invalid login', async () => {
      // Setup
      const login = 'tes';
      const password = '123';
      const expectedErrorMessage = 'invalid_credentials';
      // Action
      try {
        await authenticate(login, password);

        expect(null).to.equal(expectedErrorMessage);
      } catch (e) {
        // Assert
        expect(e.message).to.equal(expectedErrorMessage);
      }
    });

    it('should throw an error if invalid password', async () => {
      // Setup
      const login = 'test';
      const password = '1234';
      const expectedErrorMessage = 'invalid_credentials';
      // Action
      try {
        await authenticate(login, password);

        expect(null).to.equal(expectedErrorMessage);
      } catch (e) {
        // Assert
        expect(e.message).to.equal(expectedErrorMessage);
      }
    });
  });
});
