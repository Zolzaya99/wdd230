const mybaseURL = "https://zolzaya99.github.io/wdd230/";
const linksURL = "https://zolzaya99.github.io/wdd230/data/links.json";

async function getLinks() {
  const response = await fetch(linksURL);
  const data = await response.json();
  displayLinks(data);
}

getLinks();

const displayLinks = (weeks) => {
  let ul = document.createElement('ul');
  weeks.forEach((lesson) => {
    let list = document.createElement('li');
    let anchor = document.createElement('a');
    anchor.setAttribute('href', lesson.links[0].url);

    weeks.forEach((links) => {
        // Create elements to add to the div#lesson-responsive element
        let list = document.createElement('li'); // fill in the blank
        let anchor = document.createElement('a');
        anchor.setAttribute('href', links.data[0]);
    })
    anchor.innerHTML = lesson.lesson; // Use 'week.week' to access the week number

    ul.appendChild(list);
    list.appendChild(anchor);
  });

  document.getElementById("lesson-responsive").appendChild(ul);
};

// const mybaseURL = "https://zolzaya99.github.io/wdd230/";
// const linksURL = "https://zolzaya99.github.io/wdd230/data/links.json";

// async function getLinks() {
//   const response = await fetch(linksURL);
//   const data = await response.json();
//   displayLinks(data.weeks);
// }

// getLinks();

// const displayLinks = (weeks) => {
//   let ul = document.createElement('ul');
//   weeks.forEach((lesson) => {
//     let list = document.createElement('li');
//     let anchor = document.createElement('a');
//     anchor.innerHTML = lesson.lesson;

//     list.appendChild(anchor);
//     ul.appendChild(list);
//   });

//   document.getElementById("lesson-responsive").appendChild(ul);
// };
