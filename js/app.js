var title = "Birds Collection";

function Bird(name, species, gender, img) {
  this.name = name;
  this.species = species;
  this.gender = gender;
  this.img = img;
}

var b1 = new Bird('Donald', 'Malard', 'male', 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Anas_platyrhynchos_male_female_quadrat.jpg/440px-Anas_platyrhynchos_male_female_quadrat.jpg')
var b2 = new Bird('Huey', 'Blue Jay', 'female', 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSQSuV-sKmH9NtmTdYdGUZm4yhEgekNaE0R6s8um7KR-trqxl4D');
var b3 = new Bird('Cornelius', 'Owl', 'male', 'https://download.ams.birds.cornell.edu/api/v1/asset/28488511/large');
var b4 = new Bird('Reginold', 'Parrot', 'male', 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQFT9pUBAkid56nIOntHsX3SFvYnlh7u44ft-BC_Z4Kb19JfHjoQg');
var b5 = new Bird('Tiffany', 'Bald Eagle', 'female', 'http://kids.nationalgeographic.com/content/dam/kids/photos/animals/Birds/A-G/bald-eagle-closeup.adapt.352.1.jpg');
var b6 = new Bird('Craig', 'Cardinal', 'male', 'https://3c1703fe8d.site.internapcdn.net/newman/csz/news/800/2016/highwaynoise.jpg');

var birds = [b1, b2, b3, b4, b5, b6];

var app = new Vue({
  'el': '#app',
  'data': {
    title: title,
    birds: birds
  }
})
