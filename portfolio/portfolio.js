function createJob(el, obj) {
   const jobContainerEl = document.createElement("div");
   jobContainerEl.className = "job";
   jobContainerEl.innerHTML = `<img src="${obj.fields.imagenDelTrabajo.sys.url}" alt="${obj.fields.tituloDelTrabajo} image" class="job__img" />
    <h4 class="job__title large-bold">${obj.fields.tituloDelTrabajo}</h4>
    <p class="job__text body">${obj.fields.descripcinDelTrabajo.content[0].content[0].value}</p>
    <a class ='job__link large-bold--red' href="${obj.fields.linkAlTrabajo.content[0].content[1].data.uri}">Link: ${obj.fields.tituloDelTrabajo}</a>`;
   el.appendChild(jobContainerEl);
}
function main() {
   const headerContainerEL = document.querySelector(".header-container");
   createHeader(headerContainerEL);

   const footerContainerEl = document.querySelector(".footer-container");
   createFooter(footerContainerEl);

   const jobsContainerEL = document.querySelector(".mi-jobs__jobs-container");

   fetch(
      "https://cdn.contentful.com/spaces/9qpu6dtbp1su/environments/master/entries?access_token=oUQ6wyaG5xe5ixHiVQmrVnO5ZiU8-D57r13EMxymOmQ"
   )
      .then((res) => res.json())
      .then((data) => {
         const jobs = data.items.filter(
            (e) => e.sys.contentType.sys.id === "trabajoRealizado"
         );

         const jobsWPictures = jobs.map((i) => {
            var img = data.includes.Asset.find((e) =>
               e.fields.file.url.includes(i.fields.imagenDelTrabajo.sys.id)
            );
            i.fields.imagenDelTrabajo.sys["url"] = img.fields.file.url;
            return i;
         });

         jobsWPictures.forEach((job) => {
            createJob(jobsContainerEL, job);
         });
      });
}
main();
