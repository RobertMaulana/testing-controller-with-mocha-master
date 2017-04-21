const Skill = require('../models/skill'),
      fs = require('fs'),
      data = JSON.parse(fs.readFileSync("data_dummy/skill.json",'utf-8'));

data.forEach(skill => {
  Skill.create({
    name : 'test'
  }, function (err, skill) {
    if (err) console.log(err.message);
    else
      console.log('yesy')
  })
})
