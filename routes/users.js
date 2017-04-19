var express = require('express'),
    router = express.Router(),
    User = require('../controllers/user');

/* GET users listing. */
router

      .post('/', User.create)

      .get('/', User.list)

      .delete('/:id', User.delete)

      .put('/:id', User.update)


module.exports = router;
