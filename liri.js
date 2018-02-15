var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var request = require('request');
var inquirer = require('inquirer');
var fs = require('fs');

var APIKey = require("./keys.js");


var inputs = process.argv.slice(2);
var roleInput = inputs[0];
var dataInput = inputs[1];

	switch(roleInput) {
	case "my-tweets":
		getTweets();
	break;
	case "spotify-this-song":
			for (i = 2; i < inputs.length; i++) {
				dataInput = dataInput + " " + inputs[i];
			}
		getSongs();
	break;
	case "movie-this":
			for (i = 2; i < inputs.length; i++) {
			dataInput = dataInput + " " + inputs[i];
			}
		getMovies();
	break;
	case "do-what-it-says":
		doFun();
	break;
	}


 function getTweets() {

       var client = new Twitter({
            consumer_key: APIKey.consumer_key,
            consumer_secret: APIKey.consumer_secret,
            access_token_key: APIKey.access_token_key,
            access_token_secret: APIKey.access_token_secret
        });

// HW require 20 tweets. Just change the count to 20... I don't have that much tweets in my personal twitter
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


	function getMovies() {

    if (!dataInput) {
			dataInput = "mr nobody";
		}

request("http://www.omdbapi.com/?t=" + dataInput + "&y=&plot=short&apikey=40e9cece", function(error, response, body) {

    if (!error && response.statusCode === 200) {

	    console.log("dataInput:" + dataInput);
        console.log("Title: " + JSON.parse(body).Title);
        console.log("Year: " + JSON.parse(body).Year);
        console.log("Rating: " + JSON.parse(body).imdbRating);
        console.log("Rotten Tomatoes rating: " + JSON.parse(body).Ratings[1].Value);
        console.log("Country: " + JSON.parse(body).Country);
        console.log("Language: " + JSON.parse(body).Language);
        console.log("Plot: " + JSON.parse(body).Plot);
        console.log("Actors: " + JSON.parse(body).Actors);

    }
});

	};
            

     function doFun() {
 			fs.readFile("random.txt", 'utf8', function(error, text) {
                if (error) {
                    console.log(error);
                    return;
                }
                var split = text.split(",");
                roleInput = split[0];
                dataInput = split[1];
                getSongs();
            });
    };




     