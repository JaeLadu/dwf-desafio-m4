function createFooter(el, home) {
   const footer = document.createElement("footer");
   footer.className = "footer";
   footer.innerHTML = `<a class="logo" href="${
      home ? "./index.html" : "../index.html"
   }">
   <h3 class="logo__text--big">JAE</h3>
</a>
<div class="social-media">
   <a href="https://apx.school.com" class="social-media__link body">Instagram <img src="${
      home ? "./images/instagram.svg" : "../images/instagram.svg"
   }" alt="" class="social-media__image"></a>
   <a href="https://apx.school.com" class="social-media__link body">Linkedin <img src="${
      home ? "./images/linkedin.svg" : "../images/linkedin.svg"
   }" alt="" class="social-media__image"></a>
   <a href="https://apx.school.com" class="social-media__link body">GitHub <img src="${
      home ? "./images/github.svg" : "../images/github.svg"
   }" alt="" class="social-media__image"></a>
</div>`;
   el.appendChild(footer);
}
