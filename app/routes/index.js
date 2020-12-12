const express = require('express');
const router = express.Router();
const slonik = require('slonik');

const pool = slonik.createPool('postgresql://scott:scott@localhost:5432/scottdb')

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'Express' });
});

router.post('/', (req, res) => {
  console.log(req.body);
  const post = req.body;
  pool.query(slonik.sql`INSERT INTO post (title, content) VALUES (${post.title}, ${post.content})`)
  res.redirect('/');
})
module.exports = router;
