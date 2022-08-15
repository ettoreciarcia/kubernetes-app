var express = require('express');
var router = express.Router();
const pki = require('node-forge').pki
const os = require('os');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'kubernetes-app' });
});

/* Crash application */
router.get('/crash', function (req, res, next) {
  console.log(new Error('Requested crash by endpoint /crash'))
  process.exit(1)
})

/* CPU intensive fucntion generate CPU spikes */
router.get('/generatecert', function (req, res, next) {
  const keys = pki.rsa.generateKeyPair(2048)
  const cert = pki.createCertificate()
  cert.publicKey = keys.publicKey
  res.send({
    keys: keys,
    cert: cert
  })
})

/* Get local addredd on which pods/server is running */

router.get('/networkInfo', function(req,res,next){
  res.send({
    hostname: os.hostname(),
    // platform: os.platform(),
    IP: os.networkInterfaces(),
    // load: os.loadavg()
  })
})

module.exports = router;
