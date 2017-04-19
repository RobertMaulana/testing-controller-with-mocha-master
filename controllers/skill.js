const Skill = require('../models/skill')


module.exports = {
  create : function(req, res){
    Skill.create(req.body, (err, skill) => {
      if (err) res.json({success : false, msg : err.message})
      else
        res.json({success : true, msg : 'adding some skill'})
    })
  },
  delete: function(req, res){
    Skill.findByIdAndRemove(req.params.id)
    .exec((err, foods) => {
      if (err)
        res.json({success : false, msg : err})
      else
        res.json({success : true, msg : 'success for delete'})

    })
  },
  update : function(req, res){
    Skill.findByIdAndUpdate(req.params.id,{$set : req.body},{new : true})
      .exec(( err, foods ) => {
        if (err) res.json({success : false, data : null})
        res.json({success : true, data : foods})
      })
  },
  list : function(req, res) {
    Skill.find()
          .exec((err, data) => {
            if (err || data == null)
              res.json({success : false, data : null})
            else
              res.json({success : true, data : data})
          })
  }
}
