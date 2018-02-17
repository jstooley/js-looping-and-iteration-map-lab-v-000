function lowerCaseDrivers(drivers){
  const lowerDrivers = drivers.map( driver => driver.toLowerCase());
  return lowerDrivers;
};

ffunction nameToAttributes(drivers) {
    return drivers.map(function (driver) {
        const first = driver.split(' ')[0];
        const last = driver.split(' ')[1];

        return {firstName: first, lastName: last};
    });


function attributesToPhrase(){};
