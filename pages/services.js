(() => {
   // const services = getServices()

   const headerEl = document.querySelector(".header");
   const servicesContainerEl = document.querySelector(".services__container");
   const footerEl = document.querySelector("footer");

   mountHeader(headerEl);
   getServices().then((res) => {
      for (const e of res) {
         mountFullService(e, servicesContainerEl);
      }
   });
   mountFooter(footerEl);
})();
