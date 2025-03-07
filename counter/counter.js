const plusBtn = document.querySelector('.plus-btn')
const minusBtn = document.querySelector('.minus-btn')
const byRange = document.querySelector('.range-value')
const value = document.querySelector('.value')
const reset = document.querySelector('.reset-btn')

plusBtn.addEventListener('click',()=>{
  const updatedValue = parseInt(value.innerText)
  const changeByRange = parseInt(byRange.value)
  value.innerText = updatedValue + changeByRange
})

minusBtn.addEventListener('click',()=>{
  const updatedValue = parseInt(value.innerText)
  const changeByRange = parseInt(byRange.value)
  value.innerText = updatedValue - changeByRange
})

reset.addEventListener('click',()=>{
  value.innerText = 0
})


