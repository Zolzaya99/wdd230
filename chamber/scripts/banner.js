document.addEventListener("DOMContentLoaded", () => {
    const today = new Date().getDay();
  
    if (today >= 1 && today <= 3) {
      const bannerText = document.getElementById("bannerText");
  
      const banner = document.createElement("div");
      banner.classList.add("banner");
      banner.innerHTML = `
        <p>${bannerText.innerText}</p>
        <button id="closeButton" class="closeButton">Close</button>
      `;
  
      const closeButton = banner.querySelector("#closeButton");
  
      bannerText.parentNode.insertBefore(banner, bannerText.nextSibling);
  
      closeButton.addEventListener("click", () => {
        banner.style.display = "none";
      });
    } else {
      const banner = document.querySelector(".banner");
      if (banner) {
        banner.style.display = "none";
      }
    }
  });
  