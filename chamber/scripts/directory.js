const mybaseURL = "https://zolzaya99.github.io/wdd230/chamber/";
const url = "https://zolzaya99.github.io/wdd230/data/member.json";

async function getMemberData() {
  const response = await fetch(url);
  const data = await response.json();
  displayMembers(data.members);
  displayList(data.members);
}

getMemberData();

const displayMembers = (members) => {
  const cards = document.querySelector("#cards");

  members.forEach((member) => {
    let card = document.createElement("div");

    let h2 = document.createElement("h2");
    h2.classList.add("member-name");
    h2.textContent = member.name;

    let p = document.createElement("p");
    p.classList.add("member-address");
    p.textContent = member.address;

    let p2 = document.createElement("p");
    p2.classList.add("member-phone");
    p2.textContent = member.phone;

    let p3 = document.createElement("p");
    p3.classList.add("member-membership");
    p3.textContent = member.membership;

    let websiteLink = document.createElement("a");
    websiteLink.setAttribute("href", member.website);
    websiteLink.setAttribute("target", "_blank"); 
    websiteLink.textContent = "Visit Website";
    websiteLink.classList.add("link-style");
    websiteLink.classList.add("link-center");

    let image = document.createElement("img");
    image.classList.add("member-image");
    image.setAttribute("src", mybaseURL + member.image);
    card.appendChild(image);
    card.appendChild(h2);
    card.appendChild(p);
    card.appendChild(p2);
    card.appendChild(p3);
    card.appendChild(websiteLink);

    cards.appendChild(card);
  });
};

const displayList = (members) => {
  const lists = document.querySelector("#lists");

  members.forEach((member) => {
    let list = document.createElement("section");

    let h2 = document.createElement("h2");
    h2.classList.add("membername");
    h2.textContent = member.name;

    let p = document.createElement("p");
    p.classList.add("memberaddress");
    p.textContent = member.address;

    let p2 = document.createElement("p");
    p2.classList.add("memberphone");
    p2.textContent = member.phone;

    let p3 = document.createElement("p");
    p3.classList.add("membermembership");
    p3.textContent = member.membership;

    
    let linkWrapper = document.createElement("div");
    linkWrapper.classList.add("link-wrapper");

    let linkContainer = document.createElement("div"); 
    linkContainer.classList.add("link-container");

    let websiteLink = document.createElement("a");
    websiteLink.setAttribute("href", member.website);
    websiteLink.setAttribute("target", "_blank"); 
    websiteLink.textContent = "Visit Website";
    websiteLink.classList.add("link-style");

    linkContainer.appendChild(websiteLink);
    linkWrapper.appendChild(linkContainer);

    list.appendChild(h2);
    list.appendChild(p);
    list.appendChild(p2);
    list.appendChild(p3);
    list.appendChild(linkWrapper);
    lists.appendChild(list);
  });
};

    const gridButton = document.querySelector("#grid");
    const listButton = document.querySelector("#list");
    const cards = document.querySelector("#cards");
    const lists = document.querySelector("#lists");

    gridButton.addEventListener("click", () => {
      cards.style.display = "grid";
      lists.style.display = "none";
    });

    listButton.addEventListener("click", () => {
      cards.style.display = "none";
      lists.style.display = "block";
    });

      
