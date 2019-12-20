const express = require('express');
const router = express.Router();

const profiles = [
  {
    username: "onixfang",
    age: 25,
    languages: ['JavaScript', 'C#']
  },
  {
    username: "bizantron",
    age: 26,
    languages: ['JavaScript', 'C#']
  },
  {
    username: "bearcub",
    age: 26,
    languages: ['JavaScript', 'C#']
  }
];

router.get('/:username', (req, res) => {
  const user = profiles.find((element) => {
    return element.username == req.params.username;
  });

  if (user) {
    res.render('profile', {
      title: 'Profiles',
      user
    });
  } else {
    res.send('Profile not found');
  }
});

module.exports = router;