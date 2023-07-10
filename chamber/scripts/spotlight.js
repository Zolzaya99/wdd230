var member_json = "https://zolzaya99.github.io/wdd230/data/member.json";

fetch(member_json)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    var qualifiedMembers = data.members.filter(function(member) {
      return member.membership === 'Silver' || member.membership === 'Gold';
    });

    // Select a random member
    var randomIndex = Math.floor(Math.random() * qualifiedMembers.length);
    var member = qualifiedMembers[randomIndex];

    // Get the container element
    var container = document.getElementById("spotlight-container");

    // Clear the container
    container.innerHTML = '';

    // Display the member's information
    var div = document.createElement("div");
    div.innerHTML = `
      <h3>Name: ${member.name}</h3>
      <p>Address: ${member.address}</p>
      <p>Phone: ${member.phone}</p>
      <p>Website: <a href="${member.website}" target="_blank">${member.website}</a></p>
      <p>Membership: ${member.membership}</p>
      <img src="${member.image}" alt="${member.name}" class="resized-image">
    `;

    // Append the div to the container
    container.appendChild(div);
  });
