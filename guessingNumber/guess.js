const randomNumber = Math.round(Math.random()*50)
const limit = document.querySelector('.limit')
const result = document.querySelector('.result')
const form = document.querySelector('form')
const guessNum = document.querySelector('.guessNum')

let guessed = []

form.addEventListener('submit',(e)=>{
       e.preventDefault()
       const limitValue = limit.value
       if(limitValue >= randomNumber) {
              result.textContent = "Too high !"
       } else if(limitValue <= randomNumber) {
              result.textContent = "Too low !"
       } else {
              result.textContent = "Won !"
       }
       guessed.push(limitValue)
       guessNum.textContent = `The guessed Numbers are : ${guessed.join(',  ')}`
       form.reset()
})
