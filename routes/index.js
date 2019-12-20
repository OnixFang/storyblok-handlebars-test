const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('home', {
    title: 'Home'
  });
});

router.get('/about', (req, res) => {
  res.render('about', {
    title: 'About',
    work: 'Yes I works'
  });
});

router.get('/technologies', (req, res) => {
  res.render('technologies', {
    title: 'Technologies'
  });
});

router.post('/', (req, res) => {
  const body = req.body;

  res.json(body);
});

module.exports = router;