function mountFooter(containerEl) {
   const footerEl = document.createElement("div");
   footerEl.innerHTML = `
<a class="footer__title" href="/">JAE</a>
<div class="social-links-container">
   <a
      target="_blank"
      href="https://www.google.com"
      class="social-link"
   >
      Instagram
      <img
         src="./elements/instagram ligth.svg"
         alt="social logo"
         class="social-link__logo"
      />
   </a>
   <a
      target="_blank"
      href="https://www.google.com"
      class="social-link"
   >
      LinkedIn
      <img
         src="./elements/linkedin ligth.svg"
         alt="social logo"
         class="social-link__logo"
      />
   </a>
   <a
      target="_blank"
      href="https://www.google.com"
      class="social-link"
   >
      GitHub
      <img
         src="./elements/github ligth.svg"
         alt="social logo"
         class="social-link__logo"
      />
   </a>
</div>
`;

   containerEl.append(footerEl);
}
