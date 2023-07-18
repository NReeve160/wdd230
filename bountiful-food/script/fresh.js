const url = 'https://brotherblazzard.github.io/canvas-content/fruit.json';


  async function getFruitData() {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data);  // note that we reference the prophet array of the data object given the structure of the json file
    displayFruits(data);
  }

  const random = displayFruits();