express = require('express');
app = require('../../index');

var router = new express.Router();

router.use(function (req, res, next) {
	next();
});

router.get('/', function (req, res) {
  res.send('Cat');
});

module.exports = router;