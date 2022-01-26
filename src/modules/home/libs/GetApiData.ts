const getApiData = (screenNumber: number): string => {
  switch (screenNumber) {
    case 1:
      return require('../../../constants/CONTENTLISTINGPAGE-PAGE1.json');
    case 2:
      return require('../../../constants/CONTENTLISTINGPAGE-PAGE2.json');
    case 3:
      return require('../../../constants/CONTENTLISTINGPAGE-PAGE3.json');
    default:
      return null;
  }
};

export default getApiData;
