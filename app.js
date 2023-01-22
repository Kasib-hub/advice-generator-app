
// grab the info from api
async function getAdvice() {
  let resp = await fetch("https://api.adviceslip.com/advice")
  let slipObj = await resp.json()
  let advice = slipObj['slip']['advice']
  let p = document.getElementById('advice-text')
  p.innerHTML = advice
}

// loading api call to the html page on page load
window.onload = getAdvice()