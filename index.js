// Code your solution in this file

function findMatching(drivers, name){
  const driverName = name.toLowerCase();
  const matches = drivers.filter(driver, function(){
    return driver.toLowerCase() === driverName;
  });
  return matches;
}

function fuzzyMatch(){

}

function matchName(){

}
