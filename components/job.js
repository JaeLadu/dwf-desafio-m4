function getJobImage(data, job) {
   const jobID = job.fields.imagen.sys.id;
   const jobImage = data.includes.Asset.find((e) => e.sys.id == jobID);
   job.fields.imagen.sys["url"] = jobImage.fields.file.url;
   return job;
}
async function getJobs() {
   const data = await fetch(
      "https://cdn.contentful.com/spaces/9qpu6dtbp1su/environments/master/entries?access_token=oUQ6wyaG5xe5ixHiVQmrVnO5ZiU8-D57r13EMxymOmQ&content_type=work"
   );
   const parsedData = await data.json();
   const job = parsedData.items;
   const fullJob = job.map((e) => getJobImage(parsedData, e));
   return fullJob;
}

function mountJob(job, containerEl) {
   const title = job.fields.titulo;
   const description = job.fields.descripcion;
   const image = job.fields.imagen.sys.url;
   const link = job.fields.url;

   const jobEl = document.createElement("div");
   jobEl.classList.add("job");
   jobEl.innerHTML = `
   <img
   src="${image}"
   alt="job image"
   class="job__image"
   />
   <h3 class="job__title">${title}</h3>
   <p class="job__description">${description}</p>
   <a href="${link}" target="_blank" rel="noopener noreferrer" class="job__link">${link}</a>`;

   containerEl.append(jobEl);
}
