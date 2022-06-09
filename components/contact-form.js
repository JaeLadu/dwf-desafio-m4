function mountContactForm(containerEl) {
   const formEl = document.createElement("form");
   formEl.classList.add("contact-form");
   formEl.innerHTML = `
   <label>
   <span class="contact-form__input-title">Nombre</span>
   <input
      type="text"
      name="name"
      class="contact-form__input-field"
   />
</label>
<label>
   <span class="contact-form__input-title">Mail</span>
   <input
      type="text"
      name="mail"
      class="contact-form__input-field"
   />
</label>
<label>
   <span class="contact-form__input-title">Mensaje</span>
   <textarea
      name="messege"
      class="contact-form__input-field--textarea"
   ></textarea>
</label>
<button type="submit" class="contact-form__button">
   Enviar
</button>
    `;

   containerEl.append(formEl);

   formEl.addEventListener("submit", (e) => {
      e.preventDefault();
      console.log("formulario enviado");
   });
}
