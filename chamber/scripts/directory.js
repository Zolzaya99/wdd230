const mybaseURL = "https://zolzaya99.github.io/wdd230/chamber/";
const url = "https://zolzaya99.github.io/wdd230/data/member.json";

async function getMemberData() {
  const response = await fetch(url);
  const data = await response.json();
  displayMembers(data.members);
}

getMemberData();

const displayMembers = (members) => {
  const cards = document.querySelector("#cards");

  members.forEach((member) => {
    let card = document.createElement("div");
    // card.classList.add("member-card");

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

    let p4 = document.createElement("p");
    p4.classList.add("member-website");
    p4.textContent = member.website;

    let image = document.createElement("img");
    image.classList.add("member-image");
    image.setAttribute("src", mybaseURL + member.image);
    card.appendChild(image);
    card.appendChild(h2);
    card.appendChild(p);
    card.appendChild(p2);
    card.appendChild(p3);
    card.appendChild(p4);

    cards.appendChild(card);
  });
  document.getElementById("cards");
};
