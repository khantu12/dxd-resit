const getTopCarsForToday = (): string[] => {
  fetch(
    'https://www.cars.bg/carslist.php?subm=1&add_search=1&typeoffer=1&brandId=86&models%5B%5D=1469&last=1&priceFrom=6000&priceTo=10000&conditions%5B%5D=4&conditions%5B%5D=1',
    {
      mode: 'no-cors',
    },
  )
    .then(console.log);

  return [''];
};

export default getTopCarsForToday;
