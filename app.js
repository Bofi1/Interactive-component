let submit = document.getElementById("button");
let component = document.getElementById("component");
let sent = document.getElementById("sent");
let form = document.getElementById("rating-form");
let text = document.getElementById("text");

submit.addEventListener("click", function () {
  const selectedRating = document.querySelector('input[name="rating"]:checked');

  if (selectedRating) {
    component.classList.add("hidden");
    sent.classList.remove("hidden");
    sent.classList.add("flex");

    const ratingValue = selectedRating.value;
    console.log("Valor seleccionado:", ratingValue);
    text.innerText = `You selected ${ratingValue} out of 5`;
  } else {
    alert("Por favor selecciona una calificación antes de enviar.");
  }
});
