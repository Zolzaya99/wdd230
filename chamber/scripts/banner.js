document.addEventListener("DOMContentLoaded", () => {
    const today = new Date().getDay();
    if (today >= 1 && today <= 3) {
        const bannerText = document.getElementById("bannerText");
        const banner = document.createElement("div");
        banner.classList.add("banner");
        banner.innerHTML = `
            <p>${bannerText.innerText}</p>
            <span class="close-icon">❌</span>
        `;

        const closeIcon = banner.querySelector(".close-icon");
        const bannerParent = bannerText.parentNode;

        // Insert the banner and close icon right after the bannerText paragraph
        bannerParent.insertBefore(banner, bannerText.nextSibling);

        closeIcon.addEventListener("click", () => {
            banner.style.display = "none";
        });
    } else {
        const banner = document.querySelector(".banner");
        banner.style.display = "none";
    }
});
