#!/usr/bin/env node
require('dotenv').config({path: __dirname + '/.env'});
var TP = require('./server/TweetParser.js');

var Twit = require('twit');
var request = require('request');
var keywords = ['lazer']; // TODO replace with value from config

// Streaming is in real-time so we need to poll the twitter search API
var T = new Twit({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

var stream = T.stream('statuses/filter', { track: keywords });

stream.on('tweet', processTweet);

function processTweet(tweet) {
    if (typeof tweet !== 'object') {
        return;
    }
    // console.log('@' + tweet.user.screen_name + ': ' + tweet.text + "\n " + tweet.created_at + "\n");
	let TweetPraser = new TP;
	let results = TweetPraser.parse(tweet.text);

	// TODO now we have some data sitck it somewhere
    console.log(results);
}