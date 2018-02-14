getFetch();

function getFetch() {
  // const url = `https://swapi.co/api/people/?search=${searchValue}`;

  let count = 0;
  for (let i = 1; i < 88; i++) {
    const url = `https://swapi.co/api/people/${i}/`;


    fetch(url)
      .then((resp) => resp.json())
      .then(function (data) {
        console.log(data.name);
        let results = data.results;
        // results.forEach(val => {
        //   console.log(val.name);
        //   // algo();
        // });

      })
      .catch(function (error) {
        console.log(JSON.stringify(`Error ${error}`));
      });
  }
}