const mybaseURL = "https://zolzaya99.github.io/wdd230/";
const linksURL = "https://zolzaya99.github.io/wdd230/data/links.json";

async function getLinks() {
  const response = await fetch(linksURL);
  const data = await response.json();
  displayLinks(data.weeks);
}

getLinks();

const displayLinks = (weeks) => {
  let ul = document.createElement('ul');
  weeks.forEach((lesson) => {
    let list = document.createElement('li');
    let anchor = document.createElement('a');
    anchor.innerHTML = lesson.lesson;

    let subList = document.createElement('ul');
    lesson.links.forEach((link) => {
      let subListItem = document.createElement('li');
      let subAnchor = document.createElement('a');
      subAnchor.classList.add('sublink'); 
      subAnchor.setAttribute('href', link.url);
      subAnchor.innerHTML = link.title;
      subListItem.appendChild(subAnchor);
      subList.appendChild(subListItem);
    });

    list.appendChild(anchor);
    list.appendChild(subList);
    ul.appendChild(list);
  });

  document.getElementById("lesson-responsive").appendChild(ul);
};
