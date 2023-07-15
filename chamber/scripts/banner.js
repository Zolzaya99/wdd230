document.addEventListener("DOMContentLoaded", () => {
    const today = new Date().getDay();
    
    const existingBanner = document.getElementById("banner");
    if (existingBanner) {
      return;
    }
    
    if (today >= 1 && today <= 3) { 

    const bannerContainer = document.getElementById("bannerContainer");
      
      const banner = document.createElement("div");
      banner.id = "banner";
      banner.className = "banner";
      
      const bannerContent = document.createElement("p");
      bannerContent.innerText = "Attend the Chamber of Commerce Meet and Greet on Wednesday at 7:00 p.m.";
      
      const closeBtn = document.createElement("button");
      closeBtn.id = "closeBtn";
      closeBtn.innerText = "❌";
      closeBtn.addEventListener("click", () => {
        banner.style.display = "none";
      });
      
      banner.appendChild(bannerContent);
      banner.appendChild(closeBtn);
      
      bannerContainer.appendChild(banner);
    }
  });

//   if (today === 1 || today === 2 || today === 5) {

  