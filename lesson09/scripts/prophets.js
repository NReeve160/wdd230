const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data.prophets);  // note that we reference the prophet array of the data object given the structure of the json file
    displayProphets(data.prophets);
  }

  getProphetData();

  const displayProphets = (prophets) => {
    const cards = document.querySelector('div.cards'); // selects the div section named cards for a container

    prophets.forEach((prophet) => {
      // Create elements that are going to be added to each div.cards element
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let portrait = document.createElement('img');
      let birthdate = document.createElement('p');
      let birthplace = document.createElement('p')

      h2.textContent = `${prophet.name} ${prophet.lastname}`;

      //Build the image by setting relevant attributes

      portrait.setAttribute('src', prophet.imageurl);
      portrait.setAttribute('alt', `Portrait of ${prophet.name}, ${prophet.lastname}`);
      portrait.setAttribute('loading', 'lazy');
      portrait.setAttribute('width', '340');
      portrait.setAttribute('height', '440');

      birthdate.textContent = `${prophet.birthdate}`;

      birthplace.textContent = `${prophet.birthplace}`;

      // Append the section with the created elements

      card.appendChild(h2);
      card.appendChild(birthdate);
      card.appendChild(birthplace);
      card.appendChild(portrait);

      cards.appendChild(card);

    });
  }