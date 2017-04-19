var express = require('express'),
    router = express.Router(),
    Skill = require('../controllers/skill');

/* GET users listing. */
router

      .post('/', Skill.create)

      .get('/', Skill.list)



module.exports = router;
