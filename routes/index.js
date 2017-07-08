var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/whoami', function(req, res, next) {
  res.json({ key: 'value' });
});

module.exports = router;
