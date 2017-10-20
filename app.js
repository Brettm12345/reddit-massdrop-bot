'use strict';

var Snooper = require('reddit-snooper');
snooper = new Snooper({
  // credential information is not needed for snooper.watcher
  username: 'reddit_username',
  password: 'reddit password',
  app_id: 'reddit api app id',
  api_secret: 'reddit api secret',
  user_agent: 'OPTIONAL user agent for your bot',

  automatic_retries: true, // automatically handles condition when reddit says 'you are doing this too much'
  api_requests_per_minuite: 60, // api requests will be spread out in order to play nicely with Reddit
});

var Snooper = require('reddit-snooper'),
  snooper = new Snooper(credentials);

snooper.watcher
  .getCommentWatcher('mechanicalkeyboards')
  .on('comment', function(comment) {
    // only reply if the comment contains a factorial
    let match = comment.data.body.match(
      'http://(www.)?massdrop.com(?!.*mode=guest_open.*)'
    );
    if (match) {
      snooper.api.post('/api/comment', {
        apt_type: 'json',
        text:
          "Here's a guest view link that you can view without signing in: " +
          match[0] +
          '?mode=guest_open',
        thing_id: commend.data.name,
      });
    }
  })
  .on('error', console.error);
