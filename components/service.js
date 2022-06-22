function getServiceImage(data, service) {
   const serviceID = service.fields.serviceImage.sys.id;
   const serviceImage = data.includes.Asset.find((e) => e.sys.id == serviceID);
   service.fields.serviceImage.sys["url"] = serviceImage.fields.file.url;
   return service;
}
async function getServices() {
   const data = await fetch(
      "https://cdn.contentful.com/spaces/9qpu6dtbp1su/environments/master/entries?access_token=oUQ6wyaG5xe5ixHiVQmrVnO5ZiU8-D57r13EMxymOmQ&content_type=servicio"
   );
   const parsedData = await data.json();
   const services = parsedData.items;
   const fullServices = services.map((e) => getServiceImage(parsedData, e));
   return fullServices;
}

function mountMinimailService(service, containerEl) {
   const title = service.fields.title;
   const description = service.fields.description;

   const serviceEl = document.createElement("div");
   serviceEl.classList.add("service--minimal");
   serviceEl.innerHTML = `
   <img
   src="../elements/desktop.svg"
   alt="service logo"
   class="service--minimal__logo"
   />
   <h3 class="service--minimal__title">${title}</h3>
   <p class="service--minimal__description">${description}</p>`;

   containerEl.append(serviceEl);
}

function mountFullService(service, containerEl) {
   const title = service.fields.title;
   const description = service.fields.description;
   const image = service.fields.serviceImage.sys.url;

   const serviceEl = document.createElement("div");
   serviceEl.classList.add("service");
   serviceEl.innerHTML = `
   <img
   src="${image}"
   alt="service image"
   class="service__image"
   />
   <h3 class="service__title">${title}</h3>
   <p class="service__description">${description}</p>`;

   containerEl.append(serviceEl);
}
