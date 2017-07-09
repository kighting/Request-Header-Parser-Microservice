var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/whoami', function(req, res) {
  console.log(res);
  var ip = req.socket.remoteAddress.replace(/^[\s\S]*:/, "");
  //host = request.host //If just wanna show localhost
  var language = req.headers['accept-language'].replace(/,[\s\S]*$/, "");
  var userAgent = req.headers['user-agent'].match(/\(([^)]+)\)/);
  res.json({ 
      "ip address": ip,
      "language": language,
      "operating system": userAgent[0].replace(/[\(\)]/g, "")
  });
});

module.exports = router;
