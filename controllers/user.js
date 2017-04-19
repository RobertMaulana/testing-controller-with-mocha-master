const User = require('../models/user')

require('../models/skill')
module.exports = {
  create : function(req, res){
    User.create({
      name : req.body.name,
      email : req.body.email},
     function (err, user) {
      if (err) res.json({success : false, msg : err.message, user : null})
      else
         res.json({success : true, msg : 'success for adding user', user : user})
    })
  },
  delete: function(req, res){
    User.findByIdAndRemove(req.params.id)
    .exec((err, user) => {
      if (err)
        res.json({success : false, msg : err})
      else
        res.json({success : true, msg : 'success for delete user'})
    })
  },
  update : function(req, res){
    User.findByIdAndUpdate(req.params.id,{$set : req.body},{new : true})
      .exec(( err, user ) => {
        if (err) res.json({success : false, data : null})

        res.json({success : true, data : user})
      })
  },

  list : function(req, res){
    User.find()
        .exec((err,data) => {
          if (err || data == null)
            res.json({success : false, data : null, msg : 'data is empty'})
          else
            res.json({success : true, data : data, msg : 'list is showing'})
        })
  }
}
