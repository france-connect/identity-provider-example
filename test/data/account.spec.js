/* eslint-env mocha */
import chai from 'chai';
import assert from 'assert';
import chaiHttp from 'chai-http';
import account from '../../data/account';

chai.use(chaiHttp);

describe('data/Account', () => {
  describe('authenticate', () => {
    it('should return an array if valid credentials', async () => {
      // Setup
      const identifier = {
        identifiant: '3_melaine',
        password: '123',
      };

      const expected = [{
        $oid: '5b3e1280c1eb6856db7362bb',
        identifiant: '3_melaine',
        password: 'a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3',
        nomDeNaissance: 'TROIS',
        prenom: 'MELAINE',
        secondPrenom: 'EVELYNE',
        titre: 'MME',
        Gender: 'female',
        email: 'trois_melaine@mail.com',
        telephone: '123456789',
        birthdate: '1981-07-27',
        AAAA: '1981',
        MM: '07',
        JJ: '27',
        departementDeNaissance: '47',
        codeCommune: '8',
        regionDeNaissance: '95277',
        codePaysDeNaissance: '99100',
        adresseFormatee: '120 BOULEVARD FRANÇOIS ROBERT 13016 MARSEILLE',
        createdAt: '2018-07-05T00:00:00.000Z',
        updatedAt: '2018-07-05T00:00:00.000Z',
      }];
      // Action
      const data = await account.authenticate(identifier.identifiant, identifier.identifiant);
      // Assert
      assert.deepEqual(data, expected);
    });

    it('should return null if invalid credentials', async () => {
      // Setup
      const identifier = {
        identifiant: 'ZZZ',
        password: '123',
      };
      const expected = null;
      // Action
      const data = await account.authenticate(identifier.identifiant, identifier.password);
      // Assert
      assert.equal(data, expected);
    });
  });
});
