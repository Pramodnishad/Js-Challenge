const randomNumber = Math.round(Math.random()*50)
const limit = document.querySelector('.limit')
const form  = document.querySelector('form')
const result = document.querySelector('.result')
const guessNum = document.querySelector('.guessNum')

let guessed = []

form.addEventListener('submit',(e)=>{
e.preventDefault()
const limitValue = parseInt(limit.value)
guessed.push(limitValue)
guessNum.textContent = `Guessed Numbers are: ${guessed.join(',')}`
if(limitValue > randomNumber) {
result.textContent = "Too high !"
} else if (limitValue < randomNumber) {
       result.textContent = "Too low !"
} else {
       result.textContent = "Won"
}
})