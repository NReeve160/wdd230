const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.prophets);  // note that we reference the prophet array of the data object given the structure of the json file
    displayProphets(data.prophets);
  }

document.querySelector(".filler").style.backgroundColor = "pink";


/*
  const displayBusinesses = (businesses) => {
    const cards = document.querySelector('div.filler'); // selects the div section named cards for a container

    prophets.forEach((business) => {
      // Create elements that are going to be added to each div.cards element
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let portrait = document.createElement('img');
      let address = document.createElement('p');
      let phone = document.createElement('p');
      let website = document.createElement('p');


      h2.textContent = `${business.name}`;

      //Build the image by setting relevant attributes

      portrait.setAttribute('src', business.imageurl);
      portrait.setAttribute('alt', `Portrait of ${business.name}`);
      portrait.setAttribute('loading', 'lazy');
      portrait.setAttribute('width', '340');
      portrait.setAttribute('height', '440');

      address.textContent = `${business.address}`;
      phone.textContent = `${business.phone}`;
      website.textContent = `${business.website}`;

      // Append the section with the created elements

      card.appendChild(h2);
      card.appendChild(portrait);
      card.appendChild(address);
      card.appendChild(phone);
      card.appendChild(website);

      cards.appendChild(card);

    });
  }
  getBusinessData();

  */
