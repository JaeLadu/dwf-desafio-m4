function createHeader(element, home) {
   const headerEL = document.createElement("div");

   headerEL.innerHTML = `<header class="header">
    <a class="logo" href="${home ? "./index.html" : "../index.html"}">
       <h3 class="logo__text">VADER</h3>
    </a>
    <div class="burguer">
       <div class="burguer__slice"></div>
       <div class="burguer__slice"></div>
       <div class="burguer__slice"></div>
    </div>
    <nav class="nav">
            <span class="nav__x subtitulo">X</span>
            <div class="nav__links-container">
               <a href=${
                  home
                     ? "./portfolio/portfolio.html"
                     : "../portfolio/portfolio.html"
               } class="nav__link titulo">Portfolio</a>
               <a href=${
                  home
                     ? "./services/services.html"
                     : "../services/services.html"
               } class="nav__link titulo">Servicios</a>
               <a href=${
                  home ? "./contact/contact.html" : "../contact/contact.html"
               } class="nav__link titulo">Contacto</a>
            </div>
         </nav>
 </header>`;
   element.appendChild(headerEL);

   const burguerEl = document.querySelector(".burguer");
   const menuEl = document.querySelector(".nav");
   const closeMenuEl = document.querySelector(".nav__x");

   burguerEl.addEventListener("click", () => {
      menuEl.style.display = "block";
   });
   closeMenuEl.addEventListener("click", () => {
      menuEl.style.display = "none";
   });
}
