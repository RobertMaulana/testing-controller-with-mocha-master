
require('../config/mongo')
const mongoose = require('mongoose'),
      uniqueValidator = require('mongoose-unique-validator'),
      Schema = mongoose.Schema,
      captainHook  = require('captain-hook'),

      userSchema = new Schema({
        name : {
            type : String,
            required : true
        },
        email : {
          type : String,
          default : '',
          unique : true
        }

      });





userSchema.plugin(captainHook);

const User = mongoose.model('User', userSchema)





// userSchema.plugin(uniqueValidator);
module.exports = User
