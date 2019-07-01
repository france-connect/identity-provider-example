/* eslint-env mocha */
import path from 'path';
import { expect } from 'chai';
import { getFilesPathsFromDir } from '../../src/services/database';

describe('data/Database', () => {
  describe('getFilesPathsFromDir', () => {
    it('Should return an array', () => {
      // Given
      const workdir = path.join(__dirname, '../fixtures/data');
      // When
      const result = getFilesPathsFromDir(workdir);
      // Then
      expect(Array.isArray(result)).to.equal(true);
    });
    it('Should return csv (and Only csv) files paths from fixture dir', () => {
      // Given
      const workdir = path.join(__dirname, '../fixtures/data');
      // When
      const result = getFilesPathsFromDir(workdir);
      // Then
      expect(result).to.deep.equal([`${workdir}/dataset1.csv`, `${workdir}/dataset2.csv`]);
    });
  });
});
