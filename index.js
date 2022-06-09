async function getServices() {
   const data = await fetch(
      "https://cdn.contentful.com/spaces/9qpu6dtbp1su/environments/master/entries?access_token=oUQ6wyaG5xe5ixHiVQmrVnO5ZiU8-D57r13EMxymOmQ&content_type=servicio"
   );
   const parsedData = await data.json();
   const services = parsedData.items;
   return services;
}
(async () => {
   const services = await getServices();

   const headerContainerEl = document.querySelector(
      ".welcome__header-container"
   );
   const servicesContainerEl = document.querySelector(".services__container");
   const contactFormContainerEl = document.querySelector(
      ".contact__form-container"
   );

   mountHeader(headerContainerEl);
   for (let index = 0; index < 3; index++) {
      mountMinimailService(services[index], servicesContainerEl);
   }
   mountContactForm(contactFormContainerEl);
})();
