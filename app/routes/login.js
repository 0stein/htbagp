const express = require('express');
const router = express.Router();

//get login page
router.get('/', (req, res) => {
  res.render('login');
});

router.post('/', (req, res) => {
  const loginInfo = req.body;
  console.log(loginInfo);
  res.redirect('/list');
});
module.exports = router;
