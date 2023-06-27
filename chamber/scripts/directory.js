const mybaseURL = "https://zolzaya99.github.io/wdd230/chamber/directory.html";
const url = "https://zolzaya99.github.io/wdd230/data/member.json";

async function getMemberData() {
    const response = await fetch(url);
    console.log(response);
    const data = await response.json();
    // console.table(data.member);
    displayMembers(data.members);
  }
  
  getMemberData();
  
  const displayMembers = (members) => {  
    members.forEach((member) => {
        // Create elements to add to the div.cards element
        let card = document.createElement("section");
        let h2 = document.createElement("h2");
        let p = document.createElement("p");
        let image = document.createElement("img");
  
        // Build the h2 and p content out to show the members full name, address, phone, etc. 
        h2.textContent = `${member.name} `;
        p.textContent = `${member.address} ${member.phone} ${member.membership} ${member.website}`
  
        // Build the image portrait by setting all the relevant attribute
        image.setAttribute("src", member.image);
        image.setAttribute(
          "alt",
          `Logo of ${member.name}`
        );
  
        // Append the section(card) with the created elements
        card.appendChild(image);
        card.appendChild(h2);
        card.appendChild(p);
  
        cards.appendChild(card);
      }
    );
    document.getElementById("cards").appendChild(div);
  }; 
