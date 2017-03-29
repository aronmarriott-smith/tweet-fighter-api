#!/usr/bin/env node
require('dotenv').config({path: __dirname + '.env'});
var Twit = require('twit');
var request = require('request');
var keywords = [];

// Streaming is in real-time so we need to poll the twitter search API
var T = new Twit({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

var stream = T.stream('statuses/filter', { track: keywords });

stream.on('tweet', function (tweet) {
    if (typeof tweet !== 'object') {
        return;
    }
    console.log('@' + tweet.user.screen_name + ': ' + tweet.text + "\n " + tweet.created_at + "\n");

    // @todo process and store the Tweet
});