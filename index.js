// Code your solution in this file

function findMatching(drivers, name){
  const driverName = name.toLowerCase();
  const matches = drivers.filter(function(driver){
    return driver.toLowerCase() === driverName;
  });
}

function fuzzyMatch(){

}

function matchName(){

}
