function createContactForm(el, title) {
   const form = document.createElement("form");
   form.className = "contact-form";
   form.innerHTML = `<h3 class="contact-form__title titulo">${
      title ? title : "Escribime"
   }</h3>
   <div class="form__container">
   
      <label class="name">
         <span class="name__title caption">Nombre</span>
      <input type="text" name="name" class="name__input" />
   </label>
   <label class="mail">
      <span class="mail__title caption">Mail</span>
      <input type="email" name="to" class="mail__input" />
   </label>
   <label class="message">
      <span class="message__title caption">Mensaje</span>
      <textarea name="message" class="message__input"></textarea>
   </label>
   <button type="submit" class="contact-form__send-button body-bold">
      Enviar
   </button>
   </div>`;
   el.appendChild(form);

   form.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = new FormData(event.target);
      const formObj = Object.fromEntries(data.entries());
      fetch("https://apx-api.vercel.app/api/utils/dwf", {
         method: "POST",
         headers: { "content-type": "application/json" },
         body: JSON.stringify(formObj),
      });
      event.target.reset();
   });
}
