// Code your solution here

function findMatching(drivers, string){
  return drivers.filter(e => {
    return e.toLowerCase() === string.toLowerCase()
  })
}

function fuzzyMatch(drivers, string){
  return drivers.filter(str => {
    return str[0].toLowerCase() === string.toLowerCase()
  })
}
