(() => {
   const headerEl = document.querySelector(".header");
   const contactFormContainerEl = document.querySelector(
      ".contact__form-container"
   );
   const footerEl = document.querySelector(".footer");

   mountHeader(headerEl);
   mountContactForm(contactFormContainerEl);
   mountFooter(footerEl);
})();
