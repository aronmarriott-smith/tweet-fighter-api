#!/usr/bin/env node
require('dotenv').config({path: __dirname + '/../.env'});
var TP = require(__dirname + '/../server/TweetParser.js');
var Challengers = require(__dirname + '/../server/models/').challengers;

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
	let TweetPraser = new TP;
	let results = TweetPraser.parse(tweet.text);
    
    Challengers.create({
        handle: tweet.user.screen_name,
        profile_image: tweet.user.profile_image_url,
        profile_image_https: tweet.user.profile_image_url_https,
        text: tweet.text,
        battle_cry: results.battle_cry,
        moves: results.moves_string
    });
}