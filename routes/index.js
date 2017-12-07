var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Bienvenue' });
});

router.get('/liste', function(req, res, next){
    res.render('listeEtudiants', {etudiants : ["WABO Arnold", "WAFO Harrold", "WANE Denis", "YEPMO Véronne"]});
});

module.exports = router;
