(async () => {
   const services = await getServices();

   const headerEl = document.querySelector(".header");
   const servicesContainerEl = document.querySelector(".services__container");
   const contactFormContainerEl = document.querySelector(
      ".contact__form-container"
   );
   const footerEl = document.querySelector(".footer");

   mountHeader(headerEl);
   for (let index = 0; index < 3; index++) {
      mountMinimailService(services[index], servicesContainerEl);
   }
   mountContactForm(contactFormContainerEl);
   mountFooter(footerEl);
})();
