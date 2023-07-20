const url = 'https://brotherblazzard.github.io/canvas-content/fruit.json';

const test = document.querySelector('.test');


  async function getFruitData() {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data);  // note that we reference the prophet array of the data object given the structure of the json file
    displayFruits(data);
  }

  getFruitData();

  const displayFruits = (data) => {
    const cards1 = document.querySelector('#fruit1');
    const cards2 = document.querySelector('#fruit2');
    const cards3 = document.querySelector('#fruit3');

    for (var i = 0; i <= data.length; i++) {
    let option1 = document.createElement('option');
    let option2 = document.createElement('option');
    let option3 = document.createElement('option');


    option1.textContent = `${data[i].name}`
    option2.textContent = `${data[i].name}`
    option3.textContent = `${data[i].name}`


    cards1.appendChild(option1);
    cards2.appendChild(option2);
    cards3.appendChild(option3);
    };

    console.log(cards1);
    console.log(cards2);
    console.log(cards3);
  }