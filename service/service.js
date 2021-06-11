function createService(el, obj) {
   const serviceContainerEl = document.createElement("div");
   serviceContainerEl.className = "service";
   serviceContainerEl.innerHTML = `<img src="${obj.fields.serviceImage.sys.url}" alt="${obj.fields.title} image" class="service__img" />
    <h4 class="service__title large-bold--black">${obj.fields.title}</h4>
    <p class="service__text body--black">${obj.fields.description}</p>`;
   el.appendChild(serviceContainerEl);
}
