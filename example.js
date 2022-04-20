// var gplay = require('google-play-scraper');

// gplay.app({appId: 'com.google.android.apps.translate'})
//   .then(console.log, console.log);


// var gplay = require('google-play-scraper');

// gplay.list({
//     category: gplay.category.GAME_ACTION,
//     collection: gplay.collection.TOP_FREE,
//     num: 2
//   })
//   .then(console.log, console.log);


var gplay = require('google-play-scraper');

gplay.search({
    term: "sports tak",
    num: 2
  }).then(console.log, console.log);


// var gplay = require('google-play-scraper');

// gplay.suggest({term: 'panda'}).then(console.log);
