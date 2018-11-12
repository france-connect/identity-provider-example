/* eslint-env mocha */
import assert from 'assert';
import UserDataCheck from '../../helpers/UserDataCheck';

describe('helpers/UserDataCheck', () => {
  const userDataCheck = new UserDataCheck();

  describe('family_name', () => {
    it('should not be return if user.nomDeNaissance is empty', () => {
      // Setup
      const user = [{
        $oid: '5b3e1280c1eb6856db7362bb',
        SPI: '3999999887219',
        identifiant: '3_melaine',
        password: 'a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3',
        nomDeNaissance: '',
        prenom: 'MELAINE',
        secondPrenom: 'EVELYNE',
        titre: 'MME',
        Gender: 'female',
        email: 'trois_melaine@mail.com',
        telephone: '123456789',
        birthdate: '1981-07-27',
        AAAA: '1981',
        MM: '7',
        JJ: '27',
        departementDeNaissance: '47',
        codeCommune: '8',
        regionDeNaissance: '95277',
        codePaysDeNaissance: '99100',
        adresseFormatee: '120 BOULEVARD FRANÇOIS ROBERT 13016 MARSEILLE',
        createdAt: '2018-07-05T00:00:00.000Z',
        updatedAt: '2018-07-05T00:00:00.000Z',
      }];
      const expected = {
        address: {
          country: user[0].codePaysDeNaissance,
          formatted: user[0].adresseFormatee,
          street_address: user[0].adresseFormatee,
        },
        birthdate: user[0].birthdate,
        birthcountry: user[0].codePaysDeNaissance,
        birthplace: user[0].departementDeNaissance,
        birthregion: user[0].regionDeNaissance,
        email: user[0].email,
        gender: user[0].Gender,
        given_name: user[0].prenom,
        middle_name: user[0].secondPrenom,
        nickname: user[0].prenom,
        phone_number: user[0].telephone,
        preferred_username: user[0].prenom,
        updated_at: user[0].updatedAt,
        siret: user[0].siret,
      };

      // Action
      const results = userDataCheck.checkMandatoryData(user);

      // Assert
      assert.deepEqual(expected, results);
    });

    it('should not be return if user.nomDeNaissance is undefined', () => {
      // Setup
      const user = [{
        $oid: '5b3e1280c1eb6856db7362bb',
        SPI: '3999999887219',
        identifiant: '3_melaine',
        password: 'a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3',
        nomDeNaissance: undefined,
        prenom: 'MELAINE',
        secondPrenom: 'EVELYNE',
        titre: 'MME',
        Gender: 'female',
        email: 'trois_melaine@mail.com',
        telephone: '123456789',
        birthdate: '1981-07-27',
        AAAA: '1981',
        MM: '7',
        JJ: '27',
        departementDeNaissance: '47',
        codeCommune: '8',
        regionDeNaissance: '95277',
        codePaysDeNaissance: '99100',
        adresseFormatee: '120 BOULEVARD FRANÇOIS ROBERT 13016 MARSEILLE',
        createdAt: '2018-07-05T00:00:00.000Z',
        updatedAt: '2018-07-05T00:00:00.000Z',
      }];
      const expected = {
        address: {
          country: user[0].codePaysDeNaissance,
          formatted: user[0].adresseFormatee,
          street_address: user[0].adresseFormatee,
        },
        birthdate: user[0].birthdate,
        birthcountry: user[0].codePaysDeNaissance,
        birthplace: user[0].departementDeNaissance,
        birthregion: user[0].regionDeNaissance,
        email: user[0].email,
        gender: user[0].Gender,
        given_name: user[0].prenom,
        middle_name: user[0].secondPrenom,
        nickname: user[0].prenom,
        phone_number: user[0].telephone,
        preferred_username: user[0].prenom,
        updated_at: user[0].updatedAt,
        siret: user[0].siret,
      };

      // Action
      const results = userDataCheck.checkMandatoryData(user);

      // Assert
      assert.deepEqual(expected, results);
    });

    it('should not be return if user.nomDeNaissance is null', () => {
      // Setup
      const user = [{
        $oid: '5b3e1280c1eb6856db7362bb',
        SPI: '3999999887219',
        identifiant: '3_melaine',
        password: 'a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3',
        nomDeNaissance: null,
        prenom: 'MELAINE',
        secondPrenom: 'EVELYNE',
        titre: 'MME',
        Gender: 'female',
        email: 'trois_melaine@mail.com',
        telephone: '123456789',
        birthdate: '1981-07-27',
        AAAA: '1981',
        MM: '7',
        JJ: '27',
        departementDeNaissance: '47',
        codeCommune: '8',
        regionDeNaissance: '95277',
        codePaysDeNaissance: '99100',
        adresseFormatee: '120 BOULEVARD FRANÇOIS ROBERT 13016 MARSEILLE',
        createdAt: '2018-07-05T00:00:00.000Z',
        updatedAt: '2018-07-05T00:00:00.000Z',
      }];
      const expected = {
        address: {
          country: user[0].codePaysDeNaissance,
          formatted: user[0].adresseFormatee,
          street_address: user[0].adresseFormatee,
        },
        birthdate: user[0].birthdate,
        birthcountry: user[0].codePaysDeNaissance,
        birthplace: user[0].departementDeNaissance,
        birthregion: user[0].regionDeNaissance,
        email: user[0].email,
        gender: user[0].Gender,
        given_name: user[0].prenom,
        middle_name: user[0].secondPrenom,
        nickname: user[0].prenom,
        phone_number: user[0].telephone,
        preferred_username: user[0].prenom,
        updated_at: user[0].updatedAt,
        siret: user[0].siret,
      };

      // Action
      const results = userDataCheck.checkMandatoryData(user);

      // Assert
      assert.deepEqual(expected, results);
    });

    it('should not be return if typeof user.nomDeNaissance is not a string', () => {
      // Setup
      const user = [{
        $oid: '5b3e1280c1eb6856db7362bb',
        SPI: '3999999887219',
        identifiant: '3_melaine',
        password: 'a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3',
        nomDeNaissance: 1234,
        prenom: 'MELAINE',
        secondPrenom: 'EVELYNE',
        titre: 'MME',
        Gender: 'female',
        email: 'trois_melaine@mail.com',
        telephone: '123456789',
        birthdate: '1981-07-27',
        AAAA: '1981',
        MM: '7',
        JJ: '27',
        departementDeNaissance: '47',
        codeCommune: '8',
        regionDeNaissance: '95277',
        codePaysDeNaissance: '99100',
        adresseFormatee: '120 BOULEVARD FRANÇOIS ROBERT 13016 MARSEILLE',
        createdAt: '2018-07-05T00:00:00.000Z',
        updatedAt: '2018-07-05T00:00:00.000Z',
      }];
      const expected = {
        address: {
          country: user[0].codePaysDeNaissance,
          formatted: user[0].adresseFormatee,
          street_address: user[0].adresseFormatee,
        },
        birthdate: user[0].birthdate,
        birthcountry: user[0].codePaysDeNaissance,
        birthplace: user[0].departementDeNaissance,
        birthregion: user[0].regionDeNaissance,
        email: user[0].email,
        gender: user[0].Gender,
        given_name: user[0].prenom,
        middle_name: user[0].secondPrenom,
        nickname: user[0].prenom,
        phone_number: user[0].telephone,
        preferred_username: user[0].prenom,
        updated_at: user[0].updatedAt,
        siret: user[0].siret,
      };

      // Action
      const results = userDataCheck.checkMandatoryData(user);

      // Assert
      assert.deepEqual(expected, results);
    });
  });

  describe('given_name', () => {
    it('should not be return if user.prenom is empty', () => {
      // Setup
      const user = [{
        $oid: '5b3e1280c1eb6856db7362bb',
        SPI: '3999999887219',
        identifiant: '3_melaine',
        password: 'a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3',
        nomDeNaissance: 'TROIS',
        prenom: '',
        secondPrenom: 'SIMONE',
        titre: 'MME',
        Gender: 'female',
        email: 'trois_melaine@mail.com',
        telephone: '123456789',
        birthdate: '1981-07-27',
        AAAA: '1981',
        MM: '7',
        JJ: '27',
        departementDeNaissance: '47',
        codeCommune: '8',
        regionDeNaissance: '95277',
        codePaysDeNaissance: '99100',
        adresseFormatee: '120 BOULEVARD FRANÇOIS ROBERT 13016 MARSEILLE',
        createdAt: '2018-07-05T00:00:00.000Z',
        updatedAt: '2018-07-05T00:00:00.000Z',
      }];
      const expected = {
        address: {
          country: user[0].codePaysDeNaissance,
          formatted: user[0].adresseFormatee,
          street_address: user[0].adresseFormatee,
        },
        birthdate: user[0].birthdate,
        birthcountry: user[0].codePaysDeNaissance,
        birthplace: user[0].departementDeNaissance,
        birthregion: user[0].regionDeNaissance,
        email: user[0].email,
        family_name: user[0].nomDeNaissance,
        gender: user[0].Gender,
        middle_name: user[0].secondPrenom,
        phone_number: user[0].telephone,
        updated_at: user[0].updatedAt,
        siret: user[0].siret,
      };

      // Action
      const results = userDataCheck.checkMandatoryData(user);

      // Assert
      assert.deepEqual(expected, results);
    });

    it('should not be return if user.prenom is undefined', () => {
      // Setup
      const user = [{
        $oid: '5b3e1280c1eb6856db7362bb',
        SPI: '3999999887219',
        identifiant: '3_melaine',
        password: 'a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3',
        nomDeNaissance: 'TROIS',
        prenom: undefined,
        secondPrenom: 'SIMONE',
        titre: 'MME',
        Gender: 'female',
        email: 'trois_melaine@mail.com',
        telephone: '123456789',
        birthdate: '1981-07-27',
        AAAA: '1981',
        MM: '7',
        JJ: '27',
        departementDeNaissance: '47',
        codeCommune: '8',
        regionDeNaissance: '95277',
        codePaysDeNaissance: '99100',
        adresseFormatee: '120 BOULEVARD FRANÇOIS ROBERT 13016 MARSEILLE',
        createdAt: '2018-07-05T00:00:00.000Z',
        updatedAt: '2018-07-05T00:00:00.000Z',
      }];

      const expected = {
        address: {
          country: user[0].codePaysDeNaissance,
          formatted: user[0].adresseFormatee,
          street_address: user[0].adresseFormatee,
        },
        birthdate: user[0].birthdate,
        birthcountry: user[0].codePaysDeNaissance,
        birthplace: user[0].departementDeNaissance,
        birthregion: user[0].regionDeNaissance,
        email: user[0].email,
        family_name: user[0].nomDeNaissance,
        gender: user[0].Gender,
        middle_name: user[0].secondPrenom,
        phone_number: user[0].telephone,
        updated_at: user[0].updatedAt,
        siret: user[0].siret,
      };

      // Action
      const results = userDataCheck.checkMandatoryData(user);

      // Assert
      assert.deepEqual(expected, results);
    });

    it('should not be return if user.prenom is null', () => {
      // Setup
      const user = [{
        $oid: '5b3e1280c1eb6856db7362bb',
        SPI: '3999999887219',
        identifiant: '3_melaine',
        password: 'a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3',
        nomDeNaissance: 'TROIS',
        prenom: null,
        secondPrenom: 'SIMONE',
        titre: 'MME',
        Gender: 'female',
        email: 'trois_melaine@mail.com',
        telephone: '123456789',
        birthdate: '1981-07-27',
        AAAA: '1981',
        MM: '7',
        JJ: '27',
        departementDeNaissance: '47',
        codeCommune: '8',
        regionDeNaissance: '95277',
        codePaysDeNaissance: '99100',
        adresseFormatee: '120 BOULEVARD FRANÇOIS ROBERT 13016 MARSEILLE',
        createdAt: '2018-07-05T00:00:00.000Z',
        updatedAt: '2018-07-05T00:00:00.000Z',
      }];

      const expected = {
        address: {
          country: user[0].codePaysDeNaissance,
          formatted: user[0].adresseFormatee,
          street_address: user[0].adresseFormatee,
        },
        birthdate: user[0].birthdate,
        birthcountry: user[0].codePaysDeNaissance,
        birthplace: user[0].departementDeNaissance,
        birthregion: user[0].regionDeNaissance,
        email: user[0].email,
        family_name: user[0].nomDeNaissance,
        gender: user[0].Gender,
        middle_name: user[0].secondPrenom,
        phone_number: user[0].telephone,
        updated_at: user[0].updatedAt,
        siret: user[0].siret,
      };

      // Action
      const results = userDataCheck.checkMandatoryData(user);

      // Assert
      assert.deepEqual(expected, results);
    });

    it('should not be return if user.prenom is not a string', () => {
      // Setup
      const user = [{
        $oid: '5b3e1280c1eb6856db7362bb',
        SPI: '3999999887219',
        identifiant: '3_melaine',
        password: 'a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3',
        nomDeNaissance: 'TROIS',
        prenom: 12345,
        secondPrenom: 'SIMONE',
        titre: 'MME',
        Gender: 'female',
        email: 'trois_melaine@mail.com',
        telephone: '123456789',
        birthdate: '1981-07-27',
        AAAA: '1981',
        MM: '7',
        JJ: '27',
        departementDeNaissance: '47',
        codeCommune: '8',
        regionDeNaissance: '95277',
        codePaysDeNaissance: '99100',
        adresseFormatee: '120 BOULEVARD FRANÇOIS ROBERT 13016 MARSEILLE',
        createdAt: '2018-07-05T00:00:00.000Z',
        updatedAt: '2018-07-05T00:00:00.000Z',
      }];
      const expected = {
        address: {
          country: user[0].codePaysDeNaissance,
          formatted: user[0].adresseFormatee,
          street_address: user[0].adresseFormatee,
        },
        birthdate: user[0].birthdate,
        birthcountry: user[0].codePaysDeNaissance,
        birthplace: user[0].departementDeNaissance,
        birthregion: user[0].regionDeNaissance,
        email: user[0].email,
        family_name: user[0].nomDeNaissance,
        gender: user[0].Gender,
        middle_name: user[0].secondPrenom,
        phone_number: user[0].telephone,
        updated_at: user[0].updatedAt,
        siret: user[0].siret,
      };

      // Action
      const results = userDataCheck.checkMandatoryData(user);

      // Assert
      assert.deepEqual(expected, results);
    });
  });

  describe('birthdate', () => {
    it('should not be return if user.birthdate is empty', () => {
      // Setup
      const user = [{
        $oid: '5b3e1280c1eb6856db7362bb',
        SPI: '3999999887219',
        identifiant: '3_melaine',
        password: 'a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3',
        nomDeNaissance: 'TROIS',
        prenom: 'MELAINE',
        secondPrenom: 'SIMONE',
        titre: 'MME',
        Gender: 'female',
        email: 'trois_melaine@mail.com',
        telephone: '123456789',
        birthdate: '',
        AAAA: '1981',
        MM: '7',
        JJ: '27',
        departementDeNaissance: '47',
        codeCommune: '8',
        regionDeNaissance: '95277',
        codePaysDeNaissance: '99100',
        adresseFormatee: '120 BOULEVARD FRANÇOIS ROBERT 13016 MARSEILLE',
        createdAt: '2018-07-05T00:00:00.000Z',
        updatedAt: '2018-07-05T00:00:00.000Z',
      }];
      const expected = {
        address: {
          country: user[0].codePaysDeNaissance,
          formatted: user[0].adresseFormatee,
          street_address: user[0].adresseFormatee,
        },
        birthcountry: user[0].codePaysDeNaissance,
        birthplace: user[0].departementDeNaissance,
        birthregion: user[0].regionDeNaissance,
        email: user[0].email,
        family_name: user[0].nomDeNaissance,
        gender: user[0].Gender,
        given_name: user[0].prenom,
        middle_name: user[0].secondPrenom,
        name: `${user[0].nomDeNaissance} ${user[0].prenom}`,
        nickname: user[0].prenom,
        phone_number: user[0].telephone,
        preferred_username: `${user[0].prenom}_${user[0].nomDeNaissance}`,
        updated_at: user[0].updatedAt,
        siret: user[0].siret,
      };

      // Action
      const results = userDataCheck.checkMandatoryData(user);

      // Assert
      assert.deepEqual(expected, results);
    });

    it('should not be return if user.birthdate is undefined', () => {
      // Setup
      const user = [{
        $oid: '5b3e1280c1eb6856db7362bb',
        SPI: '3999999887219',
        identifiant: '3_melaine',
        password: 'a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3',
        nomDeNaissance: 'TROIS',
        prenom: 'MELAINE',
        secondPrenom: 'SIMONE',
        titre: 'MME',
        Gender: 'female',
        email: 'trois_melaine@mail.com',
        telephone: '123456789',
        birthdate: undefined,
        AAAA: '1981',
        MM: '7',
        JJ: '27',
        departementDeNaissance: '47',
        codeCommune: '8',
        regionDeNaissance: '95277',
        codePaysDeNaissance: '99100',
        adresseFormatee: '120 BOULEVARD FRANÇOIS ROBERT 13016 MARSEILLE',
        createdAt: '2018-07-05T00:00:00.000Z',
        updatedAt: '2018-07-05T00:00:00.000Z',
      }];
      const expected = {
        address: {
          country: user[0].codePaysDeNaissance,
          formatted: user[0].adresseFormatee,
          street_address: user[0].adresseFormatee,
        },
        birthcountry: user[0].codePaysDeNaissance,
        birthplace: user[0].departementDeNaissance,
        birthregion: user[0].regionDeNaissance,
        email: user[0].email,
        family_name: user[0].nomDeNaissance,
        gender: user[0].Gender,
        given_name: user[0].prenom,
        middle_name: user[0].secondPrenom,
        name: `${user[0].nomDeNaissance} ${user[0].prenom}`,
        nickname: user[0].prenom,
        phone_number: user[0].telephone,
        preferred_username: `${user[0].prenom}_${user[0].nomDeNaissance}`,
        updated_at: user[0].updatedAt,
        siret: user[0].siret,
      };

      // Action
      const results = userDataCheck.checkMandatoryData(user);

      // Assert
      assert.deepEqual(expected, results);
    });

    it('should not be return if user.birthdate is null', () => {
      // Setup
      const user = [{
        $oid: '5b3e1280c1eb6856db7362bb',
        SPI: '3999999887219',
        identifiant: '3_melaine',
        password: 'a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3',
        nomDeNaissance: 'TROIS',
        prenom: 'MELAINE',
        secondPrenom: 'SIMONE',
        titre: 'MME',
        Gender: 'female',
        email: 'trois_melaine@mail.com',
        telephone: '123456789',
        birthdate: null,
        AAAA: '1981',
        MM: '7',
        JJ: '27',
        departementDeNaissance: '47',
        codeCommune: '8',
        regionDeNaissance: '95277',
        codePaysDeNaissance: '99100',
        adresseFormatee: '120 BOULEVARD FRANÇOIS ROBERT 13016 MARSEILLE',
        createdAt: '2018-07-05T00:00:00.000Z',
        updatedAt: '2018-07-05T00:00:00.000Z',
      }];
      const expected = {
        address: {
          country: user[0].codePaysDeNaissance,
          formatted: user[0].adresseFormatee,
          street_address: user[0].adresseFormatee,
        },
        birthcountry: user[0].codePaysDeNaissance,
        birthplace: user[0].departementDeNaissance,
        birthregion: user[0].regionDeNaissance,
        email: user[0].email,
        family_name: user[0].nomDeNaissance,
        gender: user[0].Gender,
        given_name: user[0].prenom,
        middle_name: user[0].secondPrenom,
        name: `${user[0].nomDeNaissance} ${user[0].prenom}`,
        nickname: user[0].prenom,
        phone_number: user[0].telephone,
        preferred_username: `${user[0].prenom}_${user[0].nomDeNaissance}`,
        updated_at: user[0].updatedAt,
        siret: user[0].siret,
      };

      // Action
      const results = userDataCheck.checkMandatoryData(user);

      // Assert
      assert.deepEqual(expected, results);
    });

    it('should not be return if user.birthdate is not a string', () => {
      // Setup
      const user = [{
        $oid: '5b3e1280c1eb6856db7362bb',
        SPI: '3999999887219',
        identifiant: '3_melaine',
        password: 'a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3',
        nomDeNaissance: 'TROIS',
        prenom: 'MELAINE',
        secondPrenom: 'SIMONE',
        titre: 'MME',
        Gender: 'female',
        email: 'trois_melaine@mail.com',
        telephone: '123456789',
        birthdate: 1233,
        AAAA: '1981',
        MM: '7',
        JJ: '27',
        departementDeNaissance: '47',
        codeCommune: '8',
        regionDeNaissance: '95277',
        codePaysDeNaissance: '99100',
        adresseFormatee: '120 BOULEVARD FRANÇOIS ROBERT 13016 MARSEILLE',
        createdAt: '2018-07-05T00:00:00.000Z',
        updatedAt: '2018-07-05T00:00:00.000Z',
      }];
      const expected = {
        address: {
          country: user[0].codePaysDeNaissance,
          formatted: user[0].adresseFormatee,
          street_address: user[0].adresseFormatee,
        },
        birthcountry: user[0].codePaysDeNaissance,
        birthplace: user[0].departementDeNaissance,
        birthregion: user[0].regionDeNaissance,
        email: user[0].email,
        family_name: user[0].nomDeNaissance,
        gender: user[0].Gender,
        given_name: user[0].prenom,
        middle_name: user[0].secondPrenom,
        name: `${user[0].nomDeNaissance} ${user[0].prenom}`,
        nickname: user[0].prenom,
        phone_number: user[0].telephone,
        preferred_username: `${user[0].prenom}_${user[0].nomDeNaissance}`,
        updated_at: user[0].updatedAt,
        siret: user[0].siret,
      };

      // Action
      const results = userDataCheck.checkMandatoryData(user);

      // Assert
      assert.deepEqual(expected, results);
    });
  });

  describe('gender', () => {
    it('should not be return if user.Gender is empty', () => {
      // Setup
      const user = [{
        $oid: '5b3e1280c1eb6856db7362bb',
        SPI: '3999999887219',
        identifiant: '3_melaine',
        password: 'a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3',
        nomDeNaissance: 'TROIS',
        prenom: 'MELAINE',
        secondPrenom: 'SIMONE',
        titre: 'MME',
        Gender: '',
        email: 'trois_melaine@mail.com',
        telephone: '123456789',
        birthdate: '1981-07-27',
        AAAA: '1981',
        MM: '7',
        JJ: '27',
        departementDeNaissance: '47',
        codeCommune: '8',
        regionDeNaissance: '95277',
        codePaysDeNaissance: '99100',
        adresseFormatee: '120 BOULEVARD FRANÇOIS ROBERT 13016 MARSEILLE',
        createdAt: '2018-07-05T00:00:00.000Z',
        updatedAt: '2018-07-05T00:00:00.000Z',
      }];
      const expected = {
        address: {
          country: user[0].codePaysDeNaissance,
          formatted: user[0].adresseFormatee,
          street_address: user[0].adresseFormatee,
        },
        birthdate: user[0].birthdate,
        birthcountry: user[0].codePaysDeNaissance,
        birthplace: user[0].departementDeNaissance,
        birthregion: user[0].regionDeNaissance,
        email: user[0].email,
        family_name: user[0].nomDeNaissance,
        given_name: user[0].prenom,
        middle_name: user[0].secondPrenom,
        name: `${user[0].nomDeNaissance} ${user[0].prenom}`,
        nickname: user[0].prenom,
        phone_number: user[0].telephone,
        preferred_username: `${user[0].prenom}_${user[0].nomDeNaissance}`,
        updated_at: user[0].updatedAt,
        siret: user[0].siret,
      };

      // Action
      const results = userDataCheck.checkMandatoryData(user);

      // Assert
      assert.deepEqual(expected, results);
    });

    it('should not be return if user.Gender is undefined', () => {
      // Setup
      const user = [{
        $oid: '5b3e1280c1eb6856db7362bb',
        SPI: '3999999887219',
        identifiant: '3_melaine',
        password: 'a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3',
        nomDeNaissance: 'TROIS',
        prenom: 'MELAINE',
        secondPrenom: 'SIMONE',
        titre: 'MME',
        Gender: undefined,
        email: 'trois_melaine@mail.com',
        telephone: '123456789',
        birthdate: '1981-07-27',
        AAAA: '1981',
        MM: '7',
        JJ: '27',
        departementDeNaissance: '47',
        codeCommune: '8',
        regionDeNaissance: '95277',
        codePaysDeNaissance: '99100',
        adresseFormatee: '120 BOULEVARD FRANÇOIS ROBERT 13016 MARSEILLE',
        createdAt: '2018-07-05T00:00:00.000Z',
        updatedAt: '2018-07-05T00:00:00.000Z',
      }];
      const expected = {
        address: {
          country: user[0].codePaysDeNaissance,
          formatted: user[0].adresseFormatee,
          street_address: user[0].adresseFormatee,
        },
        birthdate: user[0].birthdate,
        birthcountry: user[0].codePaysDeNaissance,
        birthplace: user[0].departementDeNaissance,
        birthregion: user[0].regionDeNaissance,
        email: user[0].email,
        family_name: user[0].nomDeNaissance,
        given_name: user[0].prenom,
        middle_name: user[0].secondPrenom,
        name: `${user[0].nomDeNaissance} ${user[0].prenom}`,
        nickname: user[0].prenom,
        phone_number: user[0].telephone,
        preferred_username: `${user[0].prenom}_${user[0].nomDeNaissance}`,
        updated_at: user[0].updatedAt,
        siret: user[0].siret,
      };

      // Action
      const results = userDataCheck.checkMandatoryData(user);

      // Assert
      assert.deepEqual(expected, results);
    });

    it('should not be return if user.Gender is null', () => {
      // Setup
      const user = [{
        $oid: '5b3e1280c1eb6856db7362bb',
        SPI: '3999999887219',
        identifiant: '3_melaine',
        password: 'a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3',
        nomDeNaissance: 'TROIS',
        prenom: 'MELAINE',
        secondPrenom: 'SIMONE',
        titre: 'MME',
        Gender: null,
        email: 'trois_melaine@mail.com',
        telephone: '123456789',
        birthdate: '1981-07-27',
        AAAA: '1981',
        MM: '7',
        JJ: '27',
        departementDeNaissance: '47',
        codeCommune: '8',
        regionDeNaissance: '95277',
        codePaysDeNaissance: '99100',
        adresseFormatee: '120 BOULEVARD FRANÇOIS ROBERT 13016 MARSEILLE',
        createdAt: '2018-07-05T00:00:00.000Z',
        updatedAt: '2018-07-05T00:00:00.000Z',
      }];
      const expected = {
        address: {
          country: user[0].codePaysDeNaissance,
          formatted: user[0].adresseFormatee,
          street_address: user[0].adresseFormatee,
        },
        birthdate: user[0].birthdate,
        birthcountry: user[0].codePaysDeNaissance,
        birthplace: user[0].departementDeNaissance,
        birthregion: user[0].regionDeNaissance,
        email: user[0].email,
        family_name: user[0].nomDeNaissance,
        given_name: user[0].prenom,
        middle_name: user[0].secondPrenom,
        name: `${user[0].nomDeNaissance} ${user[0].prenom}`,
        nickname: user[0].prenom,
        phone_number: user[0].telephone,
        preferred_username: `${user[0].prenom}_${user[0].nomDeNaissance}`,
        updated_at: user[0].updatedAt,
        siret: user[0].siret,
      };

      // Action
      const results = userDataCheck.checkMandatoryData(user);

      // Assert
      assert.deepEqual(expected, results);
    });

    it('should not be return if user.Gender is not a string', () => {
      // Setup
      const user = [{
        $oid: '5b3e1280c1eb6856db7362bb',
        SPI: '3999999887219',
        identifiant: '3_melaine',
        password: 'a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3',
        nomDeNaissance: 'TROIS',
        prenom: 'MELAINE',
        secondPrenom: 'SIMONE',
        titre: 'MME',
        Gender: 1234,
        email: 'trois_melaine@mail.com',
        telephone: '123456789',
        birthdate: '1981-07-27',
        AAAA: '1981',
        MM: '7',
        JJ: '27',
        departementDeNaissance: '47',
        codeCommune: '8',
        regionDeNaissance: '95277',
        codePaysDeNaissance: '99100',
        adresseFormatee: '120 BOULEVARD FRANÇOIS ROBERT 13016 MARSEILLE',
        createdAt: '2018-07-05T00:00:00.000Z',
        updatedAt: '2018-07-05T00:00:00.000Z',
      }];
      const expected = {
        address: {
          country: user[0].codePaysDeNaissance,
          formatted: user[0].adresseFormatee,
          street_address: user[0].adresseFormatee,
        },
        birthdate: user[0].birthdate,
        birthcountry: user[0].codePaysDeNaissance,
        birthplace: user[0].departementDeNaissance,
        birthregion: user[0].regionDeNaissance,
        email: user[0].email,
        family_name: user[0].nomDeNaissance,
        given_name: user[0].prenom,
        middle_name: user[0].secondPrenom,
        name: `${user[0].nomDeNaissance} ${user[0].prenom}`,
        nickname: user[0].prenom,
        phone_number: user[0].telephone,
        preferred_username: `${user[0].prenom}_${user[0].nomDeNaissance}`,
        updated_at: user[0].updatedAt,
        siret: user[0].siret,
      };

      // Action
      const results = userDataCheck.checkMandatoryData(user);

      // Assert
      assert.deepEqual(expected, results);
    });
  });

  describe('birthplace', () => {
    it('should should not be return if user.departementDeNaissance is empty', () => {
      // Setup
      const user = [{
        $oid: '5b3e1280c1eb6856db7362bb',
        SPI: '3999999887219',
        identifiant: '3_melaine',
        password: 'a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3',
        nomDeNaissance: 'TROIX',
        prenom: 'MELAINE  EVELYNE SIMONE',
        secondPrenom: 'EVELYNE SIMONE',
        titre: 'MME',
        Gender: 'female',
        email: 'trois_melaine@mail.com',
        telephone: '123456789',
        birthdate: '1981-07-27',
        AAAA: '1981',
        MM: '7',
        JJ: '27',
        departementDeNaissance: '',
        codeCommune: '8',
        regionDeNaissance: '95277',
        codePaysDeNaissance: '99100',
        adresseFormatee: '120 BOULEVARD FRANÇOIS ROBERT 13016 MARSEILLE',
        createdAt: '2018-07-05T00:00:00.000Z',
        updatedAt: '2018-07-05T00:00:00.000Z',
      }];
      const expected = {
        address: {
          country: user[0].codePaysDeNaissance,
          formatted: user[0].adresseFormatee,
          street_address: user[0].adresseFormatee,
        },
        birthdate: user[0].birthdate,
        birthcountry: user[0].codePaysDeNaissance,
        birthregion: user[0].regionDeNaissance,
        email: user[0].email,
        family_name: user[0].nomDeNaissance,
        gender: user[0].Gender,
        given_name: user[0].prenom,
        middle_name: user[0].secondPrenom,
        name: `${user[0].nomDeNaissance} ${user[0].prenom}`,
        nickname: user[0].prenom,
        phone_number: user[0].telephone,
        preferred_username: `${user[0].prenom}_${user[0].nomDeNaissance}`,
        updated_at: user[0].updatedAt,
        siret: user[0].siret,
      };

      // Action
      const results = userDataCheck.checkMandatoryData(user);

      // Assert
      assert.deepEqual(expected, results);
    });

    it('should should not be return if user.departementDeNaissance is undefined', () => {
      // Setup
      const user = [{
        $oid: '5b3e1280c1eb6856db7362bb',
        SPI: '3999999887219',
        identifiant: '3_melaine',
        password: 'a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3',
        nomDeNaissance: 'TROIX',
        prenom: 'MELAINE  EVELYNE SIMONE',
        secondPrenom: 'EVELYNE SIMONE',
        titre: 'MME',
        Gender: 'female',
        email: 'trois_melaine@mail.com',
        telephone: '123456789',
        birthdate: '1981-07-27',
        AAAA: '1981',
        MM: '7',
        JJ: '27',
        departementDeNaissance: undefined,
        codeCommune: '8',
        regionDeNaissance: '95277',
        codePaysDeNaissance: '99100',
        adresseFormatee: '120 BOULEVARD FRANÇOIS ROBERT 13016 MARSEILLE',
        createdAt: '2018-07-05T00:00:00.000Z',
        updatedAt: '2018-07-05T00:00:00.000Z',
      }];
      const expected = {
        address: {
          country: user[0].codePaysDeNaissance,
          formatted: user[0].adresseFormatee,
          street_address: user[0].adresseFormatee,
        },
        birthdate: user[0].birthdate,
        birthcountry: user[0].codePaysDeNaissance,
        birthregion: user[0].regionDeNaissance,
        email: user[0].email,
        family_name: user[0].nomDeNaissance,
        gender: user[0].Gender,
        given_name: user[0].prenom,
        middle_name: user[0].secondPrenom,
        name: `${user[0].nomDeNaissance} ${user[0].prenom}`,
        nickname: user[0].prenom,
        phone_number: user[0].telephone,
        preferred_username: `${user[0].prenom}_${user[0].nomDeNaissance}`,
        updated_at: user[0].updatedAt,
        siret: user[0].siret,
      };

      // Action
      const results = userDataCheck.checkMandatoryData(user);

      // Assert
      assert.deepEqual(expected, results);
    });

    it('should should not be return if user.departementDeNaissance is null', () => {
      // Setup
      const user = [{
        $oid: '5b3e1280c1eb6856db7362bb',
        SPI: '3999999887219',
        identifiant: '3_melaine',
        password: 'a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3',
        nomDeNaissance: 'TROIX',
        prenom: 'MELAINE  EVELYNE SIMONE',
        secondPrenom: 'EVELYNE SIMONE',
        titre: 'MME',
        Gender: 'female',
        email: 'trois_melaine@mail.com',
        telephone: '123456789',
        birthdate: '1981-07-27',
        AAAA: '1981',
        MM: '7',
        JJ: '27',
        departementDeNaissance: null,
        codeCommune: '8',
        regionDeNaissance: '95277',
        codePaysDeNaissance: '99100',
        adresseFormatee: '120 BOULEVARD FRANÇOIS ROBERT 13016 MARSEILLE',
        createdAt: '2018-07-05T00:00:00.000Z',
        updatedAt: '2018-07-05T00:00:00.000Z',
      }];
      const expected = {
        address: {
          country: user[0].codePaysDeNaissance,
          formatted: user[0].adresseFormatee,
          street_address: user[0].adresseFormatee,
        },
        birthdate: user[0].birthdate,
        birthcountry: user[0].codePaysDeNaissance,
        birthregion: user[0].regionDeNaissance,
        email: user[0].email,
        family_name: user[0].nomDeNaissance,
        gender: user[0].Gender,
        given_name: user[0].prenom,
        middle_name: user[0].secondPrenom,
        name: `${user[0].nomDeNaissance} ${user[0].prenom}`,
        nickname: user[0].prenom,
        phone_number: user[0].telephone,
        preferred_username: `${user[0].prenom}_${user[0].nomDeNaissance}`,
        updated_at: user[0].updatedAt,
        siret: user[0].siret,
      };

      // Action
      const results = userDataCheck.checkMandatoryData(user);

      // Assert
      assert.deepEqual(expected, results);
    });

    it('should should not be return if user.departementDeNaissance is not a string', () => {
      // Setup
      const user = [{
        $oid: '5b3e1280c1eb6856db7362bb',
        SPI: '3999999887219',
        identifiant: '3_melaine',
        password: 'a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3',
        nomDeNaissance: 'TROIX',
        prenom: 'MELAINE  EVELYNE SIMONE',
        secondPrenom: 'EVELYNE SIMONE',
        titre: 'MME',
        Gender: 'female',
        email: 'trois_melaine@mail.com',
        telephone: '123456789',
        birthdate: '1981-07-27',
        AAAA: '1981',
        MM: '7',
        JJ: '27',
        departementDeNaissance: 123,
        codeCommune: '8',
        regionDeNaissance: '95277',
        codePaysDeNaissance: '99100',
        adresseFormatee: '120 BOULEVARD FRANÇOIS ROBERT 13016 MARSEILLE',
        createdAt: '2018-07-05T00:00:00.000Z',
        updatedAt: '2018-07-05T00:00:00.000Z',
      }];
      const expected = {
        address: {
          country: user[0].codePaysDeNaissance,
          formatted: user[0].adresseFormatee,
          street_address: user[0].adresseFormatee,
        },
        birthdate: user[0].birthdate,
        birthcountry: user[0].codePaysDeNaissance,
        birthregion: user[0].regionDeNaissance,
        email: user[0].email,
        family_name: user[0].nomDeNaissance,
        gender: user[0].Gender,
        given_name: user[0].prenom,
        middle_name: user[0].secondPrenom,
        name: `${user[0].nomDeNaissance} ${user[0].prenom}`,
        nickname: user[0].prenom,
        phone_number: user[0].telephone,
        preferred_username: `${user[0].prenom}_${user[0].nomDeNaissance}`,
        updated_at: user[0].updatedAt,
        siret: user[0].siret,
      };

      // Action
      const results = userDataCheck.checkMandatoryData(user);

      // Assert
      assert.deepEqual(expected, results);
    });
  });
});
