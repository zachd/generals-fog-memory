var generals = {};
var cities = [];
var mountains = [];

function inGame(){
  return document.getElementById('game-leaderboard');
}

// Turn function
function turn(){
  var map = document.getElementById('map');

  // Search for generals
  for (gen of map.getElementsByClassName('general')){
    var color = gen.className.substr(0, gen.className.indexOf(' '));
    if(!generals[color])
      generals[color] = gen;
  }
  // Search for cities
  for (city of map.getElementsByClassName('city'))
    if(cities.indexOf(city) === -1)
      cities.push(city);
  // Search for mountains
  for (mtn of map.getElementsByClassName('mountain'))
    if(mountains.indexOf(mtn) === -1)
      mountains.push(mtn);

  // Show generals
  for (col of Object.keys(generals)){
    var gen = generals[col];
    if (!gen.className.includes("general") 
        && !gen.className.includes("city") 
        && cities.indexOf(gen) === -1)
      gen.className += " general " + col;
  }
  // Show cities
  for (city of cities)
    if (!city.className.includes("city"))
      city.className = city.className.replace('obstacle', 'city');
  // Show mountains
  for (mtn of mountains)
    if (!mtn.className.includes("mountain"))
      mtn.className = mtn.className.replace('obstacle', 'mountain');
}

turnInterval = setInterval(function() {
  if (inGame())
    turn();
  else {
    generals = {};
    cities = [];
    mountains = [];
  }
}, 500);
