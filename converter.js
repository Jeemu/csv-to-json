const fs = require('fs')
const path = require('path')
const conv = require('csvtojson')
const csvSource = 'customer-data.csv'

conv()
.fromFile(csvSource)
.then((jsonObj) => {
  //console.log(jsonObj)
  let data = JSON.stringify(jsonObj, null, 2)
  fs.writeFile('customer-data.json', data, (err) => {
  if (err) throw err
  console.log('The file has been written!')
})
})
