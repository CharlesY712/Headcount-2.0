export default class DistrictRepository {
  constructor(stats) {
    this.stats = this.cleanData(stats);
  }

  cleanData = (stats) => {
    return stats.reduce((cleanObj, district) => {
      const upperCaseLocation = district.Location.toUpperCase();

      if (!cleanObj[upperCaseLocation]) {
        cleanObj[upperCaseLocation] = {
          location: upperCaseLocation,
          stats: {}
        };
      }
      cleanObj[upperCaseLocation].stats[district.TimeFrame] = 
      Math.round((district.Data) * 1000) / 1000 || 0;
      return cleanObj; 
    }, {});
  }

  findByName = (name) => {
    if (name) {
      const upperCaseName = name.toUpperCase();
      let districts = Object.keys(this.stats);
      const location = districts.find(district => district === upperCaseName);

      return this.stats[location];
    }
  }

  findAllMatches = (name) => {
    if (name) {
      const upperCaseName = name.toUpperCase();
      let districts = Object.keys(this.stats);
      const filteredLocations = 
      districts.filter(district => district.includes(upperCaseName));
      
      return filteredLocations.map(location => this.stats[location]);
    } else {
      const locations = Object.keys(this.stats);
      const districts = locations.map((district) => {
        return this.stats[district];
      });
      return districts;
    }
  }

  findAverage = (name) => {
    const districtFound = this.findByName(name);
    const districtKeys = Object.values(districtFound.stats);
    const returnedAverage = districtKeys.reduce((average, percent) => {
      return average += percent;
    }, 0) / districtKeys.length;
    return Math.round(returnedAverage * 1000) / 1000;
  }

  compareDistrictAverages = (name1, name2) => {
    const average1 = this.findAverage(name1);
    const average2 = this.findAverage(name2);
    const compare = Math.round(average1 / average2 * 1000) / 1000;

    const comparedStats = {
      [name1.toUpperCase()]: average1,
      [name2.toUpperCase()]: average2,
      'compared': compare
    };
    return comparedStats;
  }
}
