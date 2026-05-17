const search = document.getElementById("search");
const cards = document.querySelectorAll(".card");

search.addEventListener("input", () => {
  const value = search.value.toLowerCase();

  cards.forEach(card => {
    const name = card.dataset.name.toLowerCase();

    if(name.includes(value)){
      card.style.display = "block";
    }else{
      card.style.display = "none";
    }
  });
});

const buttons = document.querySelectorAll(".card button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    alert("Chame a FlowBots Store no Discord para comprar.");
  });
});