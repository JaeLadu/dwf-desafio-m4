function main() {
   const headerContainerEL = document.querySelector(".header-container");
   createHeader(headerContainerEL);

   const contactMeEl = document.querySelector(".contact-me");
   createContactForm(contactMeEl, "Contacto");

   const footerContainerEl = document.querySelector(".footer-container");
   createFooter(footerContainerEl);
}
main();
