let baseInput = document.querySelector('[data-baseInput]')
let heightInput = document.querySelector('[data-heightInput]')
let result = document.querySelector('#result')

function triangleArea(a, b){
    area = eval(a)*eval(b);
    return result.textContent = `The area of a triangle with a base of ${a} and a height of ${b} will be ${area}`
}

let areaBtn = document.querySelector('#areaBtn')
areaBtn.addEventListener('click', ()=> triangleArea(parseInt(baseInput.value), parseInt(heightInput.value)))
