const mybaseURL = "https://zolzaya99.github.io/wdd230/directory.html";
const url = "https://zolzaya99.github.io/wdd230/data/member.json";

async function getMemberData() {
    const response = await fetch(url);
    console.log(response);
    const data = await response.json();
    console.table(data.member);
    displayMembers(data.members);
    displayTable(data.members);
  }
  
  getMemberData();
  
  const displayMembers = (members) => {
    const cards = document.querySelector("div.cards"); // select the output container element
  
    members.forEach((member) => {
        // Create elements to add to the div.cards element
        let card = document.createElement("section");
        let h2 = document.createElement("h2");
        let p = document.createElement("p");
        let logo = document.createElement("img");
  
        // Build the h2 and p content out to show the members full name, address, phone, etc. 
        h2.textContent = `${member.name} `;
        p.textContent = `${member.address} ${member.phone} ${member.membership} ${membership.website}`
  
        // Build the image portrait by setting all the relevant attribute
        logo.setAttribute("src", member.image);
        logo.setAttribute(
          "alt",
          `Logo of ${member.name}`
        );
  
        // Append the section(card) with the created elements
        card.appendChild(logo);
        card.appendChild(h2);
        card.appendChild(p);
  
        cards.appendChild(card);
      }
    );
  }; 

  // function displayTable(businesses) {
    // let row = document.querySelectorAll("row");
    // row.forEach((item) => {
    //   item.remove();
    // });
  
    // let section = document.querySelectorAll("section");
    // section.forEach((item) => {
    //   item.remove();
    // });
  
    members.forEach((member) => {
      let tr = document.createElement("tr");
      let td_name = document.createElement("td");
      let td_address = document.createElement("td");
      let td_phone = document.createElement("td");
      let td_website = document.createElement("td");
      let td_membership = document.createElement("td");
  
      td_name.textContent = `${member.name}`;
      td_address.textContent = member.address;
      td_phone.textContent = member.phone;
      td_website.textContent = member.website;
      td_membership.textContent = member.membership;

  
      tr.appendChild(td_name);
      tr.appendChild(td_address);
      tr.appendChild(td_website);
      tr.appendChild(td_phone);
      tr.appendChild(td_membership);
  
      document.querySelector("table").appendChild(tr);
    });
  

  table_class = document.querySelector(".table")
  card_class = document.querySelector(".cards")
  table_button = document.querySelector("#list")
  card_button = document.querySelector("#cards")
  
  card_button.addEventListener('click', () => {
    card_class.style.display = "flex";
    table_class.style.display = "none";
  });
  
  table_button.addEventListener('click', () => {
    card_class.style.display = "none";
    table_class.style.display = "block";
    console.log
  });






document.getElementById("lesson-responsive").appendChild(ul);
