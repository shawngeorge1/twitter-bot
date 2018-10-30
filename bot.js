console.log('bot is running');
var Twit = require('twit');

//authentication
var mod = require('./config');

//twitter instance
var T = new Twit(mod);
//reddit instance
var reddit = require('redditor');

tweet();
setInterval(tweet, 1000*60*60);


function tweet(){
    reddit.get('/r/Showerthoughts/new/.json', function(err, response) {
        if(err) throw err;
        var data = response.data.children;
        var tweet = {
            status: data[1].data.title,
        }
        function tweeted(err, data, response){};
        T.post('statuses/update', tweet, tweeted);
    });
}
