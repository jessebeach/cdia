(function () {

var apf = {};

var chats = [
  {
    fname: 'Ash',
    lname: 'Wheeler',
    username: 'awheeler',
    unixtime: 1392474225178,
    message: 'Art is making something out of nothing and selling it.'
  },
  {
    fname: 'Sky',
    lname: 'Jordan',
    username: 'skyhook',
    unixtime: 1392474431751,
    message: 'All you need is love. But a little chocolate now and then doesn\'t hurt.'
  },
  {
    fname: 'Aiden',
    lname: 'Goodchild',
    username: 'wellroundedsoul',
    unixtime: 1392474502581,
    message: 'I liked things better when I didn\'t understand them.'
  }
];

apf.users = [
  'willfulintentions88',
  'crizayzay',
  'entrepreneur100',
  'k@tluver',
  'justdo$t',
  'traveler54',
  'samsamIam',
  'tuffenuff',
  'mayiaxeaquestion',
  'doubledribble3'
];

apf.injectMessages = function (anchor) {
  var count = 0;
  var timer;
  function injector () {
    clearTimeout(timer);
    if (count < chats.length) {
      var chat = getChat(count);
      /* @@@ We need to format these messages better and include the username @@@ */
      /* @@@ Just use a stock image for the avatar picture. @@@ */
      var div = document.createElement('div');
      div.innerText = chat.message;
      anchor.appendChild(div);
      /* @@@@@@ */
      count++;
      setUpInjection(injector, delay());
    }
  }

  function getChat (count) {
    return chats[count];
  }

  function delay () {
    return Math.floor(Math.random() * 10000);
  }

  function setUpInjection (injector, delay) {
    timer = window.setTimeout(injector, delay);
  }
  setUpInjection (injector, delay());
};

window.APF = apf;
}());

APF.injectMessages(document.getElementById('chat'));
