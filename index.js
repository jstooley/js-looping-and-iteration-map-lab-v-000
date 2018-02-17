function lowerCaseDrivers(drivers){
  return lowerDrivers = drivers.map( driver => driver.toLowerCase());

};

function nameToAttributes(drivers) {
    return drivers.map( driver => {
        const first = driver.split(' ')[0];
        const last = driver.split(' ')[1];

        {firstName: first, lastName: last};
    });
}

function attributesToPhrase(){};
