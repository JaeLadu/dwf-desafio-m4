function main() {
   // header
   const headerElContainer = document.querySelector(".header-container");
   createHeader(headerElContainer, true);
   // services
   const servicesElContainer = document.querySelector(
      ".mi-services__services-container"
   );
   // contact form
   const contactFormElContainer = document.querySelector(".contact-me");
   createContactForm(contactFormElContainer);
   // footer
   const footerElContainer = document.querySelector(".footer__container");
   createFooter(footerElContainer, "home");
   // about me content
   const aboutMeImgEl = document.querySelector(".about-me__image");
   const aboutMeTitleEl = document.querySelector(".about-me__title");
   const aboutMeTextEl = document.querySelector(".about-me__text");

   fetch(
      "https://cdn.contentful.com/spaces/9qpu6dtbp1su/environments/master/entries?access_token=oUQ6wyaG5xe5ixHiVQmrVnO5ZiU8-D57r13EMxymOmQ"
   )
      .then((res) => res.json())
      .then((data) => {
         // about me content
         aboutMeImgEl.src = data.includes.Asset.find(
            (e) => e.sys.id == "2hjHNEejV1EAE4CEDwS4zM"
         ).fields.file.url;

         aboutMeTitleEl.textContent = data.items.find(
            (e) => e.sys.contentType.sys.id == "infoPersonal"
         ).fields.titulo;

         aboutMeTextEl.textContent = data.items.find(
            (e) => e.sys.contentType.sys.id == "infoPersonal"
         ).fields.descripcionPersonal;

         // services
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
         for (let i = 0; i < 3; i++) {
            createServiceBlack(servicesElContainer, servicesWPictures[i]);
         }
      });
}
main();
