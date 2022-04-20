var gplay = require('google-play-scraper');

// This example will return 3000 reviews
// on a single call
var var2;

var2=gplay.reviews({
  appId: 'com.sportstoday',
  sort: gplay.sort.RATING,
  num: 1
}).then(console.log, console.log);

// var personObject = JSON.parse(var2);
// for(var myKey in var2){
//   console.log("key:"+myKey+",Title:"+var2[myKey]);
//   console.log(8);
// }
// var2.getString("text");
// return var2;

// gplay.reviews({
//   appId: 'com.mojang.minecraftpe',
//   sort: gplay.sort.RATING,
//   paginate: true,
//   nextPaginationToken: null // you can omit this parameter
// }).then(console.log, console.log);

// This example will return 150 reviews paginated
// for the next page (next page is the token return by the previous call)
// you will receive a nextPaginationToken parameter in your response
// gplay.reviews({
//   appId: 'com.mojang.minecraftpe',
//   sort: gplay.sort.RATING,
//   paginate: true,
//   nextPaginationToken: 'TOKEN_FROM_THE_PREVIOUS_REQUEST' // you can omit this parameter
// }).then(console.log, console.log);