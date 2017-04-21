const User = require('../models/user'),
      fs = require('fs'),
      data = JSON.parse(fs.readFileSync('data_dummy/user.json','utf-8'))
//

data.forEach(user => {
  User.create({
    name : user.name,
    skills : []},
   function (err, skill) {
    if (err) console.log(err);
    else
      console.log('yap')
  })
})



// User.findById("58e999893164c2100caa33c7", function (err, user) {
//
//
// user.name = 'ridho'
// console.log(user[0]);
//
// });
