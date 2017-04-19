
const mongoose = require('mongoose'),
      uniqueValidator = require('mongoose-unique-validator'),
      Schema = mongoose.Schema,



      skillSchema = new Schema({
        name : {
          type : String,
          required : true,
          unique: true
        }
      });


const Skill = mongoose.model('Skill', skillSchema)

skillSchema.plugin(uniqueValidator, { message: 'Error, seharusnya {PATH} itu unique.' });
module.exports = Skill
