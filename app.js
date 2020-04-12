document.addEventListener("DOMContentLoaded", () => {
  //opciones de cartas
  const cardArray = [
    {
      name: "bills",
      img: "imagenes/bills.png",
    },
    {
      name: "bills",
      img: "imagenes/bills.png",
    },
    {
      name: "gohanssj2",
      img: "imagenes/gohanssj2.png",
    },
    {
      name: "gohanssj2",
      img: "imagenes/gohanssj2.png",
    },
    {
      name: "goku",
      img: "imagenes/goku.png",
    },
    {
      name: "goku",
      img: "imagenes/goku.png",
    },
    {
      name: "gokured",
      img: "imagenes/gokured.png",
    },
    {
      name: "gokured",
      img: "imagenes/gokured.png",
    },
    {
      name: "gotenssj",
      img: "imagenes/gotenssj.png",
    },
    {
      name: "gotenssj",
      img: "imagenes/gotenssj.png",
    },
    {
      name: "vegetassjbssj",
      img: "imagenes/vegetassjbssj.png",
    },
    {
      name: "vegetassjbssj",
      img: "imagenes/vegetassjbssj.png",
    },
  ];

  cardArray.sort(() => 0.5 - Math.random());
  // llamamos a la cuadricula (grid) de nuestro html

  const grid = document.querySelector(".grid");
  const resultDisplay = document.querySelector("#result");
  var cardsChosen = [];
  var cardsChosenId = [];
  var cardsWon = [];

  // creacion del tablero
  function crearTablero() {
    for (let i = 0; i < cardArray.length; i++) {
        var card = document.createElement("img"); //img tag
        card.setAttribute("src", "imagenes/portada.png"); //cada iteracion crea un elemento 'card'
        card.setAttribute("data-id", i); //cada 'card' tendra un data id
        card.addEventListener("click", flipCard); //verifica si la carta ha sido clicked on y llame a la funcion flipcard
        grid.appendChild(card);
    }
  }

  //  verificar coincidencias de las cartas
  function checkForMatch() {
    var cards = document.querySelectorAll("img");
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
    if (cardsChosen[0] === cardsChosen[1]) {
      // alert("Encontraste una carta");
      cards[optionOneId].setAttribute("src", "imagenes/final.png");
      cards[optionTwoId].setAttribute("src", "imagenes/final.png");
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute("src", "imagenes/portada.png");
      cards[optionTwoId].setAttribute("src", "imagenes/portada.png");
      // alert("Pelabola, prueba de nuevo");
    }
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === cardArray.length / 2) {
      resultDisplay.textContent = "Felicitaciones";
    }
  }

  // dar vuelta a las cartas
  function flipCard() {
    var cardId = this.getAttribute("data-id");
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute("src", cardArray[cardId].img);
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }

  crearTablero();
});
