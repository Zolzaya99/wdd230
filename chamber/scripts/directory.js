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
        let card = document.createElement("div");
        card.classList.add("member-card");
        let h2 = document.createElement("h2");
        h2.classList.add("member-name");

        let p = document.createElement("p");
        p.classList.add("member-address");

        let p2 = document.createElement("p2");
        p2.classList.add("member-phone");

        let p3 = document.createElement("p3");
        p3.classList.add("member-membership");
        
        let p4 = document.createElement("p4");
        p4.classList.add("member-website");

        let image = document.createElement("img");
        image.classList.add("member-image");
  
        // Build the h2 and p content out to show the members full name, address, phone, etc. 
        h2.textContent = `${member.name} `;
        p.textContent = `${member.address}`; 
        p2.textContent = `${member.phone}`;
        p3.textContent = `${member.membership}`;
        p4.textContent = `${member.website}`;
  
        // Build the image portrait by setting all the relevant attribute
        image.setAttribute("src", member.image);
        // // image.setAttribute(
        // //   "alt",
        // //   `Logo of ${member.name}`
        // );
  
        // Append the section(card) with the created elements
        card.appendChild(image);
        card.appendChild(h2);
        card.appendChild(p);
        card.appendChild(p2);
        card.appendChild(p3);
        card.appendChild(p4);
  
        cards.appendChild(card);
      }
    );
    document.getElementById("cards").appendChild(div);
  }; 
