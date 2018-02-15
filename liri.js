var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var request = require('request');
var inquirer = require('inquirer');
var fs = require('fs');
var colors = require('colors');
// request('http://www.google.com', function (error, response, body) {
//   console.log('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.
// });


var APIKey = require("./keys.js");

var input = process.argv[2];

	switch(input) {
	case "my-tweets":
	getTweets();

	break;
	case "spotify-this-song":
	newUserSearch()
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
   
