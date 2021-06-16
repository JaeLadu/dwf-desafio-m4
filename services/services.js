function main() {
   const headerContainerEL = document.querySelector(".header-container");
   createHeader(headerContainerEL);

   const servicesContainerEL = document.querySelector(
      ".mi-services__services-container"
   );

   const footerContainerEl = document.querySelector(".footer-container");
   createFooter(footerContainerEl);

   fetch(
      "https://cdn.contentful.com/spaces/9qpu6dtbp1su/environments/master/entries?access_token=oUQ6wyaG5xe5ixHiVQmrVnO5ZiU8-D57r13EMxymOmQ"
   )
      .then((res) => res.json())
      .then((data) => {
         const services = data.items.filter(
            (e) => e.sys.contentType.sys.id === "servicio"
         );

         const servicesWPictures = services.map((i) => {
            var img = data.includes.Asset.find((e) =>
               e.fields.file.url.includes(i.fields.serviceImage.sys.id)
            );
            i.fields.serviceImage.sys["url"] = img.fields.file.url;
            return i;
         });

         servicesWPictures.forEach((service) => {
            createService(servicesContainerEL, service);
         });
      });
}
main();
