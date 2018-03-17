import DistrictRepository from '../../helper.js';
import kinderData from '../../data/kindergartners_in_full_day_program.js';

describe('findAllMatches', () =>  {
  const district = new DistrictRepository(kinderData);

  test('it defaults to returning all data in an array', () => {
    expect(district.findAllMatches().length).toBe(181);
  });

  test('it returns matches in an array, case insensitive', () => {
    expect(district.findAllMatches('ColoRado').length).toBe(2);
  });

  test('it returns an empty array when arguments dont exist within the data',
    () => {
      expect(district.findAllMatches('al;dkfjas;dlkjasdfl;').length).toBe(0);
      expect(district.findAllMatches('packers').length).toBe(0);
      expect(district.findAllMatches('df').length).toBe(0);
    });

});
