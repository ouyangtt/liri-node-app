var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
// var spotify = require('spotify');
var request = require('request');
var inquirer = require('inquirer');
var fs = require('fs');
var colors = require('colors');



var APIKey = require("./keys.js");


var inputs = process.argv.slice(2);
var roleInput = inputs[0];
var dataInput = inputs[1];


	switch(roleInput) {
	case "my-tweets":
	getTweets();
	break;
	case "spotify-this-song":
	for (i=2; i<inputs.length;i++) {
		dataInput = dataInput + " " + inputs[i];
	}
	getSongs();
	break;
	case "movie-this":
	break;
	case "do-what-it-says":
	break;
	default:
	block;
	}


 function getTweets() {

       var client = new Twitter({
            consumer_key: APIKey.consumer_key,
            consumer_secret: APIKey.consumer_secret,
            access_token_key: APIKey.access_token_key,
            access_token_secret: APIKey.access_token_secret
        });

// HW require 20 tweets. Just change the count to 20... I don't have that much tweets
        var params = { ouyangtt: 'nodejs', count: 10 };
        client.get('statuses/user_timeline', params, function(error, tweets, response) {
                if (!error) {
                    for (var i = 0; i < tweets.length; i++) {
                        console.log(tweets[i].created_at);
                        console.log(tweets[i].text);
                        console.log('');
                    }
                } 
                else {
                    console.log(error);
                }
            });

 		};

 function getSongs() {

var spotify = new Spotify({
  id: "91895b2c34454f0f89a8a98de25b8505",
  secret: "e0ff58385a4c4dc191a40829ac2b9b91"
});
 

if (!dataInput) {
	dataInput = "The Sign";
}

console.log("dataInput:" + dataInput);
 
spotify.search({ type: 'track', query: dataInput }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }

                    console.log('Artist Name: '+data.tracks.items[0].artists[0].name+'\n');
                    console.log('Song Name: '+data.tracks.items[0].name+'\n');
                    console.log('Spotify URL: '+data.tracks.items[0].artists[0].external_urls.spotify+'\n');
                    console.log('Album Name: '+data.tracks.items[0].album.name+'\n');

     
  
});
};
            // spotify.search({ type: 'track', query: dataInput }, function(err, results) {
            //     // if there is an error console log it
            //     if ( err ) {
            //         console.log('Error occurred: ' + err);
            //         console.log('Error: '+err+'\n');
            //         return;
            //     }
            //     // if there are results
            //     console.log(results.tracks);

                // if (results.tracks.items[0].artists[0].name) {
                //     // tell the user the results
                //     console.log('Artist Name: '+results.tracks.items[0].artists[0].name);
                //     console.log('Song Name: '+results.tracks.items[0].name);
                //     console.log('Spotify URL: '+results.tracks.items[0].artists[0].external_urls.spotify);
                //     console.log('Album Name: '+results.tracks.items[0].album.name);
                //     console.log('Artist Name: '+results.tracks.items[0].artists[0].name+'\n');
                //     console.log('Song Name: '+results.tracks.items[0].name+'\n');
                //     console.log('Spotify URL: '+results.tracks.items[0].artists[0].external_urls.spotify+'\n');
                //     console.log('Album Name: '+results.tracks.items[0].album.name+'\n');
                
                // // if there are no results
                // } else {
                //     // tell the user to choose a new song
                //     console.log('We did not find any results for that song.');
                //     console.log('We did not find any results for that song.\n');
                // } 
 //            });

 // };
   
