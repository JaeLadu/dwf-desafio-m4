function createFooter(el) {
   const footer = document.createElement("footer");
   footer.className = "footer";
   footer.innerHTML = `<a class="logo" href="./index.html">
   <h3 class="logo__text--big">JAE</h3>
</a>
<div class="social-media">
   <a href="https://apx.school.com" class="social-media__link body">Instagram <img src="./images/instagram.svg" alt="" class="social-media__image"></a>
   <a href="https://apx.school.com" class="social-media__link body">Linkedin <img src="./images/linkedin.svg" alt="" class="social-media__image"></a>
   <a href="https://apx.school.com" class="social-media__link body">GitHub <img src="./images/github.svg" alt="" class="social-media__image"></a>
</div>`;
   el.appendChild(footer);
}
