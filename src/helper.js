export default class DistrictRepository {
  constructor(stats) {
    this.stats = this.cleanData(stats);
  }

  cleanData = (stats) => {
    return stats.reduce((cleanObj, district) => {
      if (!cleanObj[district.Location]) {
        cleanObj[district.Location] = {};
      }
      cleanObj[district.Location][district.TimeFrame] = district.Data;
      return cleanObj; 
    }, {});
  }
}
