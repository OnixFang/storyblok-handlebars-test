const express = require('express');
const router = express.Router();
const { Storyblok } = require('../middlewares/storyblok');

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
  Storyblok
    .get('cdn/stories/technologies', { version: 'published' })
    .then((response) => {
      res.render('technologies', {
        title: 'Technologies',
        story: response.data.story
      });
    })
    .catch((error) => {
      res.send(error);
    });
});

router.post('/site_search', (req, res) => {
  const searchTerm = req.body.searchterm;

  Storyblok
    .get(`cdn/stories?search_term=${searchTerm}`)
    .then((response) => {
      res.json(response.data.stories);
    })
    .catch((error) => {
      res.send(error);
    });
});

router.post('/', (req, res) => {
  const body = req.body;

  res.json(body);
});

module.exports = router;