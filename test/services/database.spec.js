/* eslint-env mocha */
import path from 'path';
import { expect } from 'chai';
import { getFilePathList } from '../../src/services/database';

describe('data/Database', () => {
  describe('getFilePathList', () => {
    it('Should return an array', () => {
      // Given
      const paths = [__dirname, '../fixtures/data'];
      // When
      const result = getFilePathList(paths);
      // Then
      expect(Array.isArray(result)).to.equal(true);
    });
    it('Should return csv (and Only csv) files paths from fixture dir', () => {
      // Given
      const paths = [__dirname, '../fixtures/data'];
      const workdir = path.join(__dirname, '../fixtures/data');
      // When
      const result = getFilePathList(paths);
      // Then
      expect(result).to.deep.equal([`${workdir}/dataset1.csv`, `${workdir}/dataset2.csv`]);
    });
  });
});
