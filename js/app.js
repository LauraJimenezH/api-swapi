getFetch();

var container = document.getElementById('container');

function getFetch() {
  // const url = `https://swapi.co/api/people/?search=${searchValue}`;

  let count = 0;
  for (let i = 1; i < 88; i++) {
    const url = `https://swapi.co/api/people/${i}/`;


    fetch(url)
      .then((resp) => resp.json())
      .then(function (data) {
        console.log(data);
       
          container.innerText += data.name;
          // algo();  
     

      })
      .catch(function (error) {
        console.log(JSON.stringify(`Error ${error}`));
      });
  }
}

//  modal con datos
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