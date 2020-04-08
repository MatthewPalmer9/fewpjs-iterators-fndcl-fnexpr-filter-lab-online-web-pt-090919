// Code your solution here

function findMatch(drivers, string){
  return drivers.filter(e => {
    return e.toLowerCase() == string.toLowerCase()
  })
}
