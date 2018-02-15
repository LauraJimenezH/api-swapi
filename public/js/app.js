getFetch();

var container = document.getElementById('content');
var modalContent = document.getElementById('modal-title');
var img = document.getElementById('imgg');

function getFetch() {
  for (let i = 1; i < 89; i++) {
    const url = `https://swapi.co/api/people/${i}/`;


    fetch(url)
      .then((resp) => resp.json())
      .then(function(data) {
        if (i === 17) {
          return i = 18;
        }
        console.log(data);
        const characters = `<div class="card" data-url="https://starwars-visualguide.com/assets/img/characters/${i}.jpg" data-name="${data.name}" data-gender = "${data.gender}" data-homeworld = "${data.homeWorld}" data-height = "${data.height}" data-mass = "${data.mass}" data-bd = "${data.birth_year}" data-eye = "${data.eye_color}" data-hair = "${data.hair_color}" data-skin = "${data.skin_color}">
        <img id="imgg" class="card-img-top img-characters" data-toggle="modal" data-target="#MyModal" src="https://starwars-visualguide.com/assets/img/characters/${i}.jpg" alt="${data.name}">
        <div class="card-body">
          <h5 class="card-title weight text-center">${data.name}</h5>
        </div>
      </div>`;
       
        container.innerHTML += characters;
      })
      .catch(function(error) {
        console.log(JSON.stringify(`Error ${error}`));
      });
  }
}

// function modal(data){
//   let title = document.createElement('h5')
//   title.innerHTML = $(this).data('url');
//   modalContent.appendChild(title);
// }

$(document).on('click', '.card', function() {
  let el = $(this);
  let name = document.getElementById('modal-title');
  let gender = document.getElementById('modal-gender');
  let height = document.getElementById('modal-height');
  let mass = document.getElementById('modal-mass');
  let birthday = document.getElementById('modal-bd');
  let eye = document.getElementById('modal-eye');
  let hair = document.getElementById('modal-hair');
  let skin = document.getElementById('modal-skin');
  let photo = document.getElementById('modal-photo');
  mass.innerText = el.data('mass');
  name.innerText = el.data('name');
  gender.innerText = el.data('gender');
  height.innerText = el.data('height');
  birthday.innerText = el.data('bd');
  eye.innerText = el.data('eye');
  hair.innerText = el.data('hair');
  skin.innerText = el.data('skin');
  photo.setAttribute('src', el.data('url'));
});


