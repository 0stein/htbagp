const express = require('express');
const slonik = require('../../config/dbslonik');
const router = express.Router();

const pool = slonik.getConnection();
const sql = slonik.sql;

/* GET home page. */
router.get('/', async (req, res) => {
  const result = await pool.query(sql`SELECT id, title FROM article`);
  const rows = result.rows;
  console.log(rows);
  res.render('index', { title: 'Express', rows });
});

router.post('/', async (req, res) => {
  const article = req.body;
  await pool.query(
    sql`INSERT INTO article (title, content) VALUES (${article.title}, ${article.content})`
  );
  res.redirect('/list');
});

module.exports = router;
