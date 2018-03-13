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
      Math.round((district.Data) * 1000)/1000 || 0;
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
      return Object.keys(this.stats);
    }
  }
}
