const value = document.querySelector('.value')
const minus = document.querySelector('.minus-btn')
const plus = document.querySelector('.plus-btn')
const ByValue = document.querySelector('.range-value')
const resetValue = document.querySelector('.reset-btn')


minus.addEventListener('click',()=>{
       const countValue = parseInt(value.innerText)
       const byRangeValue = parseInt(ByValue.value)
       value.innerText = countValue - byRangeValue
})

plus.addEventListener('click',()=>{
       const countValue = parseInt(value.innerText)
       const byRangeValue = parseInt(ByValue.value)
       value.innerText = countValue + byRangeValue
})

resetValue.addEventListener('click',()=>{
       value.innerText = 0
})