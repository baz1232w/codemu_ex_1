const firstInput = document.querySelector('.input_1'),
      secondInput = document.querySelector('.input_2'),
      calcBtn = document.querySelector('.btn_calc'),
      squereResult = document.querySelector('.squere')
      perimeterResult = document.querySelector('.perimeter')

calcBtn.addEventListener('click',getResult)

function getResult(){
    if( parseInt(firstInput.value) > 0 && parseInt(secondInput.value) > 0){
        const squere = firstInput.value * secondInput.value
        squereResult.textContent = squere
    
        const perimetr = firstInput.value * 2 + secondInput.value * 2
        perimeterResult.textContent = perimetr
    }
}