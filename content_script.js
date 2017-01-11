var generals = {};
var cities = [];

// Check if in game
function inGame(){
  return document.getElementById('game-leaderboard');
}

// Turn function
function turn(){
  var map = document.getElementById('map');

  // Search for generals
  var found_gen = map.getElementsByClassName('general');
  for (gen of found_gen){
    var color = gen.className.substr(0, gen.className.indexOf(' '));
    if(!generals[color])
      generals[color] = gen;
  }

  // Search for cities
  var found_city = map.getElementsByClassName('city');
  for (city of found_city){
    var color = city.className.substr(0, city.className.indexOf(' '));
    if(cities.indexOf(city) === -1)
      cities.push(city);
  }

  // Show generals
  for (col of Object.keys(generals)){
    var gen = generals[col];
    if (!gen.className.includes("general") 
        && !gen.className.includes("city") 
        && cities.indexOf(gen) === -1)
      gen.className += " general " + col;
  }

  // Show cities
  for (city of cities){
    if (!city.className.includes("city"))
      city.className = city.className.replace('obstacle', 'city');
  }

}

turnInterval = setInterval(function() {
  if (inGame())
    turn();
}, 500);
