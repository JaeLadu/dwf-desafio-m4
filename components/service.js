function mountMinimailService(service, containerEl) {
   const title = service.fields.title;
   const description = service.fields.description;

   const serviceEl = document.createElement("div");
   serviceEl.classList.add("service--minimal");
   serviceEl.innerHTML = `
<img
   src="../elements/desktop.svg"
   alt="service logo"
   class="service__logo"
/>
<h3 class="service__title">${title}</h3>
<p class="service__description">${description}</p>`;

   containerEl.append(serviceEl);
}
