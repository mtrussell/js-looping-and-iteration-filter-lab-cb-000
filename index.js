// Code your solution in this file

function findMatching(drivers, name){
  const driverName = name.toLowerCase();
  const matches = drivers.filter(function(driver){
    return driver.toLowerCase() === driverName;
  });
  return matches;
}

function fuzzyMatch(drivers, name){
  const matches = drivers.filter(function(driver){
    
  });
  return matches;
}

function matchName(){

}
