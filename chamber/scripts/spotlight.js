var member_json = "https://zolzaya99.github.io/wdd230/data/member.json";

fetch(member_json)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    var qualifiedMembers = data.members.filter(function(member) {
      return member.membership === 'Silver' || member.membership === 'Gold';
    });

    var randomIndex = Math.floor(Math.random() * qualifiedMembers.length);
    var member = qualifiedMembers[randomIndex];

    var container = document.getElementById("spotlight-container");

    container.innerHTML = '';

    var div = document.createElement("div");
    div.innerHTML = `
      <h3>Name: ${member.name}</h3>
      <p>Address: ${member.address}</p>
      <p>Phone: ${member.phone}</p>
      <p>Website: <a href="${member.website}" target="_blank">Visit</a></p>
      <p>Membership: ${member.membership}</p>
      <img src="${member.image}" alt="${member.name}" class="resized-image">
    `;

    container.appendChild(div);
  });
