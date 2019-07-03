  var link = document.querySelector(".button");
  var popup = document.querySelector(".wrapper-search-form");
  var sendForm = popup.querySelector(".modal-search-form");
  var storage = localStorage.getItem("adult");
  var storage = localStorage.getItem("children");

  var arrivalDate = popup.querySelector("[name=arrival-date]");
  var departureDate = popup.querySelector("[name=departure-date]");
  var adult = popup.querySelector(".half-width-adult");
  var children = popup.querySelector(".half-width-children");

  var isStorageSupport = true;
  var storage = "";
  try {
   storage = localStorage.getItem("adult");
   storage = localStorage.getItem("children");
 } catch (err) {
   isStorageSupport = false;
 }

  popup.classList.add("wrapper-search-form-close");

  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.toggle("wrapper-search-form-close");
    arrivalDate.classList.remove("modal-error");
    departureDate.classList.remove("modal-error");
    adult.classList.remove("modal-error");
    children.classList.remove("modal-error");
    arrivalDate.focus();
});

sendForm.addEventListener("submit", function (evt) {
  if (!arrivalDate.value || !departureDate.value || !adult.value || !children.value) {
    evt.preventDefault();
    arrivalDate.classList.remove("modal-error");
    arrivalDate.offsetWidth = popup.offsetWidth;
    departureDate.classList.remove("modal-error");
    departureDate.offsetWidth = popup.offsetWidth;
    adult.classList.remove("modal-error");
    adult.offsetWidth = popup.offsetWidth;
    children.classList.remove("modal-error");
    children.offsetWidth = popup.offsetWidth;
    arrivalDate.classList.add("modal-error");
    departureDate.classList.add("modal-error");
    adult.classList.add("modal-error");
    children.classList.add("modal-error");
    console.log("заполните поля");
} else {
  if (isStorageSupport) {
    localStorage.setItem("adult", adult.value);
    localStorage.setItem("children", children.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("modal-search-form-show")) {
        popup.classList.remove("modal-search-form-show");
        popup.classList.remove("modal-error");
      }
    }
  });
