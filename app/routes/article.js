const express = require('express');
const slonik = require('../../config/dbslonik');
const router = express.Router();

const pool = slonik.getConnection();
const sql = slonik.sql;

//get article page
router.get('/:articleId', async (req, res) => {
  const articleId = req.params.articleId;
  const result = await pool.query(
    sql`SELECT * FROM article WHERE id = ${articleId}`
  );
  const article = result.rows[0];
  res.render('article', { article: article });
});

module.exports = router;
