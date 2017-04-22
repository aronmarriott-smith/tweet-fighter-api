const all_moves = {
  'LS': {
    'description': 'a limp-wristed slap',
    'type': 'attack',
    'power': 10,
    'hidden': false
  },
  'AB': {
    'description': 'a hive of angry bees',
    'type': 'attack',
    'power': rand(30, 50),
    'hidden': true
  },
  'FB': {
    'description': 'a flying headbutt',
    'type': 'attack',
    'power': rand(30, 50),
    'hidden': false
  },
  'TI': {
    'description': 'an army of tomohawk indians at their back',
    'type': 'attack',
    'power': rand(40, 60),
    'hidden': true
  },
  'LK': {
    'description': 'a low kick',
    'type': 'attack',
    'power': rand(30, 40),
    'hidden': false
  },
  'HK': {
    'description': 'a high kick',
    'type': 'attack',
    'power': rand(50, 60),
    'hidden': false
  },
  'DJ': {
    'description': 'a double jab',
    'type': 'attack',
    'power': rand(60, 70),
    'hidden': false
  },
  'KC': {
    'description': 'a karate chop',
    'type': 'attack',
    'power': rand(30, 40),
    'hidden': false
  },
  'BS': {
    'description': 'a ball slap',
    'type': 'attack',
    'power': rand(60, 70),
    'hidden': true
  },
  'SE': {
    'description': 'a swift elbow',
    'type': 'attack',
    'power': rand(30, 40),
    'hidden': false
  },
  'TF': {
    'description': 'a flick from a wet towel',
    'type': 'attack',
    'power': rand(20, 30),
    'hidden': true
  },
  'MJ': {
    'description': 'dancing a merry jig',
    'type': 'defence',
    'power': 10,
    'hidden': false
  },
  'BR': {
    'description': 'hiding behind a very big rock',
    'type': 'defence',
    'power': rand(20, 30),
    'hidden': false
  },
  'KF': {
    'description': 'lifting their kilt and flashing their glory',
    'type': 'defence',
    'power': rand(30, 40),
    'hidden': true
  },
  'CT': {
    'description': 'climbing inside a Challenger II Tank',
    'type': 'defence',
    'power': rand(50, 60),
    'hidden': true
  },
  'RG': {
    'description': 'raising their guard',
    'type': 'defence',
    'power': rand(20, 30),
    'hidden': false
  },
  'CL': {
    'description': 'crouching low',
    'type': 'defence',
    'power': rand(10, 20),
    'hidden': false
  },
  'CA': {
    'description': 'using Captain America\'s shield',
    'type': 'defence',
    'power': rand(50, 60),
    'hidden': true
  },
  'CE': {
    'description': 'closing their eyes',
    'type': 'defence',
    'power': rand(10, 20),
    'hidden': false
  },
  'CM': {
    'description': 'calling mum',
    'type': 'defence',
    'power': rand(60, 70),
    'hidden': true
  },
  'SP': {
    'description': 'pooing their pants',
    'type': 'defence',
    'power': rand(50, 60),
    'hidden': true
  }
};
const moves_index = Object.keys(all_moves);
const twitter_handel = "@twitterhandel"; // TODO replace with value from config
const twitter_handel_len = twitter_handel.length;

function rand(min, max) {
  min = Math.ceil(min);
  
  return Math.floor(Math.random() * (Math.floor(max) - min)) + min;
}

class TweetParser {
  parse(tweet) {
    let start = tweet.indexOf(twitter_handel);
    let move_string = tweet.substr(start + twitter_handel_len + 1, 12);
    let moves = move_string.toUpperCase().match(/.{1,2}/g);
    let battle_cry = tweet.substr(tweet.indexOf(move_string) + move_string.length);

    let move_data = [];
    let total_score = 0;

    for (let i = 0, moves_len = moves.length; i < moves_len; i++) {
      if (moves_index.indexOf(moves[i]) !== -1) {
        move_data.push(all_moves[moves[i]]);
        total_score += (all_moves[moves[i]].power);
      }
    }

    return {
      'moves_string': move_string,
      'original_moves': moves,
      'moves': move_data,
      'battle_cry': battle_cry,
      'score': total_score
    };
  }
}
module.exports = TweetParser;