var Twit = require('twit');
var tokens = require('./node_modules/tokens');

var T = new Twit(tokens);

var topics = {
  q: 'Trump',
  count: 5
};


T.get('search/tweets', topics , getData);


function getData(err, data, response){
  console.log(data);
};

var status = {
  status: 'Hello! first tweet from tweetbot'
};
 
T.post('statuses/update', status, printData);

function printData(err, data, response){
  console.log(data);
};
