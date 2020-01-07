const express = require('express');
const router = express.Router();
const { Storyblok } = require('../middlewares/storyblok');

router.get('/', (req, res) => {
  Storyblok
    .get('cdn/stories/profiles', { version: 'published' })
    .then((response) => {
      res.render('profile-list', {
        profiles: response.data.story.content.body,
        timestamp: req.timestamp
      });
    })
    .catch((error) => {
      res.send(error);
    });

});

router.get('/:username', (req, res) => {
  const user = req.params.username;

  Storyblok
    .get(`cdn/stories/profiles/${user}`, { version: 'published' })
    .then((response) => {
      res.render('profile', {
        title: 'Profiles',
        user: response.data.story.content,
        timestamp: req.timestamp
      });
    })
    .catch((error) => {
      res.send('Profile not found');
    });
});

module.exports = router;