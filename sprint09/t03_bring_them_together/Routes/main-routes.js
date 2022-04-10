const express = require('express');
const { mainPost, loginGet, loginGetStyle, loginPost, checkPost, logoutPost, mainGet } = require('../Controllers/loginController');
const { passwordPost, passwordGet, passwordGetStyle } = require('../Controllers/passwordController');
const { registrationGet, registrationPost, registrationGetStyle } =  require('../Controllers/registerController');

const jsonParser = express.json();
const router = express.Router();

router.post('/reg', jsonParser ,registrationPost);
router.get('/reg', registrationGet);
router.get('/style.css', registrationGetStyle);

router.post('/', jsonParser ,mainPost);
router.post('/login', jsonParser, loginPost);
router.post('/check', jsonParser, checkPost);
router.post('/logout', jsonParser, logoutPost);
router.get('/', mainGet);
router.get('/login', loginGet);
router.get('/style.css', loginGetStyle);

router.post('/password', jsonParser, passwordPost);
router.get('/password', passwordGet);
router.get('/style.css', passwordGetStyle);


module.exports = router;