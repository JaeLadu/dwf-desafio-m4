function createHeader(element) {
   const headerEL = document.createElement("div");

   headerEL.innerHTML = `<header class="header">
    <a class="logo" href="./index.html">
       <h3 class="logo__text">JAE</h3>
    </a>
    <div class="burguer">
       <div class="burguer__slice"></div>
       <div class="burguer__slice"></div>
       <div class="burguer__slice"></div>
    </div>
    <nav class="nav">
            <span class="nav__x subtitulo">X</span>
            <div class="nav__links-container">
               <a href="./portfolio.html" class="nav__link titulo">Portfolio</a>
               <a href="./services.html" class="nav__link titulo">Servicios</a>
               <a href="./contact.html" class="nav__link titulo">Contacto</a>
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
