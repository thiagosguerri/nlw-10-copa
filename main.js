function createGame(player1, hour, player2) {
  return `
   <li>
    <img src="./assets/icon-${player1}.svg" alt="Bandeira Suíça" />
      <strong>${hour}</strong>
    <img src="./assets/icon-${player2}.svg" alt="Bandeira Camarões" />
   </li>  
  `
}

let delay = -0.3
function createCard(date, day, games) {
  delay = delay + 0.5
  return `
  <div class="card" style="animation-delay: ${delay}s">
    <h2>${date}<span>${day}</span></h2>
      <ul>
        ${games}
      </ul>
  </div> 
`
}
document.querySelector("#cards").innerHTML =
  createCard(
    "24/11",
    "quinta",
    createGame("brasil", "16:00", "servia") +
      createGame("suica", "13:00", "ghana")
  ) +
  createCard(
    "28/11",
    "segunda",
    createGame("brasil", "13:00", "suica") +
      createGame("portugal", "15:00", "ghana")
  ) +
  createCard(
    "02/12",
    "sexta",
    createGame("camaroes", "16:00", "brasil") +
      createGame("servia", "22:00", "portugal")
  )
