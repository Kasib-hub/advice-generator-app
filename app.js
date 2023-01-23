
// grab the info from api
async function getAdvice() {
  let resp = await fetch("https://api.adviceslip.com/advice")
  let slipObj = await resp.json()
  let advice = slipObj['slip']['advice']
  let adviceId = slipObj['slip']['id']
  let p = document.getElementById('advice-text')
  let p_id = document.getElementById('advice-id')
  p.innerHTML = `"${advice}"`
  p_id.innerHTML = `Advice #${adviceId}`
}

// loading api call to the html page on page load
window.onload = getAdvice()

// selecting a class, passing the function to a click of the button
let dice = document.querySelector(".dice")
dice.addEventListener("click", (getAdvice))