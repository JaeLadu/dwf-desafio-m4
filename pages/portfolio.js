(() => {
   const headerEl = document.querySelector(".header");
   const jobsContainerEl = document.querySelector(".jobs__container");
   const footerEl = document.querySelector("footer");

   mountHeader(headerEl);
   getJobs().then((res) => {
      for (const e of res) {
         mountJob(e, jobsContainerEl);
      }
   });
   mountFooter(footerEl);
})();
