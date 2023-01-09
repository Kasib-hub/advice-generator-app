
// grab the info from api
async function getAdvice() {
  let resp = await fetch("https://api.adviceslip.com/advice")
  let slipObj = await resp.json()
  let advice = slipObj['slip']['advice']
  console.log(advice)
}

// loading api call 
window.onload = getAdvice()