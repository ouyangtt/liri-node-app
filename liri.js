var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var request = require('request');
var inquirer = require('inquirer');
var fs = require('fs');
var colors = require('colors');
request('http://www.google.com', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});

var APIKey = require("./keys.js");


var input = process.argv[2];

	switch(input) {
	case my-tweets:
	getData()
	break;
	case spotify-this-song:
	newUserSearch()
	break;
	case movie-this:
	break;
	case do-what-it-says:
	break;
	default:
	block;
	}
