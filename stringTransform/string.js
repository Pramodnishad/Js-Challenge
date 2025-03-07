const inputText = document.querySelector('.inputText')
const lower = document.querySelector('#lower')
const upper = document.querySelector('#upper')
const camel = document.querySelector('#camel')
const pascal = document.querySelector('#pascal')
const snake = document.querySelector('#snake')
const kebab = document.querySelector('#kebab')
const trim = document.querySelector('#trim')

function camelCasing(str){
       return str
       .toLowerCase()
       .split(' ')
       .map((word, index)=> index ===0 ? word:word.charAt(0).toUpperCase() + word.slice(1))
       .join('')
}
function pascalCasing(str){
       return str
       .toLowerCase()
       .split(' ')
       .map(word => word.charAt(0).toUpperCase() + word.slice(1))
       .join('')

}
function triming(str){
      return str.replaceAll(' ', '')
}
function updateScreen(){
       lower.innerText = inputText.value.toLowerCase()
       upper.innerText = inputText.value.toUpperCase()
       camel.innerText = camelCasing(inputText.value)
       pascal.innerText = pascalCasing(inputText.value)
       snake.innerText = inputText.value.split(' ').join('_')
       kebab.innerText = inputText.value.split(' ').join('-')
       trim.innerText = triming(inputText.value.trim())
}
updateScreen()

inputText.addEventListener('input',updateScreen)

       