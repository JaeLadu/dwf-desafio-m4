function mountHeader(containerEl) {
   containerEl.innerHTML = `
            <a href="../index.html" class="header__logo">JAE</a>
            <nav class="navigation-bar">
               <div class="navigation-bar__burguer-container">
                  <div class="navigation-bar__burguer-slice"></div>
                  <div class="navigation-bar__burguer-slice"></div>
                  <div class="navigation-bar__burguer-slice"></div>
               </div>
               <div class="navigation-bar__links-container">
                  <img
                     src="./elements/x.svg"
                     alt="close"
                     class="navigation-bar__close"
                  />
                  <a href="../pages/portfolio.html" class="navigation-bar__link">
                     Portfolio
                  </a>
                  <a href="../pages/servicios.html" class="navigation-bar__link">
                     Servicios
                  </a>
                  <a href="../pages/contacto.html" class="navigation-bar__link">
                     Contacto
                  </a>
               </div>
            </nav>
   `;
   const burguerEl = containerEl.querySelector(
      ".navigation-bar__burguer-container"
   );
   const linksContainerEl = containerEl.querySelector(
      ".navigation-bar__links-container"
   );
   const closeEl = containerEl.querySelector(".navigation-bar__close");

   burguerEl.addEventListener("click", () => {
      linksContainerEl.style.display = "flex";
   });
   closeEl.addEventListener("click", () => {
      linksContainerEl.style.display = "none";
   });
}
