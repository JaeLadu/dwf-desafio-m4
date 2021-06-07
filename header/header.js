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
 </header>`;
   element.appendChild(headerEL);
}
