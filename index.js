const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
  };
  
const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
  };
  
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


const scuberDrivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

  const firstTwoDrivers = selectingDrivers[0](scuberDrivers);
  console.log(firstTwoDrivers);

  const lastTwoDrivers = selectingDrivers[1](scuberDrivers);
  console.log(lastTwoDrivers);

function createFareMultiplier(multiplier) {
      return function(fare) {
        return fare * multiplier;
      }
    }
  
  const fareMultiplier = createFareMultiplier(4);
  console.log(fareMultiplier(10)); 

  const fareDoubler = createFareMultiplier(2);
  console.log(fareDoubler(10));

  const fareTripler = createFareMultiplier(3);
  console.log(fareTripler(10));

  function selectDifferentDrivers(drivers, selectFunction) {
    return selectFunction(drivers);
  }

  const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

  console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers)); // Output: ['Antonia', 'Nuru']

  console.log(selectDifferentDrivers(drivers, returnLastTwoDrivers)); // Output: ['Amari', 'Mo']

