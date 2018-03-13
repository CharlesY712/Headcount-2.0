export default class DistrictRepository {
  constructor(stats) {
    this.stats = this.cleanData(stats);
  }

  cleanData = (stats) => {
    return stats.reduce((cleanObj, district) => {
      if (!cleanObj[district.Location.toUpperCase()]) {
        cleanObj[district.Location.toUpperCase()] = {
          location: district.Location.toUpperCase(),
          data: {}
        };
      }
      cleanObj[district.Location.toUpperCase()].data[district.TimeFrame] = district.Data;
      return cleanObj; 
    }, {});
  }

  findByName = (name = '') => {
    let keys = Object.keys(this.stats)
    // console.log(this.stats)
     const match = keys.find(key => key === name.toUpperCase())
    //  console.log(match)
     return this.stats[match];
  }
}
