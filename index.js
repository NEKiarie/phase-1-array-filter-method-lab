// Code your solution here

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
function findMatching(drivers, name){
    return drivers.filter(driver => driver. toLowerCase() === name.toLowerCase())
}
 


 function fuzzyMatch(drivers, b){
    return drivers.filter(driver => driver.toLowerCase().substring(0, b.length) === b.toLowerCase())
 }

 function matchName(drivers, name){
    return drivers.filter(driver => driver.name === name)
 }
    