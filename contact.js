const submitContact = document.querySelector("#submit-contact");

const submitAlert =
  "Hermes is flying as fast as possible to transfer your message!";

submitContact.addEventListener("click", (event) => {
  event.preventDefault;
  alert(submitAlert);
});
