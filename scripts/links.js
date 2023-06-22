const mybaseURL = "https://zolzaya99.github.io/wdd230/";
const linksURL = "https://zolzaya99.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    // console.log(data);
    displayLinks(data.weeks);
}

getLinks();

const displayLinks = (weeks) => {
    weeks.forEach((week) => {
      // Create elements to add to the div#lesson-responsive element
      let ul = document.createElement('ul');
      let link = document.createElement('li'); // fill in the blank
      let anchor = document.createElement('a');
  
      // Build the h2 content out to show the prophet's full name
      fullName.textContent = `${prophet._____} ____________`; // fill in the blank
      // Build the image portrait by setting all the relevant attributes
      portrait.setAttribute('src', prophet.imageurl);
      portrait.setAttribute('alt', `Portrait of ${prophet.____} ______________`); // fill in the blank
      portrait.setAttribute('loading', 'lazy');
      portrait.setAttribute('width', '340');
      portrait.setAttribute('height', '440');
  
      // Append the section(card) with the created elements
      card.appendChild(_______); //fill in the blank
      card.appendChild(portrait);
  
      cards.appendChild(card);
    }); // end of arrow function and forEach loop
  }