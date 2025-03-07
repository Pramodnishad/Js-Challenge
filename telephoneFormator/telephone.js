const input = document.querySelector('.input');

let previousValue = "";
let firstThreeNum = "";

input.addEventListener('input',(e)=>{
       const inputValue = e.target.value
       if(/\d+$/g.test(inputValue)){
              input.value = inputValue
       } else{
              input.value = inputValue.substring(0,inputValue.length -1)
       }
       if(inputValue.length === 3 && previousValue.length < inputValue.length) {
              firstThreeNum = inputValue.substring(0,2)
              input.value = `+(${firstThreeNum}) - ${inputValue[inputValue.length - 1]}`;
       } else if(inputValue.length === 8 && previousValue.length > inputValue.length){
              input.value = firstThreeNum
       }
       previousValue = inputValue
})










































