var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello from app js!'
  }
});

var ts = [
  { text: 'Learn JavaScript' },
  { text: 'Learn Vue' },
  { text: 'Build something awesome' }
];

var app2 = new Vue({
  el: '#app2',
  data: {
    todos: ts,
    numbers: [1, 4, 5, 7, 8, 10]
  }
});

var fishies = [
  { type: "halibut", ocean: "pacific" },
  { type: "atlantic salmon", ocean: "atlantic" },
  { type: "blue tuna", ocean: "indian" },
  { type: "puffer fish", ocean: "caribbean" },
  { type: "clown fish", ocean: "caribbean" },
  { type: "squid", ocean: "pacific" },
  { type: "king fish", ocean: "atlantic" },
  { type: "blue tang", ocean: "pacific" },
  { type: "red fish", ocean: "indian" },
  { type: "blue fish", ocean: "atlantic" },
  { type: "one fish", ocean: "arctic" },
];

var pacificFish = [];
for (var i = 0; i < fishies.length; i++) {
  if(fishies[i].ocean === "pacific"){
    pacificFish.push(fishies[i]);
  }
};

var caribbeanFish = fishies.filter(function( fish ){
  return fish.ocean === "caribbean";
});


var app3 = new Vue({
  el: '#app3',
  data: {
    fishies: fishies,
    pacificFish: pacificFish,
    caribbeanFish: caribbeanFish,
  }
});
